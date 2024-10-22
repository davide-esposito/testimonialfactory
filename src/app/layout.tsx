import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meine App",
  description: "Dies ist eine Beispiel-App mit Next.js und Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
