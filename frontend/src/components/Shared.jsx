import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MessageSquareText, Mail } from "lucide-react";
import { SMS_HREF, EMAIL_HREF } from "../data/content";

export const ContactButtons = ({ className = "", variant = "light" }) => {
  const navigate = useNavigate();
  const smsClass =
    variant === "light"
      ? "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark"
      : "bg-white text-brand hover:bg-blue-50";
  const emailClass =
    variant === "light"
      ? "border border-brand/20 bg-white text-brand hover:bg-brand/5"
      : "border border-white/30 text-white hover:bg-white/10";

  const go = (href) => {
    navigate("/merci");
    setTimeout(() => {
      window.location.href = href;
    }, 120);
  };

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <button
        type="button"
        onClick={() => go(SMS_HREF)}
        data-testid="sms-cta-button"
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${smsClass}`}
      >
        <MessageSquareText className="h-5 w-5" strokeWidth={2.3} />
        Soumission par texto
      </button>
      <button
        type="button"
        onClick={() => go(EMAIL_HREF)}
        data-testid="email-cta-button"
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${emailClass}`}
      >
        <Mail className="h-5 w-5" strokeWidth={2.3} />
        Soumission par courriel
      </button>
    </div>
  );
};

export const Section = ({ children, className = "", id, ...rest }) => (
  <motion.section
    id={id}
    {...rest}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);
