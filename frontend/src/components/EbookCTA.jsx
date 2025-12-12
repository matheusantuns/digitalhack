import React, { useState } from 'react'
import { FaDownload, FaFilePdf, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

const EbookCTA = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    
    setDownloading(true)
    
    // Simulação de envio de email e download
    setTimeout(() => {
      setSubmitted(true)
      setDownloading(false)
      setEmail('')
      
      // Link para download do material (substituir pelo link real)
      const link = document.createElement('a')
      link.href = '#'
      link.download = 'Guia-DigitalHack-Tráfego-Pago.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Reset após 5 segundos
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const checklistItems = [
    '7 estratégias de segmentação avançada',
    'Template de briefing para agências',
    'Planilha de cálculo de ROI',
    'Checklist de otimização de campanhas',
    'Modelo de relatório de performance',
    'Guia de criativos que convertem'
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Left Column - Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                <FaFilePdf className="mr-2" /> MATERIAL GRATUITO
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
                <span className="text-blue-300">Guia Completo:</span><br />
                Tráfego Pago que Converte
              </h2>
              
              <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Baixe nosso e-book exclusivo + checklist profissional. Tudo que você precisa para entender como o tráfego pago pode escalar seu negócio.
              </p>
              
              <div className="mb-6 sm:mb-8">
                <h3 className="font-bold text-white mb-3 sm:mb-4 text-lg sm:text-xl">O que você vai receber:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start mb-2">
                      <FaCheckCircle className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-100 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <FaWhatsapp className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">Bônus Exclusivo</p>
                    <p className="text-blue-200 text-xs sm:text-sm">Ao baixar, você ganha 30 minutos de consultoria gratuita no WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaDownload className="text-green-600 text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-blue-900 mb-2 sm:mb-3">
                  {submitted ? 'Material Baixado!' : 'Baixe Agora Gratuitamente'}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {submitted 
                    ? 'Confira seu e-mail também. Enviamos o material completo!'
                    : 'Preencha com seu melhor e-mail para receber o material'
                  }
                </p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
                      Seu melhor e-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
                      Seu nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Como gosta de ser chamado"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="terms" className="text-gray-600 text-xs sm:text-sm">
                      Concordo em receber conteúdos sobre marketing digital e tráfego pago da Digital Hack. Posso cancelar a qualquer momento.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={downloading}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-white transition-all text-sm sm:text-base ${
                      downloading 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg'
                    }`}
                  >
                    {downloading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Baixando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <FaDownload className="mr-2" />
                        Baixar E-book + Checklist Agora
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <FaCheckCircle className="text-green-600 text-2xl sm:text-3xl" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Material enviado com sucesso!
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                    Verifique seu e-mail e também sua pasta de spam.
                  </p>
                  <a 
                    href="https://wa.me/5511999999999?text=Olá! Baixei o e-book e gostaria da consultoria gratuita."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    <FaWhatsapp className="mr-2" />
                    Agendar Consultoria Gratuita
                  </a>
                </div>
              )}
              
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-center text-gray-500 text-xs sm:text-sm">
                  <strong>100% gratuito</strong> • Sem spam • Você pode cancelar a qualquer momento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EbookCTA