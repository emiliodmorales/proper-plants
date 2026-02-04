import { useState } from "react";
import Plants from "./plants/plants";
import Cart from "./cart/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(id) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex === -1) {
      const item = { id, quantity: 1 };
      setCart(cart.concat([item]));
    } else {
      const item = cart.splice(itemIndex, 1)[0];
      item.quantity++;
      setCart(cart.concat([item]));
    }
  }

  function removeFromCart(id) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex < 0) return;

    const item = cart.splice(itemIndex, 1)[0];
    item.quantity--;

    if (item.quantity <= 0) {
      setCart(cart.filter((cartItem) => cartItem.id !== id));
    } else {
      setCart(cart.concat([item]));
    }
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
