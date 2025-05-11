"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MousePointer } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Creative", "Innovative", "Strategic", "Effective"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="mb-4 text-primary font-medium">
            Digital Design & Development Studio
          </motion.div>
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-6">
            We Create{" "}
            <span className="relative inline-block">
              <span className="gradient-text">{words[currentWord]}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </span>{" "}
            Digital Experiences
          </motion.h1>
          <motion.p variants={item} className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Transforming ideas into exceptional digital solutions. We specialize in UI/UX design, graphics, web
            development, and SEO to help your business stand out.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button size="lg" className="group" asChild>
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/contact">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <MousePointer className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
