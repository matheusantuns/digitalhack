import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO - Moda Store',
      content: 'A Digital Hack transformou nosso e-commerce. Em 6 meses, aumentamos nossas vendas online em 320%. A equipe é extremamente profissional e os resultados superaram todas as expectativas.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Ana Santos',
      role: 'Diretora - Escola Online',
      content: 'Como empresa de educação, precisávamos de uma estratégia especializada. A Digital Hack não só entendeu nosso público como desenvolveu campanhas que lotaram nossas turmas em tempo recorde.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' // Foto alterada
    },
    {
      name: 'Roberto Lima',
      role: 'Fundador - Tech Startup',
      content: 'Trabalhamos com várias agências antes, mas a Digital Hack foi a primeira que realmente entendeu métricas de SaaS. Nosso CAC caiu 40% enquanto aumentávamos o volume de leads.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Mariana Costa',
      role: 'Gerente de Marketing - Rede de Clínicas',
      content: 'A transparência nos relatórios e a agilidade na resposta fizeram toda diferença. Conseguimos lotar nossas agendas com pacientes qualificados em poucas semanas.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            O que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clientes</span> Dizem
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Histórias reais de parceiros que alcançaram resultados extraordinários
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-0.5 sm:hover:-translate-y-1">
              <div className="flex items-start mb-4 sm:mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mr-3 sm:mr-4 border-2 border-blue-100 flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  <div className="flex text-yellow-500 mt-0.5 sm:mt-1 text-xs sm:text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-blue-200 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
                <p className="text-gray-600 italic text-xs sm:text-sm md:text-base pl-6 sm:pl-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm text-gray-500">
                    Case completo disponível
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm whitespace-nowrap">
                    Ler história completa →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-white mx-2 sm:mx-0">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black">98%</div>
              <div className="text-blue-100 text-xs sm:text-sm">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black">4.9/5</div>
              <div className="text-blue-100 text-xs sm:text-sm">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black">85%</div>
              <div className="text-blue-100 text-xs sm:text-sm">Clientes Renovam</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black">24h</div>
              <div className="text-blue-100 text-xs sm:text-sm">Tempo Médio de Resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials