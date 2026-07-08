import { Home, Building2, Sparkles, CalendarCheck, Check } from "lucide-react";
import { Section, ContactButtons } from "../components/Shared";
import { SERVICES } from "../data/content";

const ICONS = { Home, Building2, Sparkles, CalendarCheck };

export default function Services() {
  return (
    <div data-testid="page-services">
      {/* HEADER */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Nos services</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Des solutions de nettoyage pour chaque besoin
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-lg">
            Que ce soit pour votre domicile ou votre entreprise, notre équipe
            s'adapte à vos exigences avec rigueur et professionnalisme.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-5 py-20 lg:px-8">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          const reversed = i % 2 === 1;
          return (
            <Section
              key={s.id}
              id={s.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{s.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative ${reversed ? "lg:order-1" : ""}`}>
                <div
                  className={`absolute -z-10 h-full w-full rounded-[2rem] bg-brand/10 ${
                    reversed ? "-left-5 -top-5" : "-right-5 -top-5"
                  }`}
                />
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl shadow-brand/10"
                />
              </div>
            </Section>
          );
        })}
      </div>

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
