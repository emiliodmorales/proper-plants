import PLANTS from "../data";

export default function CartItem({ item, addToCart, removeFromCart }) {
  const plant = getPlant(item.id);
  return (
    <li>
      <section id="plant">
        {plant.image} {plant.name}
      </section>
      <section id="controls">
        <button
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            addToCart(item.id);
          }}
        >
          +
        </button>
      </section>
    </li>
  );
}

function getPlant(id) {
  return PLANTS.filter((plant) => plant.id === id)[0];
}
