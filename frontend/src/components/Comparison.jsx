import React, { useState } from 'react'
import { FaCheck, FaTimes, FaChartLine, FaUserCheck, FaClock, FaDollarSign } from 'react-icons/fa'

const Comparison = () => {
  const [activeTab, setActiveTab] = useState('ecommerce')

  const scenarios = {
    ecommerce: {
      title: 'E-commerce',
      com: {
        roi: '320%',
        tempo: '3-6 meses',
        conversao: '+85%',
        investimento: 'R$ 5.000/mês'
      },
      sem: {
        roi: '40-80%',
        tempo: '12+ meses',
        conversao: '15-30%',
        investimento: 'R$ 8.000+/mês'
      }
    },
    services: {
      title: 'Serviços Profissionais',
      com: {
        roi: '280%',
        tempo: '2-4 meses',
        conversao: '+120 leads/mês',
        investimento: 'R$ 3.500/mês'
      },
      sem: {
        roi: '60-90%',
        tempo: '8+ meses',
        conversao: '20-40 leads/mês',
        investimento: 'R$ 5.000+/mês'
      }
    },
    education: {
      title: 'Educação',
      com: {
        roi: '350%',
        tempo: '3-5 meses',
        conversao: '+65 matrículas/mês',
        investimento: 'R$ 4.200/mês'
      },
      sem: {
        roi: '50-75%',
        tempo: '10+ meses',
        conversao: '10-20 matrículas/mês',
        investimento: 'R$ 6.500+/mês'
      }
    }
  }

  const features = [
    {
      title: 'Gestão Profissional',
      com: 'Especialistas certificados 24/7',
      sem: 'Gestão amadora ou inexperiente'
    },
    {
      title: 'Otimização Constante',
      com: 'Ajustes diários baseados em dados',
      sem: 'Configuração inicial e esquecimento'
    },
    {
      title: 'Relatórios Detalhados',
      com: 'Dashboards em tempo real + análises',
      sem: 'Dados básicos ou inexistentes'
    },
    {
      title: 'Criativos Profissionais',
      com: 'Designers + copywriters especializados',
      sem: 'Criativos amadores ou templates'
    },
    {
      title: 'Segmentação Avançada',
      com: 'IA + machine learning para targeting',
      sem: 'Segmentação básica ou errada'
    },
    {
      title: 'Suporte Dedicado',
      com: 'Gerente de conta + suporte premium',
      sem: 'Suporte genérico ou inexistente'
    }
  ]

  const currentScenario = scenarios[activeTab]

  return (
    <section id="comparison" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Compare: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Com vs Sem</span> Agência
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Veja a diferença que uma gestão profissional de tráfego faz nos resultados do seu negócio
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {Object.keys(scenarios).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all text-sm sm:text-base ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {scenarios[key].title}
            </button>
          ))}
        </div>

        {/* Metrics Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* COM Digital Hack */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
                <FaCheck className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-blue-900 mb-2">Com Digital Hack</h3>
              <p className="text-blue-700 text-sm sm:text-base">Gestão profissional especializada</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaChartLine className="text-green-600 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.com.roi}</div>
                <div className="text-xs sm:text-sm text-gray-600">ROI Médio</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaClock className="text-blue-600 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.com.tempo}</div>
                <div className="text-xs sm:text-sm text-gray-600">Tempo Resultados</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaUserCheck className="text-purple-600 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.com.conversao}</div>
                <div className="text-xs sm:text-sm text-gray-600">Conversão</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaDollarSign className="text-green-700 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.com.investimento}</div>
                <div className="text-xs sm:text-sm text-gray-600">Investimento</div>
              </div>
            </div>
          </div>

          {/* SEM Digital Hack */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 rounded-full mb-3 sm:mb-4">
                <FaTimes className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-700 mb-2">Sem Agência Especializada</h3>
              <p className="text-gray-600 text-sm sm:text-base">Tentativa própria ou agência genérica</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaChartLine className="text-red-500 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.sem.roi}</div>
                <div className="text-xs sm:text-sm text-gray-600">ROI Médio</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaClock className="text-orange-500 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.sem.tempo}</div>
                <div className="text-xs sm:text-sm text-gray-600">Tempo Resultados</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaUserCheck className="text-red-400 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.sem.conversao}</div>
                <div className="text-xs sm:text-sm text-gray-600">Conversão</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <FaDollarSign className="text-red-600 text-lg sm:text-xl mb-2 mx-auto" />
                <div className="text-lg sm:text-xl font-black text-gray-900">{currentScenario.sem.investimento}</div>
                <div className="text-xs sm:text-sm text-gray-600">Investimento</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Comparison Table */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                  <th className="p-4 sm:p-6 text-left text-sm sm:text-base font-bold">Recurso / Funcionalidade</th>
                  <th className="p-4 sm:p-6 text-center text-sm sm:text-base font-bold">Com Digital Hack</th>
                  <th className="p-4 sm:p-6 text-center text-sm sm:text-base font-bold">Sem Agência Especializada</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-medium text-gray-900">
                      {feature.title}
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full">
                        <FaCheck className="text-green-600 text-sm sm:text-base" />
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600">{feature.com}</p>
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full">
                        <FaTimes className="text-red-500 text-sm sm:text-base" />
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600">{feature.sem}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive ROI Calculator */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4">Calcule seu ROI Potencial</h3>
              <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6">
                Use nossa calculadora para estimar quanto seu negócio pode crescer com tráfego pago profissional.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <FaChartLine className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold">+150%</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Conversão Média</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <FaDollarSign className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold">2.8x</div>
                    <div className="text-blue-200 text-xs sm:text-sm">ROI em 6 meses</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma simulação de ROI para meu negócio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-full hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Simular ROI Personalizado
              </a>
              <p className="text-blue-200 text-xs sm:text-sm mt-3">
                Análise gratuita com nossos especialistas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison