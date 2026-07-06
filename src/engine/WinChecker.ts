import { CapsuleState } from "./types";

export function checkWin(capsules: CapsuleState[]): boolean {
  return capsules.every((capsule) => {
    if (capsule.colors.length === 0) return true;

    if (capsule.colors.length !== 4) return false;

    const first = capsule.colors[0];

    return capsule.colors.every((color) => color === first);
  });
}