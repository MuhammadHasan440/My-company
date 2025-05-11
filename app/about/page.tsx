"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, Heart, Lightbulb, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactCTA from "@/components/home/contact-cta"

const values = [
  {
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    title: "Quality",
    description: "We are committed to excellence in everything we do, from design to development and support.",
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
  },
  {
    title: "Client-Focused",
    description: "We prioritize our clients' needs and goals, working collaboratively to achieve success.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Passion",
    description: "We are passionate about creating exceptional digital experiences that make a difference.",
    icon: <Heart className="h-10 w-10 text-primary" />,
  },
]

export default function AboutPage() {
  // Animation controls
  const headerControls = useAnimation()
  const storyControls = useAnimation()
  const valuesControls = useAnimation()
  const teamControls = useAnimation()

  // Intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Start animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible")
    if (storyInView) storyControls.start("visible")
    if (valuesInView) valuesControls.start("visible")
    if (teamInView) teamControls.start("visible")
  }, [headerControls, headerInView, storyControls, storyInView, valuesControls, valuesInView, teamControls, teamInView])

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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4"
            >
              About Us
            </motion.div>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              We're a Team of Creative Digital Experts
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-xl text-muted-foreground mb-8"
            >
              We're passionate about creating exceptional digital experiences that help businesses grow and succeed in
              the digital landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            ref={storyRef}
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
            animate={storyControls}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our Story" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              <p className="text-muted-foreground">
                Founded in 2015, Creative Studio began as a small team of passionate designers and developers with a
                shared vision: to create exceptional digital experiences that help businesses thrive in the digital
                landscape.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've grown into a full-service digital agency, expanding our services to include UI/UX
                design, graphics design, web development, and SEO. Throughout our journey, our commitment to quality,
                innovation, and client satisfaction has remained unwavering.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have worked with clients across various industries, from startups to established
                enterprises, helping them achieve their digital goals and make a meaningful impact in their respective
                fields.
              </p>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/10 p-8 rounded-lg">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading creative studio that transforms businesses through innovative digital solutions,
                setting new standards in design, development, and digital marketing.
              </p>
            </div>
            <div className="bg-primary/10 p-8 rounded-lg">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with exceptional digital experiences that drive growth, enhance brand presence,
                and create meaningful connections with their audience through creative and strategic solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              These core principles guide our work and define our culture, ensuring we deliver the best possible results
              for our clients.
            </p>
          </div>

          <motion.div
            ref={valuesRef}
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
            animate={valuesControls}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-background p-6 rounded-lg shadow-sm"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Our talented team of designers, developers, and digital marketers is passionate about creating exceptional
              digital experiences.
            </p>
          </div>

          <motion.div
            ref={teamRef}
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
            animate={teamControls}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "John Smith", role: "Founder & Creative Director" },
              { name: "Sarah Johnson", role: "Lead UI/UX Designer" },
              { name: "Michael Chen", role: "Senior Web Developer" },
              { name: "Emily Rodriguez", role: "SEO Specialist" },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  )
}
