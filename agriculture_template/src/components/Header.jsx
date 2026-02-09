import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🌾</span>
          <span className="logo-text">Rendement Agricole</span>
        </div>
        <nav className="nav">
          <a href="#sources">Sources</a>
          <a href="#dataset">Dataset</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#test">Test utilisateur</a>
        </nav>
      </div>
    </header>
  )
}
