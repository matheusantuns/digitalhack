import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quanto custa o serviço de tráfego pago?',
      answer: 'Os valores variam de acordo com o investimento em mídia e complexidade do projeto. Oferecemos desde pacotes starter (a partir de R$ 1.500/mês + investimento em mídia) até soluções enterprise. Durante nossa conversa inicial, apresentamos uma proposta personalizada com orçamento transparente.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Normalmente os primeiros resultados aparecem em 15-30 dias. O mês 1 é de implementação e otimização, o mês 2 mostra crescimento consistente e a partir do mês 3 atingimos a escala e ROI otimizado. Mantemos relatórios semanais para acompanhamento.'
    },
    {
      question: 'Trabalham com o meu nicho de mercado?',
      answer: 'Sim! Já atendemos mais de 150 clientes em 12 segmentos diferentes: e-commerce, educação, saúde, serviços profissionais, tecnologia, alimentação, moda, imobiliário, automotivo e mais. Cada estratégia é desenvolvida especificamente para o seu nicho.'
    },
    {
      question: 'Qual o valor mínimo de investimento em mídia?',
      answer: 'Recomendamos um investimento mínimo de R$ 2.000/mês em mídia para campanhas eficientes. Valores menores podem ser aplicados em testes ou nichos específicos. Analisamos seu CAC (Custo de Aquisição) ideal para definir o investimento ideal.'
    },
    {
      question: 'Como funciona o contrato?',
      answer: 'Trabalhamos com contrato mensal, sem fidelidade mínima. O primeiro mês é considerado período de teste. Você pode cancelar a qualquer momento com 30 dias de antecedência. Todo contrato inclui relatórios detalhados e reuniões semanais de acompanhamento.'
    },
    {
      question: 'Vocês emitem nota fiscal?',
      answer: 'Sim, somos uma empresa regularizada e emitimos nota fiscal de serviço. Aceitamos diversas formas de pagamento: PIX, transferência bancária, cartão de crédito (até 12x) e boleto.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4 sm:mb-6">
            <FaQuestionCircle className="text-blue-600 text-xl sm:text-2xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-3 sm:mb-4">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Tire suas dúvidas sobre nossos serviços de tráfego pago
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-6 bg-white hover:bg-blue-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-blue-600 flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <FaChevronUp className="text-sm sm:text-base" />
                    ) : (
                      <FaChevronDown className="text-sm sm:text-base" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 pt-0 sm:pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2 sm:mb-3">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Fale diretamente com nossos especialistas no WhatsApp
              </p>
              <a 
                href="https://wa.me/5511999999999?text=Olá! Tenho algumas dúvidas sobre os serviços de tráfego pago."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Tirar Dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ