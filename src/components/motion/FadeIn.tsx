import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "section"
}

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
})

export function FadeIn({ children, delay = 0, y = 24, className, as = "div" }: FadeInProps) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={makeVariants(y)}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}

export function Stagger({
  children,
  className,
  delayStep = 0.08,
}: {
  children: ReactNode
  className?: string
  delayStep?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: delayStep } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
