import './Pipeline.css'

const steps = [
  { num: 1, title: 'Collecte', desc: 'Scraping / téléchargement (Agridata, INM, FAOSTAT, Open-Meteo)', done: true },
  { num: 2, title: 'Prétraitement', desc: 'Nettoyage, normalisation, fusion des datasets', done: true },
  { num: 3, title: 'EDA', desc: 'Statistiques descriptives, visualisations', done: false },
  { num: 4, title: 'ML', desc: 'Clustering (K-Means), PCA, régression (Random Forest, régression linéaire)', done: false },
  { num: 5, title: 'Évaluation', desc: 'RMSE, MAE, R²', done: false },
  { num: 6, title: 'Interprétation', desc: 'Importance des variables, analyse des clusters', done: false },
]

export default function Pipeline() {
  return (
    <section className="section" id="pipeline">
      <div className="section-inner">
        <h2 className="section-title">Pipeline du projet</h2>
        <p className="section-desc">
          Étapes du projet de prédiction du rendement agricole.
        </p>
        <div className="pipeline-list">
          {steps.map((s) => (
            <div key={s.num} className={`pipeline-step ${s.done ? 'done' : ''}`}>
              <div className="step-num">{s.num}</div>
              <div className="step-content">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
              {s.done && <span className="step-badge">Fait</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
