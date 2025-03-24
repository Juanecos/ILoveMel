import { useState } from "react";
import { motion } from "framer-motion";

export default function LoveButtons({ text, movable , onClick}) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    if (movable){
        const randomX = Math.random() * 300 - 150; // Movimiento aleatorio en X
        const randomY = Math.random() * 300 - 150; // Movimiento aleatorio en Y
        setNoPosition({ x: randomX, y: randomY });
    }
  };


  return (
    <>
        <motion.button
          className="btn-20 m-5 px-5 py-1 bg-pink-400 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:shadow-violet-300 active:bg-amber-600 cursor-pointer "
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: "spring", stiffness: 100 }}
          onMouseEnter={moveNoButton}
          onClick={onClick}
        >
          { text }
        </motion.button>
    </>
  );
}