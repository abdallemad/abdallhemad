import { useDeviceType } from "@/hooks/use-device-type";
import { Button, buttonVariants } from "../ui/button";
import Menu from "./menu";
import { LINKS } from "@/lib/data";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from 'motion/react'
import Link from "next/link";
import Magnetic from "../global-animations/magnetic";

export default function Header() {

  const device = useDeviceType();
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="px-4 md:px-12 z-20">
      <nav className="flex items-center justify-between py-2 lg:py-8">
        <Link href={'/'} className="heading-5">Abdalla Emad.</Link>
        {device === 'mobile' ? (
          <Button className="rounded-2xl size-14 z-90" onClick={handleMenuClick}>
            <MenuIcon className="size-6" />
          </Button>
        ) : (
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-6">
              {LINKS.map(link => (
                <>
                  {link.name === 'Contact' ? (
                    <Link href={link.href} className={buttonVariants()}>{link.name}</Link>
                  ) : (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
      </nav>
      {device !== 'mobile' && (
        <MenuButton handleMenuClick={handleMenuClick} />
      )}
      <Menu isOpen={isOpen} />
    </header>
  )
}

function MenuButton({ handleMenuClick }: { handleMenuClick: () => void }) {
  const [showSidebarButton, setShowSidebarButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 330) setShowSidebarButton(true);
      else setShowSidebarButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Magnetic amount={4}>
      <motion.div
        variants={{ scaleup: { scale: 1 }, scaleDown: { scale: 0 } }}
        initial="scaleDown"
        animate={showSidebarButton ? 'scaleup' : 'scaleDown'}
        transition={{
          duration: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="z-90 fixed top-6 right-8"
      >
        <Button className="rounded-2xl size-14 " onClick={handleMenuClick}>
          <MenuIcon className="size-6" />
        </Button>
      </motion.div>
    </Magnetic>
  )
}