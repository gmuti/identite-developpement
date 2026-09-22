# Identité et Développement — Site web

## État actuel
Projet Next.js (App Router) + Tailwind, avec la charte graphique appliquée
(bleu #004771, or #e7c645, typographies Fraunces + Public Sans).

Déjà fait :
- Structure du projet, Tailwind configuré, polices, layout global (Header/Footer)
- Contenu centralisé dans `content/site-data.js`
- Client Sanity connecté à un vrai projet (`bmpy7jxz`, dataset `production`), avec données
  de secours tant que du contenu n'est pas encore publié (voir `lib/sanity.js`)
- Schémas Sanity (`sanity/schemas/`) : article, photo, event — Studio prêt via `npm run studio`
- Pages terminées : Accueil, À propos, Départements, Nos projets, Faire un don, Actualités, Contact
- Traduction FR/EN fonctionnelle (`content/translations.js`)
- CI/CD : export statique déployé automatiquement sur Hostinger via GitHub Actions

Reste à faire :
- Publier du vrai contenu dans le Studio (actualités, événements, photos)
- Déployer le Studio (`npm run studio:deploy`) pour y accéder sans environnement local
- Formulaire de don (Stripe ou PayPal), newsletter (Brevo/Mailchimp)
- Vérifier le rendu mobile

## Pour démarrer dans Claude Code
1. Dézippe le projet et ouvre le dossier dans Claude Code (desktop, terminal ou VS Code).
2. `npm install`
3. `npm run dev` → aperçu sur http://localhost:3000
4. Demande à Claude Code de terminer les pages manquantes en réutilisant le style
   déjà posé dans `app/page.js`, `app/a-propos/page.js`, etc.

## Variables d'environnement (à créer dans `.env.local`, voir `.env.local.example`)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=bmpy7jxz
NEXT_PUBLIC_SANITY_DATASET=production

SANITY_STUDIO_PROJECT_ID=bmpy7jxz
SANITY_STUDIO_DATASET=production
```
Tant qu'aucun contenu n'est publié dans le dataset, le site retombe sur des
données de secours (voir `lib/sanity.js`). En CI, ces valeurs sont injectées
via les secrets GitHub `SANITY_PROJECT_ID` et `SANITY_DATASET`.

## Éditer le contenu (Sanity Studio)
```
npm run studio          # Studio en local, sur http://localhost:3333
npm run studio:deploy   # héberge le Studio sur https://<projet>.sanity.studio
```
La première utilisation demande de se connecter avec un compte sanity.io
ayant accès au projet.
