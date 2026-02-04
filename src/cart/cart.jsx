import "./cart.css";
import CartList from "./cartList";

export default function Cart({ cart }) {
  return (
    <section id="cart">
      <h2>Cart</h2>
      <CartList cart={cart} />
    </section>
  );
}
