"use client";
import { useContext, useEffect } from "react";
import Image from "next/image";

/* context */
import { CartContext } from "@/components/context/cart-context";

/* util */
import { calculateCartPrice } from "@/util/cart";

/* components */
import CartItems from "@/components/cart-modal/cart-items";

export default function CartModal() {
  const { value, setValue } = useContext(CartContext);

  useEffect(() => {
    const isOpen = value?.isOpen;
    if (isOpen) {
      window?.scrollTo(0, 0);
      document.querySelector("body")?.classList.add("overflow-hidden");
    } else {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }
  });

  if (!value?.isOpen) return null;

  function handleClose() {
    if (value && setValue) setValue({ ...value, isOpen: false });
  }

  const total = calculateCartPrice(value.cartItems);

  return (
    <>
      <div
        onClick={handleClose}
        className="bg-black/50 fixed w-screen h-full top-0 left-0"
      ></div>
      <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full overflow-auto bg-white lg:rounded-[20px] lg:max-w-200 p-10 lg:h-9/10 pointer-events-auto flex flex-col">
          <div className="flex justify-between items-center mb-20">
            <h3 className="text-[32px] font-bold">Shopping cart</h3>
            <button className="cursor-pointer" onClick={handleClose}>
              <Image
                src="/icons/close.svg"
                alt="Close cart"
                width={36}
                height={36}
                priority
              />
            </button>
          </div>
          <div className="grow overflow-auto mb-10">
            <CartItems />
          </div>
          <div className="flex justify-between mb-15">
            <h3 className="text-[32px] font-bold">Subtotal</h3>
            <h3 className="text-[32px] font-bold">${total}</h3>
          </div>
          <button className="w-full text-white font-bold text-2xl bg-primary rounded-[20px] py-4 px-6 cursor-pointer">
            Check out
          </button>
        </div>
      </div>
    </>
  );
}
