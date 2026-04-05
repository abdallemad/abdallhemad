import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <Container className="relative">
      <Section>
        <SectionHeader
          title="About Me"
          subTitle="I'm a full stack developer with 2 years of experience in web development."
        />
        <Button size={'lg'} className="rounded-full px-8">
          Download CV
        </Button>
      </Section>
    </Container>
  );
}
