import React, { useState } from 'react'
import { FaShoppingCart, FaGraduationCap, FaBriefcase, FaHospital, FaUtensils, FaHome } from 'react-icons/fa'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Todos', icon: <FaHome /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <FaShoppingCart /> },
    { id: 'education', label: 'Educação', icon: <FaGraduationCap /> },
    { id: 'services', label: 'Serviços', icon: <FaBriefcase /> },
    { id: 'health', label: 'Saúde', icon: <FaHospital /> },
    { id: 'food', label: 'Alimentação', icon: <FaUtensils /> }
  ]

  const cases = [
    {
      id: 1,
      category: 'ecommerce',
      title: 'Moda Feminina - E-commerce',
      result: '+320% ROI em 6 meses',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Gestão completa de Facebook Ads e Google Shopping'
    },
    {
      id: 2,
      category: 'education',
      title: 'Curso Online - Plataforma EAD',
      result: 'R$ 850k em vendas',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Campanha de captação com YouTube e Google Ads'
    },
    {
      id: 3,
      category: 'services',
      title: 'Escritório de Advocacia',
      result: '+280 leads qualificados/mês',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Google Ads e LinkedIn para geração de leads'
    },
    {
      id: 4,
      category: 'health',
      title: 'Clínica de Estética',
      result: 'Agenda lotada em 60 dias',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Instagram Ads com remarketing'
    },
    {
      id: 5,
      category: 'food',
      title: 'Franquia de Alimentação',
      result: '+150% aumento nas vendas',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Facebook Ads local e Google My Business'
    },
    {
      id: 6,
      category: 'ecommerce',
      title: 'Loja de Eletrônicos',
      result: 'R$ 1.2M em vendas online',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Google Ads e remarketing dinâmico'
    }
  ]

  const filteredCases = activeCategory === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.category === activeCategory)

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cases</span> de Sucesso
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Resultados reais que geramos para nossos clientes
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              } whitespace-nowrap`}
            >
              <span className="text-xs sm:text-sm md:text-base">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {filteredCases.map((caseItem) => (
            <div key={caseItem.id} className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-xs sm:text-sm">
                      {caseItem.result}
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{caseItem.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{caseItem.description}</p>
                  <div className="flex items-center text-xs sm:text-sm text-blue-600 font-semibold">
                    Ver case completo →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 px-2 sm:px-0">
          <div className="inline-flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-100 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-1 sm:mb-2">Quer resultados como esses?</div>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">Agende uma conversa com nossos especialistas</p>
              <a 
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio