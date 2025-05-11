"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, BarChart, CheckCircle, LineChart, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactCTA from "@/components/home/contact-cta"

const services = [
  {
    title: "On-Page SEO",
    description: "Optimize your website's content, structure, and HTML elements to improve search engine rankings.",
    icon: <Search className="h-10 w-10 text-primary" />,
    items: [
      "Keyword research and optimization",
      "Meta tags optimization",
      "Content optimization",
      "URL structure improvement",
      "Internal linking strategy",
    ],
  },
  {
    title: "Off-Page SEO",
    description: "Build your website's authority through backlinks, social signals, and other external factors.",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    items: [
      "Link building campaigns",
      "Social media promotion",
      "Guest blogging",
      "Brand mentions",
      "Online reputation management",
    ],
  },
  {
    title: "Technical SEO",
    description: "Ensure your website's technical aspects are optimized for search engines and user experience.",
    icon: <BarChart className="h-10 w-10 text-primary" />,
    items: [
      "Site speed optimization",
      "Mobile-friendliness",
      "XML sitemap creation",
      "Robots.txt configuration",
      "Structured data implementation",
    ],
  },
  {
    title: "Local SEO",
    description: "Improve your visibility in local search results to attract more customers from your area.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    items: [
      "Google Business Profile optimization",
      "Local citations building",
      "Local keyword targeting",
      "Review management",
      "Local content creation",
    ],
  },
]

const tools = [
  "Google Analytics",
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
  "Moz",
  "Screaming Frog",
  "Ubersuggest",
  "GTmetrix",
]

export default function SEOPage() {
  // Animation controls
  const headerControls = useAnimation()
  const servicesControls = useAnimation()
  const statsControls = useAnimation()

  // Intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Start animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible")
    if (servicesInView) servicesControls.start("visible")
    if (statsInView) statsControls.start("visible")
  }, [headerControls, headerInView, servicesControls, servicesInView, statsControls, statsInView])

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
                SEO Services
              </motion.div>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                Improve Your Visibility Online
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-xl text-muted-foreground"
              >
                We help businesses improve their search engine rankings, drive more qualified traffic, and increase
                conversions through data-driven SEO strategies.
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
                    Get a Free SEO Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
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
              <Image src="/placeholder.svg?height=1000&width=800" alt="SEO Services" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our SEO Services</h2>
            <p className="text-xl text-muted-foreground">
              We offer comprehensive SEO services to help your business rank higher in search results and attract more
              qualified traffic to your website.
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
            className="grid md:grid-cols-2 gap-8"
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
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Tools We Use</h2>
              <p className="text-muted-foreground">
                We leverage industry-leading SEO tools and technologies to analyze your website, track your rankings,
                and implement data-driven strategies for optimal results.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=800" alt="SEO Tools" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Results Speak for Themselves</h2>
            <p className="text-primary-foreground/80">
              We've helped businesses of all sizes improve their search engine rankings and drive more qualified
              traffic.
            </p>
          </div>

          <motion.div
            ref={statsRef}
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
            animate={statsControls}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "150%", label: "Average Traffic Increase" },
              { value: "200+", label: "Happy Clients" },
              { value: "85%", label: "Conversion Rate Improvement" },
              { value: "#1", label: "Google Rankings Achieved" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground">
              See how we've helped businesses improve their search engine rankings and drive more qualified traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src={`/placeholder.svg?height=400&width=800`}
                    alt={`Case Study ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Case Study {item}: E-commerce Revenue Growth</CardTitle>
                  <CardDescription>
                    How we helped an e-commerce store increase organic traffic by 200% and boost revenue by 150%.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">
                        Low search visibility, poor website structure, and high bounce rates were limiting online sales.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Solution:</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive SEO strategy including technical fixes, content optimization, and link building.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Results:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>200% increase in organic traffic</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>150% increase in revenue</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>45% improvement in conversion rate</span>
                        </li>
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <Link href="/case-studies">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  )
}
