# Identité et Développement — Site web

## État actuel
Projet Next.js (App Router) + Tailwind, avec la charte graphique appliquée
(bleu #004771, or #e7c645, typographies Fraunces + Public Sans).

Déjà fait :
- Structure du projet, Tailwind configuré, polices, layout global (Header/Footer)
- Contenu centralisé dans `content/site-data.js`
- Client Sanity prêt (`lib/sanity.js`) avec données de secours en attendant la connexion réelle
- Schémas Sanity de base (`sanity/schemas/`) : article, photo, event
- Pages terminées : Accueil, À propos, Départements, Nos projets

Reste à faire :
- Pages : Faire un don, Actualités, Contact
- Connecter un vrai projet Sanity (`npx sanity init` dans un sous-dossier studio)
- Formulaire de don (Stripe ou PayPal), newsletter (Brevo/Mailchimp), bilingue FR/EN
- Vérifier le rendu mobile

## Pour démarrer dans Claude Code
1. Dézippe le projet et ouvre le dossier dans Claude Code (desktop, terminal ou VS Code).
2. `npm install`
3. `npm run dev` → aperçu sur http://localhost:3000
4. Demande à Claude Code de terminer les pages manquantes en réutilisant le style
   déjà posé dans `app/page.js`, `app/a-propos/page.js`, etc.

## Variables d'environnement (à créer dans `.env.local`)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
```
Tant que ces variables ne sont pas renseignées, le site fonctionne avec des
données de secours (voir `lib/sanity.js`).
