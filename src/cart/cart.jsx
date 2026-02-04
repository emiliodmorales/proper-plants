import "./cart.css";
import CartList from "./cartList";

function sortCart(a, b) {
  return a.name > b.name;
}

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section id="cart">
      <h2>Cart</h2>
      <CartList
        cart={cart.sort(sortCart)}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </section>
  );
}
