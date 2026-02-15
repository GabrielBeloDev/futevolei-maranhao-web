"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { INSTAGRAM_URL, SITE_NAME, WHATSAPP_CONTACTS, getWhatsAppUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  pathname: string;
}

export function MobileNav({ open, onClose, links, pathname }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="bg-dark text-white w-72 p-0">
        <VisuallyHidden>
          <SheetTitle>Menu de navegação</SheetTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full">
          <div className="px-6 pt-8 pb-4">
            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-dourado to-yellow-400">
              {SITE_NAME}
            </p>
          </div>

          <nav className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "text-base font-medium py-3 border-b border-white/10 transition-colors hover:text-dourado",
                  pathname === link.href ? "text-dourado" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-6 py-6 border-t border-white/10">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-4">
              Redes sociais
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-dourado transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_CONTACTS[0].phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-green-400 transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
