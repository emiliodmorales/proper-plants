import CartItem from "./cartItem";

export default function CartList({ cart, addToCart, removeFromCart }) {
  if (cart.length < 1) {
    return <p>Add items to your cart</p>;
  }
  return (
    <ul>
      {cart.map((item) => (
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
