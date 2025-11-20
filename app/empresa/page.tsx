"use client"

import { motion } from "framer-motion"
import { Award, Clock, Target, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EmpresaPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            <Navbar />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Hero Section with Large Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 dark:from-white dark:via-blue-200 dark:to-slate-300 bg-clip-text text-transparent mb-4">
                            Nuestra Empresa
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Más de tres décadas de experiencia al servicio de nuestros clientes
                        </p>
                    </motion.div>

                    {/* Main Content Section - Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
                        {/* Left Column - Photo and Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-2xl sticky top-24">
                                <CardContent className="p-8">
                                    {/* Large Photo */}
                                    <motion.div
                                        className="relative mb-6 group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                            <img
                                                src="/jose.png"
                                                alt="José A. Cerrillo Cantero"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Name and Title */}
                                    <div className="text-center space-y-2">
                                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                            José A. Cerrillo Cantero
                                        </h2>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                                            Director Ejecutivo
                                        </p>
                                        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span>+30 años de experiencia</span>
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="lg:col-span-3"
                        >
                            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                                <CardContent className="p-8 md:p-12">
                                    {/* Welcome Quote */}
                                    <div className="flex gap-4 mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                                        <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                                Quiero darte la bienvenida a nuestra web, pero permíteme, lo primero de todo, presentarme. Mi nombre es Jose y soy el Director Ejecutivo de ASCE.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content Sections */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-slate-600 rounded-full"></div>
                                                Quiénes Somos
                                            </h3>
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                                                ASCE es un grupo empresarial que nace en el 2023, pero que está formado por empresas y profesionales titulados, colegiados, expertos altamente cualificados, con una dilatada experiencia de más de tres décadas, y especialistas cada uno de nosotros en un ámbito profesional determinado, lo que hace que el servicio que le prestamos a todos nuestros clientes sea lo más eficiente y profesional posible.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-slate-600 rounded-full"></div>
                                                Nuestros Servicios
                                            </h3>
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                                                ASCE se dedica al asesoramiento integral y prestación de servicios a empresas y particulares, dentro de una gran variedad de áreas como Asesoramiento Fiscal, Contabilidad, Asesoramiento Laboral, Creación de Empresas, Servicios Informáticos, Servicios Financieros, Seguros, Asesoramiento Jurídico (en Derecho Mercantil, Civil, etc…), Servicios Inmobiliarios, Prevención de Riesgos Laborales, Protección de Datos e Implantación de Sistemas de Calidad.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/10 dark:to-slate-800/10 p-6 rounded-xl">
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                                                Desde aquí quiero invitarte a que sigas navegando por <span className="font-semibold text-blue-600 dark:text-blue-400">www.asce-palma.com</span> para que puedas conocer un poco más en detalle aquello a lo que nos dedicamos. <strong className="text-blue-600 dark:text-blue-400">NUESTRA PASIÓN…</strong>
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                                                No dudes en contactar con nosotros para cualquier duda o información que necesites sobre nuestros servicios y sin compromiso alguno.
                                            </p>
                                            <p className="text-slate-900 dark:text-white leading-relaxed mt-4 font-semibold text-lg">
                                                Muchas gracias.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Values Section - Redesigned */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                            Nuestros Valores
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="group h-full border-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <CardContent className="p-8">
                                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                            <Clock className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Experiencia</h3>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            Más de tres décadas de experiencia profesional al servicio de nuestros clientes, garantizando soluciones probadas y efectivas.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="group h-full border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <CardContent className="p-8">
                                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                            <Award className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Profesionalidad</h3>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            Profesionales titulados, colegiados y expertos altamente cualificados en cada área de especialización.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="group h-full border-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <CardContent className="p-8">
                                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-slate-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                            <Target className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Especialización</h3>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            Especialistas en cada ámbito profesional para ofrecer un servicio eficiente, preciso y personalizado.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
