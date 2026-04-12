


type ProjectGalleryItemProps = {
  title: string;
  label: string;
  id: number;
}


export default function ProjectGalleryItem({ title, label, id }: ProjectGalleryItemProps) {
  return (
    <li className="group relative border-b hover:cursor-pointer">
      <div className="flex items-center justify-between w-full py-10 px-2 group-hover:px-8 transition-all duration-300">
        <h1 className="text-5xl xl:text-7xl font-regular uppercase group-hover:text-foreground/50 transition-all duration-300">{title}</h1>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </li>
  )
}