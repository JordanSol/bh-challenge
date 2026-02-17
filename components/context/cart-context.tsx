"use client";

import {
  createContext,
  Dispatch,
  useEffect,
  type SetStateAction,
  type ReactNode,
} from "react";

/* hooks */
import useLocalStorageState from "@/hooks/useLocalStorageState";

/* types */
import type { CartContextType } from "@/types/cart-context";

export const CartContext = createContext<{
  value?: CartContextType;
  setValue?: Dispatch<SetStateAction<CartContextType>>;
}>({});

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [value, setValue] = useLocalStorageState("cartContext", {
    isOpen: false,
    cartItems: {},
  });

  const contextValue = {
    value,
    setValue,
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return <CartContext value={contextValue}>{children}</CartContext>;
}
