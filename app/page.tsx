import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import HeroFullScreen from "@/components/HeroFullScreen";
import MissionStatement from "@/components/MissionStatement";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";
import WaveDivider from "@/components/WaveDivider";


export default function Home() {
  return (
    <main className="bg-[#E0E0DB]" >
      <Navbar/>
      <HeroFullScreen />
      <Services />
      <WaveDivider />
      <MissionStatement />
      <Contact />
      <Footer />
    </main>
  )
}
