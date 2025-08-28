import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const videos = [
    "/2658998-hd_1920_1080_30fps.mp4",  // First video - plays first
    "/3372015-uhd_3840_2160_30fps.mp4", // Second video
    "/3750637-uhd_2560_1440_30fps.mp4"  // Third video
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      // Move to next video in sequence
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    const handleCanPlay = () => {
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error)
      })
    }

    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('canplay', handleCanPlay)
    
    // Load video
    video.load()

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [currentVideoIndex, videos.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        muted
        autoPlay
        playsInline
        preload="metadata"
        key={currentVideoIndex}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-0" />
      
      {/* Flying Airplane Animation */}
      <div className="absolute top-20 left-0 w-full h-20 pointer-events-none z-20">
        <motion.div
          className="absolute text-white"
          initial={{ x: -100, y: 0 }}
          animate={{ 
            x: "calc(100vw + 100px)",
            y: [-20, -40, -20, 0, -20]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Plane className="h-8 w-8 transform rotate-12 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your Dream Trip
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Starts Here
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Plan, book, and experience unforgettable journeys with our AI-powered trip planner. 
            From flights to activities, we've got you covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Planning Your Trip
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-white text-gray-900 bg-white/90 hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300 drop-shadow-lg"
            >
              Explore Destinations
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { number: "10K+", label: "Happy Travelers" },
              { number: "500+", label: "Destinations" },
              { number: "50K+", label: "Trips Planned" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float backdrop-blur-sm z-5" />
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float backdrop-blur-sm z-5" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float backdrop-blur-sm z-5" style={{ animationDelay: "2s" }} />
    </section>
  )
}

export default HeroSection
