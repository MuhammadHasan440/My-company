"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with this team was a game-changer for our brand. Their UI/UX expertise transformed our digital presence and significantly improved user engagement.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "Startup Innovations",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The web development services exceeded our expectations. Our new website loads faster, looks better, and has helped us convert more visitors into customers.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Agency",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Their graphic design work is exceptional. They captured our brand essence perfectly and delivered assets that we're proud to showcase across all our channels.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Manager",
    company: "Retail Solutions",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The SEO services have dramatically improved our search rankings. We're now on the first page for all our key terms, and our organic traffic has increased by 150%.",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)

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

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 gradient-text">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
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
          </div>

          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
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
          </div>

          <div className="overflow-hidden py-10">
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
                  opacity: { duration: 0.2 },
                }}
              >
                <Card className="border-none shadow-lg hover-lift">
                  <CardContent className="p-8 sm:p-10">
                    <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-center">
                      <div className="mx-auto md:mx-0">
                        <motion.div
                          className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <Image
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                      <div>
                        <Quote className="h-10 w-10 text-primary/30 mb-4" />
                        <motion.blockquote
                          className="text-xl mb-6 italic"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          "{testimonials[current].quote}"
                        </motion.blockquote>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                        >
                          <div className="font-semibold">{testimonials[current].name}</div>
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

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
