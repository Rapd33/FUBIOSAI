import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-xl mt-20 bg-surface-container px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <span className="text-xl font-bold text-[#1B5E20] font-headline">
            FUBIOSAI
          </span>
          <p className="font-body text-sm text-[#1c1c19] max-w-xs">
            Preservando la vida y la arquitectura natural para las futuras
            generaciones.
          </p>
          <p className="font-body text-xs text-stone-600">
            © 2026 FUBIOSAI. Preservando la vida y la arquitectura natural.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <h5 className="text-primary font-headline font-bold text-sm tracking-widest uppercase">
              Navegación
            </h5>
            <Link
              href="/proyectos"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="/documentos-legales"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Transparencia
            </Link>
            <Link
              href="/"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-primary font-headline font-bold text-sm tracking-widest uppercase">
              Legal
            </h5>
            <Link
              href="/documentos-legales"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/documentos-legales"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Términos de Uso
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-primary font-headline font-bold text-sm tracking-widest uppercase">
              Contacto
            </h5>
            <Link
              href="/sobre-nosotros"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-stone-600 hover:text-[#1B5E20] underline-offset-4 hover:underline text-sm font-medium transition-colors"
            >
              Voluntariado
            </Link>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Sitio web FUBIOSAI"
            className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <Globe size={18} />
          </a>
          <a
            href="#"
            aria-label="Correo electrónico FUBIOSAI"
            className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
