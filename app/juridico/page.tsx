"use client"

import { motion } from "framer-motion"
import { Users, FileCheck, CreditCard, UserPlus, Calendar, Shield, ArrowRight, Gavel, Speech, Handshake, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const services = [
    {
        title: "Asesoramiento",
        description: "Asesoramiento general en materia jurídica.",
        icon: Speech,
    },
    {
        title: "Acuerdos",
        description: "Negociaciones extrajudiciales.",
        icon: Handshake,
    },
    {
        title: "Defensa",
        description: "Representación en procesos judiciales.",
        icon: ShieldCheck,
    }
]



const benefits = [
    {
        title: "Asesoramiento en Derecho Civil",

    },
    {
        title: "Asesoramiento en Derecho Tributario",

    },
    {
        title: "Asesoramiento en Derecho Mercantil",

    },
    {
        title: "Asesoramiento en Derecho Laboral",

    }
]

export default function JuridicoPage() {
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
                            <Gavel className="h-10 w-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-700 dark:from-white dark:via-purple-200 dark:to-blue-300 bg-clip-text text-transparent mb-6">
                            Servicios Jurídicos</h1>
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
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    {benefits.map((benefit, index) => (
                                        <div key={benefit.title} className="flex items-start space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-justify">{benefit.title}</h3>

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
                                <Gavel className="h-12 w-12 mx-auto mb-6 opacity-80" />
                                <h2 className="text-3xl font-bold mb-4">Haz valer tus derechos y conoce tus obligaciones</h2>
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
