export default function CartItem({ plant, addToCart, removeFromCart }) {
  return (
    <li>
      <section id="plant">
        {plant.image} {plant.name}
      </section>
      <section id="controls">
        <button
          onClick={() => {
            removeFromCart(plant);
          }}
        >
          -
        </button>
        <p>{plant.quantity}</p>
        <button
          onClick={() => {
            addToCart(plant);
          }}
        >
          +
        </button>
      </section>
    </li>
  );
}
