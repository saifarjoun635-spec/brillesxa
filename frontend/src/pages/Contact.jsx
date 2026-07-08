import { Phone, Mail, Globe, MessageSquareText, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT, TEL_HREF, EMAIL_HREF, SMS_HREF } from "../data/content";
import { QuoteForm } from "../components/QuoteForm";

export default function Contact() {
  return (
    <div data-testid="page-contact">
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="brillexa-noise pointer-events-none absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-light/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Contact & Soumission</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Obtenez votre soumission gratuite
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-blue-100">
            Aucun formulaire compliqué. Contactez-nous directement par texto ou
            courriel : c'est rapide, simple et sans engagement.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4"
          >
            <a
              href={SMS_HREF}
              data-testid="contact-sms-button"
              className="group flex items-center justify-between rounded-2xl bg-white px-6 py-5 text-left text-brand transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <MessageSquareText className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">Envoyer un texto</span>
                  <span className="block text-sm text-slate-500">Réponse rapide au {CONTACT.phone}</span>
                </span>
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={EMAIL_HREF}
              data-testid="contact-email-button"
              className="group flex items-center justify-between rounded-2xl border border-white/25 px-6 py-5 text-left transition-colors duration-200 hover:bg-white/10"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Mail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">Envoyer un courriel</span>
                  <span className="block break-all text-sm text-blue-100">{CONTACT.email}</span>
                </span>
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={TEL_HREF}
              data-testid="contact-call-button"
              className="group flex items-center justify-between rounded-2xl border border-white/25 px-6 py-5 text-left transition-colors duration-200 hover:bg-white/10"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">Nous appeler</span>
                  <span className="block text-sm text-blue-100">{CONTACT.phone}</span>
                </span>
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FULL SUBMISSION FORM */}
      <section className="mx-auto max-w-3xl px-5 pt-20 lg:px-8" data-testid="contact-form-section">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light">Formulaire de soumission</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Décrivez votre projet en détail
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Remplissez ce formulaire complet et envoyez-le en un clic par courriel ou
            par texto. Nous vous répondrons rapidement avec votre soumission.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <QuoteForm />
        </motion.div>
      </section>

      {/* INFO CARDS */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8" data-testid="contact-info">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Phone, title: "Téléphone", value: CONTACT.phone, href: TEL_HREF },
            { icon: Mail, title: "Courriel", value: CONTACT.email, href: EMAIL_HREF },
            { icon: Globe, title: "Site web", value: CONTACT.website, href: null },
          ].map((c) => {
            const Card = c.href ? "a" : "div";
            return (
              <Card
                key={c.title}
                href={c.href || undefined}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <c.icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-slate-900">{c.title}</h3>
                <p className="mt-1 break-all text-sm text-slate-500">{c.value}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-3xl bg-brand/5 p-7">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
            <MapPin className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-slate-900">Zone desservie</h3>
            <p className="mt-1 text-sm text-slate-600">
              Grande région de Montréal et environs. Contactez-nous pour vérifier la
              disponibilité dans votre secteur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
