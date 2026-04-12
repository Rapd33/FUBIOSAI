import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUBIOSAI | Transformando Territorios desde la Raíz",
  description:
    "Fundación FUBIOSAI — trabajamos mano a mano con comunidades locales para restaurar ecosistemas, asegurar el acceso al agua y diseñar arquitecturas en armonía con la vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-background text-on-background font-body antialiased">
        {children}
      </body>
    </html>
  );
}
