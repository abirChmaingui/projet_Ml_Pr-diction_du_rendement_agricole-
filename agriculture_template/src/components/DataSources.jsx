import './DataSources.css'

const sources = [
  { name: 'Agridata Tunisie', url: 'https://www.agridata.tn', desc: 'Pluviométrie, production, statistiques agricoles', icon: '📊' },
  { name: 'INM (Météo Tunisie)', url: 'http://www.meteo.tn', desc: 'Températures, pluies, données climatiques', icon: '🌤️' },
  { name: 'FAOSTAT', url: 'https://www.fao.org/faostat', desc: 'Rendement, production, surface cultivée', icon: '🌾' },
  { name: 'Open-Meteo', url: 'https://open-meteo.com', desc: 'Température, précipitations, humidité (API)', icon: '🌦️' },
]

export default function DataSources() {
  return (
    <section className="section" id="sources">
      <div className="section-inner">
        <h2 className="section-title">Sources de données</h2>
        <p className="section-desc">
          Données collectées pour alimenter le modèle de prédiction du rendement.
        </p>
        <div className="sources-grid">
          {sources.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="source-card"
            >
              <span className="source-icon">{s.icon}</span>
              <h3 className="source-name">{s.name}</h3>
              <p className="source-desc">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
