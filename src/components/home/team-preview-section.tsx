"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/team-data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const gradients = [
  "from-vermelho to-vermelho/70",
  "from-azul to-azul/70",
  "from-dourado to-dourado/70",
  "from-dark to-dark/70",
];

export function TeamPreviewSection() {
  const previewMembers = teamMembers.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-azul font-semibold tracking-wider uppercase text-sm mb-4">
            Equipe
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossa <span className="text-azul">Equipe</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Conheça os integrantes do Futevôlei Maranhão
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {previewMembers.map((member, index) => {
            const cardContent = (
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-surface-alt border-white/10 h-full">
                <div className="relative aspect-square">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                    >
                      <span className="text-4xl font-bold text-white/80">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-white/60 mt-1 line-clamp-2">
                    {member.bio}
                  </p>
                  {member.instagram && (
                    <span className="inline-flex items-center gap-1 text-xs text-vermelho mt-2">
                      <Instagram className="h-3 w-3" />
                      Instagram
                    </span>
                  )}
                </CardContent>
              </Card>
            );

            return (
              <StaggerItem key={member.name}>
                {member.instagram ? (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {teamMembers.length > 4 && (
          <AnimatedSection delay={0.4} className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-azul text-azul hover:bg-azul hover:text-white transition-all"
            >
              <Link href="/equipe">
                Ver todos
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
