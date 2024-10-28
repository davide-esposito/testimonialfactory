import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row items-center text-left text-white "
      style={{
        backgroundImage: "url('/images/hero/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div className="flex-1 py-4 px-12">
        <h2 className="text-4xl font-bold mb-4">
          Authentische Video-Testimonials, die Vertrauen schaffen
        </h2>
        <div className="w-1/3 h-1 bg-line-gradient my-4" />
        <p className="text-lg mb-8">
          Wir erstellen authentische Video-Testimonials, die potenzielle Kunden
          überzeugen und das Vertrauen in dein Unternehmen stärken.
        </p>
        <a
          href="#"
          className="mt-8 bg-button-orange-gradient text-white px-6 py-2 rounded-lg hover:opacity-80 transition duration-300"
        >
          Kostenloses Erstgespräch
        </a>
      </div>

      <div className="flex-1 py-4 px-12">
        <div className="relative w-full h-0 pb-[56.25%]">
          <Image
            src="/images/hero/hero-img.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
