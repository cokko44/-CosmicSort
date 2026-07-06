import { CapsuleState } from "./types";

export class UndoManager {
  private history: CapsuleState[][] = [];

  push(state: CapsuleState[]) {
    this.history.push(
      state.map((capsule) => ({
        id: capsule.id,
        colors: [...capsule.colors],
      }))
    );
  }

  pop(): CapsuleState[] | null {
    return this.history.pop() ?? null;
  }

  clear() {
    this.history = [];
  }

  hasHistory() {
    return this.history.length > 0;
  }
}