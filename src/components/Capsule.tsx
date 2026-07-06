import { motion } from "framer-motion";
import { CapsuleState } from "../engine/types";

interface CapsuleProps {
  data: CapsuleState;
  isSelected: boolean;
  onClick: () => void;
}

export default function Capsule({
  data,
  isSelected,
  onClick,
}: CapsuleProps) {
  return (
    <motion.div
      className={`capsule ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: isSelected ? -12 : 0,
        scale: isSelected ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 20,
      }}
    >
      {/* Boş alan */}
      <div
        style={{
          flex: 4 - data.colors.length,
        }}
      />

      {/* Renkler */}
      {data.colors.map((color, index) => (
        <motion.div
          key={`${data.id}-${index}`}
          className="energy-layer"
          layout
          initial={{
            opacity: 0,
            scaleY: 0,
          }}
          animate={{
            opacity: 1,
            scaleY: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          style={{
            background: color,
          }}
        >
          <div className="glow" />
        </motion.div>
      ))}
    </motion.div>
  );
}
