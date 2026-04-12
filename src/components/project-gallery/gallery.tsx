import { MouseEventHandler, useEffect, useRef, useState } from "react";
import ProjectGalleryItem from "./project-gallery-item";
import GalleryViewer from "./project-viewer";
import { useMotionValue } from "motion/react";

type GalleryProps = {
  projects: { label: string, title: string, id: number }[]
}


export default function Gallery({ projects }: GalleryProps) {
  const containerRef = useRef<HTMLUListElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseRef = useRef({ x: 0, y: 0 });

  const [active, setActive] = useState(false);

  const updatePosition = () => {
    if (!containerRef.current) return;

    const { top, left } = containerRef.current.getBoundingClientRect();

    x.set(mouseRef.current.x - left);
    y.set(mouseRef.current.y - top);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    mouseRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    updatePosition();
  };

  useEffect(() => {
    const handleScroll = () => {

      updatePosition();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul
      className="flex flex-col relative"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {projects.map((project, index) => (
        <ProjectGalleryItem
          key={index}
          title={project.title}
          label={project.label}
          id={project.id}
        />
      ))}

      <GalleryViewer x={x} y={y} active={active} />
    </ul>
  );
}