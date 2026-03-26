import Navbar from "@/components/Navbar";
import Link from "next/link";
import KineticHero from "./zz_components/KineticHero";
import BentoGrid from "./zz_components/BentoGrid";
import ValueCards from "./zz_components/ValueCards";
import TypographicImpact from "./zz_components/TypographicImpact";
import Philosopy from "./zz_components/Philosopy";
import CTA from "./zz_components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <KineticHero />

      <BentoGrid />

      <ValueCards />

      <TypographicImpact />

      <Philosopy />

      <CTA />
    </main>
  );
}
