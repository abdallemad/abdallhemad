import { useDeviceType } from "@/hooks/use-device-type";
import { Button } from "../ui/button";
import Menu from "./menu";


export default function Header() {

  const device = useDeviceType();

  return (
    <header className="px-4 md:px-12">
      <nav className="flex items-center justify-between py-2 lg:py-8">
        <div className="heading-5">Abdalla Emad.</div>
        {device === 'mobile' ? (
          <Menu />
        ) : (
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-6">
              <p>Home</p>
              <p>About</p>
              <p>Projects</p>
            </div>
            <Button className="rounded-full px-5 py-5 text-base">Contact</Button>
          </div>
        )}
      </nav>
    </header>
  )
}