"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-purple-600 text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's collaborate to create something amazing together. Contact us today to discuss your project needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-white"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Floating elements for visual interest */}
          <div className="relative h-0">
            <motion.div
              className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-white/5"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -right-8 w-24 h-24 rounded-full bg-white/5"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
