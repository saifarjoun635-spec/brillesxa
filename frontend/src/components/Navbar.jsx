import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { NAV_LINKS, TEL_HREF } from "../data/content";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${
        scrolled
          ? "bg-white/85 border-b border-slate-200 shadow-[0_8px_32px_rgba(30,58,138,0.06)]"
          : "bg-white/60 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link to="/" data-testid="nav-logo-link" aria-label="Accueil BRILLEXA+">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, "")}`}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-brand"
                    : "text-slate-600 hover:text-brand"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand/10"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={TEL_HREF}
            data-testid="nav-call-button"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-dark sm:flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Appeler
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-semibold ${
                      isActive ? "bg-brand/10 text-brand" : "text-slate-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={TEL_HREF}
                data-testid="mobile-call-button"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> Appeler maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
