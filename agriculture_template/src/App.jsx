import Header from './components/Header'
import Hero from './components/Hero'
import DataSources from './components/DataSources'
import DatasetOverview from './components/DatasetOverview'
import TestUtilisateur from './components/TestUtilisateur'
import Pipeline from './components/Pipeline'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DataSources />
        <DatasetOverview />
        <TestUtilisateur />
        <Pipeline />
      </main>
      <Footer />
    </>
  )
}

export default App
