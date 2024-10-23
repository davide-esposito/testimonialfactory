import Image from "next/image";

export default function Team() {
  return (
    <section className="bg-white py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Unser Team</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="max-w-xs mx-2">
          <Image
            src="/images/team/member1.jpg" // Füge den Pfad zu deinem Teammitglied-Bild hier hinzu
            alt="Teammitglied 1"
            width={300}
            height={300}
            className="rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Name 1</h3>
          <p>Position 1</p>
        </div>
        <div className="max-w-xs mx-2">
          <Image
            src="/images/team/member2.jpg" // Füge den Pfad zu deinem Teammitglied-Bild hier hinzu
            alt="Teammitglied 2"
            width={300}
            height={300}
            className="rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">Name 2</h3>
          <p>Position 2</p>
        </div>
        {/* Füge hier weitere Teammitglieder hinzu */}
      </div>
    </section>
  );
}
