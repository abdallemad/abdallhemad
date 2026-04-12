import SEO from "@/components/seo/seo";
import SmoothEearthScroll from "@/components/3d-models/3d-scene-earth";
import SmoothScroll from "@/components/layout/smooth-scroll";
import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/header";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import HowIWork from "@/components/sections/how-i-work";
import WhatIDo from "@/components/sections/what-i-do";
import Work from "@/components/sections/work";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        // @ts-expect-error:commonjs
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 2000)
      }
    )()
  }, [])
  return (

    // <SmoothScroll>
    <main>
      <SEO />
      <div className="min-h-screen flex flex-col relative ">
        <div className="absolute inset-0 w-screen h-screen overflow-hidden" data-scroll data-scroll-speed="-0.3">
          <SmoothEearthScroll />
        </div>
        <Header />
        <Hero />
      </div>
      <About />
      <WhatIDo />
      <Work />
      <HowIWork />
      <Footer />
    </main>
    // </SmoothScroll>
  );
}
