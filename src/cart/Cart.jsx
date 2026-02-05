import "./cart.css";
import CartList from "./CartList";
import { useState } from "react";
import { SORTING_TYPE } from "../App";
import SortingDropdown from "../Sorting";

export default function Cart({ cart, addToCart, removeFromCart }) {
  const [cartSortingType, setCartSortingType] = useState(SORTING_TYPE.ID);
  function sortCart(a, b) {
    switch (cartSortingType) {
      case SORTING_TYPE.NAME_ASC:
        return a.name.localeCompare(b.name);

      case SORTING_TYPE.NAME_DES:
        return b.name.localeCompare(a.name);

      default:
        return a.id - b.id;
    }
  }

  return (
    <section id="cart">
      <section className="headerSort">
        <h2>Cart</h2>
        <SortingDropdown setSortingType={setCartSortingType} />
      </section>
      <CartList
        cart={cart.sort(sortCart)}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <TotalQuantity cart={cart} />
    </section>
  );
}

function TotalQuantity({ cart }) {
  return (
    <p>
      Total quantity:{" "}
      {cart.reduce((total, item) => (total += item.quantity), 0)}
    </p>
  );
}
