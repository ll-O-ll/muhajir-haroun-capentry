"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import { ServiceCard } from "@/components/ServiceCard"
import { ProjectCard } from "@/components/ProjectCard"
import { CarouselProjectCard } from "@/components/CarouselProjectCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Hammer, Ruler, Pencil, HardHat, Truck, Home, Instagram } from "lucide-react"
import { IslamicPattern } from "@/components/IslamicPattern"

export default function LandingPage() {
  const { t, dir } = useLanguage()

  const processIcons = [
    Home, // On Site
    Pencil, // Planning
    Ruler, // AutoCAD
    Hammer, // Production
    Truck, // Delivery
    HardHat // Mounting
  ];

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-secondary-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <IslamicPattern className="opacity-[0.03] text-primary" />
        <div className="z-10 text-center max-w-5xl mx-auto space-y-8">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight uppercase leading-[0.9] text-primary dark:text-secondary">
              {t.hero.title}
            </h1>
            {/* Decorative Elements around Title */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-secondary/50 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-secondary/50 hidden md:block" />
          </div>

          <p className="text-xl md:text-3xl font-light text-muted-foreground tracking-wide font-heading">
            {t.hero.subtitle}
          </p>
          <div className="pt-12">
            <Button asChild size="lg" className="rounded-none px-10 h-14 text-xl uppercase tracking-wider font-heading bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 border border-transparent hover:border-secondary">
              <Link href="#services">
                {t.hero.cta}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 border-t border-secondary/20 relative">
        <IslamicPattern className="opacity-[0.02]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <ServiceCard
              title={t.services.do_it.title}
              description={t.services.do_it.desc}
            />
            <ServiceCard
              title={t.services.cut_it.title}
              description={t.services.cut_it.desc}
            />
            <ServiceCard
              title={t.services.hang_it.title}
              description={t.services.hang_it.desc}
            />
            <ServiceCard
              title={t.services.collab.title}
              description={t.services.collab.desc}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground overflow-hidden relative">
        <IslamicPattern className="opacity-10 text-secondary" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-20 text-center text-secondary">
            {t.process.title}
          </h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary/30 -translate-y-1/2"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
              {t.process.steps.map((step, index) => {
                const Icon = processIcons[index % processIcons.length];
                return (
                  <div key={index} className="flex flex-col items-center text-center space-y-6 group">
                    <div className="w-20 h-20 bg-background border-2 border-secondary flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 relative">
                      <div className="absolute inset-1 border border-secondary/20 pointer-events-none" />
                      <Icon className="w-8 h-8 text-primary group-hover:-rotate-45 transition-transform duration-500" />
                    </div>
                    <div className="font-heading uppercase text-sm tracking-widest text-secondary font-bold">{step}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Products */}
      <section id="products" className="py-24 px-4 bg-background relative">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-muted pb-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-foreground">
              Selected Work
            </h2>
            <Link href="#" className="flex items-center gap-2 group text-secondary hover:text-primary transition-colors">
              <span className="uppercase tracking-widest text-sm font-bold">View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Guitar Shelf"
              category="Custom Furniture"
              imageSrc="/images/guitar-shelf.jpg"
            />
            <ProjectCard
              title="Book Stand"
              category="Accessories"
              imageSrc="/images/book-stand.jpg"
            />
            <CarouselProjectCard
              title="Modern Wardrobe"
              category="Custom Furniture"
              images={[
                "/images/wardrobe/muhajir-cabinet-2.PNG",
                "/images/wardrobe/wardrobe-book-cabinet-3.jpg",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 border-t border-secondary/20 px-4 bg-muted/30 relative overflow-hidden">
        <IslamicPattern className="opacity-[0.02]" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-2xl uppercase tracking-tight text-primary">
              DO IT CARPENTRY
            </div>
            <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide font-sans">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="https://www.instagram.com/honey_frames_furniture?igsh=eXV6ZnQwOWJlMHV6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors font-heading">
              <Instagram className="w-4 h-4" />
              Instagram
            </Link>
            <Link href="#" className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors font-heading">
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
