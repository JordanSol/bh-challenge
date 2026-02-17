import Image from "next/image";
/* components */
import CartButton from "@/components/site/header/cart-button";

export default function Header() {
  return (
    <header className="px-5 border-t-[5px] border-primary">
      <div className="w-full flex items-center justify-between min-h-16.25">
        <Image
          src="/images/logo-sm.png"
          alt="BetterTaco Logo"
          width={118}
          height={45}
        />
        <CartButton />
      </div>
    </header>
  );
}
