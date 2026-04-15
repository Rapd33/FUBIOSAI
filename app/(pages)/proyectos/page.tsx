import Link from "next/link";
import { HardHat, Grid3X3, Droplets, ArrowRight, Leaf } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Project } from "../../data/types";
import projectsData from "../../data/projects.json";

export const metadata = {
  title: "Proyectos | FUBIOSAI",
  description:
    "Iniciativas de FUBIOSAI: infraestructura vial, geoceldas, plantas de agua potable, acuicultura y reforestación comunitaria.",
};

const projects: Project[] = projectsData;

// Íconos por categoría
const categoryIcons: Record<string, React.ReactNode> = {
  "Infraestructura Social": <HardHat size={20} />,
  "Tecnología Ambiental": <Grid3X3 size={20} />,
  "Agua y Saneamiento": <Droplets size={20} />,
};

export default function ProyectosPage() {
  const [p1, p2, p3, p4, p5] = projects;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-end">
            <div className="md:w-2/3">
              <span className="inline-block bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Nuestras Iniciativas
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
                Sembrando el <br />
                <span className="text-surface-tint italic">
                  futuro sostenible
                </span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Desarrollamos soluciones integrales que fusionan la sabiduría
                comunitaria con tecnología de vanguardia para transformar
                territorios y proteger la vida.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <div className="w-32 h-32 rounded-full bg-secondary-container flex items-center justify-center animate-pulse">
                <Leaf size={48} className="text-on-secondary-container" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bento Grid de Proyectos ── */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* P1: Infraestructura Vial — grande con overlay */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-1">
              <div className="relative h-125 rounded-xl overflow-hidden">
                <img
                  alt={p1.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={p1.coverImage}
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    {categoryIcons[p1.category] ?? <HardHat size={20} />}
                    <span className="font-semibold uppercase tracking-widest text-xs">
                      {p1.category}
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-4">
                    {p1.title}
                  </h3>
                  <p className="max-w-md text-surface-container-low/80 mb-6">
                    {p1.shortDescription}
                  </p>
                  <button
                    type="button"
                    className="flex items-center gap-2 font-bold hover:gap-4 transition-all"
                  >
                    Explorar impacto <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* P2: Geoceldas — tarjeta con imagen */}
            <div className="md:col-span-4 rounded-xl bg-surface-container-highest p-10 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center mb-8">
                  <Grid3X3 size={28} className="text-on-primary-container" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  {p2.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {p2.shortDescription}
                </p>
              </div>
              <div className="mt-8">
                <img
                  alt={p2.title}
                  className="w-full h-48 object-cover rounded-2xl"
                  src={p2.coverImage}
                />
              </div>
            </div>

            {/* P3: Plantas de agua — tarjeta de color */}
            <div className="md:col-span-4 rounded-xl bg-secondary-container p-10 flex flex-col">
              <Droplets size={48} className="text-on-secondary-container mb-6" />
              <h3 className="font-headline text-2xl font-bold text-on-secondary-container mb-4">
                {p3.title}
              </h3>
              <p className="text-on-secondary-container/80 leading-relaxed mb-8">
                {p3.shortDescription}
              </p>
              {p3.stats && (
                <div className="mt-auto flex gap-4 flex-wrap">
                  {p3.stats.slice(0, 1).map((s) => (
                    <div
                      key={s.label}
                      className="w-10 h-10 rounded-full border-2 border-secondary-container bg-surface-dim flex items-center justify-center text-xs font-bold text-on-secondary-container"
                    >
                      {s.value.replace(/[^0-9k+]/gi, "").slice(0, 4)}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* P4: Acuicultura — split texto/imagen */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-1">
              <div className="relative h-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center">
                  <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                    {p4.title}
                  </h3>
                  <p className="text-on-surface-variant mb-8">
                    {p4.shortDescription}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    {p4.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container px-4 py-2 rounded-full text-xs font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    alt={p4.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={p4.coverImage}
                  />
                </div>
              </div>
            </div>

            {/* P5: Reforestación — panorámica full width */}
            <div className="md:col-span-12 rounded-xl overflow-hidden relative min-h-125 flex items-center">
              <img
                alt={p5.title}
                className="absolute inset-0 w-full h-full object-cover"
                src={p5.coverImage}
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
              <div className="relative z-10 p-12 md:p-24 max-w-2xl text-white">
                <div className="w-20 h-1 bg-secondary-fixed mb-8" />
                <h3 className="font-headline text-4xl md:text-5xl font-extrabold mb-6">
                  {p5.title}
                </h3>
                <p className="text-xl text-surface-container-lowest/90 mb-10 leading-relaxed">
                  {p5.shortDescription}
                </p>
                <Link
                  href="/sobre-nosotros"
                  className="inline-block bg-white text-primary px-8 py-4 rounded-full font-headline font-bold hover:bg-secondary-fixed transition-colors"
                >
                  Únete al cambio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Estadísticas agregadas ── */}
        <section className="mt-32 max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-low rounded-xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { value: "150+", label: "Hectáreas reforestadas" },
                { value: "45", label: "Comunidades activas" },
                { value: "24/7", label: "Agua potable" },
                { value: "12k", label: "Vidas impactadas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-headline text-5xl font-extrabold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-on-surface-variant font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-32 max-w-5xl mx-auto px-8 text-center">
          <h2 className="font-headline text-4xl font-bold text-primary mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Colaboremos para transformar realidades. FUBIOSAI es el puente entre
            la visión y la ejecución sostenible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="px-10 py-4 organic-gradient text-white rounded-full font-headline font-bold text-lg shadow-lg"
            >
              Presentar Iniciativa
            </button>
            <Link
              href="/documentos-legales"
              className="px-10 py-4 bg-surface-container-highest text-primary rounded-full font-headline font-bold text-lg"
            >
              Ver Documentos Legales
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
