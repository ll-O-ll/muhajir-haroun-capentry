"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import Image from "next/image"
import DesignSpaceContents from "@/components/DesignSpaceContents"
import DesignObjectsContents from "@/components/DesignObjectsContents"
import ContactForm from "@/components/ContactForm"

export default function LandingPage() {
  const { dir, language } = useLanguage()

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-secondary-foreground pt-32 pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Intro Text Section */}
        <section className="max-w-3xl mx-auto space-y-8 text-center md:text-left mt-16 md:mt-24">
          {language === 'de' ? (
            <>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-foreground/90 font-serif">
                Als Tischler und Raumgestalter im Reisegewerbe sind wir ständig unterwegs, möchten jedoch jederzeit für unsere Kunden erreichbar bleiben. Deshalb präsentieren wir uns auf dieser Website, die auch Interessierten einen Einblick in die Qualität unserer Arbeit bietet.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-foreground/90 font-serif">
                Wir möchten betonen, dass unsere Website nicht auf den Verkauf ausgerichtet ist. Vielmehr legen wir den Fokus auf Kundenservice, Informationen und Qualitätssicherung.
              </p>

              <div className="pt-12 pb-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-primary">Muhajir Haron</h2>
              </div>

              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground italic font-serif">
                Im traditionellen Reisegewerbe gemäß § 55 GewO akquiriere ich meine Kundschaft aus eigener Initiative. Diese Internetpräsenz dient ausschließlich der Imagepflege und informiert begleitend über die Besonderheiten des Reisegewerbes.
              </p>
            </>
          ) : (
            <>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-foreground/90 font-serif">
                As carpenters and interior designers in the itinerant trade, we are constantly on the move, but want to remain accessible to our customers at all times. That is why we are presenting ourselves on this website, which also offers interested parties an insight into the quality of our work.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-foreground/90 font-serif">
                We would like to emphasize that our website is not geared towards sales. Rather, we focus on customer service, information, and quality assurance.
              </p>

              <div className="pt-12 pb-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-primary">Muhajir Haron</h2>
              </div>

              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground italic font-serif">
                In the traditional itinerant trade in accordance with § 55 GewO, I acquire my customers on my own initiative. This website is exclusively for image building and provides accompanying information on the special features of the itinerant trade.
              </p>
            </>
          )}
        </section>

        {/* 3 Images Section border-t border-secondary/20 pt-24 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16 mt-16">
          {/* DESIGN SPACE */}
          <div className="group space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
              <Image
                src="/images/sketches/sketch-1.PNG"
                alt="Design Space"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-center font-heading font-bold uppercase tracking-[0.2em] text-lg text-primary">
              Design Space
            </h3>
          </div>

          {/* DESIGN OBJECT */}
          <div id="products" className="group space-y-6 flex flex-col justify-end">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
              <Image
                src="/images/creative-objects/moodboard-2.PNG"
                alt="Design Object"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-center font-heading font-bold uppercase tracking-[0.2em] text-lg text-primary">
              Design Object
            </h3>
          </div>

          {/* COLLABORATE */}
          <div className="group space-y-6 flex flex-col justify-end">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
              <Image
                src="/images/creative-objects/moodboard-1.PNG"
                alt="Collaborate"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-center font-heading font-bold uppercase tracking-[0.2em] text-lg text-primary">
              Collaborate
            </h3>
          </div>
        </section>

        {/* Dynamic Design Space Backend Content */}
        <div id="design-space" className="pt-24 space-y-12 scroll-mt-24">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-primary">Design Space</h2>
            <div className="w-12 h-1 bg-secondary mx-auto"></div>
          </div>
          <DesignSpaceContents />
        </div>

        {/* Dynamic Design Object Backend Content */}
        <div id="design-objects" className="pt-24 space-y-12 scroll-mt-24">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-primary">Design Objects</h2>
            <div className="w-12 h-1 bg-secondary mx-auto"></div>
          </div>
          <DesignObjectsContents />
        </div>

        {/* Collaborate Text Section */}
        <section id="collaborate" className="max-w-3xl mx-auto space-y-12 py-24 border-t border-secondary/10 scroll-mt-24">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-primary">Collaborate</h2>
            <div className="w-12 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="space-y-8 text-xl md:text-2xl leading-relaxed font-light text-foreground/90 font-serif text-center md:text-left">
            {language === 'de' ? (
              <>
                <p>
                  Bei Raumwerk-Haron glauben wir an die Kraft der Zusammenarbeit, um Kreativität und Gemeinschaft zu fördern. Wir sind bestrebt, starke Beziehungen zu anderen Künstlern aufzubauen, um unsere Fähigkeiten und Erfahrungen zu teilen.
                </p>
                <p>
                  Indem wir unsere Fähigkeiten und Ideen kombinieren, können wir einzigartige, hochwertige Stücke schaffen, die inspirieren und begeistern.
                </p>
                <p>
                  Unser Ziel ist es, eine unterstützende Plattform zu schaffen, auf der Kunsthandwerker mit mir zusammenarbeiten und sich entfalten können. Durch die Zusammenarbeit können wir nicht nur inspirierende, hochwertige Kreationen schaffen, sondern uns auch gegenseitig kommerziell helfen, indem wir die Unternehmungen des anderen fördern und unterstützen.
                </p>
                <p className="font-medium text-primary pt-4 uppercase tracking-widest text-base font-heading">
                  Begleiten Sie uns auf dieser Reise, um Kreativität, Gemeinschaft und gegenseitiges Wachstum zu fördern!
                </p>
              </>
            ) : (
              <>
                <p>
                  At Raumwerk-Haron we believe in the power of collaboration to foster creativity and community. We are eager to build strong relationships with fellow artists to share our skills and experiences.
                </p>
                <p>
                  By combining our skills and ideas, we can create unique, high-quality pieces that inspire and delight.
                </p>
                <p>
                  Our goal is to create a supportive platform where artisans can work together with me and expand. By collaborating, we can not only generate inspiring, high-quality creations but also help one another commercially by promoting and supporting each other&apos;s ventures.
                </p>
                <p className="font-medium text-primary pt-4 uppercase tracking-widest text-base font-heading">
                  Join us in this journey to cultivate creativity, community, and mutual growth!
                </p>
              </>
            )}
            <p className="pt-2">
              <a href="mailto:info@raumwerkharon.de" className="text-base font-heading uppercase tracking-widest text-secondary hover:text-primary transition-colors not-italic">
                Email us: info@raumwerkharon.de
              </a>
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>
    </div>
  )
}
