import { useContext } from "react";
import Image from "next/image";

/* types */
import type { MenuItemType } from "@/types/menu-item";

/* context */
import { CartContext } from "@/components/context/cart-context";

/* util */
import { addToCart } from "@/util/cart";

export default function AddCart({ item }: { item: MenuItemType }) {
  const { value, setValue } = useContext(CartContext);

  function handleAddToCart() {
    if (value?.cartItems && setValue) {
      const newCart = addToCart(value.cartItems, item);
      setValue({ ...value, cartItems: newCart });
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      className="rounded-full bg-light-gray p-4"
    >
      <Image
        src="/icons/add-cart-outline.svg"
        alt={`Add ${item.name} to cart`}
        width={27}
        height={24}
        priority
      />
    </button>
  );
}
