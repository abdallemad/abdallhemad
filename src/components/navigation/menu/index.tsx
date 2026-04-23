import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, LINKS } from "@/lib/data";



export default function Menu({ isOpen }: { isOpen: boolean }) {

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-x-0 bg-primary top-0 h-screen sm:h-fit z-50 flex flex-col justify-between px-4 lg:px-6 py-8 ">
            <div className="">
              <div className="border-b border-black pb-1 ">
                <h4 className="heading-4 uppercase text-black">navigation</h4>
              </div>
              <ul className="py-6 lg:py-12 flex flex-col gap-2">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                  <li className="hero-heading text-primary-foreground">HOME</li>
                  <li className="hero-heading text-primary-foreground">ABOUT</li>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                  <li className="hero-heading text-primary-foreground">WORK</li>
                  <li className="hero-heading text-primary-foreground">CONTACT</li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
              <div className="border-b border-black lg:border-none pb-1 ">
                <h4 className="heading-4 uppercase text-black">Socials <span className="hidden lg:inline">:</span></h4>
              </div>
              <ul className="flex items-center gap-2">
                {SOCIAL_LINKS.map(link => (
                  <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer" className="uppercase text-black heading-5">{link.name}</a>
                ))}
              </ul>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/25 z-40 backdrop-blur-xl" />
        </>
      )}
    </>
  )
}