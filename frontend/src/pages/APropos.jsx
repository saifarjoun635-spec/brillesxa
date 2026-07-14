import { ShieldCheck, Sparkles, HeartHandshake, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import { Section, ContactButtons } from "../components/Shared";
import { SERVICES } from "../data/content";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Confiance",
    text: "Une équipe fiable et discrète en qui vous pouvez avoir pleine confiance, chez vous comme au bureau.",
  },
  {
    icon: Sparkles,
    title: "Éclat",
    text: "Le souci du détail dans chaque recoin. Nous ne quittons pas les lieux tant que tout ne brille pas.",
  },
  {
    icon: HeartHandshake,
    title: "Respect",
    text: "Respect de vos espaces, de votre temps et de votre budget. Un service humain et à l'écoute.",
  },
  {
    icon: Clock,
    title: "Constance",
    text: "Un résultat impeccable à chaque visite, sans compromis. La régularité qui fait la différence.",
  },
];

export default function APropos() {
  return (
    <div data-testid="page-apropos">
      <SEO
        title="À Propos — BRILLEXA+"
        description="Découvrez l'équipe BRILLEXA+ : une équipe professionnelle de nettoyage dans le Grand Montréal, engagée pour la qualité, la confiance et le respect de vos espaces."
        canonical="/a-propos"
      />
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-light">À propos</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              La propreté, notre fierté
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 lg:text-lg">
              BRILLEXA+ est née d'une conviction simple : un espace propre change
              tout. Il apaise, inspire et redonne de l'énergie. C'est pourquoi nous
              mettons autant de cœur dans chaque mandat, résidentiel ou commercial.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              De la maison familiale au bureau d'affaires, notre équipe applique la
              même exigence : un travail soigné, ponctuel et fait avec passion. Notre
              devise le résume bien : <span className="font-semibold text-brand">« On fait briller vos espaces comme jamais. »</span>
            </p>
          </div>
          <div className="relative">
            <div className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2rem] bg-brand/10" />
            <img
              src={SERVICES[1].image}
              alt="Équipe de nettoyage professionnelle"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl shadow-brand/10"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <Section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Nos valeurs</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ce qui nous fait avancer
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              data-testid={`value-${i}`}
              className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <v.icon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <section className="bg-brand py-16" data-testid="apropos-stats">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {[
            { n: "4", l: "Services offerts" },
            { n: "100%", l: "Satisfaction visée" },
            { n: "7/7", l: "Horaires flexibles" },
            { n: "1", l: "Équipe dévouée" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">{s.n}</p>
              <p className="mt-2 text-sm font-medium text-blue-100">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Faisons briller votre espace ensemble
          </h2>
          <ContactButtons className="mt-8 justify-center" />
        </div>
      </section>
    </div>
  );
}
