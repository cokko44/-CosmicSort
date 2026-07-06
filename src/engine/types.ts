export type Color = string;

export interface CapsuleState {
  id: number;
  colors: Color[];
}

export interface LevelData {
  id: number;
  name: string;
  sector: string;
  capsules: CapsuleState[];
  emptyCapsules: number;
}

export type HistoryState = CapsuleState[][];

export interface GameState {
  capsules: CapsuleState[];
  selectedCapsuleId: number | null;
  moves: number;
  isWon: boolean;
  currentLevelId: number;
  history: HistoryState;
}