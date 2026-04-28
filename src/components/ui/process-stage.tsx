import { useInView, motion } from "motion/react";
import { useRef } from "react";
import { CONATINER_SLIDE_UP_HEADING, SLIDE_UP } from '../global-animations/variants'

type ProcessStageProps = {
  title: string;
  description: string;
  step: number;
  direction: "left" | "right";
}

export default function ProcessStage({ title, description, step, direction }: ProcessStageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 1 })
  return (
    <div ref={ref} className={`flex items-center gap-6 lg:gap-14 ${direction === "left" ? "flex-row" : "flex-row-reverse"}`}>
      <div className="size-4 rounded-full bg-primary shrink-0"></div>
      <div className={`flex flex-col gap-1 md:gap-2 max-w-[600px] ${direction === "left" ? "text-left" : "text-right"}`}>
        <motion.p
          variants={CONATINER_SLIDE_UP_HEADING}
          initial="initial"
          animate={inView ? "open" : "close"}
          className={`heading-4 uppercase text-muted-foreground flex ${direction === "left" ? "justify-start" : "justify-end"} overflow-hidden`}>
          {`step_${step}`.split("").map((word, i) => (
            <span key={i} className="overflow-hidden block">
              <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>
        <motion.p
          variants={CONATINER_SLIDE_UP_HEADING}
          initial="initial"
          animate={inView ? "open" : "close"}
          className={`heading-1 flex ${direction === "left" ? "justify-start" : "justify-end"} overflow-hidden`}>
          {title.split("").map((word, i) => (
            <span key={i} className="overflow-hidden block">
              <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block leading-[127%]">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>
        <motion.p
          variants={CONATINER_SLIDE_UP_HEADING}
          initial="initial"
          animate={inView ? "open" : "close"}
          className={`text-muted-foreground flex flex-wrap gap-x-[2px] ${direction === "left" ? "justify-start" : "justify-end"} overflow-hidden`}>
          {description.split(" ").map((word, i) => (
            <span key={i} className="overflow-hidden block">
              <motion.span transition={{ duration: 0.5 }} variants={SLIDE_UP} className="block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>
      </div>
    </div>
  )
}