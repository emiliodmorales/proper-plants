import CartItem from "./cartItem";

export default function CartList({ cart }) {
  if (cart.length < 1) {
    return <p>Add items to your cart</p>;
  }
  return (
    <ul>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
