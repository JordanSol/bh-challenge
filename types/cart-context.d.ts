/* types */

import type { MenuItem } from "@/types/menu-item";

export interface CartType {
  [key: string]: {
    item: MenuItem;
    amount: number;
  };
}

export interface CartContextType {
  isOpen: boolean;
  cartItems: CartType;
}
