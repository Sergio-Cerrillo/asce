"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"


export function Footer() {

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img className="h-10 w-28 mb-3" src="/asce-logo.png" alt="ASCE Logo" />
            <p className="text-slate-300 mb-4 leading-relaxed">Asesoría integral para empresas y autónomos en Palma de Mallorca. Soluciones personalizadas en fiscalidad, laboral, contabilidad, jurídico y más.</p>
            <div className="flex space-x-6 mt-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ascepalma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/asce_palma/?igsh=d2ozYjd6NnBzbnB3&utm_source=qr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* Correo */}
              <a
                href="mailto:info@asce-palma.com"
                className="text-slate-500 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Normativa</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <Link href="/cookiesPage" className="text-slate-400 text-sm">Política de Cookies</Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <Link href="/proteccion-de-datos" className="text-slate-400 text-sm">Política de Protección de Datos</Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <Link href="/aviso-legal" className="text-slate-400 text-sm">Aviso Legal</Link>
              </div>
            </div>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400 text-sm">Palma, Mallorca</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400 text-sm">+34 657 590 436</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400 text-sm">info@asce-palma.com</span>
              </div>
            </div>

          </motion.div>


          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Carrer+Ginjoler+6,+07008+Palma&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ASCE Location"
              />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">© 2025 ASCE - Asesoría Integral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer >
  )
}
