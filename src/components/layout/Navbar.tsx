import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logoSrc } from "@/lib/photos"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/reserveren", label: "Reserveren" },
  { to: "/prijslijst", label: "Prijslijst" },
  { to: "/opleiding", label: "Opleiding" },
  { to: "/veiligheid", label: "Veiligheid" },
  { to: "/team", label: "Team" },
  { to: "/galerij", label: "Galerij" },
  { to: "/weer", label: "Meteo" },
  { to: "/agenda", label: "Agenda" },
  { to: "/documenten", label: "Documenten" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/vliegtuig", label: "Vliegtuig" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || open

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="Skydive Flanders" className="h-11 w-auto" />
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  solid ? "text-navy/70 hover:text-navy" : "text-white/80 hover:text-white",
                  isActive && (solid ? "text-navy" : "text-white")
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Button
            asChild
            variant={solid ? "outline" : "outline"}
            size="sm"
            className={cn(!solid && "border-white/40 text-white hover:bg-white hover:text-navy")}
          >
            <Link to="/opleiding">Ontdek de Opleiding</Link>
          </Button>
          <Button asChild size="sm" className="bg-cta text-cta-foreground hover:bg-cta/90">
            <Link to="/reserveren">Reserveer Nu</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex size-10 items-center justify-center rounded-full xl:hidden",
            solid ? "text-navy" : "text-white"
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden bg-white xl:hidden"
          >
            <div className="container-page flex flex-col gap-1 pb-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-3 text-base font-medium text-navy/80",
                      isActive && "bg-sky-light text-navy"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button asChild variant="outline" size="lg">
                  <Link to="/opleiding">Ontdek de Opleiding</Link>
                </Button>
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90">
                  <Link to="/reserveren">Reserveer Nu</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
