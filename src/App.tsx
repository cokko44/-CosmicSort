import { useGameStore } from "./store/gameStore";

import Capsule from "./components/Capsule";
import HUD from "./components/HUD";

import "./App.css";

export default function App() {
  const state = useGameStore((s) => s.state);

  const selectCapsule = useGameStore((s) => s.selectCapsule);

  const moveColor = useGameStore((s) => s.moveColor);

  const nextLevel = useGameStore((s) => s.nextLevel);

  const handleClick = (id: number) => {
    if (state.selectedCapsuleId === null) {
      selectCapsule(id);
      return;
    }

    if (state.selectedCapsuleId === id) {
      selectCapsule(id);
      return;
    }

    const success = moveColor(id);

    if (!success) {
      selectCapsule(id);
    }
  };

  return (
    <div className="game">

      <HUD />

      <h1 className="title">
        Cosmic Sort
      </h1>

      <div className="capsule-grid">

        {state.capsules.map((capsule) => (
          <Capsule
            key={capsule.id}
            data={capsule}
            isSelected={state.selectedCapsuleId === capsule.id}
            onClick={() => handleClick(capsule.id)}
          />
        ))}

      </div>

      {state.isWon && (
        <div className="win-screen">

          <div className="win-card">

            <h2>✨ Sector Completed ✨</h2>

            <p>
              Toplam Hamle
            </p>

            <h1>{state.moves}</h1>

            <button
              className="next-button"
              onClick={nextLevel}
            >
              Next Sector →
            </button>

          </div>

        </div>
      )}

      <div className="signature">

        A Nunaye Studios Game

      </div>

    </div>
  );
}
