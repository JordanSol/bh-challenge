import { Suspense } from "react";

/* components */
import ItemList from "@/components/item-list/item-list";

export default function Home() {
  return (
    <div className="px-5 py-15 flex min-h-full">
      <Suspense fallback={<div className="grow"></div>}>
        <ItemList />
      </Suspense>
    </div>
  );
}
