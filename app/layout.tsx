import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  ORG_NIT,
  ORG_LOCATION,
  ORG_WHATSAPP,
} from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FUBIOSAI | Transformando Territorios desde la Raíz",
    template: "%s | FUBIOSAI",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "FUBIOSAI | Transformando Territorios desde la Raíz",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FUBIOSAI | Transformando Territorios desde la Raíz",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: "Fundación FUBIOSAI",
  url: SITE_URL,
  logo: `${SITE_URL}/fubiosai-logo.svg`,
  description: SITE_DESCRIPTION,
  taxID: ORG_NIT,
  areaServed: {
    "@type": "Place",
    name: ORG_LOCATION,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: ORG_WHATSAPP,
    areaServed: "CO",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-background text-on-background font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
