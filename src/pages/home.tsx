"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, MousePointerClick, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import HeroSection from "../components/home/hero-section"
import TestimonialsCarousel from "../components/home/testimonials-carousel"
import ContactCTA from "../components/home/contact-cta"
import AnimatedSection from "../components/animated-section"

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

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center" direction="left">
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
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-primary/10"
                animate={{
                  opacity: [0, 0.2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <img
                src="https://placehold.co/800x600"
                alt="Creative team working"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" direction="up">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of digital services to help your business thrive online. From design to
              development and marketing, we've got you covered.
            </p>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" direction="up" staggerChildren={0.1}>
            {services.map((service, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-lg group">
                <CardHeader>
                  <motion.div
                    className="mb-4"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="group">
                    <Link to={service.link}>
                      Learn More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" direction="up">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground">
              Browse through our recent projects and see how we've helped businesses achieve their goals.
            </p>
          </AnimatedSection>

          <Tabs defaultValue="all" className="w-full">
            <AnimatedSection className="flex justify-center mb-8" direction="down">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
                <TabsTrigger value="graphics">Graphics</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
              </TabsList>
            </AnimatedSection>

            <TabsContent value="all" className="mt-0">
              <AnimatedSection
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                direction="up"
                staggerChildren={0.05}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={`https://placehold.co/800x600?text=Project+${item}`}
                        alt={`Project ${item}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button variant="outline" className="">
                          View Project
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="ui-ux" className="mt-0">
              <AnimatedSection
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                direction="up"
                staggerChildren={0.05}
              >
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={`https://placehold.co/800x600?text=UI/UX+Project+${item}`}
                        alt={`UI/UX Project ${item}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button variant="outline" className="">
                          View Project
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="graphics" className="mt-0">
              <AnimatedSection
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                direction="up"
                staggerChildren={0.05}
              >
                {[1, 2].map((item) => (
                  <div key={item} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={`https://placehold.co/800x600?text=Graphics+Project+${item}`}
                        alt={`Graphics Project ${item}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button variant="outline" className="">
                          View Project
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <AnimatedSection
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                direction="up"
                staggerChildren={0.05}
              >
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={`https://placehold.co/800x600?text=Web+Project+${item}`}
                        alt={`Web Project ${item}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button variant="outline" className="">
                          View Project
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <TestimonialsCarousel />

      <ContactCTA />
    </>
  )
}
