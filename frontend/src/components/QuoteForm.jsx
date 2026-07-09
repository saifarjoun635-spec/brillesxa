import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MessageSquareText, Mail } from "lucide-react";
import { toast } from "sonner";
import { CONTACT, SERVICES } from "../data/content";

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Autre / je ne sais pas"];
const FREQ_OPTIONS = ["Une seule fois", "Hebdomadaire", "Aux deux semaines", "Mensuel"];

const buildBody = (f) =>
  `Nom : ${f.nom}
Téléphone : ${f.telephone}
Courriel : ${f.courriel}
Service souhaité : ${f.service}
Fréquence : ${f.frequence}
Adresse : ${f.adresse}
Superficie / nombre de pièces : ${f.superficie}
Date souhaitée : ${f.date}

Détails supplémentaires :
${f.message || "—"}`;

export const QuoteForm = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const preset = SERVICES.find((s) => s.slug === params.get("service"));

  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    courriel: "",
    service: preset ? preset.title : SERVICE_OPTIONS[0],
    frequence: FREQ_OPTIONS[0],
    adresse: "",
    superficie: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    if (preset) setForm((f) => ({ ...f, service: preset.title }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    if (!form.nom.trim()) {
      toast.error("Veuillez indiquer votre nom.");
      return false;
    }
    if (!form.telephone.trim() && !form.courriel.trim()) {
      toast.error("Ajoutez au moins un téléphone ou un courriel.");
      return false;
    }
    return true;
  };

  const finish = (href) => {
    window.location.href = href;
    setTimeout(
      () => navigate("/merci", { state: { nom: form.nom, service: form.service } }),
      500
    );
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Demande de soumission - ${form.service}`);
    const body = encodeURIComponent(`Bonjour BRILLEXA+,\n\nJ'aimerais obtenir une soumission.\n\n${buildBody(form)}\n\nMerci !`);
    finish(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`);
  };

  const sendSms = () => {
    if (!validate()) return;
    const body = encodeURIComponent(`Soumission BRILLEXA+\n${buildBody(form)}`);
    finish(`sms:${CONTACT.phoneRaw}?body=${body}`);
  };

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base sm:text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20";
  const labelC = "mb-1.5 block text-sm font-semibold text-slate-700";

  return (
    <form
      data-testid="quote-form"
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
      className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-[0_8px_40px_rgba(30,58,138,0.06)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelC} htmlFor="qf-nom">Nom complet *</label>
          <input id="qf-nom" data-testid="qf-nom" className={field} value={form.nom} onChange={update("nom")} placeholder="Votre nom" />
        </div>
        <div>
          <label className={labelC} htmlFor="qf-tel">Téléphone</label>
          <input id="qf-tel" data-testid="qf-telephone" className={field} value={form.telephone} onChange={update("telephone")} placeholder="438-000-0000" inputMode="tel" />
        </div>
        <div>
          <label className={labelC} htmlFor="qf-courriel">Courriel</label>
          <input id="qf-courriel" data-testid="qf-courriel" className={field} value={form.courriel} onChange={update("courriel")} placeholder="vous@courriel.com" inputMode="email" />
        </div>
        <div>
          <label className={labelC} htmlFor="qf-service">Service souhaité</label>
          <select id="qf-service" data-testid="qf-service" className={field} value={form.service} onChange={update("service")}>
            {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelC} htmlFor="qf-freq">Fréquence</label>
          <select id="qf-freq" data-testid="qf-frequence" className={field} value={form.frequence} onChange={update("frequence")}>
            {FREQ_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelC} htmlFor="qf-date">Date souhaitée</label>
          <input id="qf-date" data-testid="qf-date" type="date" className={field} value={form.date} onChange={update("date")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelC} htmlFor="qf-adresse">Adresse</label>
          <input id="qf-adresse" data-testid="qf-adresse" className={field} value={form.adresse} onChange={update("adresse")} placeholder="Rue, ville, code postal" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelC} htmlFor="qf-superficie">Superficie / nombre de pièces</label>
          <input id="qf-superficie" data-testid="qf-superficie" className={field} value={form.superficie} onChange={update("superficie")} placeholder="Ex : 3 chambres, 2 salles de bain / 1200 pi²" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelC} htmlFor="qf-message">Détails supplémentaires</label>
          <textarea id="qf-message" data-testid="qf-message" rows={4} className={`${field} resize-none`} value={form.message} onChange={update("message")} placeholder="Décrivez vos besoins, demandes particulières, etc." />
        </div>
      </div>

      <p className="mt-5 text-xs text-slate-400">
        * Champ requis. En envoyant, votre demande s'ouvre dans votre application
        courriel ou texto, déjà remplie, puis vous êtes redirigé vers une page de
        confirmation. Aucune donnée n'est stockée.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          data-testid="qf-submit-email"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-dark active:translate-y-0"
        >
          <Mail className="h-5 w-5" /> Envoyer par courriel
        </button>
        <button
          type="button"
          onClick={sendSms}
          data-testid="qf-submit-sms"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-7 py-4 text-base font-semibold text-brand transition-colors duration-200 hover:bg-brand/5"
        >
          <MessageSquareText className="h-5 w-5" /> Envoyer par texto
        </button>
      </div>
    </form>
  );
};
