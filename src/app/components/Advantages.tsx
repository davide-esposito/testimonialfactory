import Image from "next/image";
import { CheckCircle, CheckCircleOutlined, CheckX } from "./Icons";

export default function Advantages() {
  return (
    <section
      className="flex flex-col items-center text-center p-8 md:p-16"
      style={{
        backgroundImage: "url('/images/advantages/bg-advantages.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-3xl font-bold mb-4 ">
        Option 1, Option 2 oder
        <span className="text-skyBlue"> Testimonial Factory </span>?
      </h2>
      <div className="flex flex-col justify-center mb-8">
        <Image
          src="/images/advantages/advantages-table.png"
          alt="Advantages Mobile Image"
          width={800}
          height={600}
        />
        <div className="w-full h-0.5 bg-line-gradient my-8" />
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mb-8 gap-8">
        <div className="flex-1 flex flex-col text-left justify-center">
          <div className="flex flex-col mb-4">
            <p className="flex flex-row font-bold pb-2 items-center">
              <CheckX /> Option 1
            </p>
            <p className="max-w-xs">
              lorem ipsum sec donec ut ipsa librarum bene volunt, sed optime
              rident
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="flex flex-row font-bold pb-2 items-center">
              <CheckX /> Option 2
            </p>
            <p className="max-w-xs">
              lorem ipsum sec donec ut ipsa librarum bene volunt, sed optime
              rident
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="flex flex-row font-bold pb-2 items-center">
              <CheckCircle />
              Testimonial Factory
            </p>
            <p className="max-w-xs">
              lorem ipsum sec donec ut ipsa librarum bene volunt, sed optime
              rident
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/images/advantages/advantages-img-01.png"
            alt="Video Image"
            width={600}
            height={400}
            className="object-contain" // Für responsive Bilder
          />
        </div>
      </div>

      <h2 className="text-center my-8 text-3xl">
        Nur Video-Testimonials bringen dir{" "}
        <span className="bg-medium-blue-gradient bg-clip-text text-transparent">
          mehr Kunden
        </span>
      </h2>

      <div className="w-full mb-8 flex flex-col md:flex-row text-left">
        <div className="flex flex-col items-center justify-center relative md:w-1/2 mb-4 md:mb-0">
          {/* Erstes Bild */}
          <div className="absolute w-3/4 h-auto">
            <Image
              src="/images/advantages/advantages-img-02.png"
              alt="Videographer Image"
              layout="responsive"
              width={100}
              height={50}
              className="object-contain" // Für responsive Bilder
            />
          </div>

          {/* Zweites Bild */}
          <div
            className="absolute w-1/2 h-auto"
            style={{ marginLeft: "35%", marginTop: "25%" }}
          >
            <Image
              src="/images/advantages/advantages-img-03.png"
              alt="Camera Image"
              layout="responsive"
              width={300}
              height={150}
              className="object-contain" // Für responsive Bilder
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex mb-4">
            <p className="max-w-md font-bold">
              Jedes Video-Testimonial ist so konzipiert, dass es so authentisch
              wie möglich wirkt. Es ist der erste Textabschnitt, der erklärt,
              warum Kundenanfragen wichtig sind.
            </p>
          </div>
          <div className="flex mb-4">
            <CheckCircleOutlined />
            <p className="max-w-lg">
              Das ist der erste Textabschnitt verlängert mit einem lorem ipsum
              sed cunt mallevorum regnis, ud set magnis perceptionem vacit et
              macit, imperatorem disse.
            </p>
          </div>
          <div className="flex mb-4">
            <CheckCircleOutlined />
            <p className="max-w-lg">
              Das ist der zweite Textabschnitt verlängert mit einem lorem ipsum
              sed cunt mallevorum regnis, ud set magnis perceptionem vacit et
              macit, imperatorem disse.
            </p>
          </div>
          <div className="flex mb-4">
            <CheckCircleOutlined />
            <p className="max-w-lg">
              Das ist der dritte Textabschnitt verlängert mit einem lorem ipsum
              sed cunt mallevorum regnis, ud set magnis perceptionem vacit et
              macit, imperatorem disse.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <p className="font-bold max-w-md">
          Ultimativer schlauer Quintessenzsatz, der alles und jeden überzeugt,
          dass Testimonial Factory behindert geil ilst.
        </p>
      </div>
    </section>
  );
}
