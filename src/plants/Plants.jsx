import { useState } from "react";
import PLANTS from "../data";
import "./plants.css";
import PlantList from "./PlantList";
import PlantSorting from "./PlantSorting";

export default function Plants({ addToCart }) {
  const [plants, setPlants] = useState(PLANTS);

  return (
    <section id="plants">
      <h2>Plants</h2>
      <PlantSorting plants={plants} setPlants={setPlants} />
      <PlantList plants={plants} addToCart={addToCart} />
    </section>
  );
}
