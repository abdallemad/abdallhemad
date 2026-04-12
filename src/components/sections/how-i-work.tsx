
import { useDeviceType } from "@/hooks/use-device-type";
import Container from "../layout/container";
import Section from "../layout/section";
import SectionHeader from "../layout/section-header";
import ProcessStage from "../ui/process-stage";



export default function HowIWork() {

  const device = useDeviceType();

  return (
    <>
      <Container>
        <Section>
          <SectionHeader title="How I Work" subTitle="Here’s a collection of projects I’ve built, ranging from full-scale web applications" className="max-w-[600px] mx-auto text-center mb-12" />
          {device === 'desktop' ? (
            <div>
              {/* STEP 1  */}
              <div className="w-full grid grid-cols-2 -gap-2 py-42 relative">
                <div className="translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="right" />
                </div>
                <div className="col-span-1"></div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-1/2 -z-10" />
              </div>

              {/* STEP 2  */}
              <div className="w-full grid grid-cols-2 -gap-2 py-42 relative">
                <div className="col-span-1"></div>
                <div className="-translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="left" />
                </div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-1/2 -z-10" />
              </div>

              {/* STEP 3  */}
              <div className="w-full grid grid-cols-2 -gap-2 py-42 relative">
                <div className="translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="right" />
                </div>
                <div className="col-span-1"></div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-1/2 -z-10" />
              </div>
              {/* STEP 4  */}
              <div className="w-full grid grid-cols-2 -gap-2 py-42 relative">
                <div className="col-span-1"></div>
                <div className="-translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="left" />
                </div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-1/2 -z-10" />
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1  */}
              <div className="w-full py-20 relative">
                <div className="-translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="left" />
                </div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-[0.5px] -z-10" />
              </div>
              {/* STEP 2  */}
              <div className="w-full py-20 relative">
                <div className="-translate-x-2">
                  <ProcessStage title="Planning" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={2} direction="left" />
                </div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-[0.5px] -z-10" />
              </div>
              {/* STEP 2  */}
              <div className="w-full py-20 relative">
                <div className="-translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="left" />
                </div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-[0.5px] -z-10" />
              </div>
              {/* STEP 2  */}
              <div className="w-full py-20 relative">
                <div className="-translate-x-2">
                  <ProcessStage title="Discovery" description="I build modern, high-performance web applications with a focus on clean architecture and thoughtful UI/UX." step={1} direction="left" />
                </div>
                <div className="absolute inset-y-0 w-px h-full bg-muted-foreground left-[0.5px] -z-10" />
              </div>
            </div>
          )}
        </Section>
      </Container >

      <div className=" my-24 py-8 bg-primary text-primary-foreground overflow-x-hidden">
        <p className="hero-heading text-nowrap -translate-x-12">Full Stack Developer - Abdalla Emad Full Stack Developer - Abdalla Emad</p>
      </div>
    </>
  )

}