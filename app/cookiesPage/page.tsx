"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
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
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 dark:from-white dark:via-blue-200 dark:to-slate-300 bg-clip-text text-transparent mb-6">
                            Política de Cookies
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Información clara y sencilla para que tengas el control sobre tu privacidad
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardContent className="p-8 md:p-12 prose prose-lg dark:prose-invert max-w-none text-justify">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-slate-600 flex items-center justify-center mr-4">
                                        <ShieldCheck className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Bienvenido</h2>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">Política de Cookies de ASESORÍA ASCE</p>
                                    </div>
                                </div>

                                <p>Una «cookie» es un pequeño archivo que se guarda en tu dispositivo al visitar nuestra web. Aunque inofensiva, puede impactar en tu privacidad, por lo que algunas requieren tu consentimiento previo.</p>
                                <br /><br />
                                <h3>¿Qué tipos de cookies utilizamos?</h3>
                                <br />
                                <ul>
                                    <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico del sitio. Siempre activas.</li>
                                    <li><strong>Cookies de análisis:</strong> Ayudan a mejorar el sitio mediante datos de navegación anónimos.</li>
                                    <li><strong>Cookies de funcionalidad y personalización:</strong> Adaptan la web a tus preferencias.</li>
                                    <li><strong>Cookies de publicidad:</strong> Gestionan los anuncios que ves según su frecuencia.</li>
                                    <li><strong>Cookies de publicidad comportamental:</strong> Muestran anuncios basados en tus hábitos de navegación.</li>
                                </ul>
                                <br /><br />
                                <h3>Cookies propias y de terceros</h3>
                                <br />
                                <p>Algunas cookies son nuestras y otras provienen de servicios externos (por ejemplo, Google). Nos aseguramos de que estos proveedores apliquen medidas adecuadas de protección, estén o no en la UE.</p>
                                <br /><br />
                                <h3>Duración de las cookies</h3>
                                <br />
                                <ul>
                                    <li><strong>Cookies de sesión:</strong> Expiran al cerrar la sesión.</li>
                                    <li><strong>Cookies persistentes:</strong> Permanecen por un tiempo definido.</li>
                                </ul>
                                <br /><br />
                                <h3>Cookies activas actualmente</h3>
                                <br />
                                <table className="table-auto border mt-4">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border">Nombre</th>
                                            <th className="px-4 py-2 border">Dominio</th>
                                            <th className="px-4 py-2 border">Finalidad</th>
                                            <th className="px-4 py-2 border">Vigencia</th>
                                            <th className="px-4 py-2 border">Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">_ga</td>
                                            <td className="border px-4 py-2">google.com</td>
                                            <td className="border px-4 py-2">Datos estadísticos de navegación</td>
                                            <td className="border px-4 py-2">1 año</td>
                                            <td className="border px-4 py-2">Analítica, Terceros</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">_gid</td>
                                            <td className="border px-4 py-2">google.com</td>
                                            <td className="border px-4 py-2">Datos estadísticos de navegación</td>
                                            <td className="border px-4 py-2">24 horas</td>
                                            <td className="border px-4 py-2">Analítica, Terceros</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">_gat</td>
                                            <td className="border px-4 py-2">google.com</td>
                                            <td className="border px-4 py-2">Datos estadísticos de navegación</td>
                                            <td className="border px-4 py-2">10 minutos</td>
                                            <td className="border px-4 py-2">Analítica, Terceros</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">cookie_notice_accepted</td>
                                            <td className="border px-4 py-2">Propia</td>
                                            <td className="border px-4 py-2">Mostrar u ocultar el banner de cookies</td>
                                            <td className="border px-4 py-2">1 mes</td>
                                            <td className="border px-4 py-2">Técnica</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br /><br />
                                <h3>¿Qué puedes hacer con las cookies?</h3>
                                <br />
                                <p>Las cookies técnicas están activadas por defecto. El resto puedes activarlas o desactivarlas desde el apartado CONFIGURACIÓN DE COOKIES en nuestra web, de forma rápida y sencilla.</p>
                                <p>También puedes gestionar las cookies desde la configuración de tu navegador o usando las herramientas de los proveedores externos.</p>
                                <br /><br />
                                <h3>Ley aplicable y jurisdicción</h3>
                                <br />
                                <p>La legislación española es la aplicable. Los Juzgados y Tribunales del domicilio del titular de la web serán los competentes para resolver cualquier conflicto.</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
