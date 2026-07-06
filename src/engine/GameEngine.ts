import { canMove } from "./MoveValidator";
import { checkWin } from "./WinChecker";
import { UndoManager } from "./UndoManager";

import {
  CapsuleState,
  GameState,
  LevelData,
} from "./types";

export class GameEngine {
  private level: LevelData;
  private undo = new UndoManager();

  private gameState: GameState;

  constructor(level: LevelData) {
    this.level = level;

    this.gameState = {
      capsules: this.cloneCapsules(level.capsules),
      selectedCapsuleId: null,
      moves: 0,
      isWon: false,
      currentLevelId: level.id,
      history: [],
    };
  }

  private cloneCapsules(
    capsules: CapsuleState[]
  ): CapsuleState[] {
    return capsules.map((c) => ({
      id: c.id,
      colors: [...c.colors],
    }));
  }

  get state(): GameState {
    return {
      ...this.gameState,
      capsules: this.cloneCapsules(this.gameState.capsules),
    };
  }

  selectCapsule(id: number) {
    if (this.gameState.isWon) return;

    const capsule = this.gameState.capsules.find(
      (c) => c.id === id
    );

    if (!capsule) return;

    if (capsule.colors.length === 0) return;

    if (this.gameState.selectedCapsuleId === id) {
      this.gameState.selectedCapsuleId = null;
      return;
    }

    this.gameState.selectedCapsuleId = id;
  }

  moveColor(targetId: number): boolean {
    if (this.gameState.selectedCapsuleId === null)
      return false;

    const source = this.gameState.capsules.find(
      (c) => c.id === this.gameState.selectedCapsuleId
    );

    const target = this.gameState.capsules.find(
      (c) => c.id === targetId
    );

    if (!source || !target) return false;

    if (!canMove(source, target)) return false;

    this.undo.push(this.cloneCapsules(this.gameState.capsules));

    const movingColor =
      source.colors[source.colors.length - 1];

    while (
      source.colors.length &&
      source.colors[source.colors.length - 1] === movingColor &&
      target.colors.length < 4
    ) {
      const color = source.colors.pop();

      if (color) {
        target.colors.push(color);
      }
    }

    this.gameState.selectedCapsuleId = null;

    this.gameState.moves++;

    this.gameState.isWon = checkWin(
      this.gameState.capsules
    );

    return true;
  }

  undoMove() {
    if (!this.undo.hasHistory()) return;

    const previous = this.undo.pop();

    if (!previous) return;

    this.gameState.capsules =
      this.cloneCapsules(previous);

    this.gameState.selectedCapsuleId = null;

    this.gameState.moves = Math.max(
      0,
      this.gameState.moves - 1
    );

    this.gameState.isWon = false;
  }

  restart() {
    this.undo.clear();

    this.gameState = {
      capsules: this.cloneCapsules(
        this.level.capsules
      ),
      selectedCapsuleId: null,
      moves: 0,
      isWon: false,
      currentLevelId: this.level.id,
      history: [],
    };
  }
}