import ProjectCard from "../ui/cards/project-card";



type SmallGalleryProps = {
  projects: { title: string; label: string; img: string, description: string }[];
}

export default function SmallGallery({ projects }: SmallGalleryProps) {

  return (
    <ul className="grid md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard title={project.title} label={project.label} image={project.img} description={project.description} link="#" />
        </li>
      ))}
    </ul>
  )
}