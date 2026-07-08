import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Clock,
  Leaf,
  Quote,
} from "lucide-react";
import { Section, ContactButtons } from "../components/Shared";
import { SERVICES, TESTIMONIALS } from "../data/content";

const ICONS = { Home, Building2, Sparkles, CalendarCheck };

export default function Accueil() {
  return (
    <div data-testid="page-accueil">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="brillexa-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
              <Sparkles className="h-3.5 w-3.5" /> Résidentiel & Commercial
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              On fait <span className="text-brand">briller</span> vos espaces comme jamais.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 lg:text-lg">
              BRILLEXA+ offre un nettoyage professionnel, minutieux et fiable pour
              votre maison et votre commerce. Obtenez votre soumission en un clic.
            </p>
            <ContactButtons className="mt-8" />
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { icon: ShieldCheck, label: "Service assuré" },
                { icon: Clock, label: "Horaires flexibles" },
                { icon: Leaf, label: "Produits soignés" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <b.icon className="h-5 w-5 text-brand-light" /> {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-[2rem] bg-brand/10" />
            <img
              src={SERVICES[0].image}
              alt="Intérieur résidentiel propre et lumineux"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-brand/20"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-100 bg-white/95 px-6 py-4 shadow-xl backdrop-blur">
              <p className="font-display text-3xl font-extrabold text-brand">100%</p>
              <p className="text-xs font-semibold text-slate-500">Satisfaction visée</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <Section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
          >
            Voir tous les services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/services"
                  data-testid={`home-service-card-${s.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,58,138,0.1)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.short}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20" data-testid="home-testimonials">
        <Section className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Témoignages</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`testimonial-${i}`}
                className="relative rounded-3xl border border-slate-100 bg-slate-50/60 p-8"
              >
                <Quote className="h-8 w-8 text-brand/20" fill="currentColor" />
                <blockquote className="mt-3 text-slate-700">
                  <span className="font-display text-2xl font-bold text-brand">«</span>
                  <span className="align-middle"> {t.quote} </span>
                  <span className="font-display text-2xl font-bold text-brand">»</span>
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
      <Section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-8 py-16 text-center lg:px-16">
          <div className="brillexa-noise pointer-events-none absolute inset-0 opacity-10" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-light/20 blur-3xl" />
          <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à retrouver un espace impeccable ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-blue-100">
            Contactez-nous dès maintenant par texto ou courriel pour une soumission
            gratuite et sans engagement.
          </p>
          <ContactButtons className="relative mt-8 justify-center" variant="dark" />
        </div>
      </Section>
    </div>
  );
}
