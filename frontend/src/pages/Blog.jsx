import { ArrowRight } from "lucide-react";
import { Section, ContactButtons } from "../components/Shared";
import { POSTS } from "../data/content";

export default function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <div data-testid="page-blog">
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Le blogue</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Astuces & conseils pour des espaces éclatants
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-lg">
            Nos meilleurs trucs de professionnels pour garder votre maison et votre
            commerce impeccables, plus longtemps.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        {/* FEATURED */}
        <Section
          data-testid="blog-featured"
          className="group grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] lg:grid-cols-2"
        >
          <div className="relative overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">{featured.tag}</span>
              <span className="text-slate-400">{featured.date}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-slate-900 lg:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-slate-600">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Lire l'article <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Section>

        {/* GRID */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {rest.map((p, i) => (
            <Section
              key={p.id}
              data-testid={`blog-post-${i}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,58,138,0.08)]"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">{p.tag}</span>
                  <span className="text-slate-400">{p.date}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug text-slate-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Section>
          ))}
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Un espace à faire briller ?
          </h2>
          <p className="mt-4 text-slate-600">Passez de la lecture à l'action en un clic.</p>
          <ContactButtons className="mt-8 justify-center" />
        </div>
      </section>
    </div>
  );
}
