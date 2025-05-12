"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://placehold.co/200x200?text=SJ",
    quote:
      "Working with this team was a game-changer for our brand. Their UI/UX expertise transformed our digital presence and significantly improved user engagement.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "Startup Innovations",
    image: "https://placehold.co/200x200?text=MC",
    quote:
      "The web development services exceeded our expectations. Our new website loads faster, looks better, and has helped us convert more visitors into customers.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Agency",
    image: "https://placehold.co/200x200?text=ER",
    quote:
      "Their graphic design work is exceptional. They captured our brand essence perfectly and delivered assets that we're proud to showcase across all our channels.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Manager",
    company: "Retail Solutions",
    image: "https://placehold.co/200x200?text=DT",
    quote:
      "The SEO services have dramatically improved our search rankings. We're now on the first page for all our key terms, and our organic traffic has increased by 150%.",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })
  const dragRef = useRef(null)
  const [dragStartX, setDragStartX] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX)
    setAutoplay(false)
  }

  const handleDragEnd = (e) => {
    const dragEndX = e.clientX || e.changedTouches[0].clientX
    const diff = dragStartX - dragEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next()
      } else {
        prev()
      }
    }

    setTimeout(() => setAutoplay(true), 5000)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
      }
    },
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const quoteIconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: [0, 15, 0, -15, 0],
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <motion.div className="container" variants={containerVariants} initial="hidden" animate={controls}>
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-4 gradient-text"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p className="text-muted-foreground" variants={itemVariants}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </motion.div>

          <div
            className="overflow-hidden py-10"
            ref={dragRef}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchEnd={handleDragEnd}
            style={{ touchAction: "pan-y" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
              >
                <Card className="border-none shadow-lg hover-lift transform transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8 sm:p-10">
                    <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-center">
                      <div className="mx-auto md:mx-0">
                        <motion.div
                          className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20"
                          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                        >
                          <img
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].name}
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            animate={{
                              opacity: [0, 0.2, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          />
                        </motion.div>
                      </div>
                      <div>
                        <motion.div variants={quoteIconVariants} initial="initial" animate="animate">
                          <Quote className="h-10 w-10 text-primary/30 mb-4" />
                        </motion.div>
                        <motion.blockquote
                          className="text-xl mb-6 italic"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          <motion.span
                            animate={{
                              opacity: [0, 1],
                            }}
                            transition={{ duration: 1 }}
                          >
                            "{testimonials[current].quote}"
                          </motion.span>
                        </motion.blockquote>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          <motion.div
                            className="font-semibold"
                            animate={{
                              color: ["#6366f1", "#8b5cf6", "#6366f1"],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          >
                            {testimonials[current].name}
                          </motion.div>
                          <div className="text-sm text-muted-foreground">
                            {testimonials[current].role}, {testimonials[current].company}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div className="flex justify-center mt-6 space-x-2" variants={itemVariants}>
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                  setAutoplay(false)
                  setTimeout(() => setAutoplay(true), 5000)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-primary/30"
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
