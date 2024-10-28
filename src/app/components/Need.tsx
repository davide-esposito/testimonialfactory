import Image from "next/image";
import { IconDonate, IconEye, IconThumbsUp } from "./Icons";

export default function Need() {
  return (
    <section
      className="text-white p-8"
      style={{
        backgroundImage: "url('/images/need/bg-need.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="p-16 text-center ">
        <h1 className="text-4xl">
          Warum einfache Text-Testimonials nicht (mehr) ausreichen
        </h1>
        <div className="w-1/3 h-1 bg-hero-gradient my-6 mx-auto" />
        <p className=" px-8">
          Jedes Unternehmen nutzt heutzutage Testimonials, klar. Doch wer nicht
          nur eine Sammlung von Texten auf seiner Website haben möchte, sondern
          tatsächlich Vertrauen und Engagement erzeugen will, hat mit
          herkömmlichen Text-Testimonials ein Problem, denn...
        </p>
      </div>

      {/* Image and Icons Section */}
      <div className="flex w-full max-w-6xl mb-8">
        {/* Image Section */}
        <div className="flex-2 flex justify-center -mr-16">
          <Image
            src="/images/need/need-mobile.png"
            alt="Mobile Image"
            width={600}
            height={400}
            className="transform rotate-x-[30deg]"
            style={{ transform: "rotateX(30deg)" }}
          />
        </div>

        {/* Icons and Text Section */}
        <div className="flex-1 flex flex-col text-left">
          <div className="flex flex-col mb-4">
            <IconEye />
            <p className="font-bold max-w-xs">
              Interessenten müssen auf einen Blick die Authentizität und
              Echtheit der Kundenmeinungen erkennen.
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <IconDonate />
            <p className="font-bold max-w-xs">
              Sie müssen Vertrauen in die Echtheit der Testimonials und damit in
              dich als Anbieter bekommen.
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <IconThumbsUp />
            <p className="font-bold max-w-xs">
              Es muss klar sein, wie die positiven Erfahrungen deiner Kunden auf
              andere Kunden übertragbar sind.
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 text-center">
        <h1 className="text-3xl pb-8">
          Du könntest viel <span className="text-skyBlue">mehr Kunden </span>
          gewinnen, wenn deine{" "}
          <span className="text-skyBlue">Testimonials </span> nicht nur gelesen,
          sondern <span className="text-lightBlue">wirklich erlebt</span>
          würden.
        </h1>
        <p className="">
          Video-Testimonials machen deine zufriedenen Kunden sichtbar und hörbar
          – sie bringen ihre positiven Erfahrungen auf eine Weise zum Ausdruck,
          die Texte einfach nicht leisten können. So überzeugst du nicht nur
          potenzielle Kunden, sondern berührst sie auf einer persönlichen und
          emotionalen Ebene.
        </p>
      </div>
    </section>
  );
}
