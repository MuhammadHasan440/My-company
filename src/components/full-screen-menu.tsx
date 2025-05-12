"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

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

export default function FullScreenMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const location = useLocation()
  const pathname = location.pathname

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
      opacity: 0,
    },
    open: {
      clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="md:hidden" aria-label="Open Menu">
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col overflow-hidden"
          >
            <div className="container flex justify-end pt-4">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <nav className="space-y-8 text-center">
                {navItems.map((item) => (
                  <div key={item.path}>
                    {item.submenu ? (
                      <div className="space-y-4">
                        <motion.button
                          variants={itemVariants}
                          onClick={() => toggleSubmenu(item.name)}
                          className="text-3xl font-bold flex items-center justify-center space-x-2 hover:text-primary transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "h-6 w-6 transition-transform",
                              activeSubmenu === item.name ? "rotate-180" : "",
                            )}
                          />
                        </motion.button>

                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-2"
                            >
                              {item.submenu.map((subitem) => (
                                <motion.div key={subitem.path} variants={itemVariants}>
                                  <Link
                                    to={subitem.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                      "text-xl flex items-center justify-center space-x-1 hover:text-primary transition-colors",
                                      pathname === subitem.path ? "text-primary font-medium" : "text-muted-foreground",
                                    )}
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                    <span>{subitem.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div variants={itemVariants}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-3xl font-bold hover:text-primary transition-colors",
                            pathname === item.path ? "text-primary" : "",
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <motion.div variants={itemVariants} className="container pb-12 flex justify-center">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
