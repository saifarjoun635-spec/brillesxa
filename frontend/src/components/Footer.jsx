import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MessageSquareText } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, CONTACT, TEL_HREF, EMAIL_HREF, SMS_HREF } from "../data/content";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-brand-dark text-white" data-testid="main-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-100/80">
            On fait briller vos espaces comme jamais. Nettoyage résidentiel et
            commercial de confiance, réalisé avec soin et rigueur.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SMS_HREF}
              data-testid="footer-sms-button"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MessageSquareText className="h-4 w-4" /> Texto
            </a>
            <a
              href={EMAIL_HREF}
              data-testid="footer-email-button"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Courriel
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Navigation
          </h4>
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
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200">
            Coordonnées
          </h4>
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
          </ul>
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
