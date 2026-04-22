
import dynamic from "next/dynamic";
import Magnetic from "../global-animations/magnetic";
import Section from "../layout/section";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import earthAnimation from "@/assets/earth_location.json"
// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });





export default function Hero() {
  return (
    <Section className="flex-1 px-4 ">
      <div className="flex flex-col items-center gap-6 lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full z-10" data-scroll data-scroll-speed="0.2">
        <div className="flex flex-col items-center gap-2">
          <h4 className="heading-4 text-muted-foreground">Hi👋, My name is</h4>
          <h1 className="hero-heading text-center min-w-fit">
            Abdalla Emad  <br />
            I'm A Full Stack Developer
          </h1>
        </div>
        <p className="text-muted-foreground max-w-[560px] text-center">
          I'm a full-stack developer with experience in building web applications. I'm passionate about creating user-friendly and efficient software.
        </p>
      </div>
      <SocialLinks />


      <div className="absolute hidden sm:block bottom-0 left-1/2 -translate-x-1/2 p-2 text-lg text-muted-foreground">Scroll Down</div>
    </Section>
  )
}


function SocialLinks() {
  const scrollSpeed = "0.2"
  return (
    <>
      <ul className="absolute left-4 bottom-0 hidden flex-col  sm:flex z-50" data-scroll data-scroll-speed={scrollSpeed}>
        <Magnetic amount={4}>
          <li className="p-4">
            <a href="https://github.com/abdallaemad" target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
              <FaGithub className="size-8" />
            </a>
          </li>
        </Magnetic>
        <Magnetic>
          <li className="p-4">
            <a href="https://linkedin.com/in/abdallaemad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin className="size-8" />
            </a>
          </li>
        </Magnetic>
        <Magnetic>
          <li className="p-4">
            <a href="https://wa.me/201557464608" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contact">
              <FaWhatsapp className="size-8" />
            </a>
          </li>
        </Magnetic>
      </ul>
      <div className="absolute hidden sm:flex py-2 border-2 border-primary right-0 bottom-8 rounded-l-full gap-4 pr-10 pl-2 items-center translate-x-2" data-scroll data-scroll-speed={scrollSpeed}>
        <div className="size-20 rounded-full bg-primary">
          <DynamicLottie
            animationData={earthAnimation}
            loop
            className="size-24 absolute inset-0" />
        </div>
        <p className="">located In <br /> Mansoura</p>
      </div>
    </>
  )
}