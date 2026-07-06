// src/components/Board.tsx

import React from "react";
import { Capsule } from "./Capsule";
import { CapsuleState } from "../engine/types";
import "./Board.css";

interface BoardProps {
  capsules: CapsuleState[];
  selectedCapsuleId: number | null;
  onCapsuleClick: (id: number) => void;
}

export function Board({
  capsules,
  selectedCapsuleId,
  onCapsuleClick,
}: BoardProps) {
  return (
    <div className="board">
      {capsules.map((capsule) => (
        <Capsule
          key={capsule.id}
          id={capsule.id}
          colors={capsule.colors}
          selected={capsule.id === selectedCapsuleId}
          onClick={onCapsuleClick}
        />
      ))}
    </div>
  );
}
