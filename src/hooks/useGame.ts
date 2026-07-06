// src/hooks/useGame.ts

import { useCallback, useMemo, useState } from "react";
import { GameEngine } from "../engine/GameEngine";
import { LevelData, GameState } from "../engine/types";

export function useGame(level: LevelData) {
  const engine = useMemo(() => new GameEngine(level), [level]);

  const [state, setState] = useState<GameState>(
    engine.getState()
  );

  const sync = useCallback(() => {
    setState(engine.getState());
  }, [engine]);

  const select = useCallback(
    (capsuleId: number) => {
      engine.selectCapsule(capsuleId);
      sync();
    },
    [engine, sync]
  );

  const move = useCallback(
    (targetId: number) => {
      const moved = engine.move(targetId);
      sync();
      return moved;
    },
    [engine, sync]
  );

  const undo = useCallback(() => {
    engine.undoMove();
    sync();
  }, [engine, sync]);

  const reset = useCallback(() => {
    engine.reset();
    sync();
  }, [engine, sync]);

  return {
    state,
    capsules: state.capsules,
    selectedCapsuleId: state.selectedCapsuleId,
    moves: state.moves,
    isWon: state.isWon,
    currentLevelId: state.currentLevelId,

    select,
    move,
    undo,
    reset,
  };
}
