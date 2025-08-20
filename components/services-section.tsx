"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Smartphone, Brain, Cloud, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Intelligent automation solutions and AI-powered systems to streamline your business processes.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced reliability and performance.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to help you make informed decisions and optimize operations.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Complete digital transformation services to modernize your business and stay competitive.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-foreground mb-6">Our Services</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive technology solutions tailored to meet your business needs and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.98,
                y: -5,
                rotateY: 3,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="group p-8 bg-card border-border hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: 1.2,
                    }}
                    whileTap={{
                      rotate: [0, -15, 15, 0],
                      scale: 1.3,
                      transition: { duration: 0.4 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
                        scale: 1.1,
                      }}
                      whileTap={{
                        boxShadow: "0 0 25px hsl(var(--primary) / 0.5)",
                        scale: 1.15,
                        backgroundColor: "hsl(var(--primary) / 0.3)",
                      }}
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="font-geist font-semibold text-xl text-card-foreground mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        whileHover={{
                          y: -2,
                          color: "hsl(var(--primary))",
                          transition: { delay: charIndex * 0.05 },
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h3>

                  <motion.p className="font-manrope text-muted-foreground leading-relaxed">
                    {service.description.split(" ").map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block mr-1"
                        initial={{ opacity: 0.7 }}
                        whileHover={{
                          opacity: 1,
                          y: -1,
                          transition: { delay: wordIndex * 0.02 },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
