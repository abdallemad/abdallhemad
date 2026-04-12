import { useDeviceType } from "@/hooks/use-device-type"
import Section from "../layout/section";
import Container from "../layout/container";
import Gallery from "../project-gallery/gallery";
import SectionHeader from "../layout/section-header";
import { Button } from "../ui/button";
import { describe } from "node:test";
import SmallGallery from "../project-gallery/small-gallery";





export default function Work() {
  const device = useDeviceType();

  return (
    <Container>
      <Section id="projects" className="flex flex-col gap-16">
        <SectionHeader title={"Selected Work"} subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications" className="max-w-[600px]" direction="justify-start" />
        {
          device === "desktop" ? (
            <Gallery projects={projects} />
          ) : (
            <SmallGallery projects={projects} />
          )
        }
        <div className="flex justify-center">
          <Button size={'lg'} className="text-lg rounded-full px-8">
            View All
          </Button>
        </div>
      </Section>
    </Container>
  )
}


const projects = [
  { title: "Case Cobra", label: "Web Design & Development", img: '/images/test.jpg', description: "A modern, high-performance web application built with Next.js and Tailwind CSS.", id: 1 },
  { title: "Al-Pukhary", label: "Web Design & Development", img: '/images/test.jpg', description: "A modern, high-performance web application built with Next.js and Tailwind CSS.", id: 2 },
  { title: "Case Cobra", label: "Web Design & Development", img: '/images/test.jpg', description: "A modern, high-performance web application built with Next.js and Tailwind CSS.", id: 3 },
  { title: "Al-Pukhary", label: "Web Design & Development", img: '/images/test.jpg', description: "A modern, high-performance web application built with Next.js and Tailwind CSS.", id: 4 },
]
