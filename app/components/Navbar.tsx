"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/documentos-legales", label: "Documentos Legales" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(49,48,45,0.06)]">
      <div className="flex justify-between items-center px-8 py-1 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/fubiosai-logo.svg" alt="FUBIOSAI Logo" height={64} width={64} loading="eager" priority style={{ height: "96px", width: "auto" }} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-[#1B5E20] font-semibold border-b-2 border-[#1B5E20] transition-colors duration-300"
                    : "text-inverse-surface hover:text-[#1B5E20] transition-colors duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/sobre-nosotros#contacto"
            className="px-6 py-2.5 bg-linear-to-r from-primary to-primary-container text-on-primary rounded-full font-headline font-medium text-sm hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            Donar
            <ArrowRight size={14} />
          </Link>
          <button
            className="md:hidden text-on-surface p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            type="button"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-low px-8 py-6 flex flex-col gap-4 font-headline font-medium text-base">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive
                    ? "text-[#1B5E20] font-semibold"
                    : "text-inverse-surface hover:text-[#1B5E20] transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
