import Navbar from "@/components/mkp/Navbar";
import Hero from "@/components/mkp/Hero";
import About from "@/components/mkp/About";
import FightCareer from "@/components/mkp/FightCareer";
import Coaching from "@/components/mkp/Coaching";
import IronTigerGym from "@/components/mkp/IronTigerGym";
import Media from "@/components/mkp/Media";
import Contact from "@/components/mkp/Contact";
import Footer from "@/components/mkp/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <FightCareer />
        <Coaching />
        <IronTigerGym />
        <Media />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
