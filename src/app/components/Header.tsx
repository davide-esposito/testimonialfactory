import { TfLogoNegative } from "./Icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#060d34] text-white">
      <div className="flex items-center">
        <TfLogoNegative />
      </div>
      <nav className="flex space-x-8">
        <a href="#kundenstimmen" className="hover:underline">
          Kundenstimmen
        </a>
        <a href="#testimonials" className="hover:underline">
          Testimonials unserer Kunden
        </a>
        <a href="#so-arbeiten-wir" className="hover:underline">
          So arbeiten wir
        </a>
        <a href="#team" className="hover:underline">
          Team
        </a>
      </nav>
    </header>
  );
}
