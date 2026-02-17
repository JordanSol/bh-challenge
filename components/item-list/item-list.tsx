"use server";

/* components */
import Card from "@/components/item-list/card/card";

/* util */
import { getMenuItems, getFeatured, getTopRated } from "@/util/get-menu-items";

const gridStyles = "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3";

export default async function ItemList() {
  const menuItems = await getMenuItems();

  const sections = {
    Featured: getFeatured(menuItems),
    "Top rated": getTopRated(menuItems),
    Tacos: menuItems,
  };

  return (
    <div className="w-full max-w-300 mx-auto">
      {Object.entries(sections).map(([key, items]) => (
        <div key={key}>
          <h2 className="text-[32px] font-bold mb-10">{key}</h2>
          <ul className={gridStyles}>
            {items.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
