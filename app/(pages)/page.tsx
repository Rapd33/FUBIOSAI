import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  Brain,
  FlaskConical,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InicioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── Hero ── */}
        <section className="relative px-8 py-16 md:py-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold font-headline mb-6 tracking-widest uppercase">
                Raíces de Cambio
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tighter mb-8">
                Transformando Territorios{" "}
                <span className="text-secondary italic">desde la Raíz</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                FUBIOSAI trabaja mano a mano con comunidades locales para
                restaurar ecosistemas, asegurar el acceso al agua y diseñar
                arquitecturas en armonía con la vida.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/sobre-nosotros"
                  className="px-8 py-4 bg-linear-to-r from-primary to-primary-container text-on-primary rounded-xl font-headline font-bold text-lg hover:shadow-xl transition-all flex items-center gap-3 group"
                >
                  Unirse como Voluntario
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/proyectos"
                  className="px-8 py-4 bg-surface-container text-primary rounded-xl font-headline font-bold text-lg hover:bg-surface-container-high transition-all"
                >
                  Nuestros Logros
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-square md:aspect-4/5 organic-shape-1 overflow-hidden shadow-2xl">
                <img
                  alt="Comunidad plantando árboles nativos en trabajo voluntario"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgJBhHF9opxN_PM2R9Iv9nEC3pTezMhq3QhH8uxFFHQA1uu7v4OHofgwjEUCOu2jABJ6ShqkX2UTi6WiJJzZpwAmKqKQ7gjkayEd4671YsckIoQDgCR9XmcOXzHAfZwQm-pFlCglhaz_JkOXymfA4I0zpDk90fn6LuOSLEY1rby5hv2e35rzajkD6e1Rujnf_WH5cSQunl0XcuOmtXDfKshSdNuu_eAlVrxVBy-sLzmwBgj4XGeaMgeoe53yYQdOpkTwOKwSb34S8"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-container rounded-full opacity-40 blur-3xl -z-10" />
              <div className="absolute top-1/2 -right-12 p-6 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl shadow-[0_20px_40px_rgba(49,48,45,0.06)] max-w-50">
                <p className="font-headline font-bold text-primary text-3xl mb-1">
                  +15k
                </p>
                <p className="text-sm font-body text-on-surface-variant">
                  Árboles nativos plantados este año por voluntarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Áreas de Acción (Bento) ── */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4 tracking-tight">
                Nuestras Áreas de Acción
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Intervenciones sistémicas diseñadas para perdurar en el tiempo y
                fortalecer el tejido social.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Agua y Vida */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl h-100 flex flex-col justify-end">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                <img
                  alt="Arroyo cristalino de bosque con rocas cubiertas de musgo"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB04dMOH5TY8GQHs2S4a6TxTmO-oAvB4YwmcU6g9uzU7dPhmE4V62ISC1JqylMYikS1NlUI2yvEf2n7unRzxRVwznyd-6k223rl-bpdmvS1y1-Wpckk4MNdjzMh39ckhLBfRRH5IPL5fIkP3YCklRY5Oa9HJTJ423Xkecq41bJzVWPuzayo0vWA-L8EzcfKYAn8zNm4gyoOiUL1HJjgrvNBH0SEKvgdRuDJvreuCfVDEm9ToyBoET26Cp5ifU4eIWzjSlXlaJIABrw"
                />
                <div className="relative z-20 text-white p-10">
                  <h3 className="text-3xl font-headline font-bold mb-3">
                    Agua y Vida
                  </h3>
                  <p className="max-w-md opacity-90 mb-6">
                    Protección de cuencas hidrográficas y sistemas de captación
                    pluvial para comunidades rurales.
                  </p>
                  <Link
                    href="/proyectos"
                    className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-secondary-fixed"
                  >
                    Leer más <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Arquitectura Natural */}
              <div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between">
                <Building2 size={48} className="text-on-primary-container" />
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-4">
                    Arquitectura Natural
                  </h3>
                  <p className="text-on-primary-container leading-relaxed">
                    Diseñamos espacios que respiran, utilizando materiales
                    locales y técnicas ancestrales.
                  </p>
                </div>
              </div>

              {/* Liderazgo Comunitario */}
              <div className="bg-secondary p-10 rounded-xl text-on-secondary flex flex-col justify-between">
                <Users size={48} className="text-secondary-fixed" />
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-4">
                    Liderazgo Comunitario
                  </h3>
                  <p className="text-secondary-fixed opacity-90 leading-relaxed">
                    Capacitación y empoderamiento de líderes locales para la
                    autogestión territorial.
                  </p>
                </div>
              </div>

              {/* Reforestación */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl h-100 flex flex-col justify-end">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                <img
                  alt="Colinas verdes con árboles dispersos al amanecer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChIPjdin2NIKCg-Uzn4-7FGPrvTFbpxgKf6w-PClr677UC7T_T3YVLUsQCnwqu_XtwRRfq6p3KHQZmTLZtaj1a4AqgwKwlOHE3NMsl5F1wBbpCD0IpmnbDfloIkCMXWHpCjWCqFprrPdGjuxsOMSob2UTfuUeUiytsQ-NI6pNAeZ1Fw5_lYpb_W56DC4Iop_EfUyUVMwLNPoSsB_V9WJJ2FW4vvziM6vEEfIpXRFZnQvgPsGgId0kuvFjGqsPbTqhtQnratQ3KbVk"
                />
                <div className="relative z-20 text-white p-10">
                  <h3 className="text-3xl font-headline font-bold mb-3">
                    Reforestación Activa
                  </h3>
                  <p className="max-w-md opacity-90 mb-6">
                    Restauración de corredores biológicos para el retorno de la
                    fauna nativa.
                  </p>
                  <Link
                    href="/proyectos"
                    className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-primary-fixed"
                  >
                    Proyectos 2024 <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Organic Cluster ── */}
        <section className="py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 items-center">
                <div className="space-y-6">
                  <div className="aspect-3/4 rounded-xl overflow-hidden shadow-xl">
                    <img
                      alt="Grupo de personas sonriendo en reunión comunitaria"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO78dNHzKHjKRpSORwkwrt0aTSazspNOdHexs_k4AgfkapHJxMrEZ_I8PjFt4F2CcVOC_LcWuJqdySc0N912BUAAHlmlddxI3rBwnW3oWoNHbWtDTBbYWXtRMh9rs5TeRp0SXJrCqfp_48fJPkPXqBZ9W8SG1ugDKgJTHZwhXMOgLuLFAgt4A7iptIuEvLTodvEsWzBtUFkBvPhUR01bm1VFGtLo8dgPZHxn35CgQvhIlfSn6tPEbjg9Q5JQhEEqDAt0byGQkc1lg"
                    />
                  </div>
                  <div className="aspect-square rounded-full overflow-hidden shadow-lg translate-x-12 ring-8 ring-background">
                    <img
                      alt="Macro de un pequeño brote verde en tierra"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZDR55-3nr_5fVopbMEujQlWyCmz_KFZT9Qhe_4ZWu_z_HFpbAu-cHzmk9USD_rbxX_Wq8705-yG2odsfvg3ER10hJI7czqkBCkYA2d7pyhOoBYxZ6aUeOm0qrNimqznInY2wxiMv2ItGyefJjDHrUWbTSFMmb8OdLThdBUwskP7MbLmaBRB2Zi_Zk-qi25kj3U5frRU8fp5Fal4RS9mogy3P0WPBW91sO37djgSbtKEw4xaLU0vBvb8Xd9noodj2UGkbPgQv4B30"
                    />
                  </div>
                </div>
                <div className="translate-y-12">
                  <div className="aspect-4/5 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      alt="Huerto comunitario frondoso y verde"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtxjYt7atWsezb4UXguqNuFl8J7SZ3LAyuX4PDTfDGs-rEx-xczoKwjKsjnEORca8qSy29Ken-bcyQgaFld7LTErEejCRUq5xgGGJ8PQ1cAcSESocdZkZVNzWWNco_T8_i8xMBdS3-ayc511hvRCVwRtMun1fJzeKWQ3UOKfvnK6UZbcARvuZkiCD8iymCe_CLM-XaZ-SMxz2BMeq-cRJJHupiefM-zwgVXd41Ghxl8zbUZHraZqtWjKeQlbHCQOlm3ZMacGirfpo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight tracking-tight">
                Un Liderazgo que <br />
                <span className="text-secondary italic">Escucha la Tierra</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                No somos una organización externa; somos parte del ecosistema.
                Nuestro enfoque se centra en el ser humano como guardián de su
                propio entorno. Creemos que la verdadera transformación solo
                ocurre cuando la comunidad se apropia de su futuro.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <Brain size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">
                      Saberes Ancestrales
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Rescatamos técnicas tradicionales de cultivo y
                      construcción.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <FlaskConical size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">
                      Ciencia Aplicada
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Monitoreo satelital y biotecnología para la restauración.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="px-8 py-20">
          <div className="max-w-6xl mx-auto bg-primary-container rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 blur-3xl -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container opacity-10 blur-3xl -z-10 rounded-full" />
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-primary-container mb-8 max-w-3xl mx-auto">
              Sé parte de la regeneración de nuestro hogar.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                type="button"
                className="px-10 py-5 bg-on-primary-container text-primary-container rounded-full font-headline font-extrabold text-xl hover:scale-105 transition-transform shadow-xl"
              >
                Haz una Donación
              </button>
              <Link
                href="/sobre-nosotros"
                className="px-10 py-5 bg-transparent border-2 border-on-primary-container text-on-primary-container rounded-full font-headline font-extrabold text-xl hover:bg-on-primary-container hover:text-primary-container transition-all"
              >
                Quiero ser Voluntario
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
