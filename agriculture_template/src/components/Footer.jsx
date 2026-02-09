import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          Projet : Prédiction du rendement agricole à partir des conditions climatiques
          et des caractéristiques du sol en Tunisie.
        </p>
        <p className="footer-meta">
          Interface statique · Données : FAOSTAT, Open-Meteo, Agridata, INM
        </p>
      </div>
    </footer>
  )
}
