
"use client"

import { motion } from "framer-motion"
import { FileText, TrendingDown, AlertCircle, Shield, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert } from "@/components/ui/alert"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const taxFormCodes = [
  { code: "036-037", desc: "Declaración censal de alta, modificación y baja" },
  { code: "111-190", desc: "Retenciones e ingresos a cuenta de rendimientos del trabajo y actividades económicas" },
  { code: "115-180", desc: "Retenciones sobre alquileres de inmuebles urbanos" },
  { code: "130-131", desc: "Pagos fraccionados IRPF estimación directa y objetiva" },
  { code: "100", desc: "Declaración de la Renta de las Personas Físicas" },
  { code: "202-200", desc: "Pagos fraccionados y declaración anual del Impuesto sobre Sociedades" },
  { code: "303-390-349", desc: "Declaraciones trimestrales, resumen anual y operaciones intracomunitarias de IVA" },
  { code: "347", desc: "Declaración anual de operaciones con terceros" },
  { code: "600", desc: "Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados" },
  { code: "714", desc: "Impuesto sobre el Patrimonio" },
];

const additionalServices = [
  {
    icon: Shield,
    title: "Defensa y representación ante la Administración",
    desc: "Asistencia en inspecciones, recursos y procedimientos tributarios."
  },
  {
    icon: Users,
    title: "Planificación fiscal personalizada",
    desc: "Estudio y optimización de la carga fiscal adaptada a cada cliente."
  },
  {
    icon: TrendingDown,
    title: "Gestión de requerimientos",
    desc: "Respuesta a requerimientos de AEAT, ATIB o cualquier entidad pública."
  },
  {
    icon: FileText,
    title: "Informes y certificados fiscales",
    desc: "Elaboración de informes, certificados y documentación tributaria."
  },
];

export default function FiscalidadPage() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white mb-6">
              <FileText className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-blue-700 dark:from-white dark:via-green-200 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              Asesoría Fiscal
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Cumplimiento tributario eficaz y optimización fiscal dentro de la legalidad vigente.
            </p>
          </motion.div>

          {/* Alert for Tax Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20 flex items-center gap-3">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <span>
                <strong>Actualización Fiscal 2024:</strong> Nuevas deducciones disponibles para empresas que inviertan en digitalización y sostenibilidad. Consulte con nuestros expertos para aprovechar estas ventajas fiscales.
              </span>
            </Alert>
          </motion.div>

          {/* Objectives Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-900 dark:text-white flex items-center justify-center">
                  Nuestros Objetivos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cumplimiento Tributario</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        Dar cumplimiento eficaz a las exigencias que establece la Normativa Tributaria y Fiscal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Optimización Fiscal</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        Obtener las máximas ventajas fiscales dentro del cumplimiento de la legalidad vigente.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tax Forms Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Liquidaciones y Presentaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {taxFormCodes.map((item, index) => (
                <motion.div
                  key={item.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                        >
                          Mod. {item.code}
                        </Badge>
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {item.desc}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Otros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-green-600 to-blue-700 text-white border-0">
              <CardContent>
                <h2 className="text-3xl font-bold mb-4">Optimice su Carga Fiscal</h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Déjenos sus datos y su consulta y le agendaremos una cita.</p>
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
  );
}
