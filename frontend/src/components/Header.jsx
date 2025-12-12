import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const whatsappNumber = "5511999999999"
  const message = "Olá! Gostaria de solicitar um orçamento para serviços de marketing digital."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-2 sm:py-3' 
        : 'bg-transparent py-3 sm:py-4'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 ${
            scrolled ? 'bg-blue-900' : 'bg-white/20 backdrop-blur-sm'
          } rounded-xl flex items-center justify-center shadow-lg`}>
            <span className={`${
              scrolled ? 'text-white' : 'text-white'
            } font-bold text-sm sm:text-base md:text-lg`}>DH</span>
          </div>
          <div>
            <h1 className={`text-lg sm:text-xl md:text-2xl font-black ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}>Digital<span className="text-blue-400">Hack</span></h1>
            <p className={`text-xs ${
              scrolled ? 'text-gray-600' : 'text-blue-100'
            } font-medium leading-tight`}>Agência de Marketing Digital</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
          <a href="#home" className={`font-semibold transition text-sm lg:text-base ${
            scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } whitespace-nowrap`}>Início</a>
          <a href="#services" className={`font-semibold transition text-sm lg:text-base ${
            scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } whitespace-nowrap`}>Serviços</a>
          <a href="#results" className={`font-semibold transition text-sm lg:text-base ${
            scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } whitespace-nowrap`}>Resultados</a>
          <a href="#testimonials" className={`font-semibold transition text-sm lg:text-base ${
            scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } whitespace-nowrap`}>Depoimentos</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes size={22} className={`${scrolled ? 'text-blue-900' : 'text-white'}`} />
          ) : (
            <FaBars size={22} className={`${scrolled ? 'text-blue-900' : 'text-white'}`} />
          )}
        </button>
        
        {/* WhatsApp Button */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            scrolled 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
          } font-bold py-1.5 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded-full flex items-center space-x-1 sm:space-x-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base`}
        >
          <FaWhatsapp className="text-base sm:text-lg" />
          <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
          <span className="sm:hidden">WP</span>
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <a href="#home" className="font-semibold text-blue-900 hover:text-blue-600 py-1.5 sm:py-2 text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Início</a>
              <a href="#services" className="font-semibold text-blue-900 hover:text-blue-600 py-1.5 sm:py-2 text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="#results" className="font-semibold text-blue-900 hover:text-blue-600 py-1.5 sm:py-2 text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Resultados</a>
              <a href="#testimonials" className="font-semibold text-blue-900 hover:text-blue-600 py-1.5 sm:py-2 text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
              <a href="#process" className="font-semibold text-blue-900 hover:text-blue-600 py-1.5 sm:py-2 text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Processo</a>
              <a href="#portfolio" className="font-semibold text-blue-900 hover:text-blue-600 py-1.5 sm:py-2 text-sm sm:text-base" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header