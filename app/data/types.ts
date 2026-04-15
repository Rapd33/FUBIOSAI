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
}

// ── Equipo ─────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
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
