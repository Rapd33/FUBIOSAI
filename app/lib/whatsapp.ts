import { ORG_WHATSAPP } from "./site";

export function whatsappLink(message: string): string {
  const number = ORG_WHATSAPP.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  donar: "Hola, quiero hacer una donación a FUBIOSAI.",
  voluntario: "Hola, quiero unirme como voluntario de FUBIOSAI.",
  documentosLegales:
    "Hola, tengo una pregunta sobre los documentos legales de FUBIOSAI.",
  presentarIniciativa:
    "Hola, quiero presentar una iniciativa/proyecto a FUBIOSAI.",
} as const;
