"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/equipe", label: "Equipe" },
  { href: "/posts", label: "Posts" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-300",
        isHome
          ? scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          : "bg-dark/80 backdrop-blur-sm shadow-lg"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-white hover:text-dourado transition-colors"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative",
                pathname === link.href
                  ? "text-dourado"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dourado rounded-full" />
              )}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/70 hover:text-dourado transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-dourado"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </header>
  );
}
