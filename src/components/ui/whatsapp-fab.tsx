"use client";

import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { WHATSAPP_CONTACTS, getWhatsAppUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-xl shadow-2xl p-4 mb-2 min-w-[200px] md:min-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            Fale conosco no WhatsApp
          </p>
          <div className="flex flex-col gap-2">
            {WHATSAPP_CONTACTS.map((contact) => (
              <a
                key={contact.name}
                href={getWhatsAppUrl(contact.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-green-600" />
                {contact.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-[background-color,transform] hover:scale-110"
        aria-label="WhatsApp"
      >
        {open ? (
          <X className="h-5 w-5 md:h-6 md:w-6" />
        ) : (
          <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
        )}
      </button>
    </div>
  );
}
