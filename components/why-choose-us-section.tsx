"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Award, HeadphonesIcon, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive advantage.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Our commitment to excellence ensures every project meets the highest standards of quality and performance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "24/7 dedicated support and maintenance to keep your systems running smoothly and efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Future-proof solutions designed to grow with your business and adapt to changing requirements.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-foreground mb-6">Why Choose Ciltriq</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group text-center p-8 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6 flex justify-center">
                  <highlight.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-geist font-semibold text-xl text-card-foreground mb-4">{highlight.title}</h3>
                <p className="font-manrope text-muted-foreground leading-relaxed">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
