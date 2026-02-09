📄 FICHE PROJET
🟢 Titre du projet
Prédiction du rendement agricole à partir des conditions climatiques et des caractéristiques du sol en Tunisie
________________________________________
🎯 Objectif du projet
L’objectif principal de ce projet est de prévoir le rendement agricole (exprimé en tonnes/hectare) en utilisant des données climatiques et pédologiques collectées en Tunisie.
Ce projet vise à aider à : - mieux comprendre l’impact du climat et du sol sur la production agricole - soutenir la prise de décision pour les agriculteurs et les organismes agricoles - exploiter les techniques de Machine Learning pour l’analyse de données réelles
________________________________________
🌾 Domaine
•	Agriculture intelligente (Smart Agriculture)
•	Machine Learning
•	Analyse de données
________________________________________
💡 Idée du projet
Construire un modèle de Machine Learning capable d’analyser des données agricoles tunisiennes (pluie, température, sol…) afin de : - détecter des patterns cachés (clustering) - prédire le rendement agricole futur
________________________________________
📊 Types de données utilisées
Données numériques uniquement : - Pluviométrie (mm) - Température moyenne (°C) - Humidité (%) - pH du sol - Azote (N), Phosphore (P), Potassium (K) - Surface cultivée - Année - Rendement agricole (variable cible)
________________________________________
🌐 Sites de scraping / données (Tunisie)
🇹🇳 1️⃣ Agridata Tunisie
🔗 https://www.agridata.tn
Données disponibles : - Pluviométrie par région - Production agricole - Données statistiques agricoles
________________________________________
🇹🇳 2️⃣ Institut National de la Météorologie (INM)
🔗 http://www.meteo.tn
Données disponibles : - Températures - Pluies - Données climatiques historiques
________________________________________
🌍 3️⃣ FAOSTAT (pour compléter)
🔗 https://www.fao.org/faostat
Données : - Rendement agricole - Production - Surface cultivée
________________________________________
🌦️ 4️⃣ Open‑Meteo (API climat)
🔗 https://open-meteo.com
Données : - Température - Précipitations - Humidité
________________________________________
🔄 Processus du projet (Pipeline)
1️⃣ Collecte des données
- Scraping / téléchargement depuis Agridata, INM, FAOSTAT
2️⃣ Prétraitement des données
- Nettoyage (valeurs manquantes) - Normalisation / standardisation - Fusion des datasets
3️⃣ Analyse exploratoire (EDA)
- Statistiques descriptives - Visualisations (corrélation, distributions)
4️⃣ Apprentissage automatique
- Clustering (K‑Means, DBSCAN) - Réduction de dimension (PCA) - Régression (Random Forest, Linear Regression)
5️⃣ Évaluation du modèle
- RMSE - MAE - R²
6️⃣ Interprétation des résultats
- Importance des variables - Analyse des clusters
________________________________________
🧠 Modèles ML utilisés
•	K‑Means (clustering)
•	PCA (réduction de dimension)
•	Random Forest Regressor
•	Linear Regression
________________________________________
🛠️ Technologies et outils utilisés
📌 Langages
•	Python
•	JavaScript
📌 Data & ML
•	pandas, numpy
•	scikit-learn
•	matplotlib / seaborn
•	MLflow (tracking des expériences)
📌 Scraping & Data Collection
•	requests
•	beautifulsoup4
•	API REST (Open-Meteo, FAOSTAT)
📌 Backend (API ML)
•	FastAPI : création d’API REST
•	Uvicorn : serveur ASGI
•	Pydantic : validation des données
•	Joblib / Pickle : chargement du modèle ML
📌 Frontend
•	React.js : interface utilisateur
•	HTML / CSS
•	Axios / Fetch API : communication avec le backend
•	Chart.js / Recharts : visualisation des résultats
📌 Déploiement
•	Docker : conteneurisation de l’application
•	Docker Compose : orchestration backend + frontend
📌 Environnement de travail
•	Jupyter Notebook
•	VS Code
________________________________________
📈 Résultats attendus
•	Identification de groupes agricoles homogènes
•	Modèle capable de prédire le rendement agricole
•	Analyse de l’impact du climat et du sol
________________________________________
🏁 Conclusion
Ce projet permet de combiner données réelles tunisiennes et Machine Learning pour répondre à un problème agricole concret, avec une approche scientifique et pratique.
