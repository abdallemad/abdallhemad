import Link from "next/link";
import { useRef } from "react";
import RobotScene from "../3d-models/footer-robot";
import { FooterCurve } from "../global-animations/curve";
import { Button } from "../ui/button";
import { useDeviceType } from "@/hooks/use-device-type";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const device = useDeviceType()

  const socialLinks = [
    { name: 'Github', href: 'https://github.com/abdallaemad' },
    { name: 'Linkedin', href: 'https://linkedin.com/in/abdallaemad' },
    { name: 'Whatsapp', href: 'https://wa.me/201557464608' },
    { name: 'Email', href: 'mailto:abdallaemad1.3.2.0.0.5@gmail.com' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer ref={containerRef} id="contact" className="lg:h-screen  lg:pt-[120px] lg:pb-1 py-12 px-6  flex flex-col justify-between gap-8 border-t relative overflow-hidden">
      {typeof window !== 'undefined' && <FooterCurve containerRef={containerRef} />}
      {device === 'desktop' && <RobotScene />}
      <div className="flex lg:flex-row flex-col gap-12 items-start jusitfy-between w-full">
        <div className="flex items-start flex-1 gap-5">
          <div className="flex flex-col gap-3">
            <h5 className="font-bold">SOCIALS</h5>
            <ul className="space-y-3">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-bold">LINKS</h5>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-bold">LOCATED TIME</h5>
            <p className="text-muted-foreground">Cairo, Egypt</p>
            <p className="text-muted-foreground">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-bold">VERSION</h5>
            <p className="text-muted-foreground">2026 @ Edition</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full lg:w-fit items-center justify-center gap-3">
          <a href="tel:+201557464608" className="w-full lg:w-fit" aria-label="Call Abdalla Emad">
            <Button variant={'outline'} className="rounded-full px-6 py-8 w-full group">
              <span className="group-hover:translate-x-1 transition-transform">+20 1557464608</span>
            </Button>
          </a>
          <a href="mailto:abdallaemad1.3.2.0.0.5@gmail.com" className="w-full lg:w-fit" aria-label="Email Abdalla Emad">
            <Button variant={'outline'} className="rounded-full px-6 py-8 w-full group">
              <span className="group-hover:translate-x-1 transition-transform">abdallaemad1.3.2.0.0.5@gmail.com</span>
            </Button>
          </a>
        </div>
      </div>
      <p className="text-center text-5xl lg:text-[200px] font-black opacity-10 pointer-events-none select-none">ABDALLA</p>
    </footer>
  )
}