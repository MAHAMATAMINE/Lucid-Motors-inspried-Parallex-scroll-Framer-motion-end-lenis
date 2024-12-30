import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";

import BgOverview from "@/../public/bg-overview.jpeg";
import BgInterior from "@/../public/bg-interior.jpeg";
import BgCharging from "@/../public/bg-charging.jpeg";
import BgConnectivity from "@/../public/bg-connectivity.jpeg";
import BgSafety from "@/../public/bg-safety.jpeg";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";


export default function Home() {

useEffect(() =>{
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}, [])

  return (
    
    <main className="min-h-screen">
      <HeroSection/>
      <Section 
        image={BgOverview}
        tag="Overiew"
        title="Elevate Adventure in the Luxury electric Suv Of Tomorow."
        description="More Space More Utilty -All Luxury"
      />
      <Section 
        image={BgInterior}
        tag="Interior"
        title="Elevate Adventure in the Luxury electric Suv Of Tomorow."
        description="More Space More Utilty -All Luxury"
      />
      <Section 
        image={BgCharging}
        tag="Charging"
        title="Elevate Adventure in the Luxury electric Suv Of Tomorow."
        description="More Space More Utilty -All Luxury"
      />
      <Section 
        image={BgConnectivity}
        tag="Connectivity"
        title="Elevate Adventure in the Luxury electric Suv Of Tomorow."
        description="More Space More Utilty -All Luxury"
      />
      <Section 
        image={BgSafety}
        tag="Safety"
        title="Elevate Adventure in the Luxury electric Suv Of Tomorow."
        description="More Space More Utilty -All Luxury"
      />
    </main>
  );
}
