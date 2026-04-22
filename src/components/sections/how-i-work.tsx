
import { useDeviceType } from "@/hooks/use-device-type";
import Container from "../layout/container";
import Section from "../layout/section";
import SectionHeader from "../layout/section-header";
import ProcessStage from "../ui/process-stage";
import ScrollVelocity from "../ui/ScrollVelocity";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { HOW_I_WORK } from "@/lib/data";



export default function HowIWork() {

  const device = useDeviceType();
  const [isPastTop, setIsPastTop] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.5) {
      setIsPastTop(true);
    }
    else {
      setIsPastTop(false);
    }
  });


  return (

    <div ref={targetRef} className={`${isPastTop ? "light" : ""} transition-colors duration-500 bg-background text-foreground`}>
      <Container>
        <Section>
          <SectionHeader title="How I Work" subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications" className="max-w-[600px] mx-auto text-center mb-12" />
          {device === 'desktop' ? (
            <div>
              {HOW_I_WORK.map((step, index) => {
                const side = index % 2 !== 0 ? "right" : "left";
                return (
                  <div className="w-full grid grid-cols-2 -gap-2 py-42 relative">
                    {side == 'left' && (<div className="col-span-1"></div>)}
                    <div className={side == 'right' ? "translate-x-2" : "-translate-x-2"}>
                      <ProcessStage title={step.name} description={step.description} step={index + 1} direction={side} />
                    </div>
                    {side == 'right' && (<div className="col-span-1"></div>)}
                    <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-1/2 " />
                  </div>
                )
              })}
            </div>
          ) : (
            <div>
              {HOW_I_WORK.map((step, index) => {
                return (
                  <div className="w-full py-20 relative">
                    <div className="-translate-x-2">
                      <ProcessStage title={step.name} description={step.description} step={index + 1} direction="left" />
                    </div>
                    <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-[0.5px] -z-10" />
                  </div>
                )
              })}
            </div>
          )}
        </Section>
      </Container >
      <div className="bg-background text-foreground light">
        <div className=" py-8  w-screen overflow-x-hidden" data-scroll data-scroll-speed="0.1">
          <ScrollVelocity
            texts={['Full Stack Developer - Abdalla Emad']}
            velocity={60}
            className="text-6xl lg:text-9xl font-light py-12"
          />
        </div>
      </ div>
    </div>

  )

}