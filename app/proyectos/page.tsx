import Link from "next/link";
import {
  HardHat,
  Grid3X3,
  Droplets,
  ArrowRight,
  Leaf,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Proyectos | FUBIOSAI",
  description:
    "Iniciativas de FUBIOSAI: infraestructura vial, geoceldas, plantas de agua potable, acuicultura y reforestación comunitaria.",
};

export default function ProyectosPage() {
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
            {/* P1: Infraestructura Vial */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-1">
              <div className="relative h-125 rounded-xl overflow-hidden">
                <img
                  alt="Construcción de vía rural con participación comunitaria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhcf4y8GynS4LAzP6U2QFJtfyqmfk3DKy7CDLlcZpx6yDFPlJImkBNnM717DIlhUgpWsrLjEYe8jQl1Mv5Tc_pCXHxFUYt-O3cixKAmh1Hn6fcvgHVW249TAuraXHCDtHKFowmUrVvMdvtVx92Hy0F59I79tldIhqv6gfmcfZGxX7N1S5V1fKwlHrKbikk-gCfhhylaNtNOKj_i_DIINwtx9nYTvM3TKAGpfGiuxFx9nn3ARI3unJnDLfkmn8C3RwovFeUFq-159Y"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <HardHat size={20} />
                    <span className="font-semibold uppercase tracking-widest text-xs">
                      Infraestructura Social
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-4">
                    Infraestructura vial con JAC
                  </h3>
                  <p className="max-w-md text-surface-container-low/80 mb-6">
                    Empoderamos a las Juntas de Acción Comunal para liderar el
                    desarrollo de sus propias vías rurales.
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

            {/* P2: Geoceldas */}
            <div className="md:col-span-4 rounded-xl bg-surface-container-highest p-10 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center mb-8">
                  <Grid3X3 size={28} className="text-on-primary-container" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Geoceldas
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Tecnología de estabilización de suelos para terrenos
                  difíciles, permitiendo accesibilidad sostenible.
                </p>
              </div>
              <div className="mt-8">
                <img
                  alt="Vista detallada de rejilla hexagonal de refuerzo de suelo"
                  className="w-full h-48 object-cover rounded-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClhRCDZrNYOp6wqJpl0QoOHHAJmi1EUMk0LQLs39X90a0OMLWW9sQ92GvAvkenAH44_SmQx1YI6rPDYTMwWGVgn3CWqXusQWe6u3qtS7j997-Uq45a0MgyG5DAdbxD-JyxVlbE4aYlaOVBPy0ikfHeIMfIDEex1ssSNi7ndk7nLaVKQjtqtU1P-Dbw5L04_zeaSrEPnqXvN0qB7DitxiFGyyYJpp6t02mab4PXwUieVgaLNkH2ZizCNpGi7-WZ8BYAQ-SI8XRUyJo"
                />
              </div>
            </div>

            {/* P3: Plantas de agua potable */}
            <div className="md:col-span-4 rounded-xl bg-secondary-container p-10 flex flex-col">
              <Droplets
                size={48}
                className="text-on-secondary-container mb-6"
              />
              <h3 className="font-headline text-2xl font-bold text-on-secondary-container mb-4">
                Plantas de agua potable móviles
              </h3>
              <p className="text-on-secondary-container/80 leading-relaxed mb-8">
                Llevamos agua segura a los rincones más remotos con sistemas
                modulares de alta eficiencia.
              </p>
              <div className="mt-auto flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-secondary-container bg-surface-dim overflow-hidden">
                  <img
                    alt="Miembro de la comunidad"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFc9W83Ay6a90uKLJVW2U5FxxYdxZkn5FlPd4Sy1NMyeLNLnTisdv9ryIF-CgNvQQxrHqCytQ6VgofGHl1fiWRd7tjv98EYfHvAnOIbPHlfxocsI2JdjRgjE_HsYzMzNMR05tEeMNmeUlaulrABIaBWMeSZLxl1KJE30t3LdbOMyQeS7THgFGZBtahFfc6hQzbi0VszRNs00fMUWSj6AJO9Rb71cIOkMWu15VHxRbsFl1AwV7hE26MOAfHQvQfPPJPHdEa7utCmO0"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-secondary-container bg-surface-dim overflow-hidden">
                  <img
                    alt="Científica de campo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC2ZEG9oDB0osmjbEhLIbo9KJzHz1gDVzpfjysyCeYiV2Pj-rfw8oZtrjPfM19DHrhGf1_sb1ZPC9iLED6fvEdYDiy-HHYSjfQZjfZa_0Ghm8bqvx5q9RL0eDFeV075DzjCGdYcRK0Efd3cK7rQwYyzowlfkXjZRf1DG3HKaI6XacZ9CgRVNea_OFteDRsZZ6cwnZWnYwMU7VaVdeP5Zigp97YkCjuy2Z2XO2pm9aMS3RAuK8COmVMG2CgOWjR5YgAiS9W7oOokhg"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-secondary-container bg-surface-dim flex items-center justify-center text-xs font-bold text-on-secondary-container">
                  +12k
                </div>
              </div>
            </div>

            {/* P4: Acuicultura */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-1">
              <div className="relative h-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center">
                  <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                    Acuicultura tecnificada
                  </h3>
                  <p className="text-on-surface-variant mb-8">
                    Sistemas de producción acuícola con monitoreo IoT para
                    garantizar la soberanía alimentaria y rentabilidad.
                  </p>
                  <div className="flex gap-4">
                    <span className="bg-surface-container px-4 py-2 rounded-full text-xs font-bold">
                      IoT
                    </span>
                    <span className="bg-surface-container px-4 py-2 rounded-full text-xs font-bold">
                      SOSTENIBLE
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    alt="Estanques modernos de acuicultura tecnificada"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDArnPwEbpn6OssSI-Gw_V5vWGfIxHXrrtRUrHqBGxwPgs7da5CQOVnVWmWy05-ikSgPyY6x1JHX0vJIyjAPMM-5a_roBzHL1gntTp-PzLJGwMWH-EKquZd_5TziG27QHBGCFJCZRZkrLTweP8bWrvvxgYZGTrQ7qQRrQsRcxCkVrlJLyK-sRlI3u8M0oCgFX4Zv68lnx47tGVdRS9LDED_g6KAkNR-QgJHOPCy72b8Z0neZcmoqspB-YoivH5PzyOXVr-8-jMT7RQ"
                  />
                </div>
              </div>
            </div>

            {/* P5: Reforestación comunitaria */}
            <div className="md:col-span-12 rounded-xl overflow-hidden relative min-h-125 flex items-center">
              <img
                alt="Vista panorámica de nuevo crecimiento forestal verde"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK7wVZah2tlQ4ouuSvJf5eezzZfZESYlzI3WYrfQdVIQHmKHBkTueUnVBQsOH1S_GN1cmpGNWDT8ZGhBimdhXHJTEGVudZLqi3fmg2EEvLjL0ezSba0-UFsOQa-QofIXadwfmtoacAHtgVLA_B8z2IyqWYz54Ub_DqcLzzNun3lcyn-ozyz1G23E9CIvf_6PwguAuXibT9smv2Za4_Mk_9c8jZdW40uXDPX3lwf7ohv1LQ8uwshI2fgKkGd1Iblw1C_eZMtducr7s"
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
              <div className="relative z-10 p-12 md:p-24 max-w-2xl text-white">
                <div className="w-20 h-1 bg-secondary-fixed mb-8" />
                <h3 className="font-headline text-4xl md:text-5xl font-extrabold mb-6">
                  Reforestación comunitaria
                </h3>
                <p className="text-xl text-surface-container-lowest/90 mb-10 leading-relaxed">
                  Restauramos ecosistemas degradados vinculando a las familias
                  locales en la protección de los bosques nativos y fuentes
                  hídricas.
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

        {/* ── Estadísticas ── */}
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
