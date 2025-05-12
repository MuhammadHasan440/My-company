"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "../lib/utils"
import FullScreenMenu from "./full-screen-menu"
import { useToast } from "../hooks/use-toast"

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "#",
    submenu: [
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "Graphics Design", path: "/services/graphics-design" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "SEO Services", path: "/services/seo" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const location = useLocation()
  const pathname = location.pathname
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const handleNavHover = (name: string) => {
    toast({
      title: name,
      description: `Explore our ${name.toLowerCase()} section`,
      variant: "default",
    })
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <span className="gradient-text text-2xl">CREATIVE</span>
            <span className="text-primary">STUDIO</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              {item.submenu ? (
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  onMouseEnter={() => handleNavHover(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                    activeSubmenu === item.name
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary hover:bg-primary/5",
                  )}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.span>
                  <ChevronDown
                    className={cn("ml-1 h-4 w-4 transition-transform", activeSubmenu === item.name ? "rotate-180" : "")}
                  />
                </button>
              ) : (
                <Link
                  to={item.path}
                  onMouseEnter={() => handleNavHover(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                    pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              )}

              {/* Submenu */}
              {item.submenu && (
                <AnimatePresence>
                  {activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-background rounded-md shadow-lg border overflow-hidden"
                    >
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.path}
                            to={subitem.path}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors hover:bg-primary/10",
                              pathname === subitem.path ? "text-primary font-medium" : "text-muted-foreground",
                            )}
                            onClick={() => setActiveSubmenu(null)}
                          >
                            <motion.span
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              className="inline-block w-full"
                            >
                              {subitem.name}
                            </motion.span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <div className="ml-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="rounded-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <FullScreenMenu />
        </div>
      </div>
    </header>
  )
}
