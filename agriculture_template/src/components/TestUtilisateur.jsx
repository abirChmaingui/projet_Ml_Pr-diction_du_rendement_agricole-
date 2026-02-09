import { useState } from 'react'
import './TestUtilisateur.css'

export default function TestUtilisateur() {
  const [values, setValues] = useState({
    pluviometrie: '',
    temperature: '',
    humidite: '',
    ph: '',
    azote: '',
    phosphore: '',
    potassium: '',
    surface: '',
  })
  const [prediction, setPrediction] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setPrediction(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Pour le moment : prédiction statique (simulation)
    const staticRendement = 3.42 // t/ha - valeur exemple
    setPrediction(staticRendement)
  }

  return (
    <section className="section section-test" id="test">
      <div className="section-inner">
        <h2 className="section-title">Test utilisateur</h2>
        <p className="section-desc">
          Entrez les caractéristiques météo et du sol pour obtenir une prédiction du rendement (simulation statique).
        </p>

        <form className="test-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Pluviométrie (mm)
              <input
                type="number"
                name="pluviometrie"
                value={values.pluviometrie}
                onChange={handleChange}
                placeholder="ex. 350"
                step="0.1"
                min="0"
              />
            </label>
            <label>
              Température moyenne (°C)
              <input
                type="number"
                name="temperature"
                value={values.temperature}
                onChange={handleChange}
                placeholder="ex. 18.5"
                step="0.1"
              />
            </label>
            <label>
              Humidité (%)
              <input
                type="number"
                name="humidite"
                value={values.humidite}
                onChange={handleChange}
                placeholder="ex. 65"
                min="0"
                max="100"
                step="0.1"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              pH du sol
              <input
                type="number"
                name="ph"
                value={values.ph}
                onChange={handleChange}
                placeholder="ex. 7.2"
                step="0.1"
                min="0"
                max="14"
              />
            </label>
            <label>
              Azote N (%)
              <input
                type="number"
                name="azote"
                value={values.azote}
                onChange={handleChange}
                placeholder="ex. 0.15"
                step="0.01"
                min="0"
              />
            </label>
            <label>
              Phosphore P (mg/kg)
              <input
                type="number"
                name="phosphore"
                value={values.phosphore}
                onChange={handleChange}
                placeholder="ex. 45"
                min="0"
              />
            </label>
            <label>
              Potassium K (mg/kg)
              <input
                type="number"
                name="potassium"
                value={values.potassium}
                onChange={handleChange}
                placeholder="ex. 180"
                min="0"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Surface cultivée (ha)
              <input
                type="number"
                name="surface"
                value={values.surface}
                onChange={handleChange}
                placeholder="ex. 10"
                step="0.1"
                min="0"
              />
            </label>
          </div>

          <button type="submit" className="btn-predict">
            Prédire le rendement
          </button>
        </form>

        {prediction !== null && (
          <div className="prediction-result">
            <span className="prediction-label">Rendement prédit</span>
            <span className="prediction-value">{prediction.toFixed(2)} t/ha</span>
            <p className="prediction-note">Résultat statique pour démonstration. Le modèle ML sera connecté ultérieurement.</p>
          </div>
        )}
      </div>
    </section>
  )
}
