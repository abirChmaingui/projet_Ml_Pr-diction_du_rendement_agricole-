# Interface – Rendement agricole (Tunisie)

Interface utilisateur **statique** pour le projet de prédiction du rendement agricole en Tunisie.

## Prérequis

- **Node.js** 18+ et **npm**

## Installation

```bash
cd agriculture_template
npm install
```

## Lancer en développement

```bash
npm run dev
```

L’application s’ouvre sur [http://localhost:3000](http://localhost:3000).

## Build pour la production

```bash
npm run build
```

Les fichiers sont générés dans le dossier `dist/`.

## Aperçu

- **En-tête** : logo et navigation (Sources, Dataset, Pipeline)
- **Hero** : titre du projet et description
- **Sources de données** : cartes cliquables (Agridata, INM, FAOSTAT, Open-Meteo)
- **Variables du dataset** : tableau des variables utilisées pour le ML
- **Pipeline** : étapes du projet (collecte, prétraitement, EDA, ML, évaluation)

Interface 100 % statique pour le moment ; la liaison avec le backend (API, données dynamiques) pourra être ajoutée plus tard.
