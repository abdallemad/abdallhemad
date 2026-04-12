import { useDeviceType } from "@/hooks/use-device-type";
import Container from "../layout/container";
import Section from "../layout/section";
import SectionHeader from "../layout/section-header";
import WhatIDoCard from "../ui/cards/what-i-do-card";
import { useScroll, useTransform, motion } from "motion/react";
import { RefObject, useRef } from "react";




export default function WhatIDo() {
  const device = useDeviceType();
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <Container>
      <Section className="flex flex-col gap-8 lg:min-h-[200dvh]" ref={containerRef} >
        <SectionHeader title={"What I Do"} subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications" className="max-w-[600px]" direction="justify-start" />
        {device === "desktop" ? <LargeWhatIDoCards ref={containerRef} /> : <SmallWhatIDoCards />}
      </Section>
    </Container>
  )

}

function LargeWhatIDoCards({ ref }: { ref: RefObject<HTMLDivElement | null> }) {

  const scroll = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const translateX = useTransform(scroll.scrollYProgress, [0, 1], ["0%", "-120%"])
  return (
    <motion.div style={{ translateX }} className="lg:flex grid md:grid-cols-2 lg:flex-row items-center gap-4 lg:gap-2 sticky top-[20dvh]">
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
    </motion.div>
  )
}
function SmallWhatIDoCards() {
  return (
    <div className="lg:flex grid md:grid-cols-2 lg:flex-row items-center gap-4 lg:gap-2 sticky top-[20dvh]">
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
      <WhatIDoCard
        title="Web Design & Development"
        description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX."
      />
    </div>
  )
}