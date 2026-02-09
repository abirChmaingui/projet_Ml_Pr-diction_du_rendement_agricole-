import './DatasetOverview.css'

const variables = [
  { name: 'Pluviométrie', unit: 'mm' },
  { name: 'Température moyenne', unit: '°C' },
  { name: 'Humidité', unit: '%' },
  { name: 'pH du sol', unit: '—' },
  { name: 'Azote (N)', unit: '%' },
  { name: 'Phosphore (P)', unit: 'mg/kg' },
  { name: 'Potassium (K)', unit: 'mg/kg' },
  { name: 'Surface cultivée', unit: 'ha' },
  { name: 'Rendement agricole (cible)', unit: 't/ha' },
]

export default function DatasetOverview() {
  return (
    <section className="section section-alt" id="dataset">
      <div className="section-inner">
        <h2 className="section-title">Variables du dataset</h2>
        <p className="section-desc">
          Données numériques utilisées pour la prédiction du rendement.
        </p>
        <div className="variables-table-wrap">
          <table className="variables-table">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Unité</th>
              </tr>
            </thead>
            <tbody>
              {variables.map((v) => (
                <tr key={v.name}>
                  <td>{v.name}</td>
                  <td><code>{v.unit}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="dataset-note">
          Fichier principal pour le ML : <code>data/dataset_ml_rendement_tunisie.csv</code>
        </p>
      </div>
    </section>
  )
}
