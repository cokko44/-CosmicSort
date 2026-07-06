// src/screens/GameScreen.tsx

import React from "react";
import { sector1 } from "../levels/sector1";
import { useGame } from "../hooks/useGame";
import { Board } from "../components/Board";
import { HUD } from "../components/HUD";
import "./GameScreen.css";

export function GameScreen() {
  const {
    capsules,
    selectedCapsuleId,
    moves,
    isWon,
    currentLevelId,
    select,
    move,
    undo,
    reset,
  } = useGame(sector1[0]);

  const handleCapsuleClick = (id: number) => {
    if (selectedCapsuleId === null) {
      select(id);
      return;
    }

    if (selectedCapsuleId === id) {
      select(id);
      return;
    }

    const moved = move(id);

    if (!moved) {
      select(id);
    }
  };

  return (
    <main className="game-screen">
      <HUD
        moves={moves}
        currentLevel={currentLevelId}
        isWon={isWon}
        onUndo={undo}
        onReset={reset}
      />

      <Board
        capsules={capsules}
        selectedCapsuleId={selectedCapsuleId}
        onCapsuleClick={handleCapsuleClick}
      />
    </main>
  );
}
