import {
  ScrollText,
  Scale,
  BadgeCheck,
  Landmark,
  BarChart2,
  Eye,
  ShieldCheck,
  Download,
  type LucideIcon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { LegalDocument, AnnualReport } from "../../data/types";
import legalData from "../../data/legal-docs.json";

export const metadata = {
  title: "Documentos Legales | FUBIOSAI",
  description:
    "Repositorio de documentos legales y financieros de FUBIOSAI — transparencia institucional como Entidad Sin Ánimo de Lucro.",
};

const iconMap: Record<string, LucideIcon> = {
  ScrollText,
  Scale,
  BadgeCheck,
  Landmark,
};

const documents: LegalDocument[] = legalData.documents;
const annualReports: AnnualReport[] = legalData.annualReports;
const nit: string = legalData.nit;

export default function DocumentosLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* ── Hero ── */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-semibold mb-4 font-label">
                Transparencia Institucional
              </span>
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-primary tracking-tighter mb-6 leading-tight">
                Repositorio de Documentos Legales
              </h1>
              <p className="text-lg text-on-surface-variant font-body leading-relaxed">
                En cumplimiento con la normativa de transparencia para Entidades
                Sin Ánimo de Lucro (ESAL), ponemos a disposición del público
                nuestra documentación legal y financiera actualizada.
              </p>
            </div>
            <div className="bg-surface-container-high p-6 rounded-xl border-l-4 border-primary shadow-sm min-w-70">
              <p className="text-sm font-label text-outline mb-1 uppercase tracking-widest">
                Identificación Tributaria
              </p>
              <p className="text-2xl font-headline font-bold text-primary">
                NIT {nit}
              </p>
            </div>
          </div>
        </header>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Documentos principales */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {documents.map((doc) => {
              const Icon = iconMap[doc.icon] ?? ScrollText;
              return (
                <div
                  key={doc.id}
                  className="group bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 text-primary/5">
                    <ScrollText size={96} />
                  </div>
                  <Icon size={36} className="text-primary mb-4" />
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-snug">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-label text-outline">
                      PDF • {doc.sizeMB}
                    </span>
                    <a
                      href={doc.file}
                      download
                      aria-label={`Descargar ${doc.title}`}
                      className="bg-primary text-on-primary p-3 rounded-full hover:scale-105 transition-transform flex items-center justify-center"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Informes anuales */}
            <div className="bg-surface-container-highest p-8 rounded-xl">
              <h3 className="text-2xl font-headline font-bold text-primary mb-6">
                Informes Anuales
              </h3>
              <div className="space-y-4">
                {annualReports.map((report) => (
                  <div
                    key={report.year}
                    className="flex items-center justify-between p-4 bg-surface rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <BarChart2 size={20} className="text-primary" />
                      <span className="font-medium">{report.label}</span>
                    </div>
                    <a
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${report.label}`}
                      className="text-outline hover:text-primary transition-colors"
                    >
                      <Eye size={20} />
                    </a>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="w-full mt-8 py-3 text-primary font-bold border border-primary/20 rounded-full hover:bg-primary/5 transition-colors"
              >
                Ver todos los archivos
              </button>
            </div>

            {/* CTA card */}
            <div className="organic-gradient p-8 rounded-xl text-on-primary relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-headline font-bold mb-3">
                  ¿Necesitas más información?
                </h4>
                <p className="text-on-primary-container text-sm mb-6">
                  Si requieres certificaciones específicas o documentos no
                  listados aquí, contáctanos directamente.
                </p>
                <button
                  type="button"
                  className="bg-surface text-primary px-6 py-2 rounded-full font-bold hover:bg-secondary-fixed transition-colors"
                >
                  Escríbenos
                </button>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={160} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Banner de cumplimiento ── */}
        <div className="mt-20 p-10 bg-surface-container rounded-xl flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
          <div className="h-24 w-24 shrink-0 bg-surface rounded-full flex items-center justify-center text-primary">
            <ShieldCheck size={48} />
          </div>
          <div>
            <h4 className="text-2xl font-headline font-bold text-on-surface mb-2">
              Compromiso Ético y Legal
            </h4>
            <p className="text-on-surface-variant font-body leading-relaxed max-w-3xl">
              FUBIOSAI se rige por los principios de integridad y
              responsabilidad social. Nuestra operación está sujeta a la
              vigilancia de los entes de control nacionales, asegurando que cada
              recurso sea destinado a la transformación social y ambiental de
              nuestras comunidades.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
