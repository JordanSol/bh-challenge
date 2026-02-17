/* types */
import type { CartType } from "@/types/cart-context";
import type { MenuItemType } from "@/types/menu-item";

export function addToCart(cart: CartType, item: MenuItemType) {
  const cartClone = { ...cart };
  if (cart[item.name]) {
    cartClone[item.name].amount++;
  } else {
    cartClone[item.name] = {
      item,
      amount: 1,
    };
  }

  return cartClone;
}

export function removeFromCart(cart: CartType, item: MenuItemType) {
  const cartClone = { ...cart };
  if (cart[item.name]) {
    if (cart[item.name].amount === 1) {
      delete cartClone[item.name];
    } else {
      cartClone[item.name].amount -= 1;
    }
  }

  return cartClone;
}

export function calculateCartPrice(cart: CartType) {
  let price = 0;
  Object.values(cart).forEach((item) => {
    const itemPrice = parseFloat(item.item.price);
    price += itemPrice * item.amount;
  });
  return price;
}

export function getTotalCartItems(cart: CartType) {
  let count = 0;
  Object.values(cart).forEach((item) => {
    count += item.amount;
  });
  return count;
}
