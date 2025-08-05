"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, Moon, Sun, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Empresa", href: "empresa" },
  { name: "Contabilidad", href: "contabilidad" },
  { name: "Fiscalidad", href: "fiscalidad" },
  { name: "Laboral", href: "laboral" },
  { name: "Seguros", href: "seguros" },
  { name: "Finanzas", href: "finanzas" },
  { name: "Inmobiliaria", href: "inmobiliaria" },
  { name: "Jurídico", href: "juridico" },
  { name: "Informática", href: "informatica" },
  { name: "PRL", href: "prl" },
  { name: "Calidad", href: "calidad" },
  { name: "Protección de Datos", href: "proteccion-datos" },
  { name: "Creación de Empresas", href: "creacion-empresas" },
];



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-slate-900"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 dark:from-blue-400 dark:to-slate-300 bg-clip-text text-transparent"
            >
              <img className="h-10 w-28" src="/asce-logo.png" alt="ASCE Logo" />
            </motion.div>
          </Link>
          {/* Navegación escritorio (dropdown) */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Home
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={`/${item.href}`}
                      className="w-full text-slate-700 dark:text-slate-100 hover:bg-blue-100 dark:hover:bg-blue-900"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Cambiar tema"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="ml-2 rounded-full border border-slate-200 dark:border-slate-700 p-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-700" />
              )}
            </Button>
          </div>
          {/* Theme Toggle y Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              aria-label="Cambiar tema"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded-full border border-slate-200 dark:border-slate-700 p-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-700" />
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-100">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 flex flex-col space-y-4 mt-8 bg-white dark:bg-slate-900">
                <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Servicios</h3>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={`/${item.href}`}
                      className="block text-base text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 pl-4"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
