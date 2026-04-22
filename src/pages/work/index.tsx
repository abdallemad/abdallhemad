import { useDeviceType } from "@/hooks/use-device-type";
import { PROJECTS } from "@/lib/data";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import Gallery from "@/components/project-gallery/gallery";
import SmallGallery from "@/components/project-gallery/small-gallery";
import { Button } from "@/components/ui/button";





export default function Work() {
  const device = useDeviceType();

  return (
    <Container>
      <Section id="projects" className="flex flex-col gap-16">
        <SectionHeader title={"Selected Work"} subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications" className="max-w-[600px]" direction="justify-start" />
        {
          device === "desktop" ? (
            <Gallery projects={PROJECTS} />
          ) : (
            <SmallGallery projects={PROJECTS} />
          )
        }
        <div className="flex justify-center">
          <Button size={'lg'} className="">
            View All
          </Button>
        </div>
      </Section>
    </Container>
  )
}
