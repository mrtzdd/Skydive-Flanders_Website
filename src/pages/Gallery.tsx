import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { FadeIn } from "@/components/motion/FadeIn"
import { cn } from "@/lib/utils"
import { galleryItems, type GalleryCategory } from "@/lib/data"
import { photos } from "@/lib/photos"

const categories: (GalleryCategory | "Alles")[] = [
  "Alles",
  "Vliegtuig",
  "Skydiving",
  "Opleiding",
  "Community",
  "Events",
  "Zonsondergang",
]

const spanClass: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
}

export default function Gallery() {
  const [active, setActive] = useState<(GalleryCategory | "Alles")>("Alles")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      active === "Alles"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  )

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((item) => item.id === id)
    setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)
  const step = (delta: number) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev
      const next = (prev + delta + filtered.length) % filtered.length
      return next
    })
  }

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      <PageHero
        eyebrow="Galerij"
        title="De dropzone, in beeld."
        description="Vliegtuig, vrije val, opleiding, community en landingen tijdens het gouden uur — een kijkje in het leven op Dropzone Moorsele."
        image={photos.bigway}
        size="compact"
      />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "border-navy bg-navy text-white"
                  : "border-border bg-white text-navy/70 hover:border-navy/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => {
            return (
              <FadeIn
                key={item.id}
                delay={(i % 6) * 0.05}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(item.id)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className={cn(
                      "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                      spanClass[item.span ?? ""] ?? "aspect-square"
                    )}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="p-4 text-left text-sm text-white">
                      {item.caption}
                    </p>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-navy backdrop-blur-sm">
                    {item.category}
                  </span>
                </button>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Sluiten"
              onClick={closeLightbox}
              className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Vorige foto"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Volgende foto"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-6"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl"
            >
              <img
                src={activeItem.image}
                alt={activeItem.caption}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {activeItem.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
