import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroVideoBackground } from "@/components/home/HeroVideoBackground"
import { siteConfig } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-navy">
      <HeroVideoBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent" />

      <div className="container-page relative z-10 pb-24 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-light"
        >
          {siteConfig.location} · België
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] text-white md:text-7xl"
        >
          {siteConfig.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-xl text-balance text-lg text-white/85 md:text-xl"
        >
          Of het nu je allereerste tandemsprong is, je AFF-opleiding, of je al
          een gebrevetteerde skydiver bent — Skydive Flanders verwelkomt je op
          een van de meest actieve en gezelligste dropzones van België.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-cta text-cta-foreground hover:bg-cta/90"
          >
            <Link to="/reserveren">
              Reserveer Nu
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-navy"
          >
            <Link to="/opleiding">Ontdek de Opleiding</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/70"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
