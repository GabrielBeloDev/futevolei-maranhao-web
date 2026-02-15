export const SITE_NAME = "Futevôlei Maranhão";
export const SITE_DESCRIPTION =
  "Professor Gutenberg Vidal — Aulas e treinos de futevôlei em São Luís, Maranhão";
export const INSTAGRAM_URL = "https://www.instagram.com/futevolei_maranhao/";
export const INSTAGRAM_HANDLE = "@futevolei_maranhao";

const WHATSAPP_DEFAULT_MESSAGE =
  "Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20aulas%20de%20futev%C3%B4lei";

export const WHATSAPP_CONTACTS = [
  { name: "Gutenberg", phone: "5598982156237", display: "(98) 98215-6237" },
  { name: "Nelci", phone: "5598982281098", display: "(98) 98228-1098" },
] as const;

export function getWhatsAppUrl(phone: string): string {
  return `https://wa.me/${phone}?text=${WHATSAPP_DEFAULT_MESSAGE}`;
}
