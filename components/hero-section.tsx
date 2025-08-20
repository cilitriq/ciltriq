"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute font-mono text-xs text-foreground/25 select-none pointer-events-none whitespace-nowrap"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {
              [
                "kubectl apply -f deployment.yaml",
                "docker build -t ciltriq/app:latest .",
                "terraform apply -auto-approve",
                "const microservice = new GraphQL()",
                "await redis.pipeline().exec()",
                "SELECT * FROM analytics WHERE roi > 300%",
                "git push origin feature/ai-integration",
                "npm run build && npm run deploy",
                "const blockchain = await Web3.connect()",
                "machine_learning.train(big_data)",
                "api.post('/webhook', { success: true })",
                "import { NextJS, React, TypeScript }",
                "export const scalability = Infinity",
                "console.log('Revenue: +847% YoY')",
                "AWS.Lambda.invoke({ performance: 'optimal' })",
              ][i % 15]
            }
          </motion.div>
        ))}

        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`api-${i}`}
            className="absolute font-mono text-xs text-green-400/40 select-none pointer-events-none"
            initial={{
              x: -200,
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              x: typeof window !== "undefined" ? window.innerWidth + 200 : 1400,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
          >
            {
              [
                "GET /api/v2/analytics → 200 OK (47ms)",
                "POST /api/users/create → 201 Created (23ms)",
                "PUT /api/projects/update → 200 OK (31ms)",
                "DELETE /api/cache/clear → 204 No Content (12ms)",
                "GET /api/metrics/performance → 200 OK (19ms)",
                "POST /api/ai/process → 202 Accepted (156ms)",
              ][i]
            }
          </motion.div>
        ))}

        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`db-${i}`}
            className="absolute font-mono text-xs text-blue-400/30 select-none pointer-events-none"
            initial={{
              x: typeof window !== "undefined" ? window.innerWidth + 100 : 1300,
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              x: -300,
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 3,
            }}
          >
            {
              [
                "🔍 Query: SELECT revenue FROM Q4 WHERE growth > 200%",
                "📊 Analytics: Processing 2.3M records/sec",
                "⚡ Cache: Redis hit ratio 99.7%",
                "🚀 Performance: Response time < 50ms",
              ][i]
            }
          </motion.div>
        ))}

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`tech-logo-${i}`}
            className="absolute font-bold text-sm text-foreground/20 select-none pointer-events-none"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: [
                Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800) - 100,
                Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              ],
              opacity: [0, 0.6, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {
              [
                "⚛️ React",
                "🔺 Vercel",
                "🐳 Docker",
                "☁️ AWS",
                "🔥 Firebase",
                "📱 Next.js",
                "🎯 TypeScript",
                "⚡ Node.js",
              ][i]
            }
          </motion.div>
        ))}

        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              backgroundColor: `hsl(var(--foreground) / ${Math.random() * 0.3 + 0.1})`,
            }}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-foreground/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: 360,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-geist font-bold text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 tracking-tight"
        >
          {"Ciltriq".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="inline-block"
              whileHover={{
                scale: 1.1,
                color: "hsl(var(--primary))",
                transition: { duration: 0.2 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-manrope text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {"Innovating Technology, Empowering Growth".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-visible group shadow-lg hover:shadow-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/9562019132?text=Hi! I would like to get a free consultation for my project.",
                  "_blank",
                )
              }
            >
              <span className="relative z-10 flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </motion.div>
                Get Free Consultation
                <motion.div
                  animate={{
                    x: [0, 3, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </Button>

            <motion.div
              className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2 border-2 border-white shadow-lg z-20"
              animate={{
                y: [0, -3, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="flex items-center gap-2">View Our Work</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
