import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import HeroFullScreen from "@/components/HeroFullScreen";
import MissionStatement from "@/components/MissionStatement";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";
import WaveDivider from "@/components/WaveDivider";


export default function Home() {
  return (
    <main >
      <Navbar/>
      <HeroFullScreen />
      <Services />
      <WaveDivider />
      <MissionStatement />
      <Contact />
    </main>
  )
}
