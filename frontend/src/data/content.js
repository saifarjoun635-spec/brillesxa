export const CONTACT = {
  phone: "438-525-2631",
  phoneRaw: "4385252631",
  email: "Brillexa.cleaning@gmail.com",
  website: "www.brillexacleaning.ca",
};

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    id: "residentiel",
    title: "Nettoyage Résidentiel",
    icon: "Home",
    short: "Un chez-vous impeccable, du plancher au plafond.",
    description:
      "Nous prenons soin de votre maison comme si c'était la nôtre. Cuisine, salles de bain, chambres et espaces de vie : chaque recoin brille après notre passage.",
    features: ["Poussière et surfaces", "Salles de bain désinfectées", "Planchers et aspirateur", "Cuisine dégraissée"],
    image:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMG1vZGVybiUyMGxpdmluZyUyMHJvb20lMjBpbnRlcmlvcnxlbnwwfHx8fDE3ODM1MzAyMzJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "commercial",
    title: "Nettoyage Commercial",
    icon: "Building2",
    short: "Des bureaux et commerces qui inspirent confiance.",
    description:
      "Bureaux, commerces, cliniques ou espaces partagés : nous offrons un service professionnel discret et rigoureux, adapté à vos horaires.",
    features: ["Bureaux et postes de travail", "Aires communes", "Salles de conférence", "Horaires flexibles"],
    image:
      "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzgzNTMwMjMyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "grand-menage",
    title: "Grand Ménage",
    icon: "Sparkles",
    short: "Le grand coup d'éclat, en profondeur.",
    description:
      "Déménagement, fin de bail ou nettoyage saisonnier : un service complet en profondeur pour retrouver un espace comme neuf.",
    features: ["Nettoyage en profondeur", "Intérieur des armoires", "Plinthes et fenêtres", "Électroménagers"],
    image:
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzgzNTMwMjMyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "entretien",
    title: "Entretien Régulier",
    icon: "CalendarCheck",
    short: "La propreté qui dure, semaine après semaine.",
    description:
      "Un entretien planifié selon votre rythme : hebdomadaire, aux deux semaines ou mensuel. La tranquillité d'esprit, en toute constance.",
    features: ["Horaire personnalisé", "Même équipe de confiance", "Tarifs avantageux", "Sans engagement"],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MTA3NjF8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzfGVufDB8fHx8MTc4MzUzMDIzMnww&ixlib=rb-4.1.0&q=85",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marie-Claude Tremblay",
    role: "Résidentielle · Laval",
    quote:
      "Une équipe ponctuelle et minutieuse. Ma maison n'a jamais été aussi propre, et l'odeur de fraîcheur est incroyable !",
  },
  {
    name: "Jean-François Bouchard",
    role: "Bureau commercial · Montréal",
    quote:
      "Service impeccable pour nos bureaux. Discrets, professionnels et toujours fiables. Je recommande sans hésiter.",
  },
  {
    name: "Sophie Lavoie",
    role: "Grand ménage · Longueuil",
    quote:
      "Après mon déménagement, tout brillait comme du neuf. Un travail soigné du début à la fin. Merci BRILLEXA+ !",
  },
];

export const POSTS = [
  {
    id: "routine-maison-propre",
    title: "5 habitudes pour garder une maison propre sans effort",
    excerpt:
      "De petits gestes quotidiens qui font toute la différence entre les visites de notre équipe.",
    date: "12 mai 2026",
    tag: "Astuces",
    image:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMG1vZGVybiUyMGxpdmluZyUyMHJvb20lMjBpbnRlcmlvcnxlbnwwfHx8fDE3ODM1MzAyMzJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "bureau-productif",
    title: "Un bureau propre, une équipe plus productive",
    excerpt:
      "Pourquoi l'entretien professionnel de vos espaces de travail améliore le bien-être et l'image de marque.",
    date: "28 avril 2026",
    tag: "Commercial",
    image:
      "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzgzNTMwMjMyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "produits-ecologiques",
    title: "Produits écologiques : propreté et respect de l'environnement",
    excerpt:
      "Notre approche pour un nettoyage efficace tout en prenant soin de votre santé et de la planète.",
    date: "10 avril 2026",
    tag: "Écologie",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MTA3NjF8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzfGVufDB8fHx8MTc4MzUzMDIzMnww&ixlib=rb-4.1.0&q=85",
  },
];

const smsBody = encodeURIComponent(
  "Bonjour BRILLEXA+, j'aimerais obtenir une soumission pour un service de nettoyage."
);
const emailSubject = encodeURIComponent("Demande de soumission - BRILLEXA+");
const emailBody = encodeURIComponent(
  "Bonjour BRILLEXA+,\n\nJ'aimerais obtenir une soumission pour un service de nettoyage.\n\nType de service : \nAdresse : \nSuperficie / nombre de pièces : \nDate souhaitée : \n\nMerci !"
);

export const SMS_HREF = `sms:${CONTACT.phoneRaw}?body=${smsBody}`;
export const EMAIL_HREF = `mailto:${CONTACT.email}?subject=${emailSubject}&body=${emailBody}`;
export const TEL_HREF = `tel:${CONTACT.phoneRaw}`;
