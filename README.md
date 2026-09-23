# Identité et Développement - Site web

## État actuel
Projet Next.js 14 (App Router) + Tailwind, export statique, avec la charte
graphique appliquée (navy `#051829`, or `#E7C645`, typographies Fraunces +
Public Sans auto-hébergées).

Déjà fait :
- Structure du projet, Tailwind configuré, layout global (Header/Footer),
  logo + favicon officiels
- Toutes les pages : Accueil, À propos, Départements, Nos projets, Faire un
  don, Actualités, Contact
- Traduction FR/EN fonctionnelle et persistante (`content/translations.js` +
  `lib/i18n/LanguageContext.js`)
- Composant `PageHeader` réutilisable (fil d'Ariane + titre) sur les pages
  secondaires
- Sanity connecté à un vrai projet (`bmpy7jxz`, dataset `production`), avec
  données de secours tant qu'aucun contenu n'est publié (voir `lib/sanity.js`)
- Schémas Sanity (`sanity/schemas/`) : article, photo, event - Studio déployé
  et accessible sur https://identite-developpement.sanity.studio/
- Webhook Sanity → GitHub Actions : toute publication de contenu redéploie
  automatiquement le site
- CI/CD complet : export statique construit et déployé sur Hostinger via
  GitHub Actions (voir `.github/workflows/deploy.yml`)
- Rendu mobile vérifié (390px) sur les 8 pages

Reste à faire :
- Newsletter (Brevo/Mailchimp) - formulaire déjà présent, pas encore branché
- Formulaire de contact - UI prête, envoi réel des messages pas encore branché
- Paiement (Stripe ou PayPal) pour la page Faire un don - volontairement
  laissé pour la fin
- Publier du vrai contenu éditorial dans le Studio (au-delà des données de
  test)

## Déploiement
- **Push sur `main` → déploiement automatique** sur Hostinger (voir
  `.github/workflows/deploy.yml`). Ne pousser sur `main` que lorsque le
  changement est prêt à être vu en ligne.
- Site actuellement en ligne (staging) : https://identitedev.cfcottawa.ca -
  sous-domaine de test, le domaine final n'est pas encore branché.
- L'hébergement Hostinger est mutualisé (pas de support Node.js/SSR), d'où le
  choix de l'export statique (`output: "export"` dans `next.config.mjs`).
- Le déploiement se fait par `rsync` en SSH - voir la clé et les identifiants
  dans les secrets du dépôt GitHub (`HOSTINGER_SSH_*`).

## Pour démarrer dans Claude Code
1. Ouvre le dossier dans Claude Code (desktop, terminal ou VS Code).
2. `npm install`
3. `npm run dev` → aperçu sur http://localhost:3000 (ou le premier port libre)
4. Toujours vérifier `npm run build` avant de proposer un déploiement - c'est
   un export statique, une erreur de build casse le site en production.

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
- En ligne : https://identite-developpement.sanity.studio/ (connexion avec un
  compte sanity.io ayant accès au projet)
- En local :
  ```
  npm run studio          # Studio en local, sur http://localhost:3333
  npm run studio:deploy   # redéploie le Studio hébergé
  ```
- Toute publication (créer/modifier/supprimer un article, événement ou photo)
  déclenche automatiquement un redéploiement du site via un webhook.

## Notes techniques utiles
- `next/font/google` a montré des échecs intermittents sur les runners GitHub
  Actions (appel réseau vers Google au build) - les polices sont donc
  auto-hébergées dans `public/fonts/` via `next/font/local`. Ne pas revenir à
  `next/font/google` sans bonne raison.
- Les images Sanity passent par `urlFor()` (`lib/sanity.js`) - ne jamais
  utiliser `next/image` avec optimisation activée, le site est en export
  statique (`images.unoptimized: true` dans `next.config.mjs`).
