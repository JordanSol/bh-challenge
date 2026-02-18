"use client";
import { useContext, useEffect } from "react";

/* context */
import { CartContext } from "@/components/context/cart-context";

/* util */
import { calculateCartPrice } from "@/util/cart";

/* components */
import CartItems from "@/components/cart-modal/cart-items";

/* icons */
import Close from "@/components/icons/close";

export default function CartModal() {
  const { value, setValue } = useContext(CartContext);

  useEffect(() => {
    const isOpen = value?.isOpen;
    const body = document.querySelector("body");
    if (isOpen) {
      window?.scrollTo(0, 0);
      body?.classList.add("overflow-hidden");
      body?.classList.add("max-h-dvh");
    } else {
      body?.classList.remove("overflow-hidden");
      body?.classList.remove("max-h-dvh");
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
      <div className="fixed lg:absolute w-screen h-dvh top-0 left-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full overflow-auto bg-white lg:rounded-[20px] lg:max-w-200 p-10 lg:h-9/10 pointer-events-auto flex flex-col">
          <div className="flex justify-between items-center mb-20">
            <h3 className="text-[32px] font-bold">Shopping cart</h3>
            <button className="cursor-pointer" onClick={handleClose}>
              <Close width={36} height={36} />
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
