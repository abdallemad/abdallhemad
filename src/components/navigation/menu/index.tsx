import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";




export default function Menu() {

  return (
    <>
      <Button size={'icon-lg'} className="rounded-2xl size-14">
        <MenuIcon className="size-6"/>
      </Button>
    </>
  )
}