import { useState } from "react";
import Plants from "./plants/plants";
import Cart from "./cart/cart";
import PLANTS from "./data";

function sortCart(a, b) {
  return a.id - b.id;
}

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(id) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex === -1) {
      const item = PLANTS.filter((plant) => plant.id === id)[0];
      item.quantity = 1;
      setCart(cart.concat([item]).sort(sortCart));
    } else {
      const item = cart.splice(itemIndex, 1)[0];
      item.quantity++;
      setCart(cart.concat([item]).sort(sortCart));
    }
  }

  function removeFromCart(id) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex < 0) return;

    const item = cart.splice(itemIndex, 1)[0];
    item.quantity--;

    if (item.quantity <= 0) {
      setCart(cart.filter((cartItem) => cartItem.id !== id).sort(sortCart));
    } else {
      setCart(cart.concat([item]).sort(sortCart));
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
