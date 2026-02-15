"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const instagramPosts = [
  {
    image: "/images/abmael.jpg",
    label: "Treino na praia",
  },
  {
    image: "/images/foto-campeonato.jpg",
    label: "Campeonato",
  },
  {
    image: "/images/feminino.jpg",
    label: "Equipe feminina",
  },
  {
    image: "/images/masculino.jpg",
    label: "Equipe masculina",
  },
];

export function InstagramSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-alt">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <p className="text-vermelho font-semibold tracking-wider uppercase text-sm mb-4">
            Instagram
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siga o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vermelho to-pink-500">
              {INSTAGRAM_HANDLE}
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-white/60 mb-12 max-w-lg mx-auto">
            Acompanhe os treinos, jogos e novidades do Futevôlei Maranhão
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {instagramPosts.map((post, i) => (
            <StaggerItem key={i}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <Image
                  src={post.image}
                  alt={post.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{post.label}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4}>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-vermelho to-pink-600 hover:from-vermelho/90 hover:to-pink-600/90 shadow-lg shadow-vermelho/20 transition-all hover:shadow-vermelho/30 hover:scale-105"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 mr-2" />
              Seguir {INSTAGRAM_HANDLE}
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
