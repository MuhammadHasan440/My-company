"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate how far the user has scrolled down the page
      const scrollTop = window.scrollY
      const winHeight = window.innerHeight
      const docHeight = document.body.offsetHeight
      const totalDocScrollLength = docHeight - winHeight
      const scrollProgress = Math.min(scrollTop / totalDocScrollLength, 1)

      setScrollProgress(scrollProgress)

      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 relative overflow-hidden"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <motion.div
                className="absolute inset-0 bg-primary-foreground/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowUp className="h-6 w-6" />
              </motion.div>
              <span className="sr-only">Scroll to top</span>
            </Button>

            {/* Circular progress indicator */}
            <svg className="absolute top-0 left-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-primary-foreground/20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress }}
                transition={{ duration: 0.2 }}
                style={{
                  strokeDasharray: 283,
                  strokeDashoffset: 0,
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
