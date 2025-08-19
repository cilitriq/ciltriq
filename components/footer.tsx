import { Github, Twitter, Linkedin, Mail } from "lucide-react"

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
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-geist font-semibold text-lg mb-4">Services</h4>
            <ul className="font-manrope space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-geist font-semibold text-lg mb-4">Company</h4>
            <ul className="font-manrope space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
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
