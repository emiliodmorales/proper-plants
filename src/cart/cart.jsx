import "./cart.css";
import CartItem from "./cartItem";

export default function Cart({ cart }) {
  return (
    <section id="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
