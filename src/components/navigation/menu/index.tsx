import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, LINKS } from "@/lib/data";
import { AnimatePresence, motion } from "motion/react";
import { MENU_HEIGHT, TRANSLATE_UP_CHARS } from "@/components/global-animations/variants";
import { JSX } from "react";
import Link from "next/link";



export default function Menu({ isOpen }: { isOpen: boolean }) {
  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={TRANSLATE_UP_CHARS} initial="initial"
          animate="enter"
          exit="exit"
          className="inline-block overflow-hidden"
          key={char + i}>
          {char}
        </motion.span>
      )
    })
    return chars;
  }
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            variants={MENU_HEIGHT} initial="initial" animate="enter" exit="exit"
            className="fixed inset-x-0 bg-primary top-0 h-screen sm:h-fit z-50 overflow-hidden">
            <nav className="flex flex-col justify-between px-4 lg:px-6 py-8 ">
              <div className="">
                <div className="border-b border-black pb-1 ">
                  <h4 className="heading-4 uppercase text-black overflow-hidden">{getChars("navigation")}</h4>
                </div>
                <ul className="py-6 lg:py-12 flex flex-col gap-2">
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <Link href={'/'} className="hero-heading text-primary-foreground overflow-hidden">{getChars("HOME")}</Link>
                    <Link href={'/about'} className="hero-heading text-primary-foreground overflow-hidden">{getChars("ABOUT")}</Link>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <Link href={'/work'} className="hero-heading text-primary-foreground overflow-hidden">{getChars("WORK")}</Link>
                    <Link href={'/contact'} className="hero-heading text-primary-foreground overflow-hidden">{getChars("CONTACT")}</Link>
                  </div>
                </ul>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                <div className="border-b border-black lg:border-none pb-1 ">
                  <h4 className="heading-4 uppercase text-black overflow-hidden">{getChars("socials")}</h4>
                </div>
                <ul className="flex items-center gap-2">
                  {SOCIAL_LINKS.map(link => (
                    <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer" className="uppercase text-black heading-5 overflow-hidden">{getChars(link.name)}</a>
                  ))}
                </ul>
              </div>
            </nav>
          </motion.div>
          <motion.div
            variants={MENU_HEIGHT} initial="initial" animate="enter" exit="exit" className="fixed inset-0 bg-primary/25 z-40 backdrop-blur-xl" />
        </>
      )}
    </AnimatePresence>
  )
}