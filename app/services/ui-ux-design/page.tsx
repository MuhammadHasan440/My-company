"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, Figma, Framer, Layers, Palette, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactCTA from "@/components/home/contact-cta"

const tools = [
  { name: "Figma", icon: <Figma className="h-8 w-8" /> },
  { name: "Adobe XD", icon: <PenTool className="h-8 w-8" /> },
  { name: "Sketch", icon: <Palette className="h-8 w-8" /> },
  { name: "Framer", icon: <Framer className="h-8 w-8" /> },
]

const process = [
  {
    title: "Research",
    description: "We start by understanding your users, business goals, and market to inform our design decisions.",
    icon: <Layers className="h-10 w-10 text-primary" />,
  },
  {
    title: "Wireframes",
    description: "We create low-fidelity wireframes to establish the structure and layout of your interface.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
  },
  {
    title: "Prototype",
    description: "Interactive prototypes bring your design to life, allowing for testing and refinement.",
    icon: <Framer className="h-10 w-10 text-primary" />,
  },
  {
    title: "Final Design",
    description: "We deliver polished, pixel-perfect designs ready for development implementation.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
]

export default function UIUXDesignPage() {
  // Animation controls
  const headerControls = useAnimation()
  const processControls = useAnimation()
  const portfolioControls = useAnimation()

  // Intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Start animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible")
    if (processInView) processControls.start("visible")
    if (portfolioInView) portfolioControls.start("visible")
  }, [headerControls, headerInView, processControls, processInView, portfolioControls, portfolioInView])

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            ref={headerRef}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={headerControls}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                UI/UX Design Services
              </motion.div>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                Create Intuitive User Experiences
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-xl text-muted-foreground"
              >
                We design user interfaces that are not only beautiful but also functional and intuitive, helping your
                users achieve their goals with ease.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
              }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=1000&width=800" alt="UI/UX Design" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is UI/UX Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What is UI/UX Design?</h2>
            <p className="text-xl text-muted-foreground">
              UI/UX design is the process of creating digital products that are both visually appealing and easy to use.
              It combines aesthetics with functionality to deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">User Interface (UI) Design</h3>
              <p className="text-muted-foreground">
                UI design focuses on the visual elements of a digital product, including buttons, icons, spacing,
                typography, color schemes, and responsive design. A good UI makes the user's interaction with the
                product as simple and efficient as possible.
              </p>

              <h3 className="text-2xl font-bold">User Experience (UX) Design</h3>
              <p className="text-muted-foreground">
                UX design is about enhancing user satisfaction by improving the usability, accessibility, and pleasure
                provided in the interaction with the product. It involves user research, creating user personas,
                information architecture, wireframing, and usability testing.
              </p>

              <div className="pt-4">
                <h4 className="font-bold mb-3">Why Good UI/UX Matters:</h4>
                <ul className="space-y-2">
                  {[
                    "Increases user engagement and satisfaction",
                    "Reduces bounce rates and abandonment",
                    "Builds trust and credibility",
                    "Improves conversion rates",
                    "Creates brand loyalty",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <div className="mx-auto">{tool.icon}</div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium">{tool.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Design Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure your digital products are both beautiful and functional.
            </p>
          </div>

          <motion.div
            ref={processRef}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={processControls}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Card className="h-full border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="mb-4">{step.icon}</div>
                    <CardTitle className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-2">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our UI/UX Portfolio</h2>
            <p className="text-muted-foreground">
              Browse through our recent UI/UX design projects and see how we've helped businesses create exceptional
              user experiences.
            </p>
          </div>

          <motion.div
            ref={portfolioRef}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            animate={portfolioControls}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/placeholder.svg?height=600&width=800`}
                    alt={`UI/UX Project ${item}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">UI/UX Project {item}</h3>
                  <p className="text-sm text-muted-foreground">Mobile App Design</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  )
}
