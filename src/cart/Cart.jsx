import "./cart.css";
import CartList from "./CartList";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section id="cart">
      <h2>Cart</h2>
      <CartList
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </section>
  );
}
