"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, Code, Database, Globe, Laptop, Server, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactCTA from "@/components/home/contact-cta"

const services = [
  {
    title: "Static Websites",
    description: "Fast, secure, and cost-effective websites perfect for showcasing your business online.",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: "Dynamic Web Apps",
    description: "Interactive web applications with advanced functionality and user engagement features.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "E-commerce Solutions",
    description: "Custom online stores with secure payment processing and inventory management.",
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: "Responsive Design",
    description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
]

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Django", "Ruby on Rails", "PHP", "ASP.NET"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    category: "CMS",
    technologies: ["WordPress", "Shopify", "Contentful", "Strapi", "Sanity"],
  },
]

export default function WebDevelopmentPage() {
  // Animation controls
  const headerControls = useAnimation()
  const servicesControls = useAnimation()
  const projectsControls = useAnimation()

  // Intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Start animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible")
    if (servicesInView) servicesControls.start("visible")
    if (projectsInView) projectsControls.start("visible")
  }, [headerControls, headerInView, servicesControls, servicesInView, projectsControls, projectsInView])

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
                Web Development Services
              </motion.div>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                Build Fast, Responsive, Modern Websites
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-xl text-muted-foreground"
              >
                We develop custom websites and web applications that are fast, secure, and optimized for all devices,
                helping your business establish a strong online presence.
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
              <Image src="/placeholder.svg?height=1000&width=800" alt="Web Development" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Web Development Services</h2>
            <p className="text-xl text-muted-foreground">
              From simple static websites to complex web applications, we offer a wide range of development services to
              meet your specific needs and goals.
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

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Tech Stack</h2>
            <p className="text-muted-foreground">
              We use modern technologies and frameworks to build fast, scalable, and maintainable web applications.
            </p>
          </div>

          <Tabs defaultValue="Frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {techStack.map((stack) => (
                  <TabsTrigger key={stack.category} value={stack.category}>
                    {stack.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {techStack.map((stack) => (
              <TabsContent key={stack.category} value={stack.category} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {stack.technologies.map((tech, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center h-12 mb-4">
                          {stack.category === "Frontend" && <Laptop className="h-8 w-8 text-primary" />}
                          {stack.category === "Backend" && <Server className="h-8 w-8 text-primary" />}
                          {stack.category === "Database" && <Database className="h-8 w-8 text-primary" />}
                          {stack.category === "CMS" && <Globe className="h-8 w-8 text-primary" />}
                        </div>
                        <h3 className="font-medium">{tech}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Development Process</h2>
              <p className="text-muted-foreground">
                We follow a structured approach to ensure your web project is delivered on time, within budget, and to
                your specifications.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="h-full w-0.5 bg-border mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Discovery & Planning</h3>
                    <p className="text-muted-foreground mt-2">
                      We start by understanding your business goals, target audience, and project requirements to create
                      a detailed plan.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="h-full w-0.5 bg-border mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Design & Prototyping</h3>
                    <p className="text-muted-foreground mt-2">
                      We create wireframes and interactive prototypes to visualize the user interface and experience
                      before development.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="h-full w-0.5 bg-border mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Development</h3>
                    <p className="text-muted-foreground mt-2">
                      Our developers write clean, efficient code to bring the designs to life, ensuring optimal
                      performance and security.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div className="h-full w-0.5 bg-border mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Testing & QA</h3>
                    <p className="text-muted-foreground mt-2">
                      We thoroughly test the website across different devices and browsers to ensure it works
                      flawlessly.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Deployment & Support</h3>
                    <p className="text-muted-foreground mt-2">
                      We launch your website and provide ongoing support and maintenance to ensure it continues to
                      perform optimally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Development Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Web Projects</h2>
            <p className="text-muted-foreground">
              Browse through our recent web development projects and see how we've helped businesses establish a strong
              online presence.
            </p>
          </div>

          <motion.div
            ref={projectsRef}
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
            animate={projectsControls}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
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
                    alt={`Web Project ${item}`}
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
                  <h3 className="font-medium">Web Project {item}</h3>
                  <p className="text-sm text-muted-foreground">E-commerce Website</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      React
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      Next.js
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      Tailwind
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 mt-8">
            {[4, 5].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={`/placeholder.svg?height=450&width=800`}
                    alt={`Web Project ${item}`}
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
                  <h3 className="font-medium">Web Project {item}</h3>
                  <p className="text-sm text-muted-foreground">Corporate Website</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      WordPress
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      Custom Theme
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Before & After</h2>
            <p className="text-muted-foreground">
              See the transformation we've achieved for our clients with our web development services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">Before</h3>
              <div className="relative h-[400px] rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Before Website Redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Outdated design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Slow loading times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Not mobile-friendly</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">After</h3>
              <div className="relative h-[400px] rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="After Website Redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Modern, clean design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Fast loading performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Fully responsive on all devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  )
}
