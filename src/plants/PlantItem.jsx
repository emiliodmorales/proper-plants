export default function PlantItem({ plant, addToCart }) {
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
