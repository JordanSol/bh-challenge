import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg w-full px-5 py-10.25 relative">
      <div className="max-w-300 mx-auto">
        <Image
          src="/images/logo-lg.png"
          alt="BetterTacos Logo"
          className="inline-block"
          width={198.91}
          height={183}
        />
      </div>
      <div
        aria-hidden={true}
        className="absolute top-0 left-0 bg-linear-to-r from-white to-0% w-full h-full"
      ></div>
    </section>
  );
}
