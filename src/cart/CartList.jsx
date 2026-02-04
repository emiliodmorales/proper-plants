import CartItem from "./CartItem";

function sortCart(a, b) {
  return a.id - b.id;
}

export default function CartList({ cart, addToCart, removeFromCart }) {
  if (cart.length < 1) {
    return <p>Add items to your cart</p>;
  }
  return (
    <ul>
      {cart.sort(sortCart).map((item) => (
        <CartItem
          key={item.id}
          plant={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
}
