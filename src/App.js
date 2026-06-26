import { useState } from "react";
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        // pas besoin de faire ...shape.position puisque ces deux propriete sont modifier simultanement ainsi il parait etre inutile mieux de creer la position entier car nous n'avons pas besoin de concerver une valeur mais quand on le faire ce n'est pas grave
        //...shape.position
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Déplacez-moi !
      </Box>
    </>
  );
}
