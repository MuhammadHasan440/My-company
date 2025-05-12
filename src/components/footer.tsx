import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-bold text-xl">
            <span className="gradient-text">CREATIVE</span>
            <span className="text-primary">STUDIO</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Creating exceptional digital experiences through innovative design and development.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link
                to="/services/graphics-design"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Graphics Design
              </Link>
            </li>
            <li>
              <Link
                to="/services/web-development"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                SEO Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Contact</h3>
          <address className="not-italic text-sm text-muted-foreground">
            <p>123 Design Street</p>
            <p>Creative City, CD 12345</p>
            <p className="mt-2">info@creativestudio.com</p>
            <p>+1 (555) 123-4567</p>
          </address>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Creative Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
