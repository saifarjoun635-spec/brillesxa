# BRILLEXA+ — Site Web (PRD)

## Problème initial (verbatim, FR)
"fais moi site web aec plusierus page en partant de ces photos. sousmissions sms et email sans back end, page d'aterrisage pas trop charger. simple dynamique et beau. dans le haut je veux un barre avec toute les pages."

## Choix utilisateur
- Soumissions via mailto (courriel pré-rempli) + sms (texto pré-rempli), SANS backend.
- Barre de navigation en haut avec toutes les pages.
- Bouton de contact clair et visible.
- Style: bleu royal + blanc du logo, moderne et épuré.
- Section témoignages avec guillemets « » au début et à la fin.
- Pages: Accueil, Services, À propos, Blog, Contact.

## Architecture
- Frontend-only (React + React Router + TailwindCSS + framer-motion + lucide-react).
- Aucun backend / base de données. Actions de contact = liens natifs sms:/mailto:/tel:.
- Polices: Outfit (titres) + Manrope (corps). Couleur marque: #1E3A8A.

## Implémenté (2026-07-08)
- Navbar collante (glassmorphism) avec liens vers toutes les pages + bouton "Appeler" + menu mobile.
- Accueil: hero minimal, aperçu 4 services (cartes cliquables), témoignages (« »), CTA.
- Services: 4 services détaillés (Résidentiel, Commercial, Grand Ménage, Entretien Régulier) + CTA.
- À propos: histoire, valeurs, statistiques.
- Blog: article vedette + grille d'articles.
- Contact: boutons Texto (sms:), Courriel (mailto:), Appeler (tel:) + coordonnées.
- Footer avec navigation + coordonnées de l'image.
- Testé par testing agent: 30/30 checks frontend, 100%.

## Backlog / Prochaines étapes
- P1: Pages d'articles de blog complètes (contenu détaillé).
- P1: Remplacer témoignages fictifs par de vrais avis clients.
- P2: Page 404 dédiée.
- P2: lazy-loading des images, galerie photos réelle des travaux.
- P2: Formulaire de soumission avec service externe (Formspree) si souhaité.
