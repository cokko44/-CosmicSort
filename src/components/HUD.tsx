// src/components/HUD.tsx

import React from "react";
import "./HUD.css";

interface HUDProps {
  moves: number;
  currentLevel: number;
  isWon: boolean;
  onUndo: () => void;
  onReset: () => void;
}

export function HUD({
  moves,
  currentLevel,
  isWon,
  onUndo,
  onReset,
}: HUDProps) {
  return (
    <header className="hud">
      <div className="hud-info">
        <div className="hud-item">
          <span className="hud-label">Level</span>
          <strong>{currentLevel}</strong>
        </div>

        <div className="hud-item">
          <span className="hud-label">Moves</span>
          <strong>{moves}</strong>
        </div>
      </div>

      <div className="hud-actions">
        <button
          className="hud-button"
          onClick={onUndo}
          disabled={moves === 0 || isWon}
          type="button"
        >
          Undo
        </button>

        <button
          className="hud-button"
          onClick={onReset}
          type="button"
        >
          Reset
        </button>
      </div>

      {isWon && (
        <div className="hud-win">
          🎉 Level Complete!
        </div>
      )}
    </header>
  );
}
