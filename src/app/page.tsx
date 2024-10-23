import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Experiences from "@/components/Experiences";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Need from "@/components/Need";
import Process from "@/components/Process";
import Reference from "@/components/Reference";
import Team from "@/components/Team";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Experiences />
      <Need />
      <Advantages />
      <Reference />
      <Process />
      <FAQ />
      <Team/>
      <Footer />
    </div>
  );
}
