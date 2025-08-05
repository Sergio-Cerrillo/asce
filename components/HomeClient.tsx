"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Calculator,
    FileText,
    Users,
    Shield,
    TrendingUp,
    Home,
    Scale,
    Monitor,
    HardHat,
    Award,
    Lock,
    Briefcase,
    Calendar,
    ExternalLink,
    CheckCircle,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Icons = {
    Building2,
    Calculator,
    FileText,
    Users,
    Shield,
    TrendingUp,
    Home,
    Scale,
    Monitor,
    HardHat,
    Award,
    Lock,
    Briefcase,
};

interface Service {
    icon: string;
    key: string;
    href: string;
    description: string;
}

export default function HomeClient({ services, newsItems, benefits }: {
    services: Service[],
    newsItems: any[],
    benefits: string[],
}) {
    const benefitsText: Record<string, string> = {
        "home.benefit1": "Asesoramiento personalizado",
        "home.benefit2": "Equipo multidisciplinar",
        "home.benefit3": "Soluciones integrales",
        "home.benefit4": "Atención cercana y profesional",
    };
    const categoryText: Record<string, string> = {
        "fiscalidad": "Fiscalidad",
        "laboral": "Laboral",
        "contabilidad": "Contabilidad",
        "juridico": "Jurídico",
        "informatica": "Informática",
        "seguros": "Seguros",
        "empresa": "Empresa",
        "prl": "PRL",
        "proteccion-datos": "Protección de Datos",
        "calidad": "Calidad",
        "finanzas": "Finanzas",
        "inmobiliaria": "Inmobiliaria",
        "creacion-empresas": "Creación de Empresas",
    };
    const serviceTitles: Record<string, string> = {
        "fiscalidad": "Fiscalidad",
        "laboral": "Laboral",
        "contabilidad": "Contabilidad",
        "juridico": "Jurídico",
        "informatica": "Informática",
        "seguros": "Seguros",
        "empresa": "Empresa",
        "prl": "PRL",
        "proteccion-datos": "Protección de Datos",
        "calidad": "Calidad",
        "finanzas": "Finanzas",
        "inmobiliaria": "Inmobiliaria",
        "creacion-empresas": "Creación de Empresas",
    };
    const serviceDescriptions: Record<string, string> = {
        "fiscalidad": "Gestión y asesoramiento fiscal para empresas y autónomos.",
        "laboral": "Soluciones en materia laboral y recursos humanos.",
        "contabilidad": "Contabilidad adaptada a las necesidades de tu negocio.",
        "juridico": "Asesoría jurídica integral para tu empresa.",
        "informatica": "Servicios informáticos y soporte tecnológico.",
        "seguros": "Coberturas y seguros a medida.",
        "empresa": "Consultoría y gestión empresarial.",
        "prl": "Prevención de riesgos laborales.",
        "proteccion-datos": "Protección de datos y cumplimiento normativo.",
        "calidad": "Implantación y gestión de sistemas de calidad.",
        "finanzas": "Planificación y gestión financiera.",
        "inmobiliaria": "Servicios inmobiliarios profesionales.",
        "creacion-empresas": "Asesoramiento en la creación de empresas.",
    };
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-slate-600/10 dark:from-blue-400/10 dark:to-slate-400/10" />
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mb-8"
                        >
                            <img className="min-w-[400px] w-[800px] justify-self-center" src="/asce-logo.png" alt="ASCE logo" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto"
                        >
                            <strong className="text-blue-600 dark:text-blue-400">
                                Asesoría integral para empresas y autónomos
                            </strong>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto"
                        >
                            Somos tu socio de confianza para el crecimiento y la gestión de tu empresa. Ofrecemos soluciones personalizadas en fiscalidad, laboral, contabilidad, jurídico y mucho más.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            {benefits.map((key, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3"
                                >
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300">{benefitsText[key] || key}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* News Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Últimas noticias
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Mantente informado con las novedades más relevantes para tu empresa.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant={item.urgent ? "destructive" : "secondary"}>
                                                {item.urgent ? "Urgente" : (categoryText[item.category] || item.category)}
                                            </Badge>
                                            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {item.date}
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg text-slate-900 dark:text-white">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">{item.summary}</p>


                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Services Grid */}
            <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Nuestros servicios</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Descubre todo lo que podemos hacer por tu empresa.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/${service.href}`}>
                                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 cursor-pointer h-full">
                                        <CardContent className="p-6 text-center">
                                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 text-white group-hover:scale-110 transition-transform duration-300">
                                                {(() => {
                                                    const Icon = Icons[service.icon as keyof typeof Icons];
                                                    return <Icon className="h-8 w-8" />;
                                                })()}
                                            </div>
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                                {serviceTitles[service.key] || service.key}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas asesoramiento?</h2>
                        <p className="text-xl mb-8 opacity-90">
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
                    </motion.div>
                </div>
            </section>
        </>
    );
}
