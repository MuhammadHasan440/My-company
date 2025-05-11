"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

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
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
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
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                    activeSubmenu === item.name
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn("ml-1 h-4 w-4 transition-transform", activeSubmenu === item.name ? "rotate-180" : "")}
                  />
                </button>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                    pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  {item.name}
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
                            href={subitem.path}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors hover:bg-primary/10",
                              pathname === subitem.path ? "text-primary font-medium" : "text-muted-foreground",
                            )}
                            onClick={() => setActiveSubmenu(null)}
                          >
                            {subitem.name}
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
            <Button size="sm" className="rounded-full" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.path} className="w-full">
                  {item.submenu ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={cn(
                          "w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between",
                          activeSubmenu === item.name
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform",
                            activeSubmenu === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.path}
                                href={subitem.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "block px-4 py-2 rounded-md text-sm transition-colors hover:bg-primary/10",
                                  pathname === subitem.path ? "text-primary font-medium" : "text-muted-foreground",
                                )}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                        pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
