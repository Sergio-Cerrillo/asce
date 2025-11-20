"use client"

import { motion } from "framer-motion"
import { Calculator, CheckCircle, BookOpen, PieChart, ArrowRight, FileText, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
  { key: 0, titleKey: "Libro Diario", descriptionKey: "Registra cronológicamente todas las operaciones económicas de una empresa, detallando fecha, cuentas afectadas, importes y descripción de cada transacción." },
  { key: 1, titleKey: "Libro de Inventarios y Balances", descriptionKey: "Contiene el inventario inicial de la empresa, balances trimestrales o anuales, y el balance de cierre, reflejando el estado del patrimonio, activos y pasivos." },
  { key: 2, titleKey: "Confección de la Cuenta de Pérdidas y Ganancias", descriptionKey: "Documento contable que resume los ingresos, gastos y resultados (beneficio o pérdida) de una empresa durante un periodo determinado." },
  { key: 3, titleKey: "Estado de Cambios en el Patrimonio Neto", descriptionKey: "Refleja las variaciones en el patrimonio neto de la empresa durante un ejercicio contable, como aumentos por beneficios o reducciones por repartos de dividendos." },
  { key: 4, titleKey: "Estado de Flujos de Efectivo", descriptionKey: "Muestra los movimientos de efectivo (entradas y salidas) clasificados por actividades operativas, de inversión y financiación, para conocer la liquidez de la empresa." },
  { key: 5, titleKey: "Memoria", descriptionKey: "Documento complementario de las cuentas anuales que explica y amplía la información financiera, ofreciendo contexto sobre criterios contables y hechos relevantes." },
  { key: 7, titleKey: "Libro de Facturas Emitidas", descriptionKey: "Registro detallado de todas las facturas que la empresa ha emitido a sus clientes, incluyendo fecha, número, importe e IVA." },
  { key: 8, titleKey: "Libro de Facturas Recibidas", descriptionKey: "Contiene el registro de todas las facturas que la empresa ha recibido de sus proveedores, necesario para controlar los gastos y el IVA soportado." },
  { key: 9, titleKey: "Libro Registro de Bienes de Inversión", descriptionKey: "Recoge información sobre los activos fijos de la empresa (como maquinaria o inmuebles), su adquisición, valor y amortización." },
  { key: 9, titleKey: "Libro de Actas", descriptionKey: "Documenta las decisiones y acuerdos adoptados en las reuniones de los órganos sociales (juntas de socios o consejos de administración)." }

];

const additionalServicesKeys = [
  { key: 0, titleKey: 'Depósito de los Libros Contables en el Registro Mercantil' },
  { key: 1, titleKey: 'Depósito de las Cuentas Anuales en el Registro Mercantil' },
  { key: 2, titleKey: 'Auditorías Contables' },
  { key: 3, titleKey: 'Conciliaciones Bancarias' }
];

export default function ContabilidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 pt-16">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            Gestión contable profesional para tu empresa</h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-justify">Ofrecemos servicios de contabilidad adaptados a las necesidades de tu negocio. Control, análisis y asesoramiento para que tomes las mejores decisiones financieras.</p>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/80 dark:bg-slate-800/80 border-0 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center">
                <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                Nuestros objetivos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Transparencia y rigor</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">Garantizamos la máxima claridad y exactitud en la gestión de tu contabilidad.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cumplimiento normativo</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">Nos aseguramos de que tu empresa cumpla con todas las obligaciones legales y fiscales.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Optimización de recursos</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">Te ayudamos a optimizar la gestión financiera y administrativa de tu negocio.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Servicios de contabilidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-justify">{service.titleKey}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">{service.descriptionKey}</p>
                      </div>
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
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-slate-900 dark:text-white flex items-center justify-center">
                <PieChart className="h-6 w-6 mr-2 text-blue-600" />
                Otros servicios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalServicesKeys.map((serviceKey, index) => (
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {serviceKey.key + 1}
                    </Badge>
                    <span className="text-slate-700 dark:text-slate-300 text-justify">{serviceKey.titleKey}</span>
                  </div>
                ))}
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
          <Card className="bg-gradient-to-r from-blue-600 to-slate-700 text-white border-0">
            <CardContent className="p-12">
              <BookOpen className="h-12 w-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu contabilidad?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Contacta con nuestro equipo de expertos para una consulta personalizada.</p>
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
      <Footer />
    </div>
  );
}

