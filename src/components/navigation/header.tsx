import { useDeviceType } from "@/hooks/use-device-type";
import { Button } from "../ui/button";
import Menu from "./menu";
import { LINKS } from "@/lib/data";


export default function Header() {

  const device = useDeviceType();

  return (
    <header className="px-4 md:px-12 z-20">
      <nav className="flex items-center justify-between py-2 lg:py-8">
        <div className="heading-5">Abdalla Emad.</div>
        {device === 'mobile' ? (
          <Menu />
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
    </header>
  )
}