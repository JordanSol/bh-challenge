"use client";
import Image from "next/image";
import { useContext } from "react";

/* context */
import { CartContext } from "@/components/context/cart-context";

/* util */
import { getTotalCartItems } from "@/util/cart";

export default function CartButton() {
  const { value, setValue } = useContext(CartContext);

  if (!value && !setValue) return null;
  const cartTotal = getTotalCartItems(value?.cartItems || {});

  return (
    <button
      className="relative cursor-pointer as"
      onClick={() => {
        if (setValue && value) setValue({ ...value, isOpen: !value.isOpen });
      }}
    >
      <Image
        src="/icons/cart.svg"
        alt="cart icon"
        width={27}
        height={25}
        priority
      />
      {cartTotal ? (
        <div className="absolute -top-1/2 -right-1/2 pointer-events-none bold font-white rounded-full w-5.25 h-5.25 bg-primary text-white font-bold text-sm">
          <span>{cartTotal}</span>
        </div>
      ) : null}
    </button>
  );
}
