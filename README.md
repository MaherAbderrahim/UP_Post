# UP_Post

Plateforme web d'**optimisation de publications sur les réseaux sociaux** : elle connecte vos pages Facebook et Instagram, agrège vos posts et leurs commentaires, et vous aide à améliorer vos publications pour un meilleur engagement.

> Application Next.js (App Router) avec une API GraphQL, une base PostgreSQL via Prisma, et une authentification Clerk. Le service d'échange de tokens Facebook/Instagram est un backend FastAPI externe.

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Lancement](#lancement)
- [Parcours de l'application](#parcours-de-lapplication)
- [Schéma de base de données](#schéma-de-base-de-données)
- [Points d'attention connus](#points-dattention-connus)
- [Licence](#licence)

---

## Fonctionnalités

- **Landing page** présentant le service, avec captures d'écran animées (composant `ContainerScroll`).
- **Authentification** via Clerk : inscription (`/sign-up`), connexion (`/sign-in`), profil (`/user-profile`). Le middleware Clerk protège l'ensemble des routes, la page d'accueil restant publique.
- **Dashboard** avec un rapport d'analyse Power BI intégré en iframe.
- **Projets** : liste des pages Facebook et Instagram associées au projet, avec ajout de page via une modale (`AddPageModel`) et ajout de projet (`AddProjectModel`).
- **Posts** : consultation des publications Facebook et Instagram récupérées depuis vos pages.
- **Création de post** : formulaire de rédaction (titre, description, image).
- **Amélioration de post** (`/dashboard/Upgrade`) : affiche une publication et sa description pour la retravailler.
- **API GraphQL** exposant 10 entités (utilisateurs, projets, pages, posts, commentaires, sponsors).

## Architecture

```
src/
├── app/                      # Next.js App Router
│   ├── api/graphql/route.ts  # Serveur Apollo (démarrage sur le port 4000)
│   ├── dashboard/            # Espace connecté : Projets, Posts, Create, Upgrade
│   ├── sign-in/  sign-up/    # Pages d'authentification Clerk
│   └── user-profile/         # Profil utilisateur Clerk
├── components/               # Modales et composants UI
└── GraphQL/
    ├── schemas/              # Fichiers .graphql (SDL)
    ├── datasources/          # Accès aux données par entité
    ├── model/                # Modèles TypeScript
    ├── resolvers-files/      # Résolveurs par entité
    ├── generated/types.ts    # Types générés par GraphQL Codegen
    └── context.ts            # Contexte GraphQL (client Prisma)
prisma/
├── schema.prisma             # Modèles de données
├── db.ts                     # Singleton PrismaClient
└── migrations/               # Historique des migrations
```

Le serveur GraphQL est créé dans `src/app/api/graphql/route.ts` et démarré avec `startStandaloneServer` sur le **port 4000**. Les clients Apollo des composants se connectent donc à `http://localhost:4000/`.

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 14 (App Router), React 18 |
| Langage | TypeScript |
| API | Apollo Server 4 + Apollo Client 3 (GraphQL) |
| Base de données | PostgreSQL via Prisma 5 |
| Authentification | Clerk (`@clerk/nextjs`) |
| Styles | Tailwind CSS, MUI, Headless UI, Bootstrap |
| Génération de types | GraphQL Codegen |
| Gestionnaire de paquets | pnpm |

## Prérequis

- **Node.js** 18.17+ et **pnpm** 9+
- Une instance **PostgreSQL** accessible
- Un compte **[Clerk](https://dashboard.clerk.com)** avec une application créée
- Le backend FastAPI de tokens Facebook/Instagram accessible (voir [Points d'attention](#points-dattention-connus))

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/MaherAbderrahim/UP_Post.git
cd UP_Post

# 2. Installer les dépendances
pnpm install

# 3. Créer le fichier d'environnement
cp .env.example .env
# puis renseigner vos valeurs dans .env

# 4. Générer le client Prisma et appliquer les migrations
pnpm exec prisma generate
pnpm exec prisma migrate deploy
```

## Variables d'environnement

Toutes les variables sont documentées dans [`.env.example`](.env.example).

| Variable | Rôle |
|---|---|
| `DATABASE_URL` | Chaîne de connexion PostgreSQL (lue par Prisma) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clé publique Clerk |
| `CLERK_SECRET_KEY` | Clé secrète Clerk |
| `NEXT_PUBLIC_FB_USER_TOKEN_FB` | Token d'accès Facebook long vivant |
| `NEXT_PUBLIC_FB_USER_TOKEN_IG` | Token d'accès Instagram long vivant |

> **Sécurité** : ne commitez jamais le fichier `.env`. Il est exclu par `.gitignore`. Les tokens Facebook/Instagram doivent être fournis par l'environnement, jamais écrits en dur dans le code.

## Lancement

```bash
# Développement (Next.js)
pnpm dev          # http://localhost:3000

# Le serveur GraphQL démarre en même temps que l'API route,
# sur http://localhost:4000

# Build de production
pnpm build
pnpm start

# Lint
pnpm lint

# Générer les types GraphQL après modification des fichiers .graphql
pnpm generate
```

## Parcours de l'application

1. **`/`** — page publique : présentation du service, boutons d'inscription/connexion.
2. **`/sign-up`** — création du compte Clerk.
3. **`/dashboard`** — rapport Power BI intégré.
4. **`/dashboard/Projets`** — vos pages Facebook/Instagram. La modale « Ajouter une page » déclenche le flux OAuth Facebook (bouton « Obtenir le code »), échange le code contre un token long vivant via le backend FastAPI, puis enregistre la page et ses posts via GraphQL.
5. **`/dashboard/Posts`** — les publications récupérées, chacune menant vers l'amélioration.
6. **`/dashboard/Upgrade`** — vue détaillée d'un post pour le retravailler.
7. **`/dashboard/Create`** — formulaire de création de publication.

## Schéma de base de données

10 modèles définis dans `prisma/schema.prisma` :

`Users`, `Project`, `Users_FB`, `Page_FB`, `Page_IG`, `Posts_FB`, `Posts_IG`, `Sponsor`, `Comments_FB`, `Comments_IG`

L'historique complet des migrations se trouve dans `prisma/migrations/`.

## Points d'attention connus

Ces éléments sont tels quels dans le code actuel et peuvent nécessiter un ajustement selon votre environnement :

- **Backend FastAPI externe** : plusieurs fonctions de `src/components/add_page_model.tsx` appellent `http://127.0.0.1:8000` (`/get_user_long_lived_access_token/`, `/get_user_name_id/`, `/get_page_FB_access_token/`, `/get_info_page_IG/`, `/get_data_FB/`, `/get_data_IG/`). Ce service doit être lancé séparément pour que la connexion Facebook/Instagram fonctionne.
- **Application Meta** : le bouton « Obtenir le code » ouvre la fenêtre OAuth Facebook avec un `client_id` et un `redirect_uri` définis dans `handleRedirect` (`add_page_model.tsx`). Adaptez-les à votre propre application Meta.
- **Formulaire de création** : `src/app/dashboard/Create/page.tsx` simule actuellement l'envoi (`console.log` + temporisation) — il n'est pas encore relié à une API.
- **Port GraphQL** : les clients Apollo des composants visent `http://localhost:4000/`, alors qu'une route `/api/graphql` existe également. En production, ces URLs doivent être alignées.
- **Avertissements de build** : `next build` se termine avec succès mais émet des avertissements préexistants — l'écoute du port 4000 dans `api/graphql/route.ts`, l'usage de `<img>` au lieu de `next/image`, et des requêtes Apollo lancées pendant la génération statique.

## Licence

Aucun fichier de licence n'est présent dans ce dépôt. Les droits d'utilisation restent ceux du propriétaire du projet.
