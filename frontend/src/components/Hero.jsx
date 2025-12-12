import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaArrowRight, FaChartLine, FaRocket, FaCheckCircle } from 'react-icons/fa'

// Importando a imagem (mantenha como estava)
import heroImage from '../assets/hero.jpg'

const Hero = () => {
  const whatsappNumber = "5511999999999"
  const message = "Olá! Gostaria de solicitar um orçamento para serviços de tráfego pago."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  // Estado para controlar o scroll (mantenha como estava)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay escuro para melhor legibilidade (mantenha como estava) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60"></div>
      
      {/* Decoração (mantenha como estava) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 py-8 sm:py-12 md:py-16">
        {/* Layout responsivo - mantendo o mesmo conteúdo mas ajustando para mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Text Content - Ajustes responsivos */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              <FaChartLine className="mr-1 sm:mr-2 text-sm sm:text-base" /> AGÊNCIA DE MARKETING DIGITAL
            </div>
            
            {/* Título responsivo */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-3 sm:mb-4 md:mb-6 text-white">
              <span className="block">Sua Empresa no</span>
              <span className="block text-blue-300">Próximo Nível</span>
              <span className="block">com Tráfego Pago</span>
            </h1>
            
            {/* Parágrafo responsivo */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
              A <strong className="text-white">Digital Hack</strong> é uma agência especializada em gerar leads e vendas através de campanhas de tráfego pago no Facebook, Instagram e Google.
            </p>
            
            {/* Botões responsivos */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base md:text-lg font-bold py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-8 rounded-xl flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 transition-all shadow-xl sm:shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <FaWhatsapp className="text-lg sm:text-xl md:text-2xl" />
                <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">Falar com Especialista no WhatsApp</span>
                <FaArrowRight className="hidden sm:inline text-sm md:text-base" />
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base md:text-lg font-bold py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-8 rounded-xl border border-white/30 transition-all backdrop-blur-sm whitespace-nowrap"
              >
                <span className="text-xs sm:text-sm md:text-base">Conhecer Serviços</span>
              </a>
            </div>
            
            {/* Lista de benefícios responsiva */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center text-white text-xs sm:text-sm md:text-base">
                <FaCheckCircle className="text-green-400 text-base sm:text-lg md:text-xl mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" />
                <span className="truncate sm:whitespace-normal">Campanhas com ROI comprovado</span>
              </div>
              <div className="flex items-center text-white text-xs sm:text-sm md:text-base">
                <FaCheckCircle className="text-green-400 text-base sm:text-lg md:text-xl mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" />
                <span className="truncate sm:whitespace-normal">Especialistas certificados</span>
              </div>
              <div className="flex items-center text-white text-xs sm:text-sm md:text-base">
                <FaCheckCircle className="text-green-400 text-base sm:text-lg md:text-xl mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" />
                <span className="truncate sm:whitespace-normal">Relatórios transparentes</span>
              </div>
              <div className="flex items-center text-white text-xs sm:text-sm md:text-base">
                <FaCheckCircle className="text-green-400 text-base sm:text-lg md:text-xl mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" />
                <span className="truncate sm:whitespace-normal">Suporte dedicado</span>
              </div>
            </div>
          </div>

          {/* Stats Card - Ajustes responsivos */}
          <div className="lg:w-1/2 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-xl sm:shadow-2xl">
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4 md:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-blue-900 text-base sm:text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg md:text-xl">Resultados Garantidos</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">Métricas que impactam seu negócio</p>
                </div>
              </div>
              
              {/* Grid de estatísticas responsivo */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div className="bg-white/10 rounded sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-white">300%</div>
                  <div className="text-blue-200 text-xs sm:text-sm">ROI Médio</div>
                </div>
                <div className="bg-white/10 rounded sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-white">+150</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Clientes Atendidos</div>
                </div>
                <div className="bg-white/10 rounded sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-white">24/7</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Monitoramento</div>
                </div>
                <div className="bg-white/10 rounded sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-white">89%</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Satisfação</div>
                </div>
              </div>
              
              <p className="text-blue-100 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
                Nossas campanhas são desenvolvidas com foco total em conversão e retorno sobre investimento.
              </p>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 transition-all text-xs sm:text-sm md:text-base"
              >
                <FaWhatsapp className="text-base sm:text-lg md:text-xl" />
                <span>Solicitar Análise Gratuita</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Ajuste responsivo */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="flex flex-col items-center">
          <span className="text-white text-xs sm:text-sm mb-1 sm:mb-2">Role para baixo</span>
          <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-1.5 sm:h-2 md:h-3 bg-white rounded-full mt-1 sm:mt-1.5 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero