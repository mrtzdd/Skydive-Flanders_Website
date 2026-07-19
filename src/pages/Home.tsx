import { Hero } from "@/components/home/Hero"
import { ConditionsWidget } from "@/components/home/ConditionsWidget"
import { About } from "@/components/home/About"
import { QuoteSection } from "@/components/home/QuoteSection"
import { Services } from "@/components/home/Services"
import { AircraftTeaser } from "@/components/home/AircraftTeaser"
import { TrainingSafetyTeaser } from "@/components/home/TrainingSafetyTeaser"
import { Testimonials } from "@/components/home/Testimonials"
import { NewsEvents } from "@/components/home/NewsEvents"
import { FinalCta } from "@/components/home/FinalCta"

export default function Home() {
  return (
    <>
      <Hero />
      <ConditionsWidget />
      <About />
      <QuoteSection />
      <Services />
      <AircraftTeaser />
      <TrainingSafetyTeaser />
      <Testimonials />
      <NewsEvents />
      <FinalCta />
    </>
  )
}
