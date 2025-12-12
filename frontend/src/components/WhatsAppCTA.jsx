import React from 'react'
import { FaWhatsapp, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const WhatsAppCTA = () => {
  const whatsappNumber = "5511999999999"
  const message = "Olá! Gostaria de conversar sobre um projeto de marketing digital."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-3 sm:mb-4">
              Pronto para <span className="text-blue-600">Conversar?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
              Clique no botão abaixo para iniciar uma conversa no WhatsApp. Vamos entender suas necessidades e criar uma estratégia personalizada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 sm:px-0">
            {/* Left side - Benefits */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl sm:shadow-2xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Por que falar no WhatsApp?</h3>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0">
                    <FaClock className="text-sm sm:text-base md:text-lg lg:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Resposta Rápida</h4>
                    <p className="text-blue-200 text-xs sm:text-sm md:text-base">Nossa equipe responde em até 15 minutos durante horário comercial.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0">
                    <FaCheckCircle className="text-sm sm:text-base md:text-lg lg:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Sem Burocracia</h4>
                    <p className="text-blue-200 text-xs sm:text-sm md:text-base">Conversa direta com nossos especialistas, sem formulários ou espera.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0">
                    <FaWhatsapp className="text-sm sm:text-base md:text-lg lg:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Conveniente</h4>
                    <p className="text-blue-200 text-xs sm:text-sm md:text-base">Converse de qualquer lugar, pelo celular ou computador.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t border-blue-700">
                <p className="text-blue-200 text-xs sm:text-sm md:text-base">
                  <strong>Horário de atendimento:</strong> Segunda a Sexta, das 9h às 18h
                </p>
              </div>
            </div>
            
            {/* Right side - CTA */}
            <div className="flex flex-col justify-center px-2 sm:px-0">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaWhatsapp className="text-green-500 text-2xl sm:text-3xl md:text-4xl" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-blue-900 mb-2 sm:mb-3 md:mb-4">Inicie Sua Conversa Agora</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Clique no botão verde para abrir o WhatsApp e conversar com nossa equipe.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 transition-all shadow-xl sm:shadow-2xl hover:shadow-3xl hover:scale-105 animate-pulse-slow"
                >
                  <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />
                  <span className="text-sm sm:text-base md:text-lg">Abrir WhatsApp Agora</span>
                  <FaArrowRight className="text-sm sm:text-base md:text-lg" />
                </a>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 transition-all text-sm sm:text-base md:text-lg"
                >
                  <span>Solicitar Orçamento</span>
                </a>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 transition-all text-sm sm:text-base md:text-lg"
                >
                  <span>Tirar Dúvidas</span>
                </a>
              </div>
              
              <div className="mt-6 sm:mt-8 md:mt-10 p-3 sm:p-4 md:p-6 bg-blue-50 rounded-lg sm:rounded-xl">
                <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base">
                  <strong>Pronto para começar?</strong> Clique em qualquer botão acima para conversar no WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppCTA