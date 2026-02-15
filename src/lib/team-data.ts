export interface TeamMember {
  name: string;
  bio: string;
  image: string | null;
  initials: string;
  instagram?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Guthemberg Vidal",
    bio: "Professor e fundador do Futevôlei Maranhão. Referência no esporte em São Luís.",
    image: "/images/gutho.jpg",
    initials: "GV",
    instagram: "https://www.instagram.com/Guthembergvidal/",
  },
  {
    name: "Luan",
    bio: "Atleta do Futevôlei Maranhão",
    image: "/images/luan-atleta.jpg",
    initials: "LU",
    instagram: "https://www.instagram.com/lluanznx7/",
  },
  {
    name: "Ícaro",
    bio: "Atleta do Futevôlei Maranhão",
    image: "/images/icaro.jpg",
    initials: "IC",
    instagram: "https://www.instagram.com/icarokyann/",
  },
  {
    name: "Abmael",
    bio: "Atleta do Futevôlei Maranhão",
    image: "/images/abmael.jpg",
    initials: "AB",
    instagram: "https://www.instagram.com/abmael_rbl/",
  },
  {
    name: "Andressinha",
    bio: "Atleta do Futevôlei Maranhão",
    image: "/images/andressinha-atleta.jpg",
    initials: "AN",
    instagram: "https://www.instagram.com/_andressinhaftv/",
  },
  {
    name: "André",
    bio: "Atleta do Futevôlei Maranhão",
    image: "/images/andre.jpg",
    initials: "AD",
    instagram: "https://www.instagram.com/_.andre.correa/",
  },
  {
    name: "Igor Mineiro (Peleto)",
    bio: "Atleta do Futevôlei Maranhão",
    image: "/images/peleto.jpg",
    initials: "IM",
    instagram: "https://www.instagram.com/igormineiro_06/",
  },
];
