"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Award, Users, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="left">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/gutho.jpg"
                  alt="Professor Gutenberg Vidal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-dourado/30 -z-10" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <p className="text-vermelho font-semibold tracking-wider uppercase text-sm">
                Sobre o Professor
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Professor{" "}
                <span className="text-vermelho">Gutenberg Vidal</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-white/70 leading-relaxed text-lg">
                Com anos de experiência no futevôlei, o Professor Gutenberg
                Vidal é referência no esporte em São Luís, Maranhão. Dedicado
                ao ensino e à formação de novos atletas, ele lidera o Futevôlei
                Maranhão com paixão e profissionalismo.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-surface-alt rounded-xl p-4 text-center shadow-sm ring-1 ring-white/5">
                  <Award className="h-6 w-6 text-vermelho mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-white/60">Anos de experiência</p>
                </div>
                <div className="bg-surface-alt rounded-xl p-4 text-center shadow-sm ring-1 ring-white/5">
                  <Users className="h-6 w-6 text-azul mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xs text-white/60">Alunos formados</p>
                </div>
                <div className="bg-surface-alt rounded-xl p-4 text-center shadow-sm ring-1 ring-white/5">
                  <MapPin className="h-6 w-6 text-dourado mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">São Luís</p>
                  <p className="text-xs text-white/60">Maranhão</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
