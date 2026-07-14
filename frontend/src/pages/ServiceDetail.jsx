import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import {
  Home, Building2, Sparkles, Truck, BedDouble, HardHat, PartyPopper, Leaf,
  Check, ArrowRight, ArrowLeft, Phone,
} from "lucide-react";
import { SERVICES, getService, TEL_HREF, CONTACT } from "../data/content";

const ICONS = { Home, Building2, Sparkles, Truck, BedDouble, HardHat, PartyPopper, Leaf };

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = ICONS[service.icon];
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div data-testid="page-service-detail">
      <SEO
        title={service.title + " à Montréal"}
        description={service.description + " Soumission gratuite en 24h — BRILLEXA+ 438-525-2631."}
        canonical={"/services/" + service.slug}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/50" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <Link
            to="/services"
            data-testid="service-back-link"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-100 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Tous les services
          </Link>
          <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-light">{service.tagline}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed text-slate-700"
        >
          {service.description}
        </motion.p>

        <h2 className="mt-12 font-display text-2xl font-extrabold tracking-tight text-slate-900">
          Ce qui est inclus
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-slate-700">{f}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA to form */}
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-brand px-6 py-10 text-center sm:px-12">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Obtenez votre soumission gratuite
          </h3>
          <p className="mx-auto mt-3 max-w-md text-blue-100">
            Sans engagement. Remplissez le formulaire et notre équipe vous répond
            sous 24 h.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to={`/contact?service=${service.slug}`}
              data-testid="service-quote-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-brand transition-transform duration-200 hover:-translate-y-0.5"
            >
              Demander une soumission <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={TEL_HREF}
              data-testid="service-call-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Phone className="h-5 w-5" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-900">
            Autres services
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((s) => {
              const OIcon = ICONS[s.icon];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  data-testid={`related-service-${s.slug}`}
                  className="group rounded-3xl border border-slate-100 bg-slate-50/60 p-6 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,58,138,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <OIcon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
