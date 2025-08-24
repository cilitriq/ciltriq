"use client"

import { Github, Twitter, Linkedin, Mail , Instagram} from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-geist font-bold text-2xl mb-4">Ciltriq</h3>
            <p className="font-manrope text-background/80 mb-6 max-w-md">
              Innovating Technology, Empowering Growth. We transform businesses through cutting-edge technology
              solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/cilitriq" },
                { icon: Instagram, href: "https://www.instagram.com/ciltriq_/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/ciltriq" },
                { icon: Mail, href: "mailto:ciltriq@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                  whileTap={{
                    scale: 0.9,
                    backgroundColor: "hsl(var(--background) / 0.3)",
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-geist font-semibold text-lg mb-4">Services</h4>
            <ul className="font-manrope space-y-2 text-background/80">
              {["Web Development", "App Development", "AI Solutions", "Cloud Services"].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="hover:text-background transition-colors block"
                    whileTap={{
                      scale: 0.98,
                      x: 3,
                      color: "hsl(var(--background))",
                    }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-geist font-semibold text-lg mb-4">Company</h4>
            <ul className="font-manrope space-y-2 text-background/80">
              {["About Us", "Portfolio", "Careers", "Contact"].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="hover:text-background transition-colors block"
                    whileTap={{
                      scale: 0.98,
                      x: 3,
                      color: "hsl(var(--background))",
                    }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-manrope text-background/60">
            © 2024 Ciltriq. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
