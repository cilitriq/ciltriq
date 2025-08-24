"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Kasaragod Sports City",
    category: "Web",
    description: "Showcase website for Kasaragod Sports City highlighting its projects, upcoming facilities, and future developments with a modern and engaging design.",
    image: "/ksc.png",
  },
  {
    id: 2,
    title: "Nadan Curry Chatti",
    category: "Web",
    description: "Restaurant website for Nadan Curry Chatti featuring traditional Kerala cuisine, an online menu, and reservation system for a seamless dining experience.",
    image: "/ncc.png",
  },

  // {
  //   id: 3,
  //   title: "AI Analytics Dashboard",
  //   category: "AI Solutions",
  //   description: "Real-time analytics dashboard powered by machine learning",
  //   image: "/ai-analytics-dashboard.png",
  // },
  // {
  //   id: 4,
  //   title: "Cloud Infrastructure",
  //   category: "Web Apps",
  //   description: "Scalable cloud infrastructure management platform",
  //   image: "/cloud-infrastructure-dashboard.png",
  // },
  // {
  //   id: 5,
  //   title: "IoT Mobile Controller",
  //   category: "Mobile Apps",
  //   description: "Smart home automation control application",
  //   image: "/iot-mobile-app.png",
  // },
  // {
  //   id: 6,
  //   title: "Predictive AI System",
  //   category: "AI Solutions",
  //   description: "Advanced predictive analytics for business intelligence",
  //   image: "/predictive-ai-interface.png",
  // },
]

const categories = ["All", "Web"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-foreground mb-6">Our Portfolio</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest projects and innovative solutions that have transformed businesses worldwide.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-2 rounded-full transition-all duration-300 relative overflow-hidden"

              >
                {activeCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.97,
                  y: -5,
                  rotateY: 2,
                  transition: { duration: 0.2 },
                }}
                layout
              >
                <Card className="group overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 1,
                        transition: { duration: 0.3 },
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                      initial={{ backdropFilter: "blur(0px)" }}
                      whileHover={{ backdropFilter: "blur(4px)" }}
                    >
                      <motion.p
                        className="text-white text-sm px-4 text-center font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.description}
                      </motion.p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="p-6"
                    whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="font-geist font-semibold text-xl text-card-foreground mb-2"
                      whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span
                      className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        color: "hsl(var(--primary))",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
