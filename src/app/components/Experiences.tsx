import Image from "next/image";

export default function Experiences() {
  return (
    <section
      id="#kundenstimmen"
      className="flex flex-col items-center text-center p-8 -mb-12"
      style={{
        backgroundImage: "url('/images/experiences/bg-experience.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
          <div className="px-8 py-12 flex flex-col items-center">
            <Image
              src="/images/experiences/icon_align-left.png"
              alt="icon align left"
              width={50}
              height={50}
              className="mb-8"
            />
            <p>
              Viele Unternehmen verwenden Text-Testimonials, die oft wenig
              überzeugend wirken und nicht die volle Wirkung erzielen.
            </p>
          </div>
          <div className="p-8 flex flex-col items-center">
            <Image
              src="/images/experiences/icon_media-video-list.png"
              alt="icon media video"
              width={50}
              height={50}
              className="mb-8"
            />
            <p>
              Wir erstellen authentische Video-Testimonials, die das Vertrauen
              deiner potenziellen Kunden durch echte und emotionale Geschichten
              stärken.
            </p>
          </div>
          <div className="p-8 flex flex-col items-center ">
            <Image
              src="/images/experiences/icon_fast-arrow-up-box.png"
              alt="icon fast arrow up box"
              width={50}
              height={50}
              className="mb-8"
            />
            <p>
              Und gestärktes Vertrauen führt zu mehr Engagement, mehr
              Kundenanfragen und letztendlich zu höherem Umsatz.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-4">Erfahrungen unserer Kunden</h1>

      <div className="flex flex-col items-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="p-6 rounded-lg shadow-2xl flex flex-col items-center">
            <Image
              src="/images/experiences/experience-img.png"
              alt="Erfahrung 1"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <p className="font-bold italic">
              "Durch Testimonial Factory konnten wir innerhalb von 3 Monaten
              doppelt so viele Neukunden gewinnen."
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-2xl flex flex-col items-center">
            <Image
              src="/images/experiences/experience-img.png"
              alt="Erfahrung 2"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <p className="font-bold italic">
              "Seit wir Video-Testimonials nutzen, erhalten wir regelmäßig
              qualifizierte Kundenanfragen."
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-2xl flex flex-col items-center">
            <Image
              src="/images/experiences/experience-img.png"
              alt="Erfahrung 3"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <p className="font-bold italic">
              "Durch die Zusammenarbeit konnten wir unsere Neukundenanfragen
              erheblich steigern."
            </p>
          </div>
        </div>

        <a
          href="#"
          className="my-12 bg-button-orange-gradient text-white px-6 py-2 rounded-lg hover:opacity-80 transition duration-300"
        >
          Kostenloses Erstgespräch
        </a>
      </div>
    </section>
  );
}
