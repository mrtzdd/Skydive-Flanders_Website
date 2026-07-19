import { useRef, useState } from "react"
import { Megaphone, MegaphoneOff } from "lucide-react"

// Echte promovideo van Skydive Flanders (2018): https://youtu.be/PeknYxpE_sI
const VIDEO_ID = "PeknYxpE_sI"

export function HeroVideoBackground() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [muted, setMuted] = useState(true)

  const postCommand = (func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    )
  }

  const toggleMute = () => {
    if (muted) {
      postCommand("unMute")
    } else {
      postCommand("mute")
    }
    setMuted((m) => !m)
  }

  const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=${window.location.origin}`

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      <iframe
        ref={iframeRef}
        src={src}
        title="Skydive Flanders — promovideo"
        allow="autoplay; encrypted-media"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Geluid aanzetten" : "Geluid uitzetten"}
        className="absolute bottom-6 right-6 z-20 flex size-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        {muted ? (
          <MegaphoneOff className="size-5" />
        ) : (
          <Megaphone className="size-5" />
        )}
      </button>
    </div>
  )
}
