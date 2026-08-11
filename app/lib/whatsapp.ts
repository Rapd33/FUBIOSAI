const WHATSAPP_NUMBER = "573229720210";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  donar: "Hola, quiero hacer una donación a FUBIOSAI.",
  voluntario: "Hola, quiero unirme como voluntario de FUBIOSAI.",
  documentosLegales:
    "Hola, tengo una pregunta sobre los documentos legales de FUBIOSAI.",
  presentarIniciativa:
    "Hola, quiero presentar una iniciativa/proyecto a FUBIOSAI.",
} as const;
