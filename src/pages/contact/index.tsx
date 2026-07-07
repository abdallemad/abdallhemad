import { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SEO from "@/components/seo/seo";
import AboutCurve from "@/components/global-animations/curve";
import Curve from "@/components/layout/page-transition";
import SmoothAutaredScroll from "@/components/global-animations/3d-models/autared";
import { motion } from "framer-motion";

/** Shared slide-up variants — same timing as hero.tsx */
const slideUp = {
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


// Helper to map social link names to Lucide icons
const getSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "email":
      return <Mail className="w-5 h-5 text-primary" />;
    case "github":
      return <FaGithub className="w-5 h-5 text-primary" />;
    case "linkedin":
      return <FaLinkedin className="w-5 h-5 text-primary" />;
    case "whatsapp":
      return <MessageSquare className="w-5 h-5 text-primary" />;
    default:
      return <Mail className="w-5 h-5 text-primary" />;
  }
};

export default function Contact() {
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
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Curve>
      <SEO
        title="Contact | Abdalla Emad"
        description="Get in touch for projects, collaboration, or general inquiries."
      />

      {/* Hero section — mirrors landing page structure */}
      <div className="min-h-screen flex flex-col relative earth-scroll-base" key={'contact'}>
        <div
          className="absolute inset-0 w-screen h-screen overflow-hidden"
          data-scroll
          data-scroll-speed="-0.3"
        >
          <SmoothAutaredScroll key={'contact'}/>
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
                Get In Touch
              </motion.h4>
              <motion.h1
                className="hero-heading text-center min-w-fit"
                variants={slideUp}
                custom={0.08}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Let&apos;s Build <br />
                Something Great
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
              Have a project in mind or want to collaborate? I&apos;d love to hear
              from you — let&apos;s create something remarkable together.
            </motion.p>
          </div>
        </section>
      </div>

      <div className="light bg-background text-foreground relative" ref={containerRef}>
        {typeof window !== "undefined" && (
          <AboutCurve containerRef={containerRef} />
        )}
        <Container className="pt-8 md:pt-14 pb-20">
          <Section id="contact" className="flex flex-col gap-10 md:gap-16">
            <SectionHeader
              title="Let's build something together"
              subTitle="Get in touch to discuss a project, ask a question, or just say hello."
              className="max-w-[700px]"
              direction="justify-start"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
              {/* Left side: Contact Info and Socials */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="heading-3 text-foreground font-semibold">
                    Contact & Socials
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Have an exciting project in mind or want to collaborate?
                    Drop me a message through the form, or reach out directly
                    via my social profiles.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-card/30 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="p-2.5 rounded-lg bg-secondary/20 group-hover:bg-primary/10 transition-colors">
                        {getSocialIcon(link.name)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {link.name}
                        </span>
                        <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors flex items-center gap-1">
                          Get in touch
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right side: Modern Contact Form */}
              <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-card/20 backdrop-blur-md border border-border/40 w-full">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="flex h-11 w-full rounded-xl border border-border/40 bg-secondary/10 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="flex h-11 w-full rounded-xl border border-border/40 bg-secondary/10 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground/80"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry / Collaboration"
                      required
                      className="flex h-11 w-full rounded-xl border border-border/40 bg-secondary/10 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground/80"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      required
                      className="flex w-full rounded-xl border border-border/40 bg-secondary/10 px-3.5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none min-h-[140px]"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto self-start px-8 py-3.5 mt-2 cursor-pointer"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Section>
        </Container>
      </div>
      <Footer />
    </Curve>
  );
}
