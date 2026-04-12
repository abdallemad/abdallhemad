import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import Container from "../layout/container";
import Section from "../layout/section";
import SectionHeader from "../layout/section-header";
import { Button } from "../ui/button";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiFigma, SiGsap, SiPrisma, SiShadcnui } from "react-icons/si";
import AboutCurve from "../global-animations/curve";
import { useRef } from "react";
import Image from "next/image";
import { useMotionTemplate, useScroll, useTransform, motion, useInView } from "motion/react";
import ScrollVelocity from "../ui/ScrollVelocity";
import { SLIDE_UP, CONATINER_SLIDE_UP_HEADING } from "../global-animations/variants";


export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const heading3Ref = useRef<HTMLHeadingElement>(null)
  const heading3InView = useInView(heading3Ref, { margin: "0px 0px -50% 0px", })
  const heading5Ref = useRef<HTMLHeadingElement>(null)
  const heading5InView = useInView(heading5Ref, { margin: "0px 0px -48% 0px" })

  return (
    <>
      <div ref={containerRef} className="bg-primary text-primary-foreground relative">
        {typeof window !== "undefined" && <AboutCurve containerRef={containerRef} />}
        <Container>
          <Section id="about" className="">
            <div className="flex flex-col items-center gap-6 lg:gap-8">
              {/* <h2 className="heading-2">About Me</h2> */}
              <div className="flex flex-col items-center gap-4 lg:gap-6 text-center max-w-[980px]">
                <motion.h3
                  ref={heading3Ref}
                  variants={CONATINER_SLIDE_UP_HEADING}
                  initial="initial"
                  animate={heading3InView ? "open" : "close"}
                  className="heading-2 flex flex-wrap gap-2 justify-center overflow-hidden"
                >
                  {"I’m Abdalla Emad, a Full Stack Developer focused on building modern, high-performance web experiences"
                    .split(" ")
                    .map((word, i) => (
                      <span key={i} className="overflow-hidden block">
                        <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block">
                          {word}
                        </motion.span>
                      </span>
                    ))}

                  <br />
                </motion.h3>
                <motion.h5
                  variants={CONATINER_SLIDE_UP_HEADING}
                  initial="initial"
                  animate={heading5InView ? "open" : "close"}
                  className="heading-4 flex flex-wrap gap-2 justify-center" ref={heading5Ref}>
                  {"I combine clean architecture with thoughtful UI/UX to create products that feel fast, interactive, and engaging. My work is driven by a strong attention to detail, especially when it comes to animations, micro-interactions, and overall user experience.".split(" ").map((word, i) => (
                    <span key={i} className="overflow-hidden block">
                      <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block">
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.h5>
              </div>
              <Button size={'lg'} className="text-lg rounded-full px-8">
                About Me
              </Button>

            </div>

          </Section>
          <div className="flex items-center justify-between text-muted-foreground w-full py-12">
            <p className="heading-5">Scroll Down</p>
            <p className="heading-5">To See More</p>
          </div>
        </Container>
      </div>
      <AboutImage />
      <AboutSkills />
    </>

  )
}

function AboutImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const scroll = useScroll({ target: containerRef, offset: ["start end", "start 10%"] })
  const scrollImage = useScroll({ target: imageRef, offset: ["start end", "start 10%"] })
  const clipTranslate = useTransform(scroll.scrollYProgress, [0, 1], [30, 0])
  const clipTranslateImage = useTransform(scrollImage.scrollYProgress, [0, 1], [30, 0])
  const imageHeight = useTransform(scrollImage.scrollYProgress, [0, 1], ["50vh", "100vh"])
  const imageScale = useTransform(scrollImage.scrollYProgress, [0, 1], [1.5, 1])
  const clipPath = useMotionTemplate`inset(${clipTranslate}% ${clipTranslate}% 0 ${clipTranslate}%)`
  const clipPathImage = useMotionTemplate`inset(0 ${clipTranslateImage}% 0 ${clipTranslateImage}%)`

  return (
    <div ref={containerRef} className="bg-primary">
      <motion.div style={{ clipPath }} className="bg-background relative text-foreground   py-[48px] lg:py-[80px]">
        <div className=" py-8  mb-8 w-screen overflow-x-hidden" data-scroll data-scroll-speed="0.1">
          <ScrollVelocity
            texts={['Full Stack Developer - Abdalla Emad']}
            velocity={60}
            className="text-6xl lg:text-9xl font-light py-12"
          />
        </div>
        <figure className="px-4 lg:px-24">
          <motion.div style={{ clipPath: clipPathImage, height: imageHeight }} className="relative">
            <motion.img ref={imageRef} src="/images/my_img.jpg" alt="Abdalla Emad - Full Stack Developer" style={{ scale: imageScale }} className="object-cover w-full h-full" />
          </motion.div>
        </figure>
      </motion.div>
    </div>
  )
}

function AboutSkills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scroll = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const translateX = useTransform(scroll.scrollYProgress, [0, 1], [0, 100])
  const translateX2 = useTransform(scroll.scrollYProgress, [0, 1], [0, -100])
  return (
    <Section>
      <SectionHeader title="Strong Tech Skills" subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications" className="max-w-[600px] mx-auto text-center mb-12" />
      <div className="flex flex-col gap-4" ref={containerRef}>
        <div className="overflow-x-hidden">
          <motion.ul style={{ translateX }} className="flex items-center gap-4 w-fit">
            {skills.slice(0, -1).map(skill => (
              <li key={skill.label} className="flex items-center shrink-0 gap-4">
                {skill.icon}
                <span className="heading-2">{skill.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="overflow-x-hidden">
          <motion.ul style={{ translateX: translateX2 }} className="flex items-center gap-4 w-fit">
            {skills.slice(0, -1).map(skill => (
              <li key={skill.label} className="flex items-center shrink-0 gap-4">
                {skill.icon}
                <span className="heading-2">{skill.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  )
}

const skills = [
  { label: "Three.js", icons: <TbBrandThreejs className="size-8 lg:size-16" /> },
  { label: "Next.js", icon: < RiNextjsFill className="size-8 lg:size-16" /> },
  { label: "React.js", icon: <RiReactjsFill className="size-8 lg:size-16" /> },
  { label: "Framer Motion", icon: <TbBrandFramerMotion className="size-8 lg:size-16" /> },
  { label: "MongoDB", icon: <DiMongodb className="size-8 lg:size-16" /> },
  { label: "Shadcn UI", icon: <SiShadcnui className="size-8 lg:size-16" /> },
  { label: "Prisma", icon: <SiPrisma className="size-8 lg:size-16" /> },
  { label: "Figma", icon: <SiFigma className="size-8 lg:size-16" /> },
  { label: "GSAP", icon: <SiGsap className="size-8 lg:size-16" /> }
]