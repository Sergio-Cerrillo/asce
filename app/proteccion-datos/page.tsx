"use client"

import { motion } from "framer-motion"
import { Users, FileCheck, CreditCard, UserPlus, Calendar, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
    {
        title: "Diagnosis inicial",
        description: "Evaluación de la situación actual de la empresa en relación con la protección de datos.",
        icon: Users,
    },
    {
        title: "Registro de actividades realizadas de tratamientos de datos.",
        description: "Documentación detallada de todas las actividades de tratamiento de datos personales realizadas por la empresa.",
        icon: UserPlus,
    },
    {
        title: "Análisis de riesgos de los tratamientos realizados.",
        description: "Identificación y evaluación de los riesgos asociados a los tratamientos de datos personales.",
        icon: FileCheck,
    }
    ,
    {
        title: "Documentación de medidas de seguridad.",
        description: "Elaboración de un conjunto de documentos que describen las medidas de seguridad implementadas para proteger los datos personales.",
        icon: FileCheck,
    }
    ,
    {
        title: "Deber de información y de consentimiento: confección de cláusulas informativas.",
        description: "Creación de cláusulas informativas que cumplan con los requisitos legales y obtención del consentimiento de los interesados.",
        icon: FileCheck,
    }
    ,
    {
        title: "Documentación de encargos de tratamiento: redacción de contratos.",
        description: "Elaboración de contratos que regulen las relaciones con terceros que traten datos personales en nombre de la empresa.",
        icon: FileCheck,
    }
    ,
    {
        title: "Documentación del procedimiento de notificación de brechas sobre seguridad y sobre violaciones de seguridad de datos.",
        description: "Establecimiento de un procedimiento para notificar brechas de seguridad y violaciones de datos personales a las autoridades competentes y a los interesados.",
        icon: FileCheck,
    }
]



const benefits = [
    {
        title: "Protección de Datos",
        description: "Cumplimiento integral de lo establecido por la Ley Orgánica 3/2018 de 6 de diciembre de Protección de Datos Personales y Garantía de los Derechos Digitales.",
    }

]

export default function ProteccionDatosPage() {
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
                            Protección de Datos</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            El objetivo y los servicios que te prestamos en ASCE
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
                                    Nuestros Objetivos
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    {benefits.map((benefit, index) => (
                                        <div key={benefit.title} className="flex items-start space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                    {benefit.description}
                                                </p>
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
                            Servicios Principales
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
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
                                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
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
                                <h2 className="text-3xl font-bold mb-4">Gestione su Protección de Datos con Tranquilidad</h2>
                                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                    Déjanos tus datos y tu consulta y te agendaremos una cita.
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
