import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, Clock, ArrowRight, Home } from "lucide-react";
import { CONTACT, TEL_HREF, EMAIL_HREF } from "../data/content";

export default function Merci() {
  const { state } = useLocation();
  const nom = state?.nom;
  const service = state?.service;

  return (
    <div data-testid="page-merci" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-light/10 blur-3xl" />
      <div className="mx-auto max-w-2xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10"
        >
          <CheckCircle2 className="h-11 w-11 text-brand" strokeWidth={2.2} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Merci{nom ? `, ${nom}` : ""} !
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600"
        >
          Votre demande de soumission{service ? ` pour « ${service} »` : ""} a bien été
          préparée. Assurez-vous de l'envoyer depuis votre application, puis notre
          équipe vous répondra rapidement avec votre devis gratuit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mx-auto mt-10 grid max-w-md gap-4 text-left"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Clock className="h-5 w-5" />
            </span>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Réponse sous 24 h.</span> Nous
              vous contactons pour confirmer les détails.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a
              href={TEL_HREF}
              data-testid="merci-call"
              className="flex flex-col items-center gap-1 rounded-2xl border border-slate-100 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <Phone className="h-6 w-6 text-brand" />
              <span className="mt-1 text-xs font-semibold text-slate-500">Appeler</span>
              <span className="text-sm font-bold text-slate-900">{CONTACT.phone}</span>
            </a>
            <a
              href={EMAIL_HREF}
              data-testid="merci-email"
              className="flex flex-col items-center gap-1 rounded-2xl border border-slate-100 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6 text-brand" />
              <span className="mt-1 text-xs font-semibold text-slate-500">Courriel</span>
              <span className="break-all text-center text-xs font-bold text-slate-900">{CONTACT.email}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/"
            data-testid="merci-home-button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            <Home className="h-5 w-5" /> Retour à l'accueil
          </Link>
          <Link
            to="/services"
            data-testid="merci-services-button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 px-7 py-3.5 text-base font-semibold text-brand transition-colors duration-200 hover:bg-brand/5"
          >
            Voir nos services <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
