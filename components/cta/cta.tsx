"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppCTAButton() {
    const handleClick = () => {
        const message = encodeURIComponent("Hi! I would like to get a free consultation for my project.")
        window.open(`https://wa.me/9562019132?text=${message}`, "_blank", "noopener,noreferrer")
    }

    return (
        <motion.button
            onClick={handleClick}
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl focus:outline-none"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* WhatsApp Icon */}
            <motion.div
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
                <MessageCircle className="w-8 h-8" />
            </motion.div>

            {/* Pulsing Glow Effect */}
            <span className="absolute w-full h-full rounded-full bg-green-500 opacity-50 animate-ping" />
        </motion.button>
    )
}
