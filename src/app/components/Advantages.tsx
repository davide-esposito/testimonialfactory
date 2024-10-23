import Image from "next/image";

export default function About() {
  return (
    <section className="bg-darkBlue text-white py-12 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold text-center">Über uns</h2>
      <div className="w-full max-w-lg flex flex-col items-center space-y-4">
        <Image
          src="/path-to-about-image.jpg"
          alt="Über uns Bild"
          width={300}
          height={200}
          className="rounded-full"
        />
        <p className="text-center max-w-2xl">
          Unser Unternehmen bietet seit vielen Jahren herausragende Services im
          Bereich XYZ an.
        </p>
      </div>
    </section>
  );
}
