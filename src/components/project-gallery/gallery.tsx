import { MouseEventHandler, useEffect, useRef, useState } from "react";
import ProjectGalleryItem from "./project-gallery-item";
import GalleryViewer from "./project-viewer";
import { useMotionValue } from "motion/react";

type GalleryProps = {
  projects: { label: string, title: string, id: number }[]
}


export default function Gallery({ projects }: GalleryProps) {

  const [modal, setModal] = useState({ active: false, index: 0 });



  return (
    <ul
      className="flex flex-col"
    >
      {projects.map((project, index) => (
        <ProjectGalleryItem
          key={index}
          index={index}
          title={project.title}
          label={project.label}
          id={project.id}
          setModal={setModal}
        />
      ))}

      <GalleryViewer modal={modal} />
    </ul>
  );
}