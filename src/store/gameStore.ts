import { create } from "zustand";

import { GameEngine } from "../engine/GameEngine";
import { GameState } from "../engine/types";
import { SECTOR_1_LEVELS } from "../levels/sector1";

interface GameStore {
  engine: GameEngine;

  state: GameState;

  selectCapsule: (id: number) => void;

  moveColor: (targetId: number) => boolean;

  undo: () => void;

  restart: () => void;

  nextLevel: () => void;
}

const engine = new GameEngine(SECTOR_1_LEVELS[0]);

export const useGameStore = create<GameStore>((set) => ({
  engine,

  state: engine.state,

  selectCapsule(id) {
    engine.selectCapsule(id);

    set({
      state: engine.state,
    });
  },

  moveColor(targetId) {
    const success = engine.moveColor(targetId);

    set({
      state: engine.state,
    });

    return success;
  },

  undo() {
    engine.undoMove();

    set({
      state: engine.state,
    });
  },

  restart() {
    engine.restart();

    set({
      state: engine.state,
    });
  },

  nextLevel() {
    const current = engine.state.currentLevelId;

    const next = SECTOR_1_LEVELS.find(
      (level) => level.id === current + 1
    );

    if (!next) {
      return;
    }

    const newEngine = new GameEngine(next);

    set({
      engine: newEngine,
      state: newEngine.state,
    });
  },
}));
