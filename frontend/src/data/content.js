export const CONTACT = {
  phone: "438-525-2631",
  phoneRaw: "4385252631",
  email: "Brillexa.cleaning@gmail.com",
  website: "www.brillexacleaning.ca",
  region: "Grand Montréal",
};

export const SOCIALS = [
  { label: "Facebook", icon: "Facebook", url: "https://www.facebook.com/brillexa.cleaning" },
  { label: "Instagram", icon: "Instagram", url: "https://www.instagram.com/brillexa.cleaning" },
  { label: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/brillexa-cleaning-552a3138" },
];

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const PROMO = "15 % de rabais sur votre premier nettoyage — mentionnez le code CLEAN15";

export const SERVICES = [
  {
    slug: "residentiel",
    title: "Nettoyage Résidentiel",
    icon: "Home",
    short: "Un chez-vous impeccable, du plancher au plafond.",
    tagline: "À la semaine, aux deux semaines ou occasionnel.",
    description:
      "Service de ménage résidentiel dans le Grand Montréal, adapté à votre rythme de vie. Nos professionnels s'occupent de tout : du dépoussiérage et de l'aspirateur jusqu'au nettoyage en profondeur de votre cuisine et de vos salles de bain.",
    features: ["Poussière et surfaces", "Salles de bain désinfectées", "Planchers et aspirateur", "Cuisine dégraissée", "Entretien sur mesure", "Équipe de confiance"],
    image: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "commercial",
    title: "Nettoyage Commercial",
    icon: "Building2",
    short: "Des bureaux et commerces qui inspirent confiance.",
    tagline: "Horaires flexibles, sans perturber vos opérations.",
    description:
      "Service de nettoyage commercial pour bureaux, commerces et restaurants avec horaires flexibles. Nous assurons une propreté irréprochable grâce à nos interventions en dehors des heures de bureau, le soir et la fin de semaine.",
    features: ["Bureaux et postes de travail", "Aires communes", "Salles de conférence", "Sanitaires commerciaux", "Interventions le soir", "Contrats récurrents"],
    image: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "grand-menage",
    title: "Grand Ménage en Profondeur",
    icon: "Sparkles",
    short: "Le grand coup d'éclat, jusque dans les moindres recoins.",
    tagline: "Bien au-delà du nettoyage de surface.",
    description:
      "Allez au-delà du nettoyage de surface avec notre grand ménage en profondeur. Nous récurons les joints de céramique, les plinthes, l'arrière des meubles, les luminaires et chaque coin difficile d'accès.",
    features: ["Joints de céramique", "Plinthes et moulures", "Derrière les meubles", "Luminaires", "Intérieur des armoires", "Lavage de vitres"],
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "demenagement",
    title: "Nettoyage Déménagement",
    icon: "Truck",
    short: "Un nouveau départ, l'esprit tranquille.",
    tagline: "Entrée ou sortie de logement.",
    description:
      "Grand ménage de déménagement et d'emménagement. Notre nettoyage en profondeur inclut l'intérieur des électroménagers, des armoires et le lavage des taches sur les murs. Prenez un nouveau départ ou quittez votre logement l'esprit tranquille.",
    features: ["Intérieur des électroménagers", "Armoires vidées et lavées", "Taches sur les murs", "Fenêtres et cadres", "Salles de bain à neuf", "Planchers en profondeur"],
    image: "https://images.unsplash.com/photo-1663625318264-695d2d04f11a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "airbnb",
    title: "Turnover Airbnb & Court Terme",
    icon: "BedDouble",
    short: "Nettoyage express entre deux locations.",
    tagline: "Service le jour même à Montréal.",
    description:
      "Ménage Airbnb le jour même : nettoyage rapide entre deux locations. Nous gérons tout — service de linge, réapprovisionnement des essentiels, rapport de dommages — avec des partenariats sur mesure pour les gestionnaires de propriétés.",
    features: ["Rotation le jour même", "Service de linge", "Réapprovisionnement", "Rapport de dommages", "Mise en scène soignée", "Partenariats gestionnaires"],
    image: "https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "post-construction",
    title: "Post-construction & Rénovation",
    icon: "HardHat",
    short: "La poussière de chantier disparaît, la beauté ressort.",
    tagline: "Élimination experte de la poussière fine.",
    description:
      "Nettoyage après rénovation et construction : élimination experte de la poussière fine. Nous nettoyons en profondeur les débris, les éclats de peinture et la poussière de chantier pour révéler toute la beauté de votre nouvel espace grâce à un polissage final méticuleux.",
    features: ["Poussière fine de chantier", "Débris et résidus", "Éclats de peinture", "Polissage des surfaces", "Vitres et cadres", "Finition impeccable"],
    image: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "evenementiel",
    title: "Nettoyage Événementiel",
    icon: "PartyPopper",
    short: "Vos espaces remis à neuf en un temps record.",
    tagline: "Après-fête, événements d'entreprise et mariages.",
    description:
      "Nettoyage événementiel à Montréal : après-fête, événements d'entreprise et mariages. Service disponible le jour même ou le lendemain matin pour remettre vos espaces à neuf en un temps record.",
    features: ["Après-fête", "Événements corporatifs", "Mariages et réceptions", "Service le jour même", "Ramassage complet", "Remise en état rapide"],
    image: "https://images.unsplash.com/photo-1551972873-b7e8754e8e26?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    slug: "ecologique",
    title: "Nettoyage Écologique",
    icon: "Leaf",
    short: "Propreté éclatante, respect de la planète.",
    tagline: "Produits non toxiques et biodégradables.",
    description:
      "Nettoyage écologique avec produits non toxiques et biodégradables. Un service sans danger pour les enfants, les animaux de compagnie et la planète — sans jamais faire de compromis sur l'éclat et la propreté.",
    features: ["Produits biodégradables", "Sans danger pour enfants", "Sécuritaire pour animaux", "Sans résidus toxiques", "Air plus sain", "Éclat garanti"],
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

export const WHY = [
  { icon: "GraduationCap", title: "Équipe formée", text: "Membres vérifiés et formés professionnellement." },
  { icon: "Clock", title: "Fiable", text: "Ponctuel, professionnel, service constant." },
  { icon: "BadgeDollarSign", title: "Transparent", text: "Tarifs clairs, aucun frais caché." },
  { icon: "ShieldCheck", title: "Garanti", text: "Satisfaction garantie ou nous revenons gratuitement." },
  { icon: "Leaf", title: "Écologique", text: "Options de produits verts disponibles." },
  { icon: "CalendarClock", title: "Flexible", text: "Horaires adaptés à votre emploi du temps." },
];

export const TESTIMONIALS = [
  { name: "Sophie Tremblay", role: "Résidentiel · Montréal", quote: "Brillexa a dépassé mes attentes. Mon appartement n'a jamais été aussi propre. L'équipe est ponctuelle, respectueuse et très professionnelle. Je recommande sans hésiter." },
  { name: "Jonathan Lefebvre", role: "Bureau commercial · Laval", quote: "Nos bureaux n'ont jamais été aussi impeccables. Une équipe ponctuelle, professionnelle et minutieuse. Un partenaire de confiance." },
  { name: "Isabelle Nguyen", role: "Grand ménage · Longueuil", quote: "Première fois avec Brillexa et certainement pas la dernière. Tout brillait, même les endroits que d'autres compagnies oublient. Excellent service." },
  { name: "Carlos Herrara", role: "Déménagement · Montréal", quote: "Ils ont laissé mon condo impeccable avant une visite d'évaluation. Grâce à eux, j'ai reçu d'excellents commentaires. Service fiable et professionnel." },
  { name: "Mélanie Fortin", role: "Résidentiel · Brossard", quote: "L'équipe est minutieuse, souriante et super organisée. J'ai essayé plusieurs compagnies avant, mais Brillexa est de loin la meilleure." },
  { name: "Kate Lebrec", role: "Airbnb · Montréal", quote: "Service impeccable du début à la fin. Ils prennent le temps de tout détailler. On sent qu'ils sont passionnés par leur travail." },
];

export const POSTS = [
  {
    id: "routine-maison-propre",
    title: "5 habitudes pour garder une maison propre sans effort",
    excerpt: "De petits gestes quotidiens qui font toute la différence entre les visites de notre équipe.",
    date: "12 mai 2026",
    tag: "Astuces",
    image: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    id: "bureau-productif",
    title: "Un bureau propre, une équipe plus productive",
    excerpt: "Pourquoi l'entretien professionnel de vos espaces de travail améliore le bien-être et l'image de marque.",
    date: "28 avril 2026",
    tag: "Commercial",
    image: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    id: "produits-ecologiques",
    title: "Produits écologiques : propreté et respect de l'environnement",
    excerpt: "Notre approche pour un nettoyage efficace tout en prenant soin de votre santé et de la planète.",
    date: "10 avril 2026",
    tag: "Écologie",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
];

const smsBody = encodeURIComponent("Bonjour BRILLEXA+, j'aimerais obtenir une soumission pour un service de nettoyage.");
const emailSubject = encodeURIComponent("Demande de soumission - BRILLEXA+");
const emailBody = encodeURIComponent("Bonjour BRILLEXA+,\n\nJ'aimerais obtenir une soumission pour un service de nettoyage.\n\nType de service : \nAdresse : \nSuperficie / nombre de pièces : \nDate souhaitée : \n\nMerci !");

export const SMS_HREF = `sms:${CONTACT.phoneRaw}?body=${smsBody}`;
export const EMAIL_HREF = `mailto:${CONTACT.email}?subject=${emailSubject}&body=${emailBody}`;
export const TEL_HREF = `tel:${CONTACT.phoneRaw}`;
export const LOGO_SRC = "/logo.png";
