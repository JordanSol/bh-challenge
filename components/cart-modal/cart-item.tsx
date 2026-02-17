"use client";
import Image from "next/image";

import type { MenuItemType } from "@/types/menu-item";

import { TACOS_ORIGIN } from "@/configs/api.config";

/* components */
import CartTool from "@/components/shared/cart-tool";

export default function CartItem({ item }: { item: MenuItemType }) {
  return (
    <div className="flex justify-between items-center gap-6 mb-10">
      <Image
        src={`${TACOS_ORIGIN}${item.src}`}
        alt={`${item.name} Image`}
        className="rounded-[20px] overflow-hidden max-h-37.5 object-cover hidden lg:block"
        width={225}
        height={150}
      />
      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">{item.name}</h4>
        <p className="text-dark-gray">{item.description}</p>
        <p className="text-xl">${item.price}</p>
      </div>
      <CartTool item={item} />
    </div>
  );
}
