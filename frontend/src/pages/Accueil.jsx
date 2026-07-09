import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home, Building2, Sparkles, Truck, BedDouble, HardHat, PartyPopper, Leaf,
  ArrowRight, Quote, GraduationCap, Clock, BadgeDollarSign, ShieldCheck, CalendarClock,
} from "lucide-react";
import { Section, ContactButtons } from "../components/Shared";
import { SERVICES, TESTIMONIALS, WHY, CONTACT } from "../data/content";

const ICONS = { Home, Building2, Sparkles, Truck, BedDouble, HardHat, PartyPopper, Leaf };
const WHY_ICONS = { GraduationCap, Clock, BadgeDollarSign, ShieldCheck, Leaf, CalendarClock };

export default function Accueil() {
  const teaser = SERVICES.slice(0, 6);

  return (
    <div data-testid="page-accueil">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="brillexa-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
              <Sparkles className="h-3.5 w-3.5" /> Nettoyage · {CONTACT.region}
            </span>
            <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              L'excellence du nettoyage, <span className="text-brand">résidentiel & commercial.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 lg:text-lg">
              Bien plus qu'un simple ménage : BRILLEXA+ sublime l'atmosphère de vos
              espaces. Obtenez votre soumission gratuite en un clic.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                data-testid="hero-quote-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Obtenir un devis gratuit <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-services-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-7 py-4 text-base font-semibold text-brand transition-colors duration-200 hover:bg-brand/5"
              >
                Voir nos services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] bg-brand/10 sm:-right-6 sm:-top-6" />
            <img
              src={SERVICES[0].image}
              alt="Intérieur résidentiel propre et lumineux"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-brand/20"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-slate-100 bg-white/95 px-5 py-3 shadow-xl backdrop-blur sm:left-6 sm:px-6 sm:py-4">
              <p className="font-display text-2xl font-extrabold text-brand sm:text-3xl">24 h</p>
              <p className="text-xs font-semibold text-slate-500">Devis garanti</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <Section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Nos services</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Un service adapté à chaque espace
            </h2>
          </div>
          <Link
            to="/services"
            data-testid="home-all-services-link"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
          >
            Voir tous les services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teaser.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`home-service-card-${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,58,138,0.1)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all group-hover:gap-3">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-16 lg:py-20" data-testid="home-why">
        <Section className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Pourquoi Brillexa ?</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Le nouveau standard du nettoyage
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => {
              const Icon = WHY_ICONS[w.icon];
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50/60 p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{w.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-20" data-testid="home-testimonials">
        <Section className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Témoignages</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                data-testid={`testimonial-${i}`}
                className="relative rounded-3xl border border-slate-100 bg-white p-7"
              >
                <Quote className="h-8 w-8 text-brand/20" fill="currentColor" />
                <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">
                  <span className="font-display text-xl font-bold text-brand">«</span>
                  <span> {t.quote} </span>
                  <span className="font-display text-xl font-bold text-brand">»</span>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Section>
      </section>

      {/* CTA */}
      <Section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-6 py-14 text-center sm:px-8 lg:px-16 lg:py-16">
          <div className="brillexa-noise pointer-events-none absolute inset-0 opacity-10" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-light/20 blur-3xl" />
          <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à voir votre espace briller ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-blue-100">
            Obtenez un devis gratuit en 24 heures, sans engagement.
          </p>
          <div className="relative mt-8 flex justify-center">
            <ContactButtons variant="dark" />
          </div>
        </div>
      </Section>
    </div>
  );
}
