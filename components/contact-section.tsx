"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-foreground mb-6">Get In Touch</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your
            goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card border-border">
              <h3 className="font-geist font-semibold text-2xl text-card-foreground mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3"
                  whileTap={{
                    scale: 0.98,
                    backgroundColor: "hsl(var(--primary) / 0.8)",
                    boxShadow: "0 4px 12px hsl(var(--primary) / 0.3)",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-geist font-semibold text-2xl text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", info: "contact@ciltriq.com" },
                  { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
                  {
                    icon: MapPin,
                    title: "Office",
                    info: "123 Tech Street, Innovation District\nSan Francisco, CA 94105",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 cursor-pointer"
                    whileTap={{
                      scale: 0.98,
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                      whileTap={{
                        scale: 1.1,
                        backgroundColor: "hsl(var(--primary) / 0.2)",
                        boxShadow: "0 0 15px hsl(var(--primary) / 0.3)",
                      }}
                    >
                      <contact.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-manrope font-medium text-foreground">{contact.title}</p>
                      <p className="font-manrope text-muted-foreground whitespace-pre-line">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-card border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="font-manrope text-muted-foreground">Interactive Map</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
