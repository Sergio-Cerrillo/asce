"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProteccionDatosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            <Navbar />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 dark:from-white dark:via-blue-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
                            Política de Protección de Datos
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Comprometidos con la privacidad y la protección de tus datos personales
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl mx-auto mb-16"
                    >
                        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardContent className="p-8 md:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 flex items-center justify-center mr-4">
                                        <ShieldCheck className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Compromiso con tus datos</h2>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">ASESORÍA ASCE</p>
                                    </div>
                                </div>

                                <div className="prose prose-lg dark:prose-invert max-w-none text-justify">
                                    <p>
                                        La Dirección de ASESORÍA ASCE, asume la máxima responsabilidad en el cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la normativa española sobre protección de datos personales.
                                    </p>
                                    <br />
                                    <p>
                                        Nuestra política descansa en el principio de responsabilidad proactiva, garantizando el cumplimiento normativo y demostrando nuestra transparencia ante autoridades de control competentes.
                                    </p>
                                    <br />
                                    <h3 className="mt-6">Principios rectores:</h3><br />
                                    <ol className="list-decimal pl-5 space-y-2">
                                        <li><strong>Desde el diseño:</strong> medidas técnicas y organizativas desde el inicio, como la seudonimización.</li><br />
                                        <li><strong>Por defecto:</strong> solo se tratan los datos estrictamente necesarios para cada finalidad.</li><br />
                                        <li><strong>Ciclo de vida:</strong> protección continua desde la recogida hasta la eliminación de los datos.</li><br />
                                        <li><strong>Licitud, lealtad y transparencia:</strong> tratamiento de forma lícita y comprensible.</li><br />
                                        <li><strong>Limitación de la finalidad:</strong> recogida con fines específicos, explícitos y legítimos.</li><br />
                                        <li><strong>Minimización:</strong> solo los datos pertinentes y necesarios para el fin concreto.</li><br />
                                        <li><strong>Exactitud:</strong> actualización constante y corrección de datos inexactos.</li><br />
                                        <li><strong>Plazo de conservación:</strong> se limitará al tiempo estrictamente necesario.</li><br />
                                        <li><strong>Integridad y confidencialidad:</strong> protección contra accesos no autorizados y pérdidas.</li><br />
                                        <li><strong>Información y formación:</strong> el personal estará debidamente informado y capacitado.</li><br /><br />
                                    </ol>

                                    <p>
                                        Esta política es de obligado cumplimiento para todo el personal y está disponible para cualquier parte interesada. Cada miembro del equipo es responsable de su aplicación y mejora continua.
                                    </p>

                                    <p>
                                        Será revisada por la Dirección cuando sea necesario, para mantenerla siempre alineada con la legislación vigente.
                                    </p>
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
