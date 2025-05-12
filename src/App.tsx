"use client"

import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/header"
import Footer from "./components/footer"
import ScrollToTop from "./components/scroll-to-top"
import { Toaster } from "./components/ui/toaster"

// Pages
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import UIUXDesignPage from "./pages/services/ui-ux-design"
import GraphicsDesignPage from "./pages/services/graphics-design"
import WebDevelopmentPage from "./pages/services/web-development"
import SEOPage from "./pages/services/seo"

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ThemeProvider defaultTheme="system" storageKey="creative-studio-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
            <Route path="/services/graphics-design" element={<GraphicsDesignPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/seo" element={<SEOPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
