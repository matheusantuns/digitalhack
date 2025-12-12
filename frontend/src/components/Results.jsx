import React from 'react'
import { FaChartLine, FaUsers, FaMoneyBillWave, FaRocket, FaWhatsapp } from 'react-icons/fa'

const Results = () => {
  const stats = [
    { icon: <FaChartLine />, value: '300%', label: 'ROI Médio', description: 'Retorno sobre investimento' },
    { icon: <FaUsers />, value: '150+', label: 'Clientes', description: 'Atendidos com sucesso' },
    { icon: <FaMoneyBillWave />, value: 'R$ 15M+', label: 'Investido', description: 'Em campanhas gerenciadas' },
    { icon: <FaRocket />, value: '24/7', label: 'Monitoramento', description: 'Otimização constante' }
  ]

  const whatsappNumber = "5511999999999"
  const message = "Olá! Quero ver mais cases de resultados da Digital Hack."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section id="results" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-4">
            Resultados <span className="text-blue-300">Comprovados</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Métricas reais que geramos para nossos clientes
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center border border-white/20">
              <div className="text-blue-300 text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex justify-center">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {stat.icon}
                </span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-1 sm:mb-2">{stat.value}</div>
              <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1">{stat.label}</div>
              <div className="text-blue-200 text-xs sm:text-sm leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl mx-2 sm:mx-0">
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="mb-0 sm:mb-2 md:mb-0 text-center md:text-left w-full md:w-auto">
              <div className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-0.5 sm:mb-1 md:mb-2">Quer resultados como esses?</div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Fale com nossos especialistas no WhatsApp</p>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 rounded-full flex items-center justify-center transition-all text-xs sm:text-sm md:text-base whitespace-nowrap w-full sm:w-auto"
            >
              <FaWhatsapp className="text-base sm:text-lg md:text-xl mr-1 sm:mr-2" />
              Ver Cases Completos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results