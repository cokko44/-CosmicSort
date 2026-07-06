import { CapsuleState } from "./types";

export function canMove(
  source: CapsuleState,
  target: CapsuleState
): boolean {
  if (source.colors.length === 0) return false;

  if (target.colors.length >= 4) return false;

  const movingColor = source.colors[source.colors.length - 1];

  if (target.colors.length === 0) return true;

  const targetColor = target.colors[target.colors.length - 1];

  return movingColor === targetColor;
}