import { useDeviceType } from "@/hooks/use-device-type";
import { Button } from "../ui/button";
import Menu from "./menu";
import { LINKS } from "@/lib/data";
import { MenuIcon } from "lucide-react";


export default function Header() {

  const device = useDeviceType();

  return (
    <header className="px-4 md:px-12 z-20">
      <nav className="flex items-center justify-between py-2 lg:py-8">
        <div className="heading-5">Abdalla Emad.</div>
        {device === 'mobile' ? (
          <Button className="rounded-2xl size-14 z-90">
            <MenuIcon className="size-6" />
          </Button>
        ) : (
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-6">
              {LINKS.map(link => (
                <>
                  {link.name === 'Contact' ? (
                    <Button className="">{link.name}</Button>
                  ) : (
                    <p>{link.name}</p>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
      </nav>
      <Menu isOpen={false} />
    </header>
  )
}