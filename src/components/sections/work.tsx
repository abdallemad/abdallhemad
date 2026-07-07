import { useDeviceType } from "@/hooks/use-device-type";
import { PROJECTS } from "@/lib/data";
import Container from "../layout/container";
import Section from "../layout/section";
import SectionHeader from "../layout/section-header";
import Gallery from "../project-gallery/gallery";
import SmallGallery from "../project-gallery/small-gallery";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Work() {
  const device = useDeviceType();

  // Filter projects to only show featured ones on the landing page
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <Container>
      <Section id="projects" className="flex flex-col gap-16">
        <SectionHeader 
          title={"Selected Work"} 
          subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications to interactive experiences." 
          className="max-w-[600px]" 
          direction="justify-start" 
        />
        {
          device === "desktop" ? (
            <Gallery projects={featuredProjects} />
          ) : (
            <SmallGallery projects={featuredProjects} />
          )
        }
        <div className="flex justify-center">
          <Link href="/work" passHref legacyBehavior>
            <Button size={'lg'} className="cursor-pointer">
              View All
            </Button>
          </Link>
        </div>
      </Section>
    </Container>
  )
}

