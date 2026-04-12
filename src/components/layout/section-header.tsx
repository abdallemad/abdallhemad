import { motion, useInView } from 'motion/react'
import { CONATINER_SLIDE_UP_HEADING, SLIDE_UP } from '../global-animations/variants'
import { useRef } from 'react'

type SectionHeaderProps = {
  title: string;
  subTitle?: string;
  className?: string;
  direction?: 'justify-start' | 'justify-center';
}

export default function SectionHeader({ title, subTitle, className, direction = 'justify-center' }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 1, once: true })

  return (
    <div ref={ref} className={` ${className}`}>
      <motion.h2
        variants={CONATINER_SLIDE_UP_HEADING}
        initial="initial"
        animate={inView ? "open" : "close"}
        className={`heading-2 flex flex-wrap gap-2 ${direction} overflow-hidden`}>
        {title.split(" ").map((word, i) => (
          <span key={i} className="overflow-hidden block">
            <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      <motion.p
        variants={CONATINER_SLIDE_UP_HEADING}
        initial="initial"
        animate={inView ? "open" : "close"}
        className={`text-muted-foreground flex flex-wrap gap-2 ${direction} overflow-hidden`}>
        {subTitle?.split(" ").map((word, i) => (
          <span key={i} className="overflow-hidden block">
            <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
    </div>
  )
}