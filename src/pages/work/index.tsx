import { useState, useEffect, useRef } from "react";
import { useDeviceType } from "@/hooks/use-device-type";
import { PROJECTS } from "@/lib/data";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import Gallery from "@/components/project-gallery/gallery";
import SmallGallery from "@/components/project-gallery/small-gallery";
import { Button } from "@/components/ui/button";
import WorkFilters, { FilterType, DisplayMode } from "./_filters";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import SEO from "@/components/seo/seo";
import AboutCurve from "@/components/global-animations/curve";
import Curve from "@/components/layout/page-transition";
import SmoothMoonScroll from "@/components/global-animations/3d-models/moon";
import { motion, Variant } from "framer-motion";

/** Shared slide-up variants — same timing as hero.tsx */
const slideUp:Variant = {
  initial: { opacity: 0, y: 60 },
  enter: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.55 + delay,
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

export default function Work() {
  const device = useDeviceType();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState<FilterType>("all");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("gallery");

  useEffect(() => {
    let locomotiveScroll: any;

    (async () => {
      // @ts-expect-error:commonjs
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
    })();

    return () => {
      if (locomotiveScroll && typeof locomotiveScroll.destroy === "function") {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  // Filter projects dynamically based on selection
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeType === "all") return true;
    const labelLower = project.label.toLowerCase();
    const titleLower = project.title.toLowerCase();
    const typeLower = activeType.toLowerCase();

    if (typeLower === "development") {
      return labelLower.includes("development") || labelLower.includes("dev");
    }
    if (typeLower === "design") {
      return labelLower.includes("design");
    }
    if (typeLower === "saas") {
      return labelLower.includes("saas") || titleLower.includes("saas");
    }
    return labelLower.includes(typeLower) || titleLower.includes(typeLower);
  });

  return (
    <Curve>
      <SEO
        title="Work | Abdalla Emad"
        description="Explore abdalla emad's selected development, design, and SaaS projects."
      />

      {/* Hero section — mirrors landing page structure */}
      <div className="min-h-screen flex flex-col relative earth-scroll-base" key={'work'}>
        <div
          className="absolute inset-0 w-screen h-screen overflow-hidden"
          data-scroll
          data-scroll-speed="-0.3"
        >
          <SmoothMoonScroll key={'work'}/>
        </div>
        <Header />
        <section className="flex-1 px-4">
          <div
            className="flex flex-col items-center gap-6 lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full z-10"
            data-scroll
            data-scroll-speed="0.2"
          >
            <div className="flex flex-col items-center gap-2">
              <motion.h4
                className="heading-4 text-muted-foreground"
                variants={slideUp}
                custom={0}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Selected Work
              </motion.h4>
              <motion.h1
                className="hero-heading text-center min-w-fit"
                variants={slideUp}
                custom={0.08}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Projects &amp; <br />
                Case Studies
              </motion.h1>
            </div>
            <motion.p
              className="text-muted-foreground max-w-[560px] text-center"
              variants={slideUp}
              custom={0.16}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              A curated collection of projects I&apos;ve crafted — from full-scale
              web applications to interactive digital experiences.
            </motion.p>
          </div>
        </section>
      </div>

      <div className="light bg-background text-foreground relative" ref={containerRef}>
        {typeof window !== "undefined" && (
          <AboutCurve containerRef={containerRef} />
        )}
        <Container className="pt-8 md:pt-14 pb-20">
          <Section id="projects" className="flex flex-col gap-10 md:gap-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHeader
                title={"Selected Work"}
                subTitle="Here's a collection of projects I've built, ranging from full-scale web applications to interactive experiences."
                className="max-w-[600px] mb-0"
                direction="justify-start"
              />
            </div>

            {/* Dynamic Filters component */}
            <WorkFilters
              activeType={activeType}
              onChangeType={setActiveType}
              activeDisplay={displayMode}
              onChangeDisplay={setDisplayMode}
            />

            {/* Project display area */}
            {filteredProjects.length > 0 ? (
              displayMode === "gallery" ? (
                // Gallery layout (Responsive grid)
                <SmallGallery projects={filteredProjects} />
              ) : // List layout (Interactive hover effect for desktop, responsive cards for mobile)
              device === "desktop" ? (
                <Gallery projects={filteredProjects} />
              ) : (
                <SmallGallery projects={filteredProjects} />
              )
            ) : (
              <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card/10 backdrop-blur-sm">
                <p className="text-muted-foreground text-lg">
                  No projects found in the "{activeType}" category.
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <Button size={"lg"} className="cursor-pointer">
                View All
              </Button>
            </div>
          </Section>
        </Container>
      </div>
      <Footer />
    </Curve>
  );
}
