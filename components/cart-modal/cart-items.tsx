"use client";
import { useContext } from "react";

import { CartContext } from "@/components/context/cart-context";

import CartItem from "@/components/cart-modal/cart-item";

export default function CartItems() {
  const { value } = useContext(CartContext);

  if (!Object.keys(value?.cartItems || {}).length)
    return <p>There are no items in your cart!</p>;

  return (
    <ul>
      {Object.entries(value?.cartItems || {}).map(([key, item]) => (
        <CartItem item={item.item} key={key} />
      ))}
    </ul>
  );
}
