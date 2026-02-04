import { useState } from "react";
import Plants from "./plants/plants";
import Cart from "./cart/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants />
        <Cart cart={cart} />
      </main>
    </>
  );
}
