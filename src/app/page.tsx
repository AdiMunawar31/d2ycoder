import Benefits from "@/components/pages/home/Benefits";
import Collaboration from "@/components/pages/home/Collaboration";
import Footer from "@/components/pages/home/Footer";
import Header from "@/components/pages/home/Header";
import Hero from "@/components/pages/home/Hero";
import Pricing from "@/components/pages/home/Pricing";
import Roadmap from "@/components/pages/home/Roadmap";
import Services from "@/components/pages/home/Services";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}
