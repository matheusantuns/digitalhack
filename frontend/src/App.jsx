import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Comparison from './components/Comparison' // NOVO
import Portfolio from './components/Portfolio'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ' // NOVO
import EbookCTA from './components/EbookCTA' // NOVO
import WhatsAppCTA from './components/WhatsAppCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Comparison /> {/* ADICIONADO */}
      <Portfolio />
      <Results />
      <Testimonials />
      <FAQ /> {/* ADICIONADO */}
      <EbookCTA /> {/* ADICIONADO */}
      <WhatsAppCTA />
      <Footer />
    </div>
  )
}

export default App