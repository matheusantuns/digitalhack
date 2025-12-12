import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaBullseye, FaChartLine, FaSearch, FaWhatsapp } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaFacebook className="text-lg sm:text-xl md:text-2xl" />,
      title: 'Facebook Ads',
      description: 'Campanhas segmentadas com criativos otimizados para conversão no maior social media.',
      stats: 'ROI médio: 350%'
    },
    {
      icon: <FaGoogle className="text-lg sm:text-xl md:text-2xl" />,
      title: 'Google Ads',
      description: 'Apareça no momento exato da busca do seu cliente com anúncios de alta intenção.',
      stats: 'CTR médio: 4.2%'
    },
    {
      icon: <FaInstagram className="text-lg sm:text-xl md:text-2xl" />,
      title: 'Instagram Ads',
      description: 'Conquiste o público visual com anúncios impactantes e stories engajadores.',
      stats: 'Engajamento: +42%'
    },
    {
      icon: <FaChartLine className="text-lg sm:text-xl md:text-2xl" />,
      title: 'Performance Marketing',
      description: 'Gestão completa de campanhas com foco em ROI e otimização constante.',
      stats: 'ROAS médio: 4.8'
    },
    {
      icon: <FaBullseye className="text-lg sm:text-xl md:text-2xl" />,
      title: 'Remarketing',
      description: 'Recapture visitantes e aumente conversões com campanhas inteligentes.',
      stats: 'Conversão: +65%'
    },
    {
      icon: <FaSearch className="text-lg sm:text-xl md:text-2xl" />,
      title: 'Auditoria de Anúncios',
      description: 'Análise completa das suas campanhas atuais com plano de otimização.',
      stats: 'Economia média: 28%'
    }
  ]

  const whatsappNumber = "5511999999999"
  const message = "Olá! Gostaria de mais informações sobre os serviços de tráfego pago."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-blue-900 mb-2 sm:mb-3 md:mb-4">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Especialistas em tráfego pago com foco em resultados mensuráveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded sm:rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-1 sm:mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs sm:text-sm font-bold text-blue-700">{service.stats}</div>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm whitespace-nowrap"
                    >
                      Falar sobre →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8 md:mt-12 lg:mt-16 px-2 sm:px-0">
          <div className="inline-flex flex-col items-center p-4 sm:p-6 md:p-8 bg-blue-50 rounded-lg sm:rounded-xl md:rounded-2xl border border-blue-200 max-w-2xl w-full">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-900 mb-1 sm:mb-2">Não encontrou o que precisa?</div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">Fale diretamente com nossos especialistas no WhatsApp</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 rounded-full hover:shadow-lg transition-all text-xs sm:text-sm md:text-base whitespace-nowrap w-full sm:w-auto"
            >
              <FaWhatsapp className="text-base sm:text-lg md:text-xl mr-1 sm:mr-2" />
              Conversar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services