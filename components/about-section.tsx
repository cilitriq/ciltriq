"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"

export function AboutSection() {
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
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-foreground mb-6">About Ciltriq</h2>
          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a premium IT services and product-based company dedicated to transforming businesses through
            innovative technology solutions. Our expertise spans across cutting-edge development, AI automation, and
            digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { number: 8, suffix: "+", label: "Years of Experience" },
            { number: 150, suffix: "+", label: "Satisfied Clients" },
            { number: 300, suffix: "+", label: "Projects Delivered" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <p className="font-manrope text-muted-foreground mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
