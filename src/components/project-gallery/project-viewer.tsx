
import { AnimatePresence, motion, MotionValue, useMotionValue, useSpring } from 'motion/react'
import { RefObject } from 'react';


type GalleryViewerProps = {
  x: MotionValue<number>
  y: MotionValue<number>
  active: boolean
}

export default function GalleryViewer({ x, y, active }: GalleryViewerProps) {

  const animatedX = useSpring(x, { stiffness: 100, damping: 30 })
  const animatedY = useSpring(y, { stiffness: 100, damping: 30 })

  const animatedX2 = useSpring(x, { stiffness: 100, damping: 22 })
  const animatedY2 = useSpring(y, { stiffness: 100, damping: 22 })

  const animatedX3 = useSpring(x, { stiffness: 100, damping: 20 })
  const animatedY3 = useSpring(y, { stiffness: 100, damping: 20 })
  return (
    <AnimatePresence mode='wait'>
      {active && (
        <>
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 size-[350px] bg-green-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ x: animatedX, y: animatedY }}>

          </motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 size-[100px] rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ x: animatedX2, y: animatedY2 }}>

          </motion.div>
          <motion.span
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 rounded-ful text-primary-foreground -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ x: animatedX3, y: animatedY3 }}>
            View
          </motion.span>
        </>
      )}
    </AnimatePresence>
  )
}