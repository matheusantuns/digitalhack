import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: <FaLinkedin />, label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <FaYoutube />, label: 'YouTube', color: 'hover:text-red-600' }
  ]

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Processo', href: '#process' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ]

  const servicesLinks = [
    { label: 'Facebook Ads' },
    { label: 'Google Ads' },
    { label: 'Instagram Ads' },
    { label: 'TikTok Ads' },
    { label: 'Marketing de Conteúdo' },
    { label: 'SEO' }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          
          {/* Company Info */}
          <div className="px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">DH</span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">Digital<span className="text-blue-400">Hack</span></h2>
                <p className="text-gray-400 text-xs sm:text-sm">Performance Marketing Agency</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Especialistas em tráfego pago e marketing digital com foco em resultados mensuráveis e crescimento sustentável.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 ${social.color} transition-colors text-sm sm:text-base`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-2 sm:px-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="px-2 sm:px-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {servicesLinks.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="px-2 sm:px-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5 sm:mt-1 mr-2 sm:mr-3 text-sm sm:text-base" />
                <span className="text-gray-400 text-sm sm:text-base">Av. Paulista, 1000<br />São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-2 sm:mr-3 text-sm sm:text-base" />
                <span className="text-gray-400 text-sm sm:text-base">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-2 sm:mr-3 text-sm sm:text-base" />
                <span className="text-gray-400 text-sm sm:text-base">contato@digitalhack.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-400 mr-2 sm:mr-3 text-sm sm:text-base" />
                <span className="text-gray-400 text-sm sm:text-base">Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-0">
              © {new Date().getFullYear()} Digital Hack. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition whitespace-nowrap">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition whitespace-nowrap">Termos de Uso</a>
              <a href="#" className="hover:text-white transition whitespace-nowrap">Cookies</a>
              <a href="#" className="hover:text-white transition whitespace-nowrap">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer