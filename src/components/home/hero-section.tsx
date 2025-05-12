"use client"

import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "../ui/button"

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Creative", "Innovative", "Strategic", "Effective"]
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }

  const wordAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" ref={ref}>
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
                rotate: [0, Math.random() * 360],
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
        <motion.div variants={container} initial="hidden" animate={controls} className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-4 text-primary font-medium inline-block"
            animate={floatingAnimation}
          >
            <span className="bg-primary/10 px-3 py-1 rounded-full">Digital Design & Development Studio</span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-6">
            We Create{" "}
            <span className="relative inline-block overflow-hidden h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="gradient-text absolute"
                  variants={wordAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0">{words[0]}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </span>{" "}
            <br className="md:hidden" />
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Digital Experiences
            </motion.span>
          </motion.h1>

          <motion.p variants={item} className="text-xl text-muted-foreground mb-8 max-w-2xl" animate={pulseAnimation}>
            Transforming ideas into exceptional digital solutions. We specialize in UI/UX design, graphics, web
            development, and SEO to help your business stand out.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <Link to="/services">
                <motion.span
                  className="absolute inset-0 bg-white/20 dark:bg-black/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="group relative overflow-hidden" asChild>
              <Link to="/contact">
                <motion.span
                  className="absolute inset-0 bg-primary/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
                </span>
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
          <motion.span
            className="text-sm text-muted-foreground mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-16 h-16 rounded-full bg-primary/10 hidden md:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-[15%] w-24 h-24 rounded-full border border-primary/20 hidden md:block"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute top-1/3 left-[20%] w-8 h-8 bg-primary/20 rotate-45 hidden md:block"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </div>
    </section>
  )
}
