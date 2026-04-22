
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react'
import { RefObject, useEffect, useRef, useState } from 'react'



export default function AboutCurve({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {

  const scroll = useScroll({ target: containerRef, offset: ["start end", "start 30%"] })
  const Qtranslation = useTransform(scroll.scrollYProgress, [0, 1], [350, 0])
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const path = useMotionTemplate`
   M0 350
   L${width} 350
   Q${width / 2} ${Qtranslation} 0 350
  `
  return (
    <div>
      <svg className="absolute inset-x-0 top-0 stroke-none h-[350px] fill-background z-30 w-full -translate-y-[350px]">
        <motion.path d={path}></motion.path>
      </svg>
    </div>
  )
}


export function FooterCurve({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const scroll = useScroll({ target: containerRef, offset: ["start 60%", "end end"] })
  const Qtranslation = useTransform(scroll.scrollYProgress, [0, 1], [300, 0])
  const height = useTransform(scroll.scrollYProgress, [0, 1], [300, 0])
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const path = useMotionTemplate`
    M0 0
    L${width} 0
    Q${width / 2} ${Qtranslation} 0 0
  `
  return (
    <div className=' absolute inset-x-0 -top-1 w-full z-50 flex flex-col pointer-events-none light'>
      <motion.div style={{ height }} className='w-full h-[300px] bg-background' />
      <svg className="stroke-none h-[300px] fill-background w-full">
        <motion.path d={path}></motion.path>
      </svg>
    </div>
  )
}