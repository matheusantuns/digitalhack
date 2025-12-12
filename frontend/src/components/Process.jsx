import React from 'react'
import { FaSearch, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <FaSearch />,
      title: 'Análise e Diagnóstico',
      description: 'Estudo completo do seu negócio, concorrência e mercado para identificar oportunidades.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: <FaLightbulb />,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvimento de um plano de ação detalhado com metas, orçamento e cronograma.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      number: '03',
      icon: <FaRocket />,
      title: 'Implementação',
      description: 'Execução das campanhas com criativos otimizados e segmentação precisa.',
      color: 'from-blue-700 to-blue-800'
    },
    {
      number: '04',
      icon: <FaChartLine />,
      title: 'Otimização e Resultados',
      description: 'Monitoramento 24/7, ajustes em tempo real e relatórios detalhados de performance.',
      color: 'from-blue-800 to-blue-900'
    }
  ]

  return (
    <section id="process" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-blue-900 mb-2 sm:mb-3 md:mb-4">
            Nosso <span className="text-blue-600">Processo</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Metodologia comprovada que garante resultados consistentes e escaláveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center px-2 sm:px-0">
              <div className={`bg-gradient-to-r ${step.color} w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6`}>
                {step.number}
              </div>
              <div className="text-blue-600 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 flex justify-center">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-1 sm:mb-2 md:mb-3">{step.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process