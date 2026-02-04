import PLANTS from "../data";
import "./plants.css";
import PlantItem from "./PlantItem";

export default function Plants({ addToCart }) {
  return (
    <section id="plants">
      <h2>Plants</h2>
      <ul>
        {PLANTS.map((plant) => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
