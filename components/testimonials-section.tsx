"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "Ciltriq transformed our business with their innovative AI solutions. The results exceeded our expectations and the team was incredibly professional.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Global Retail Corp",
    role: "CTO",
    content:
      "The mobile app they developed for us has been a game-changer. User engagement increased by 300% within the first month of launch.",
    rating: 5,
    avatar: "/professional-man-cto.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "FinanceFlow",
    role: "Product Manager",
    content:
      "Outstanding web development services. They delivered a complex financial platform on time and within budget. Highly recommended!",
    rating: 5,
    avatar: "/professional-woman-product-manager.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-foreground mb-6">What Our Clients Say</h2>
          <p className="font-manrope text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 15 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileTap={{
                scale: 0.98,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-8 bg-card border-border text-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-5"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary via-transparent to-primary" />
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.blockquote
                    className="font-manrope text-lg md:text-xl text-card-foreground mb-8 leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    "
                    {testimonials[currentIndex].content.split(" ").map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block mr-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + wordIndex * 0.03,
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                    "
                  </motion.blockquote>

                  <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.img
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                      whileTap={{
                        scale: 1.15,
                        borderColor: "hsl(var(--primary))",
                        boxShadow: "0 0 15px hsl(var(--primary) / 0.4)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="text-left">
                      <motion.p
                        className="font-geist font-semibold text-card-foreground"
                        whileHover={{ color: "hsl(var(--primary))" }}
                      >
                        {testimonials[currentIndex].name}
                      </motion.p>
                      <p className="font-manrope text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-muted w-2"
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 0.8,
                  backgroundColor: "hsl(var(--primary))",
                }}
                layout
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
