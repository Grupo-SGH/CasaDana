import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroArt from "@/assets/hero-illustration.jpg";
import terrazaArt from "@/assets/terraza-beirut.jpg";
import lattice from "@/assets/mashrabiya.png";

const WHATSAPP =
  "https://wa.me/584129427384?text=Hola%20Casa%20Dana%2C%20quiero%20reservar%20una%20mesa";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Av.+Diego+Bautista+Urbaneja,+Calle+El+Lim%C3%B3n,+Lecher%C3%ADa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Dana · Café y cocina libanesa en Lechería" },
      {
        name: "description",
        content:
          "Café de especialidad, shawarma, mezze y dulcería árabe en Lechería. Terraza Beirut, narguile y tienda gourmet. Reserva por WhatsApp.",
      },
      { property: "og:title", content: "Casa Dana · La casa de todos" },
      {
        property: "og:description",
        content:
          "Café-restaurante venezolano de herencia libanesa en la Av. Diego Bautista Urbaneja, Lechería. Desayuno, almuerzo, cena, café y dulcería árabe.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Historia", href: "#historia" },
  { label: "Menú", href: "#menu" },
  { label: "Insignias", href: "#insignias" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Visítanos", href: "#visita" },
];

const pilares = [
  {
    tag: "Café & desayunos",
    color: "var(--tangerine)",
    titulo: "Desde las 7:00 am",
    texto:
      "Café de especialidad tostado con criterio, servido como se debe. Desayunos criollos y árabes para empezar sin apuro.",
    items: ["Espresso y filtrados", "Café turco", "Arepas y tostadas", "Labneh con zaatar"],
  },
  {
    tag: "Comida rápida",
    color: "var(--primary)",
    titulo: "Para el mediodía",
    texto:
      "Lo que resuelve un almuerzo sin sacrificar sabor. Porciones abundantes, bien servidas, precio honesto.",
    items: ["Shawarma de pollo", "Shawarma mixto", "Falafel wrap", "Papas y salsas de la casa"],
  },
  {
    tag: "Cocina árabe",
    color: "var(--levant)",
    titulo: "Mesa larga, mezze al centro",
    texto:
      "Recetas libanesas hechas de verdad: para compartir, conversar y quedarse. El corazón de la terraza Beirut.",
    items: ["Hummus y baba ganoush", "Kibbe frito y crudo", "Tabbouleh", "Parrilla libanesa"],
  },
  {
    tag: "Dulcería & tienda",
    color: "var(--gold)",
    titulo: "Dulce y despensa",
    texto:
      "Repostería árabe hecha en casa y un abasto gourmet con especias, semillas, frutos secos y dulces importados.",
    items: ["Baklava", "Maamoul", "Especias a granel", "Frutos secos y semillas"],
  },
];

const insignias = [
  {
    n: "Shawarma Casa Dana",
    d: "Pan árabe caliente, carne al vertical, ajo de la casa y encurtidos. De los más pedidos de Lechería.",
    p: "$8",
  },
  { n: "Mezze para dos", d: "Hummus, baba ganoush, tabbouleh, kibbe y pan árabe recién horneado.", p: "$18" },
  { n: "Kibbe frito (4 u.)", d: "Trigo, carne y piñones. Crujiente por fuera, jugoso por dentro.", p: "$7" },
  { n: "Baklava surtida", d: "Hojaldre en capas, pistacho, nuez y almíbar de azahar. Hecha aquí, todos los días.", p: "$6" },
  { n: "Café de especialidad", d: "Espresso, cortado o filtrado. Grano seleccionado y extracción cuidada.", p: "$2,5" },
  { n: "Desayuno libanés", d: "Labneh, zaatar, aceitunas, huevo, tomate y pan árabe. Para empezar bien.", p: "$9" },
  { n: "Parrilla libanesa", d: "Shish taouk, kafta y arroz con fideos. Plato fuerte para la terraza Beirut.", p: "$16" },
  { n: "Narguile de la casa", d: "Sabores clásicos y de temporada, con servicio de carbón durante toda la sesión.", p: "$12" },
];

const resenas = [
  {
    t: "El café",
    d: "Clientes habituales lo describen como uno de los mejores que han probado en la zona; muchos vuelven solo por eso.",
  },
  {
    t: "La dulcería árabe",
    d: "El comentario que más se repite: la repostería es simplemente deliciosa, y rara vez sobra en la vitrina.",
  },
  {
    t: "El shawarma",
    d: "Aparece de forma constante entre los mejores de Lechería, tanto por sazón como por porción.",
  },
  {
    t: "La decoración",
    d: "Quienes visitan destacan que el local se distingue: no se siente genérico, tiene carácter propio.",
  },
  {
    t: "La variedad",
    d: "Menú amplio más tienda: se puede desayunar, cenar y salir con especias, frutos secos y dulces importados.",
  },
  {
    t: "El lugar lleno",
    d: "El estacionamiento suele estar copado. Es un sitio consolidado, no una apertura reciente.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const latticeStyle = { ["--lattice-url" as string]: `url(${lattice})` };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(0,0,0,.9)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-lg leading-none">
              D
            </span>
            <span className="font-display text-lg tracking-tight text-sand">Casa Dana</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="label-xs text-sand/70 transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="label-xs rounded-sm bg-primary px-4 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Reservar mesa
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-ink pt-28 pb-16 lg:pb-24">
        <div className="lattice absolute inset-0 opacity-[0.07]" style={latticeStyle} aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="label-xs text-accent">Lechería · desde temprano hasta tarde</p>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,7vw,4.9rem)] leading-[0.95] text-sand">
              Venezuela y Líbano,{" "}
              <span className="italic text-primary">en la misma mesa</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/75 sm:text-lg">
              Café de especialidad, shawarma y mezze, dulcería árabe hecha en casa y una tienda de
              especias y frutos secos. Desayuno, almuerzo, cena y sobremesa: Casa Dana abre todo el
              día para quedarse un rato.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="label-xs rounded-sm bg-primary px-7 py-4 text-center text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Reservar mesa por WhatsApp
              </a>
              <a
                href="#menu"
                className="label-xs rounded-sm border border-accent/50 px-7 py-4 text-center text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Ver el menú
              </a>
            </div>
            <p className="mt-6 font-display text-lg text-sand/80">
              ¡Casa Dana, la casa de todos! <span className="text-primary">💗</span>
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-sm border border-accent/25" aria-hidden />
            <img
              src={heroArt}
              width={1200}
              height={1408}
              alt="Ilustración de una bandeja árabe con café, baklava, mezze y narguile"
              className="relative w-full rounded-sm object-cover shadow-[var(--shadow-lux)]"
            />
          </div>
        </div>
        <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-y border-sand/10 px-0 text-center lg:grid-cols-4">
          {[
            ["7:00 am", "Abrimos con el café"],
            ["Terraza Beirut", "Entrada propia"],
            ["Narguile", "Sobremesa larga"],
            ["Tienda", "Especias e importados"],
          ].map(([a, b]) => (
            <div key={a} className="bg-ink px-4 py-6">
              <p className="font-display text-xl text-accent">{a}</p>
              <p className="label-xs mt-2 text-sand/50">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="label-xs text-primary">La casa</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Una casa libanesa con acento venezolano
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Casa Dana nació en la avenida principal de Lechería con una idea simple: que la
              herencia libanesa de la familia se sirviera con la calidez de aquí. Por eso la carta
              va del café de la mañana al mezze de la noche sin sentirse de dos mundos distintos.
            </p>
            <p>
              Lo que se cocina se hace en casa: la dulcería árabe sale del horno propio, el shawarma
              se arma al momento y el café se extrae con criterio de barra de especialidad. Al lado,
              el abasto gourmet guarda las especias, semillas, frutos secos y dulces importados con
              los que se cocina.
            </p>
            <p className="font-display text-2xl text-foreground">
              No es un restaurante para pasar rápido. Es un punto de encuentro.
            </p>
          </div>
        </div>
      </section>

      <div className="rule-gold mx-auto h-px max-w-7xl" />

      {/* PILARES */}
      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <p className="label-xs text-primary">Los cuatro pilares</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
          Cuatro cocinas bajo un mismo techo
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pilares.map((p) => (
            <article
              key={p.tag}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-lux)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: p.color }}
                aria-hidden
              />
              <p className="label-xs" style={{ color: p.color }}>
                {p.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl">{p.titulo}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.texto}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.items.map((i) => (
                  <li key={i} className="rounded-sm bg-secondary px-3 py-1.5 text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* INSIGNIAS */}
      <section id="insignias" className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="lattice absolute inset-0 opacity-[0.06]" style={latticeStyle} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5">
          <p className="label-xs text-accent">Platos y productos insignia</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-sand sm:text-5xl">
            Lo que la gente vuelve a pedir
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {insignias.map((i) => (
              <div
                key={i.n}
                className="flex items-baseline gap-4 border-b border-sand/10 py-5"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl text-sand">{i.n}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sand/60">{i.d}</p>
                </div>
                <span className="font-display text-xl text-accent">{i.p}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-sand/45">
            Precios referenciales; la carta completa y del día se consulta en el local o por
            WhatsApp.
          </p>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-sm border border-primary/25" aria-hidden />
            <img
              src={terrazaArt}
              loading="lazy"
              width={1200}
              height={912}
              alt="Ilustración de una terraza nocturna con arcos, celosías y faroles"
              className="relative w-full rounded-sm object-cover"
            />
          </div>
          <div>
            <p className="label-xs text-primary">La experiencia</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Terraza Beirut, narguile y sobremesa
            </h2>
            <div className="mt-8 space-y-6">
              {[
                [
                  "Terraza Beirut",
                  "Nuestra terraza dedicada a la cocina libanesa, con entrada propia por las escaleras del estacionamiento — o desde el local principal, como prefieras.",
                ],
                [
                  "Zona de narguile",
                  "Para las noches que se estiran: carbón atendido, sabores clásicos y de temporada, y espacio para conversar sin prisa.",
                ],
                [
                  "Una decoración con carácter",
                  "Lo primero que la gente comenta al entrar. Cada rincón está pensado: nada de local genérico de franquicia.",
                ],
                [
                  "Orden y comodidad",
                  "Local limpio, organizado y amplio, con mesas para dos y para grupos largos.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-accent pl-5">
                  <h3 className="font-display text-xl">{t}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="label-xs text-primary">Lo que dicen en Lechería</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            El resumen honesto de las reseñas
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resenas.map((r) => (
              <div key={r.t} className="rounded-sm border border-border bg-card p-7">
                <p className="label-xs text-accent-foreground/60">{r.t}</p>
                <p className="mt-3 font-display text-lg leading-snug">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISITA */}
      <section id="visita" className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="lattice absolute inset-0 opacity-[0.07]" style={latticeStyle} aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="label-xs text-accent">Visítanos</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-sand sm:text-5xl">
              Te esperamos en la principal de Lechería
            </h2>
            <dl className="mt-10 space-y-7 text-sand/80">
              <div>
                <dt className="label-xs text-accent">Dirección</dt>
                <dd className="mt-1.5 font-display text-xl text-sand">
                  Av. Diego Bautista Urbaneja, Calle El Limón, Lechería.
                </dd>
              </div>
              <div>
                <dt className="label-xs text-accent">Horario</dt>
                <dd className="mt-1.5 text-lg">
                  Lunes a sábado · 7:00 am – 10:00 pm
                  <br />
                  Domingos · 9:00 am – 9:00 pm
                </dd>
              </div>
              <div>
                <dt className="label-xs text-accent">Teléfono / WhatsApp</dt>
                <dd className="mt-1.5 text-lg">+58 412-9427384</dd>
              </div>
            </dl>
            <div className="mt-9 rounded-sm border border-accent/30 bg-primary/10 p-6">
              <p className="label-xs text-accent">Sobre el estacionamiento</p>
              <p className="mt-2 leading-relaxed text-sand/80">
                Somos un sitio muy visitado y el estacionamiento es limitado. Reserva tu mesa o
                llega un poco antes de la hora pico y te recibimos con calma — aquí nadie come
                apurado.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="label-xs rounded-sm bg-primary px-7 py-4 text-center text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Reservar por WhatsApp
              </a>
              <a
                href="https://instagram.com/casadana"
                target="_blank"
                rel="noreferrer"
                className="label-xs rounded-sm border border-accent/50 px-7 py-4 text-center text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Instagram @casadana
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-sand/15">
            <iframe
              title="Mapa de Casa Dana en Lechería"
              src="https://www.google.com/maps?q=Av.%20Diego%20Bautista%20Urbaneja%2C%20Calle%20El%20Lim%C3%B3n%2C%20Lecher%C3%ADa&output=embed"
              loading="lazy"
              className="h-[380px] w-full grayscale-[.2] lg:h-full lg:min-h-[520px]"
            />
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="label-xs block bg-sand/10 px-5 py-4 text-center text-sand hover:bg-sand/20"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pb-12 pt-4">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rule-gold h-px" />
          <div className="grid gap-10 pt-12 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl text-sand">Casa Dana</p>
              <p className="mt-2 text-sand/60">¡La casa de todos! 💗</p>
              <p className="mt-4 text-sm text-sand/45">RIF J-40238701-6</p>
            </div>
            <div>
              <p className="label-xs text-accent">Navegación</p>
              <ul className="mt-4 space-y-2">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sand/70 hover:text-accent">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-xs text-accent">Contacto</p>
              <ul className="mt-4 space-y-2 text-sand/70">
                <li>
                  <a href="tel:+584129427384" className="hover:text-accent">
                    +58 412-9427384
                  </a>
                </li>
                <li>
                  <a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-accent">
                    Av. Diego Bautista Urbaneja, Calle El Limón, Lechería.
                  </a>
                </li>
                <li>Lun–Sáb 7:00 am – 10:00 pm</li>
                <li>Dom 9:00 am – 9:00 pm</li>
              </ul>
            </div>
            <div>
              <p className="label-xs text-accent">Redes</p>
              <ul className="mt-4 space-y-2 text-sand/70">
                <li>
                  <a
                    href="https://instagram.com/casadana"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    Instagram @casadana
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@casadana.ve"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    TikTok casadana.ve
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-accent">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-xs text-sand/35">
            © {new Date().getFullYear()} Casa Dana · Lechería, Venezuela.
          </p>
        </div>
      </footer>

      {/* CTA flotante móvil */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="label-xs fixed inset-x-4 bottom-4 z-50 rounded-sm bg-primary py-4 text-center text-primary-foreground shadow-[var(--shadow-lux)] lg:hidden"
      >
        Reservar mesa · WhatsApp
      </a>
    </div>
  );
}
