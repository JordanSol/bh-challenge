"use client";

import Image from "next/image";

import type { MenuItemType } from "@/types/menu-item";

/* config */
import { TACOS_ORIGIN } from "@/configs/api.config";

/* components */
import CartTool from "@/components/shared/cart-tool";

export default function Card({ item }: { item: MenuItemType }) {
  return (
    <div className="w-full lg:max-w-92.25 rounded-[20px] overflow-hidden">
      <div className="relative">
        <img
          src={`${TACOS_ORIGIN}${item.src}`}
          alt={`${item.name} image`}
          className="w-full max-h-[199px] object-cover"
        />
        <div className="absolute top-6 right-0 flex py-2 px-4 bg-primary gap-1 rounded-tl-lg rounded-bl-lg">
          <Image
            src="/icons/star.svg"
            width={20}
            height={20}
            alt="Ratings star"
          />
          <span className="font-bold text-white">{item.rating}</span>
        </div>
      </div>
      <div className="bg-white p-5 flex flex-col gap- 4">
        <h3 className="font-bold mb-4 text-2xl">{item.name}</h3>
        <p className="text-dark-gray text-xl">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl">${item.price}</span>
          <CartTool item={item} />
        </div>
      </div>
    </div>
  );
}
