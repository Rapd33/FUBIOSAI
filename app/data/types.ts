// ── Proyectos ──────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  tags: string[];
  stats?: { label: string; value: string }[];
  datasheet?: string; // ruta relativa a public/, ficha técnica en PDF
}

// ── Documentos Legales ─────────────────────────────────────
export interface LegalDocument {
  id: string;
  title: string;
  description: string;
  file: string;       // ruta relativa a public/, ej. "/legal-docs/estatutos.pdf"
  sizeMB: string;     // ej. "1.8 MB"
  icon: string;       // nombre del icono Lucide
}

export interface AnnualReport {
  year: string;
  label: string;
  file: string;
}
