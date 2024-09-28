import Benefits from "@/components/pages/home/Benefits";
import Collaboration from "@/components/pages/home/Collaboration";
import Hero from "@/components/pages/home/Hero";
import Roadmap from "@/components/pages/home/Roadmap";
import Services from "@/components/pages/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Roadmap />
    </>
  );
}
