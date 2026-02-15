"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACTS, getWhatsAppUrl } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/animated-section";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-dark text-white overflow-hidden">
      <Image
        src="/images/abmael.jpg"
        alt="Futevôlei Maranhão"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/60" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-vermelho/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-azul/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <AnimatedSection>
              <p className="text-dourado font-semibold tracking-wider uppercase text-sm">
                Futevôlei em São Luís, Maranhão
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Futevôlei{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado to-yellow-400">
                  Maranhão
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-lg">
                Professor Gutenberg Vidal. Aulas, treinos e o melhor do
                futevôlei na ilha.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-vermelho hover:bg-vermelho/90 text-white shadow-lg shadow-vermelho/25 transition-[background-color,box-shadow,transform] hover:shadow-vermelho/40 hover:scale-105"
                  asChild
                >
                  <a
                    href={getWhatsAppUrl(WHATSAPP_CONTACTS[0].phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Agende sua aula
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-dourado text-dourado bg-transparent hover:bg-dourado/10 transition-[background-color,transform] hover:scale-105"
                  asChild
                >
                  <a href="#sobre">Saiba mais</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.2}
            direction="right"
            className="order-1 lg:order-2"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/foto-campeonato.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/images/gutho-video.mp4" type="video/mp4" />
              </video>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
