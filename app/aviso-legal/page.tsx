"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AvisoLegalPage() {
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
                            Aviso Legal y Política de Privacidad
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Información legal y condiciones sobre el uso de www.asce-palma.com
                        </p>
                    </motion.div>

                    {/* Content */}
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
                                        <FileText className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Información Legal</h2>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">ASESORÍA ASCE</p>
                                    </div>
                                </div>

                                <div className="prose prose-lg dark:prose-invert max-w-none text-justify">
                                    <p>
                                        El titular de la página web <strong>www.asce-palma.com</strong> no asume ninguna responsabilidad derivada del uso incorrecto, inapropiado o ilícito de la información aparecida en la misma.
                                    </p>
                                    <br />
                                    <p>
                                        Dentro de los límites legales, el titular tampoco asume responsabilidad por la falta de veracidad, integridad, actualización y precisión de los datos o informaciones contenidas en el sitio web.
                                    </p>
                                    <br />
                                    <p>
                                        Todos los contenidos e información se proporcionan con fines meramente informativos y divulgativos, sin constituir asesoramiento legal, opiniones profesionales, ni compromisos contractuales.
                                    </p>
                                    <br />
                                    <p>
                                        Este sitio puede incluir enlaces a páginas de terceros, sobre las cuales el titular no tiene control ni asume responsabilidad por los contenidos que puedan encontrarse en dichas páginas externas.
                                    </p>
                                    <br />
                                    <p>
                                        Los textos, imágenes, sonidos, animaciones, software y otros contenidos son propiedad exclusiva del titular o de sus licenciantes. Su reproducción o distribución está prohibida sin autorización expresa.
                                    </p>
                                    <br /><br />
                                    <h3 className="mt-6">Tratamiento de datos personales</h3>
                                    <p><br />
                                        Para acceder a ciertos servicios, puede que se le requieran datos personales mediante correo electrónico a <strong>info@asce-palma.com</strong> o llamada telefónica.
                                    </p>
                                    <br />
                                    <p>
                                        En cumplimiento de la Ley Orgánica 3/2018 de Protección de Datos y el RGPD, los datos se tratarán con la finalidad de gestionar su solicitud o proporcionarle información sobre nuestros servicios.
                                    </p>
                                    <br />
                                    <p>
                                        Los datos se conservarán mientras exista una relación comercial o durante el tiempo necesario para cumplir obligaciones legales. Podrán cederse a empresas colaboradoras, pero no a terceros ajenos sin obligación legal.
                                    </p>
                                    <br /><br />
                                    <h3 className="mt-6">Derechos del usuario</h3>
                                    <p><br />
                                        Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada del consentimiento escribiendo a <strong>info@asce-palma.com</strong>.
                                    </p>

                                    <p>
                                        Asimismo, puede presentar reclamación ante la Autoridad de Control competente en materia de protección de datos.
                                    </p>
                                    <br /><br />
                                    <h3 className="mt-6">Comunicaciones comerciales</h3>
                                    <p><br />
                                        Si no desea recibir comunicaciones por parte de ASCE Asesoría Integral, puede solicitarlo enviando un correo a <strong>info@asce-palma.com</strong>.
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
