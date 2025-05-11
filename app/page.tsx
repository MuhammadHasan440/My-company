"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, MousePointerClick, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "@/components/home/hero-section"
import TestimonialsCarousel from "@/components/home/testimonials-carousel"
import ContactCTA from "@/components/home/contact-cta"

const services = [
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that delight your customers.",
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    link: "/services/ui-ux-design",
  },
  {
    title: "Graphics Design",
    description: "Stand out with stunning visuals that communicate your brand's message.",
    icon: <Zap className="h-10 w-10 text-primary" />,
    link: "/services/graphics-design",
  },
  {
    title: "Web Development",
    description: "Build fast, responsive, and modern websites that drive results.",
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    link: "/services/web-development",
  },
  {
    title: "SEO Services",
    description: "Improve your visibility online and attract more qualified traffic.",
    icon: <ArrowRight className="h-10 w-10 text-primary" />,
    link: "/services/seo",
  },
]

export default function Home() {
  // Animation for About section
  const aboutControls = useAnimation()
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Animation for Services section
  const servicesControls = useAnimation()
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible")
    }
    if (servicesInView) {
      servicesControls.start("visible")
    }
  }, [aboutControls, aboutInView, servicesControls, servicesInView])

  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            ref={aboutRef}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate={aboutControls}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">About Our Studio</h2>
                <div className="w-20 h-1 bg-primary mt-4"></div>
              </div>
              <p className="text-muted-foreground">
                We are a creative studio specializing in UI/UX design, graphics, web development, and SEO. Our mission
                is to help businesses create meaningful digital experiences that connect with their audience.
              </p>
              <p className="text-muted-foreground">
                With years of experience and a passion for innovation, we deliver solutions that not only look great but
                also drive results for our clients.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Creative team working"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of digital services to help your business thrive online. From design to
              development and marketing, we've got you covered.
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild className="group">
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground">
              Browse through our recent projects and see how we've helped businesses achieve their goals.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
                <TabsTrigger value="graphics">Graphics</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={`/placeholder.svg?height=600&width=800`}
                        alt={`Project ${item}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white/20 hover:text-white"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Project Title {item}</h3>
                      <p className="text-sm text-muted-foreground">Category</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs content would be similar but filtered by category */}
            <TabsContent value="ui-ux" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 3, 5].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
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
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white/20 hover:text-white"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">UI/UX Project {item}</h3>
                      <p className="text-sm text-muted-foreground">UI/UX Design</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Similar structure for other tabs */}
            <TabsContent value="graphics" className="mt-0">
              {/* Graphics projects */}
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              {/* Web projects */}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Contact CTA Section */}
      <ContactCTA />
    </>
  )
}
