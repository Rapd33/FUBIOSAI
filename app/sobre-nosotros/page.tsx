import Link from "next/link";
import { Leaf, Droplets, Users2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sobre Nosotros | FUBIOSAI",
  description:
    "Conoce la historia, visión y equipo de FUBIOSAI — fundación nacida en Suaita, Santander, para la regeneración de ecosistemas y el fortalecimiento comunitario.",
};

const liderazgo = [
  {
    nombre: "Juan Fernando Pulido Mendoza",
    cargo: "Director Ejecutivo & Co-fundador",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjHSyjf78_Mo_0bNWcE1T7S6xLssFJL5CFjiOFMOUSv_5Wb2VZ00KrOrWIel8VIuMy4ecpSuPViDsJNSgVOIVs_v5ANqo5n8ZHs-T6PRkKZh5R57V-T7yfLX26lj6TNeCrDHvzeO46db5VvArvKQZczRfu6Tgrsfd5CzkqN7RF1pxNMMQkKWcONatyb7cUgzKuSGJK5s_6vbmeJAFEjX15frPW6-sO1B2IYsJghY8PTV-KK6RsVgTkm1xQI-4qqz6a5P89xQVtn3U",
  },
  {
    nombre: "Hernán Felipe Pulido Mendoza",
    cargo: "Director de Operaciones",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaY0KOYc7eN4QVLyZcQGncpG3otWHgdSWf6pV6NnBqm2VGwWtXl8ensxND9lUI_as18dmmIGu6R_m8O3JYfAP5G1DPa0wdw3YNN1qdaQxGJ1TvJfS5URON_jbliyqP5seYS0TGXsM56oHLSnoJ1VPZKmTulTx4EtsvF8OlEsHAFkgnT1HZ83ZejdMT_impHjVGM_TsBn-98xRuX_XeZ9QNQGNxZEdwThDvP6Jum6OHY0w6q-f4evyWdPsyWo5dtD-mOhoS0de2mOE",
  },
  {
    nombre: "Blanca Estrella Mendoza Barajas",
    cargo: "Directora Administrativa",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO5dnUaec5oI8LE-O9H0W5YS8nVfBn5ztdkRu3N1MaSDq_WDO--CesGMt3INIyg1AM1duOqE7o_8s7Ji-8T1kvcKBFiC0hLDKzomyveiy9lSHtZiQAftt567m3LAXP8Jra5NRW6ftHJDGpNMczbxlBeGTvKwNDvCEH2PixzuCqEoK6Go8BjbEp-p9atJPmgTaWCUv5tbP955tAg87SM6ft_SH3sBpQX7f2XWuxIZDubsR47Rh5Ha3BGm7fcon8sil1rX8FXb-nKP4",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* ── Hero ── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-medium mb-6">
                Nuestra Historia
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-8">
                Raíces que nutren el{" "}
                <span className="text-surface-tint italic">
                  futuro ambiental.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                Fundada en las fértiles tierras de{" "}
                <span className="font-semibold text-primary">
                  Suaita, Santander
                </span>
                , FUBIOSAI nace como un compromiso vivo con la regeneración de
                nuestros ecosistemas y el fortalecimiento de la comunidad.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden aspect-4/5 shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Paisaje verde de las montañas de Santander Colombia"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-r69zNKS134Ftwkv9dmhuLJGKfbKuT5mEvkzdgvGwfxWZH3qo433XuOpdS7tqnLcED6WEKPo_9CJxjGeMB2KYzuQCTADXQ73CzMVktEAtDMGebfbssxQga3CsqQWN5uUQ9QGjKliTOuJgiQ_mzi1UU5Z-9avfwzsWwUvanhHl6itEiU7Jl-ioBrYB1KdCdoN34qDoTa60y0BnhKRj050hjA1IUHVqBK4OEckjnY2VjAcYlhD95hmmrLskuGWWC-YfyiJnQoYD6Ys"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-highest p-8 rounded-xl shadow-xl hidden md:block max-w-60">
                <p className="font-headline font-bold text-primary text-3xl">
                  20+
                </p>
                <p className="text-sm text-on-surface-variant font-medium">
                  Años de compromiso con la biodiversidad colombiana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Visión 2035 ── */}
        <section className="bg-surface-container-low py-24 px-8 mb-32 rounded-xl mx-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Imagen */}
              <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
                  <img
                    className="rounded-xl shadow-lg w-full aspect-video object-cover"
                    alt="Vista aérea de un bosque tropical denso y saludable"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Juoma98KAQm11bASoAkSQ-wLuliy3iXwGDCnFmtckIsWVVCWzGlyUrS3JiVvBOQ8IGl57z6g3EMahyeIRjzE4TGgKhU4Nd-Hl69SL005ffUXdtoh88TsZ8X-X5c2wFUD3LgEtn80OlwsIwsSNwj8vD8fw-l2TPogTcKMAN_eyagZIczIy84qWUVtecPTw3V4jy4JBmNZh6kJ-WD6ZMuQewF1G7rd1zrTK_h4CknmLRbk4ZOMVsPwZADVns10WYSRKVqiEtVRdHE"
                  />
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container rounded-full flex items-center justify-center border-8 border-surface-container-low">
                    <Leaf size={36} className="text-on-primary-container" />
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="col-span-12 lg:col-span-7 lg:pl-16 order-1 lg:order-2 mb-12 lg:mb-0">
                <h2 className="font-headline text-4xl font-bold text-primary mb-6 tracking-tight">
                  Visión 2035
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed italic border-l-4 border-surface-tint pl-6">
                  &ldquo;Para el año 2035, FUBIOSAI será el referente
                  latinoamericano en modelos de conservación comunitaria,
                  integrando tecnología ancestral y ciencia moderna para
                  restaurar el equilibrio hídrico de la región de
                  Santander.&rdquo;
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container p-6 rounded-xl">
                    <Droplets size={24} className="text-primary mb-4" />
                    <h3 className="font-headline font-bold text-on-surface mb-2">
                      Preservación Hídrica
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                      Protección activa de las microcuencas que nacen en el
                      corazón de Suaita.
                    </p>
                  </div>
                  <div className="bg-surface-container p-6 rounded-xl">
                    <Users2 size={24} className="text-primary mb-4" />
                    <h3 className="font-headline font-bold text-on-surface mb-2">
                      Tejido Social
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                      Empoderamiento de familias rurales mediante economías
                      circulares sostenibles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Liderazgo ── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4 tracking-tight">
              Nuestro Liderazgo
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Un equipo multidisciplinario unido por el propósito de transformar
              nuestra relación con la naturaleza.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liderazgo.map((persona) => (
              <div key={persona.nombre} className="group">
                <div className="bg-surface-container-high rounded-xl aspect-3/4 overflow-hidden mb-6 relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={`Retrato de ${persona.nombre}`}
                    src={persona.foto}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-headline font-bold text-xl text-primary">
                  {persona.nombre}
                </h3>
                <p className="text-on-surface-variant font-medium">
                  {persona.cargo}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contacto" className="px-8 max-w-5xl mx-auto">
          <div className="bg-primary-container text-on-primary-container p-12 md:p-20 rounded-xl relative overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                ¿Listo para ser parte del cambio?
              </h2>
              <p className="text-lg mb-10 text-on-primary-container/80 max-w-2xl mx-auto">
                Tu apoyo permite que la Fundación FUBIOSAI continúe su labor de
                protección en el Cañón de Suaita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  className="bg-surface text-primary px-8 py-4 rounded-full font-headline font-bold hover:bg-surface-bright transition-all shadow-lg"
                >
                  Hacer una Donación
                </button>
                <Link
                  href="/proyectos"
                  className="border border-on-primary-container/30 text-on-primary-container px-8 py-4 rounded-full font-headline font-bold hover:bg-on-primary-container/10 transition-all"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-surface-tint/20 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -ml-32 -mb-32" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
