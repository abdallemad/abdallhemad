
import dynamic from "next/dynamic";
import Magnetic from "../global-animations/magnetic";
import Section from "../layout/section";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import earthAnimation from "@/assets/earth_location.json";
import { motion } from "framer-motion";

// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

/** Shared slide-up variants — mirrors the page-transition enter/exit lifecycle */
const slideUp = {
  initial: { opacity: 0, y: 60 },
  enter: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.55 + delay,   // start after the curve has mostly cleared
      ease: [0.33, 1, 0.68, 1],
    },
  }),
  exit: (delay: number) => ({
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.45, 0, 0.55, 1],
    },
  }),
};

export default function Hero() {
  return (
    <Section className="flex-1 px-4 ">
      <div
        className="flex flex-col items-center gap-6 lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full z-10"
        data-scroll
        data-scroll-speed="0.2"
      >
        <div className="flex flex-col items-center gap-2">
          {/* Greeting line */}
          <motion.h4
            className="heading-4 text-muted-foreground"
            variants={slideUp}
            custom={0}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Hi👋, My name is
          </motion.h4>

          {/* Main heading */}
          <motion.h1
            className="hero-heading text-center min-w-fit"
            variants={slideUp}
            custom={0.08}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Abdalla Emad <br />
            I&apos;m A Full Stack Developer
          </motion.h1>
        </div>

        {/* Bio paragraph */}
        <motion.p
          className="text-muted-foreground max-w-[560px] text-center"
          variants={slideUp}
          custom={0.16}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          I&apos;m a full-stack developer with experience in building web
          applications. I&apos;m passionate about creating user-friendly and
          efficient software.
        </motion.p>
      </div>

      <SocialLinks />

      <div className="absolute hidden sm:block bottom-0 left-1/2 -translate-x-1/2 p-2 text-lg text-muted-foreground">
        Scroll Down
      </div>
    </Section>
  );
}

function SocialLinks() {
  const scrollSpeed = "0.2";
  return (
    <>
      {/* Social icons — slide up with slight extra delay */}
      <motion.ul
        className="absolute left-4 bottom-0 hidden flex-col z-[19] sm:flex"
        data-scroll
        data-scroll-speed={scrollSpeed}
        variants={slideUp}
        custom={0.24}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Magnetic amount={4}>
          <li className="p-4">
            <a
              href="https://github.com/abdallaemad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Profile"
            >
              <FaGithub className="size-8" />
            </a>
          </li>
        </Magnetic>
        <Magnetic>
          <li className="p-4">
            <a
              href="https://linkedin.com/in/abdallaemad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="size-8" />
            </a>
          </li>
        </Magnetic>
        <Magnetic>
          <li className="p-4">
            <a
              href="https://wa.me/201557464608"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp className="size-8" />
            </a>
          </li>
        </Magnetic>
      </motion.ul>

      {/* Location card — slide up last */}
      <motion.div
        className="absolute hidden sm:flex py-2 border-2 border-primary right-0 bottom-8 rounded-l-full gap-4 pr-10 pl-2 items-center translate-x-2"
        data-scroll
        data-scroll-speed={scrollSpeed}
        variants={slideUp}
        custom={0.32}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="size-20 rounded-full bg-primary">
          <DynamicLottie
            animationData={earthAnimation}
            loop
            className="size-24 absolute inset-0"
          />
        </div>
        <p className="">
          located In <br /> Mansoura
        </p>
      </motion.div>
    </>
  );
}