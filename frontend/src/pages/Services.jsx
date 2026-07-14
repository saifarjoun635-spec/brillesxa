import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import {
  Home, Building2, Sparkles, Truck, BedDouble, HardHat, PartyPopper, Leaf, ArrowRight,
} from "lucide-react";
import { ContactButtons } from "../components/Shared";
import { SERVICES } from "../data/content";

const ICONS = { Home, Building2, Sparkles, Truck, BedDouble, HardHat, PartyPopper, Leaf };

export default function Services() {
  return (
    <div data-testid="page-services">
      <SEO
        title="Nos Services de Nettoyage — Résidentiel, Commercial & Plus"
        description="Découvrez tous les services de nettoyage de BRILLEXA+ à Montréal : ménage résidentiel, commercial, grand ménage, déménagement, Airbnb, post-construction. Soumission gratuite."
        canonical="/services"
      />
      {/* HEADER */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Nos services</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Des solutions de nettoyage pour chaque besoin
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-lg">
            Résidentiel, commercial, grand ménage ou nettoyage écologique : choisissez
            un service pour en savoir plus et obtenir votre soumission gratuite.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
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
                  data-testid={`service-card-${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,58,138,0.1)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-brand shadow-lg backdrop-blur">
                      <Icon className="h-5 w-5" strokeWidth={2.3} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all group-hover:gap-3">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20" data-testid="services-cta">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Demandez votre soumission gratuite
          </h2>
          <p className="mt-4 text-slate-600">
            Dites-nous ce dont vous avez besoin, on s'occupe du reste.
          </p>
          <ContactButtons className="mt-8 justify-center" />
        </div>
      </section>
    </div>
  );
}
