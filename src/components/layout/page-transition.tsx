import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const ROUTES = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/contact": "Contact",
};

function Curve({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const text: Variants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.45, 0, 0.55, 1],
      },
      transitionEnd: {
        top: "60%",
      },
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  return (
    <div className={cn("z-[999]", className)}>
      <motion.p
        {...anime(text)}
        className="absolute top-[40%] left-[50%] translate-x-[-50%] text-black z-[9999999999999] text-4xl font-semibold font-sans"
      >
        {ROUTES[router.pathname as keyof typeof ROUTES]}
      </motion.p>
      {!dimensions.width && (
        <div className="w-screen z-[99999] h-[calc(100vh+600px)] -top-[300px] left-0 fixed pointer-events-none bg-white" />
      )}
      {dimensions.width > 0 && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}
      {children}
    </div>
  );
}
function SVG({ width, height }: { width: number; height: number }) {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `;
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `;
  const curveVariants: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };
  const slideIn: Variants = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.45, 0, 0.55, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };
  return (
    <motion.svg
      {...anime(slideIn)}
      className="w-screen h-[calc(100vh+600px)] -top-[300px] z-[9999999] left-0 fixed pointer-events-none fill-white"
    >
      <motion.path {...anime(curveVariants)} d={initialPath} />
    </motion.svg>
  );
}

export default Curve;
function anime(variants: Variants) {
  return {
    variants: variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit'
  }
}