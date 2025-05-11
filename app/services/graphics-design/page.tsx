"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, Palette, PenTool, ImageIcon, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactCTA from "@/components/home/contact-cta"

const services = [
  {
    title: "Logo Design",
    description:
      "Create a distinctive visual identity that represents your brand's values and resonates with your audience.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    title: "Brand Identity",
    description:
      "Develop a cohesive visual system including colors, typography, and design elements that define your brand.",
    icon: <Layout className="h-10 w-10 text-primary" />,
  },
  {
    title: "Print Design",
    description: "Design eye-catching marketing materials, from business cards and brochures to posters and packaging.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
  },
  {
    title: "Social Media Graphics",
    description:
      "Create engaging visual content optimized for different social platforms to boost your online presence.",
    icon: <ImageIcon className="h-10 w-10 text-primary" />,
  },
]

export default function GraphicsDesignPage() {
  // Animation controls
  const headerControls = useAnimation()
  const servicesControls = useAnimation()
  const portfolioControls = useAnimation()

  // Intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Start animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible")
    if (servicesInView) servicesControls.start("visible")
    if (portfolioInView) portfolioControls.start("visible")
  }, [headerControls, headerInView, servicesControls, servicesInView, portfolioControls, portfolioInView])

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
                Graphics Design Services
              </motion.div>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                Stand Out with Stunning Visuals
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-xl text-muted-foreground"
              >
                We create eye-catching graphics that communicate your brand's message effectively and leave a lasting
                impression on your audience.
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
              <Image src="/placeholder.svg?height=1000&width=800" alt="Graphics Design" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Graphics Design Services</h2>
            <p className="text-xl text-muted-foreground">
              From logos and brand identities to marketing materials and social media graphics, we offer a comprehensive
              range of design services to meet your needs.
            </p>
          </div>

          <motion.div
            ref={servicesRef}
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
            animate={servicesControls}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools & Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=800" alt="Design Process" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Tools & Process</h2>
              <p className="text-muted-foreground">
                We use industry-leading design tools and follow a proven process to deliver exceptional results.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Tools We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                    "Adobe InDesign",
                    "Figma",
                    "Procreate",
                    "Affinity Designer",
                  ].map((tool, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-bold">Discovery & Research</h4>
                      <p className="text-sm text-muted-foreground">
                        We start by understanding your brand, target audience, and goals to inform our design decisions.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-bold">Concept Development</h4>
                      <p className="text-sm text-muted-foreground">
                        We create initial concepts and sketches based on our research and your requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-bold">Refinement & Feedback</h4>
                      <p className="text-sm text-muted-foreground">
                        We refine the chosen concept based on your feedback until it meets your expectations.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="font-bold">Final Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        We deliver the final designs in all required formats, ready for use across different platforms.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Graphics Portfolio</h2>
            <p className="text-muted-foreground">
              Browse through our recent graphic design projects and see how we've helped businesses create stunning
              visuals.
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
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=600&width=600`}
                    alt={`Graphics Project ${item}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm">Graphics Project {item}</h3>
                  <p className="text-xs text-muted-foreground">Brand Identity</p>
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
