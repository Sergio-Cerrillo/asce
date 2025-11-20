"use client"

import { motion } from "framer-motion"
import { Users, FileCheck, CreditCard, UserPlus, Calendar, Shield, ArrowRight, BriefcaseBusiness, HandCoins, NotebookText, Building2, ChartArea, Landmark, FolderKanban, QrCode, BookA, LibraryBig, SearchCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
    {
        title: " Estudio de posibles subvenciones oficiales para el proyecto.",
        description: "Análisis de subvenciones disponibles para apoyar la creación de la empresa.",
        icon: HandCoins,
    },
    {
        title: "Asesoramiento de la forma jurídica más adecuada para la empresa.",
        description: "Orientación sobre la estructura legal más conveniente para el negocio.",
        icon: Building2,
    },
    {
        title: "Realización de Estudio de Mercado.",
        description: "Investigación de mercado para identificar oportunidades y desafíos en el sector.",
        icon: NotebookText,
    }
    ,
    {
        title: "Confección del Plan de Empresa.",
        description: "Elaboración de un plan detallado que defina la estrategia y objetivos del negocio.",
        icon: ChartArea,
    }
    ,
    {
        title: "Gestiones con Entidades de Crédito para poder obtener la financiación del proyecto.",
        description: "Tramitación de la financiación necesaria para el inicio de las operaciones de la empresa.",
        icon: Landmark,
    }
    ,
    {
        title: "Solicitud de Licencia Municipal de Actividad ante el Ayuntamiento, y la elaboración del Proyecto de Ingeniería visado por el Colegio Oficial.",
        description: "Gestión de la licencia municipal necesaria para operar legalmente, incluyendo la elaboración del proyecto técnico requerido.",
        icon: FolderKanban,
    }
    ,
    {
        title: "Obtención del Registro Mercantil Central, de la certificación negativa del nombre para la sociedad.",
        description: "Registro de la empresa en el Registro Mercantil Central para asegurar la disponibilidad del nombre comercial.",
        icon: SearchCheck,
    },
    {
        title: "Elaboración de los Estatutos Sociales y gestiones ante Notario.",
        description: "Redacción de los estatutos que regirán la empresa y realización de los trámites notariales necesarios.",
        icon: LibraryBig,
    },
    {
        title: "Presentación del modelo 600 en la ATIB.",
        description: "Tramitación del modelo 600 para el pago de impuestos relacionados con la constitución de la empresa.",
        icon: FileCheck,
    },
    {
        title: " Inscripción de la escritura de constitución en el Registro Mercantil.",
        description: "Registro oficial de la escritura de constitución de la empresa para su reconocimiento legal.",
        icon: Landmark,
    },
    {
        title: " Obtención del Certificado Digital para la Sociedad y/o Autónomos.",
        description: "Obtención del certificado digital necesario para realizar trámites electrónicos y firmar documentos de forma segura.",
        icon: QrCode,
    },
    {
        title: "Alta de autónomo en la Seguridad Social (Administradores).",
        description: "Registro de los administradores de la empresa como autónomos en la Seguridad Social para garantizar su cobertura social.",
        icon: FileCheck,
    },
    {
        title: "Obtención del CIF y presentación de la Declaración Censal de alta 036/037.",
        description: "Obtención del Código de Identificación Fiscal (CIF) y presentación de la declaración censal para el alta en el censo de empresarios.",
        icon: CreditCard,
    },
    {
        title: "Comunicación apertura centro de trabajo a la Seguridad Social.",
        description: "Notificación a la Seguridad Social sobre la apertura del centro de trabajo para cumplir con las normativas laborales.",
        icon: BookA,
    }
]



const benefits = [
    {
        title: "Apoyo y respaldo desde el minuto 0."
        ,
        description: "Acompañamiento al cliente en todo el proceso relativo a la creación de su empresa.",
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
                            <BriefcaseBusiness className="h-10 w-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-700 dark:from-white dark:via-purple-200 dark:to-blue-300 bg-clip-text text-transparent mb-6">
                            Creación de Empresas</h1>
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
                                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
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
                                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
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
                                <BriefcaseBusiness className="h-12 w-12 mx-auto mb-6 opacity-80" />
                                <h2 className="text-3xl font-bold mb-4">Gestiona tu Empresa con Tranquilidad</h2>
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
