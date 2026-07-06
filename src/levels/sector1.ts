import { LevelData } from "../engine/types";

export const SECTOR_1_LEVELS: LevelData[] = [
  {
    id: 1,
    name: "Andromeda Core",
    sector: "Andromeda",
    emptyCapsules: 2,

    capsules: [
      {
        id: 0,
        colors: ["#ff4d4d", "#4d79ff", "#ffd700", "#9d4edd"],
      },
      {
        id: 1,
        colors: ["#9d4edd", "#ff4d4d", "#4d79ff", "#ffd700"],
      },
      {
        id: 2,
        colors: ["#ffd700", "#9d4edd", "#ff4d4d", "#4d79ff"],
      },
      {
        id: 3,
        colors: [],
      },
      {
        id: 4,
        colors: [],
      },
    ],
  },

  {
    id: 2,
    name: "Orion Nebula",
    sector: "Orion",
    emptyCapsules: 2,

    capsules: [
      {
        id: 0,
        colors: ["#4d79ff", "#ff4d4d", "#ffd700", "#9d4edd"],
      },
      {
        id: 1,
        colors: ["#ffd700", "#9d4edd", "#4d79ff", "#ff4d4d"],
      },
      {
        id: 2,
        colors: ["#9d4edd", "#ffd700", "#ff4d4d", "#4d79ff"],
      },
      {
        id: 3,
        colors: [],
      },
      {
        id: 4,
        colors: [],
      },
    ],
  },

  {
    id: 3,
    name: "Galaxy Rift",
    sector: "Andromeda",

    emptyCapsules: 2,

    capsules: [
      {
        id: 0,
        colors: ["#ff4d4d", "#9d4edd", "#4d79ff", "#ffd700"],
      },
      {
        id: 1,
        colors: ["#4d79ff", "#ffd700", "#9d4edd", "#ff4d4d"],
      },
      {
        id: 2,
        colors: ["#ffd700", "#ff4d4d", "#4d79ff", "#9d4edd"],
      },
      {
        id: 3,
        colors: [],
      },
      {
        id: 4,
        colors: [],
      },
    ],
  },
];