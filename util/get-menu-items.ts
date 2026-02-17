/* types */
import type { MenuItemType } from "@/types/menu-item";

/* config */
import { TACOS_ENDPOINT } from "@/configs/api.config";

export async function getMenuItems(): Promise<MenuItemType[]> {
  const data = await fetch(TACOS_ENDPOINT);

  // Throw err if request isn't ok or the status is anything but 200
  if (!data.ok || data.status !== 200) {
    throw new Error("Error fetching menu items.");
  }

  // Parse and type api response
  const menuItems = (await data.json()) as MenuItemType[];
  return menuItems;
}

export function getFeatured(items: MenuItemType[]) {
  return items.filter((item) => item.featured).slice(0, 3);
}

export function getTopRated(items: MenuItemType[]) {
  return items
    .sort((a, b) => {
      const ratingA = parseFloat(a.rating);
      const ratingB = parseFloat(b.rating);

      return ratingB - ratingA;
    })
    .slice(0, 3);
}
