"use client"

import { motion } from "framer-motion"
import { Users, FileCheck, CreditCard, UserPlus, Calendar, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
  {
    titleKey: "Asesoramiento en temas laborales y de Seguridad Social",
    descriptionKey: "Apoyo técnico y legal en materia laboral y normativa de Seguridad Social.",
    icon: Users,
  },
  {
    titleKey: "Altas, bajas y modificaciones de autónomos en el R.E.T.A",
    descriptionKey: "Gestión de trámites en el Régimen Especial de Trabajadores Autónomos.",
    icon: UserPlus,
  },
  {
    titleKey: "Confección de contratos y tramitación en CONTRAT@",
    descriptionKey: "Elaboración de contratos laborales y su registro telemático oficial.",
    icon: FileCheck,
  },
  {
    titleKey: "Altas y bajas de trabajadores en la Seguridad Social",
    descriptionKey: "Inscripción y desvinculación de empleados en el sistema de Seguridad Social.",
    icon: Shield,
  },
  {
    titleKey: "Confección mensual de nóminas y finiquitos",
    descriptionKey: "Elaboración de recibos salariales y liquidaciones por fin de relación laboral.",
    icon: CreditCard,
  },
  {
    titleKey: "Confección de boletines de cotización TC-1 y TC-2",
    descriptionKey: "Preparación de documentos para el pago de seguros sociales a la Seguridad Social.",
    icon: Calendar,
  }, {
    titleKey: "Pagos de nóminas",
    descriptionKey: "Gestión del abono mensual de salarios al personal de la empresa.",
    icon: Calendar,
  }, {
    titleKey: "Tramitación de partes de I.T. por enfermedad común o AT y EP.",
    descriptionKey: "Gestión de partes médicos por Incapacidad Temporal, Accidente de Trabajo o Enfermedad Profesional.",
    icon: Calendar,
  }
]

const additionalServicesKeys = Array.from({ length: 6 }, (_, i) => `additional.${i}`)

const benefits = [
  {
    titleKey: "Dar cumplimiento eficaz a las exigencias que establece toda la Normativa Laboral y de Seguridad Social",

  },
  {
    titleKey: "Obtener las máximas  bonificaciones, subvenciones y reducciones de costes de las que se puedan beneficiar nuestros clientes, dentro del cumplimiento de la legalidad vigente.",

  },
]

export default function LaboralPage() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-700 dark:from-white dark:via-purple-200 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              Asesoría laboral para empresas y trabajadores
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones laborales integrales: gestión de nóminas, contratos, altas y bajas, y asesoramiento en normativa laboral vigente.
            </p>
          </motion.div>

          {/* Objectives Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-900 dark:text-white flex items-center justify-center">
                  <Shield className="h-6 w-6 mr-2 text-purple-600" />
                  Nuestros objetivos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.titleKey} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{benefit.titleKey}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Nuestros servicios laborales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{service.titleKey}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {service.descriptionKey}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Recent Updates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-900/20 border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Últimas novedades laborales
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      Consulta aquí las actualizaciones y cambios recientes en la normativa laboral.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-purple-600 to-blue-700 text-white border-0">
              <CardContent className="p-12">
                <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda laboral?</h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Contacta con nuestro equipo para resolver cualquier duda o gestión laboral.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/34657590436?text=Hola,%20quisiera%20solicitar%20una%20consulta%20con%20ASCE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Solicitar consulta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>

                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
