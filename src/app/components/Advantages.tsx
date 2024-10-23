export default function Advantages() {
  return (
    <section
      className="flex flex-col items-center text-center py-16"
      style={{
        backgroundImage: "url('/images/advantages/bg-advantages.png')", // Pfad zum Hintergrundbild
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "150vh",      }}
    >
      <h2 className="text-3xl font-bold mb-4">Vorteile</h2>
      <p className="mb-8">
        Hier sind einige Vorteile unserer Video-Testimonials.
      </p>
      {/* Füge hier den Inhalt der Vorteile hinzu */}
    </section>
  );
}
