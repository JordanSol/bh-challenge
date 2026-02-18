"use client";
import { useContext } from "react";

/* types */
import type { MenuItemType } from "@/types/menu-item";

/* context */
import { CartContext } from "@/components/context/cart-context";

/* util */
import { removeFromCart, addToCart } from "@/util/cart";

/* components */
import AddCart from "@/components/shared/add-card";

/* icons */
import TrashOutline from "@/components/icons/trash-outline";
import Minus from "@/components/icons/minus";
import Plus from "@/components/icons/plus";

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
        {singleItem ? (
          <TrashOutline width={21} height={24} />
        ) : (
          <Minus width={21} height={24} />
        )}
      </button>
      <span className="text-2xl leading-none">{itemAmount}</span>
      <button onClick={handleAdd} className="h-6 w-full cursor-pointer">
        <Plus width={21} height={24} />
      </button>
    </div>
  );
}
