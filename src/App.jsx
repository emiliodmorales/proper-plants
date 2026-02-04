import { useState } from "react";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";

export const SORTING_TYPE = {
  ID: 0,
  NAME_ASC: 1,
  NAME_DES: 2,
};

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  }

  function removeFromCart(plant) {
    setCart(
      cart
        .map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
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
