import { expectTypeOf, test } from "vitest";

import type { MenuItemType } from "@/types/menu-item";

import { getMenuItems } from "@/util/get-menu-items";

test("getMenuItems fetches and returns data from endpoint", async () => {
  const menuItems = await getMenuItems();
  expectTypeOf(menuItems).toEqualTypeOf<MenuItemType[]>();
});
