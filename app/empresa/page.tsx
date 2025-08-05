"use client"

import { motion } from "framer-motion"
import { User, Award, Clock, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EmpresaPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 dark:from-white dark:via-blue-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
              Nuestra Empresa
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relazed">
              Más de tres décadas de experiencia al servicio de nuestros clientes
            </p>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-18 h-18 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 flex items-center justify-center mr-4">
                    <img src="/jose.png" alt="José A. Cerrillo Cantero" className="w-16 h-16 rounded-full" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">José A. Cerrillo Cantero</h2>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Director Ejecutivo</p>
                  </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-justify">
                    Quiero darte la bienvenida a nuestra web, pero permíteme, lo primero de todo, presentarme. Mi nombre es Jose y soy el Director Ejecutivo de ASCE.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-justify">
                    ASCE es un grupo empresarial que nace en el 2023, pero que está formado por empresas y profesionales titulados, colegiados, expertos altamente cualificados, con una dilatada experiencia de más de tres décadas, y especialistas cada uno de nosotros en un ámbito profesional determinado, lo que hace que el servicio que le prestamos a todos nuestros clientes sea lo más eficiente y profesional posible.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-justify">
                    ASCE se dedica al asesoramiento integral y prestación de servicios a empresas y particulares, dentro de una gran variedad de áreas como Asesoramiento Fiscal, Contabilidad, Asesoramiento Laboral, Creación de Empresas, Servicios Informáticos, Servicios Financieros, Seguros, Asesoramiento Jurídico (en Derecho Mercantil, Civil, etc…), Servicios Inmobiliarios, Prevención de Riesgos Laborales, Protección de Datos e Implantación de Sistemas de Calidad.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-justify">
                    Desde aquí quiero invitarte a que sigas navegando por www.asce-palma.com para que puedas conocer un poco más en detalle aquello a lo que nos dedicamos. <strong className="text-blue-600 dark:text-blue-400">NUESTRA PASIÓN…</strong>
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    No dudes en contactar con nosotros para cualquier duda o información que necesites sobre nuestros servicios y sin compromiso alguno.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-6 font-medium">Muchas gracias.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Experiencia</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Más de tres décadas de experiencia profesional al servicio de nuestros clientes
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Profesionalidad</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Profesionales titulados, colegiados y expertos altamente cualificados
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Especialización</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Especialistas en cada ámbito profesional para un servicio eficiente
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
