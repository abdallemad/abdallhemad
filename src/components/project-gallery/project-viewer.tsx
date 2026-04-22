
import { AnimatePresence, motion } from 'motion/react'
import { PROJECTS } from '@/lib/data'
import Image from 'next/image'
import { SCALE_UP_ANIMATION } from '../global-animations/variants'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

type GalleryViewerProps = {

  modal: { active: boolean, index: number }
}

export default function GalleryViewer({ modal }: GalleryViewerProps) {

  const { active, index } = modal
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })

    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

    const move = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      const { scrollY } = window
      xMoveContainer(pageX)
      yMoveContainer(pageY - scrollY)
      xMoveCursor(pageX)
      yMoveCursor(pageY - scrollY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY - scrollY)
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])
  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={SCALE_UP_ANIMATION}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="fixed -translate-x-1/2 -translate-y-1/2  size-[350px] bg-green-500 pointer-events-none overflow-hidden">

        <motion.div
          className="w-full h-full flex flex-col"
          animate={{ translateY: `-${index * 100}%` }}
          transition={{ type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className='h-full shrink-0 flex items-center justify-center'
              style={{ backgroundColor: project.bgColor }}>
              <Image
                src={`/images/${project.img}`}
                alt={project.title}
                width={300}
                height={0}
                className="object-cover h-auto"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={"fixed -translate-x-1/2 -translate-y-1/2 size-24 rounded-full bg-primary pointer-events-none z-40"} variants={SCALE_UP_ANIMATION}
        initial="initial"
        animate={active ? "enter" : "closed"} />
      <motion.div
        ref={cursorLabel}
        className={"fixed -translate-x-1/2 -translate-y-1/2 text-primary-foreground pointer-events-none z-50"}
        variants={SCALE_UP_ANIMATION}
        initial="initial"
        animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  )
}