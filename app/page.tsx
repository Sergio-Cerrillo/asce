import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import HomeClient from '@/components/HomeClient';

const services = [

    { icon: 'Calculator', key: 'Contabilidad', description: 'Servicios contables profesionales', href: 'contabilidad' },
    { icon: 'FileText', key: 'Fiscalidad', description: 'Asesoría fiscal especializada', href: 'fiscalidad' },
    { icon: 'Users', key: 'Laboral', description: 'Gestión laboral y Seguridad Social', href: 'laboral' },
    { icon: 'Briefcase', key: 'Creación de Empresas', description: 'Constitución y puesta en marcha', href: 'creacion-empresas' },
    { icon: 'Monitor', key: 'Informática', description: 'Soluciones tecnnológicas', href: 'informatica' },
    { icon: 'Shield', key: 'Seguros', description: 'Protección integral de riesgos', href: 'seguros' },
    { icon: 'TrendingUp', key: 'Finanzas', description: 'Servicios financieros personalizados', href: 'finanzas' },
    { icon: 'Scale', key: 'Jurídico', description: 'Asesoramiento legal especializado', href: 'juridico' },
    { icon: 'Home', key: 'Inmobiliaria', description: 'Servicios inmobiliarios completos', href: 'inmobiliaria' },
    { icon: 'HardHat', key: 'PRL', description: 'Prevención de Riesgos Laborales', href: 'prl' },
    { icon: 'Award', key: 'Calidad', description: 'Sistemas de gestión de la Calidad', href: 'calidad' },
    { icon: 'Lock', key: 'Protección de Datos', description: 'Cumplimiento de la RGPD', href: 'proteccion-datos' },
];

const newsItems = [
    { title: 'Noticias sobre fiscalidad', summary: 'Novedades fiscales para empresas en 2025.', date: '01/07/2025', category: 'fiscalidad', urgent: true },
    { title: 'Actualización laboral', summary: 'Cambios en la normativa laboral.', date: '15/07/2025', category: 'laboral', urgent: false },
    { title: 'Subvenciones disponibles', summary: 'Nuevas ayudas para pymes.', date: '10/07/2025', category: 'empresa', urgent: true },
];

const benefits = [
    'home.benefit1',
    'home.benefit2',
    'home.benefit3',
    'home.benefit4',
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            <Navbar />
            <HomeClient services={services} newsItems={newsItems} benefits={benefits} />
            <Footer />
        </div>
    );
}
