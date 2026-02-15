import Link from "next/link";
import { Instagram, Lock } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, SITE_NAME, WHATSAPP_CONTACTS, getWhatsAppUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado to-yellow-400">
                {SITE_NAME}
              </span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Futevôlei em São Luís, Maranhão. Treinos, aulas e o melhor do
              esporte na ilha.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80">Navegação</h4>
            <nav className="flex flex-col gap-2 text-sm text-white/50">
              <Link
                href="/"
                className="hover:text-dourado transition-colors w-fit"
              >
                Home
              </Link>
              <Link
                href="/equipe"
                className="hover:text-dourado transition-colors w-fit"
              >
                Equipe
              </Link>
              <Link
                href="/posts"
                className="hover:text-dourado transition-colors w-fit"
              >
                Posts
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-dourado transition-colors w-fit"
              >
                <Instagram className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
              {WHATSAPP_CONTACTS.map((contact) => (
                <a
                  key={contact.name}
                  href={getWhatsAppUrl(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors w-fit"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {contact.name} {contact.display}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <Link
            href="/admin/login"
            className="flex items-center gap-1.5 text-xs text-white/20 hover:text-white/40 transition-colors"
          >
            <Lock className="h-3 w-3" />
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
