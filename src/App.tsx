import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import SearchSection from "@/components/SearchSection"
import MapSection from "@/components/MapSection"
import ItineraryTimeline from "@/components/ItineraryTimeline"
import BookingSection from "@/components/BookingSection"
import ProgressTracker from "@/components/ProgressTracker"

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-background"
    >
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SearchSection />
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MapSection />
        </motion.section>
        
        <motion.section
          id="trips"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ItineraryTimeline />
        </motion.section>
        
        <motion.section
          id="bookings"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <BookingSection />
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ProgressTracker />
        </motion.section>
      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-3xl">✈️</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TravelEase
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Your AI-powered trip planner that makes travel planning effortless. 
              Discover, plan, and book your perfect journey with ease.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Help Center</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800 text-gray-500 text-sm">
              © 2024 TravelEase. All rights reserved. Made with ❤️ for travelers worldwide.
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default App
