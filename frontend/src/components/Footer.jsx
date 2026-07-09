import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MessageSquareText, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, SERVICES, SOCIALS, CONTACT, TEL_HREF, EMAIL_HREF, SMS_HREF } from "../data/content";

const SOCIAL_ICONS = { Facebook, Instagram, Linkedin };

export const Footer = () => {
  return (
    <footer className="mt-auto bg-brand-dark text-white" data-testid="main-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src="/logo_brillexa_new.png"
            alt="BRILLEXA+"
            className="h-16 w-auto object-contain rounded-xl"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-100/80">
            On fait briller vos espaces comme jamais. Nettoyage professionnel dans le
            {" "}{CONTACT.region}.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200">Navigation</h4>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-testid={`footer-nav-${link.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                  className="text-sm text-blue-100/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200">Services</h4>
          <ul className="mt-4 space-y-3">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-blue-100/80 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200">Coordonnées</h4>
          <ul className="mt-4 space-y-3 text-sm text-blue-100/80">
            <li>
              <a href={TEL_HREF} className="flex items-center gap-3 hover:text-white" data-testid="footer-phone">
                <Phone className="h-4 w-4 shrink-0" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="flex items-center gap-3 break-all hover:text-white" data-testid="footer-email">
                <Mail className="h-4 w-4 shrink-0" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 shrink-0" /> {CONTACT.website}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" /> {CONTACT.region}
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={SMS_HREF} data-testid="footer-sms-button" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand transition-transform duration-200 hover:-translate-y-0.5">
              <MessageSquareText className="h-3.5 w-3.5" /> Texto
            </a>
            <a href={EMAIL_HREF} data-testid="footer-email-button" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-white/10">
              <Mail className="h-3.5 w-3.5" /> Courriel
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-blue-100/60 lg:px-8">
          © {new Date().getFullYear()} BRILLEXA+. Tous droits réservés. · Un service impeccable à chaque fois.
        </div>
      </div>
    </footer>
  );
};
