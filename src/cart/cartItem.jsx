import PLANTS from "../data";

export default function CartItem({ item }) {
  const plant = getPlant(item.id);
  return (
    <li>
      <section id="plant">
        {plant.image} {plant.name}
      </section>
      <section id="controls">
        <button>-</button>
        <p>{item.quantity}</p>
        <button>+</button>
      </section>
    </li>
  );
}

function getPlant(id) {
  return PLANTS.filter((plant) => plant.id === id)[0];
}
