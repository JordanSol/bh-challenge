"use client";
import Image from "next/image";
import { useContext } from "react";

/* types */
import type { MenuItemType } from "@/types/menu-item";

/* context */
import { CartContext } from "@/components/context/cart-context";

/* util */
import { removeFromCart, addToCart } from "@/util/cart";

/* components */
import AddCart from "@/components/shared/add-card";

export default function CartTool({ item }: { item: MenuItemType }) {
  const { value, setValue } = useContext(CartContext);

  const itemAmount = value?.cartItems?.[item.name]?.amount || 0;
  const singleItem = itemAmount === 1;

  function handleRemove() {
    if (value && setValue) {
      const cartItems = removeFromCart(value.cartItems, item);
      setValue({ ...value, cartItems });
    }
  }

  function handleAdd() {
    if (value && setValue) {
      const cartItems = addToCart(value.cartItems, item);
      setValue({ ...value, cartItems });
    }
  }

  if (!itemAmount) return <AddCart item={item} />;

  return (
    <div className="bg-light-gray rounded-full flex justify-between items-center p-4 gap-4 shrink-0">
      <button onClick={handleRemove} className="h-6 w-full cursor-pointer">
        <Image
          src={singleItem ? "/icons/trash-outline.svg" : "/icons/minus.svg"}
          alt="Remove item from cart"
          width={21}
          height={24}
        />
      </button>
      <span className="text-2xl leading-none">{itemAmount}</span>
      <button onClick={handleAdd} className="h-6 w-full cursor-pointer">
        <Image
          src="/icons/plus.svg"
          alt="Add additional item"
          width={21}
          height={24}
        />
      </button>
    </div>
  );
}
