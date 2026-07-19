import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs, siteConfig } from "@/lib/data"
import { photos } from "@/lib/photos"

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Veelgestelde vragen."
        description="Alles wat eerstelingen ons vragen voor hun eerste sprong — en een aantal zaken die ervaren springers ook willen weten."
        image={photos.canopyFormation}
        size="compact"
      />

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-14 rounded-2xl bg-sky-light p-8 text-center">
              <h2 className="font-display text-xl font-semibold text-navy">
                Nog een vraag?
              </h2>
              <p className="mt-2 text-sm text-navy/70">
                Ons secretariaat helpt je graag verder — bel, mail, of neem
                contact op via de contactpagina.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="outline">
                  <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
                </Button>
                <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90">
                  <Link to="/contact">
                    Contacteer ons
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
