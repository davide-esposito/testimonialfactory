export default function Footer() {
  return (
    <footer
      className=" py-8 text-center text-white"
      style={{
        backgroundImage: "url('/images/footer/bg-footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
      }}
    >
      <p>&copy; 2024 Dein Unternehmen. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
