
import {
  Card,
  CardContent,
  CardDescription
} from "@/components/ui/cards/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";


type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  label: string;
  link: string;
}

export default function ProjectCard({ title, image, description, label, link }: ProjectCardProps) {
  return (
    <Card className="border-accent border pt-0">
      <figure className="relative min-h-48">
        <Image src={`/images/${image}`} alt={title} fill className="w-full h-full object-cover" />
      </figure>
      <CardContent className="p-2">
        <p className="uppercase text-muted-foreground mb-3">{label}</p>
        <div className="flex flex-col gap-2">
          <h4 className="heading-4">{title}</h4>
          <CardDescription>{description}</CardDescription>
        </div>

        <div className="h-px bg-muted-foreground my-4"></div>

        <div className="flex justify-between items-center pr-4">
          <Button  className="text-muted-foreground">
            View Project
          </Button>
          <ArrowRight className="w-4 h-4 -rotate-45" />
        </div>
      </CardContent>
    </Card>
  )
}
