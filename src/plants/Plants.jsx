import PLANTS from "../data";
import "./plants.css";

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

function PlantItem({ plant, addToCart }) {
  return (
    <li>
      <p>{plant.image}</p>
      <h3>{plant.name}</h3>
      <button
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
