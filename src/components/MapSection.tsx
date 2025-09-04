import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X, Star, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MapSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mouseDirection, setMouseDirection] = useState({ x: 0, y: 0 })
  const [selectedCountry, setSelectedCountry] = useState<string>("all")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isPixelated, setIsPixelated] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const getMouseDirection = (e: React.MouseEvent) => {
    if (!cardRef.current) return { x: 0, y: 0 }
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    
    return { x: deltaX, y: deltaY }
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    const direction = getMouseDirection(e)
    setMouseDirection(direction)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const allDestinations = [
    {
      id: 1,
      name: "Eiffel Tower",
      city: "Paris",
      country: "France",
      position: { x: 48.5, y: 32 }, 
      rating: 4.8,
      price: "$25",
      duration: "2-3 hours",
      description: "Iconic iron lattice tower and symbol of Paris",
      image: "/Paris.jpg"
    },
    {
      id: 2,
      name: "Tokyo Skytree",
      city: "Tokyo",
      country: "Japan",
      position: { x: 87, y: 28 }, 
      rating: 4.7,
      price: "$18",
      duration: "1-2 hours",
      description: "Broadcasting and observation tower in Sumida",
      image: "/Tokyo.jpg"
    },
    {
      id: 3,
      name: "Uluwatu Temple",
      city: "Bali",
      country: "Indonesia",
      position: { x: 79, y: 58 }, 
      rating: 4.6,
      price: "$5",
      duration: "2-3 hours",
      description: "Ancient sea temple perched on a cliff",
      image: "/Bali.jpg"
    },
    {
      id: 4,
      name: "Statue of Liberty",
      city: "New York",
      country: "USA",
      position: { x: 22, y: 30 }, 
      rating: 4.5,
      price: "$23",
      duration: "3-4 hours",
      description: "Symbol of freedom and democracy",
      image: "/UAE.jpg"
    },
    {
      id: 5,
      name: "Oia Village",
      city: "Santorini",
      country: "Greece",
      position: { x: 52, y: 35 }, 
      rating: 4.9,
      price: "Free",
      duration: "Half day",
      description: "Famous for stunning sunsets and white buildings",
      image: "/Santorini.jpg"
    },
    {
      id: 6,
      name: "Taj Mahal",
      city: "Agra",
      country: "India",
      position: { x: 72, y: 42 }, 
      rating: 4.9,
      price: "$15",
      duration: "3-4 hours",
      description: "Iconic white marble mausoleum and UNESCO World Heritage Site",
      image: "/TajMahal.jpg"
    },
    {
      id: 7,
      name: "Calangute Beach",
      city: "Goa",
      country: "India",
      position: { x: 69, y: 48 }, 
      rating: 4.5,
      price: "Free",
      duration: "Half day",
      description: "Golden sandy beach with vibrant nightlife and water sports",
      image: "/Calangute-Beach.jpg"
    },
    {
      id: 8,
      name: "Varkala Beach",
      city: "Kerala",
      country: "India",
      position: { x: 70, y: 52 }, 
      rating: 4.7,
      price: "Free",
      duration: "Full day",
      description: "Dramatic cliffs overlooking pristine beaches and Ayurvedic spas",
      image: "/Varkala-Beach.jpg"
    },
    {
      id: 9,
      name: "Thangai Temple",
      city: "Tamil Nadu",
      country: "India",
      position: { x: 72, y: 54 }, 
      rating: 4.6,
      price: "$5",
      duration: "2-3 hours",
      description: "Ancient Dravidian architecture temple with intricate carvings",
      image: "/Thanjai.jpg"
    },
    {
      id: 10,
      name: "Pink City (Jaipur)",
      city: "Rajasthan",
      country: "India",
      position: { x: 70, y: 43 }, 
      rating: 4.8,
      price: "$20",
      duration: "Full day",
      description: "Historic walled city with pink sandstone architecture and royal palaces",
      image: "/Pink-City.jpg"
    },
    {
      id: 11,
      name: "Kashi Vishwanath Temple",
      city: "Varanasi, Uttar Pradesh",
      country: "India",
      position: { x: 73, y: 45 }, 
      rating: 4.9,
      price: "Free",
      duration: "2-3 hours",
      description: "Sacred Hindu temple dedicated to Lord Shiva on the banks of Ganges",
      image: "/Kashi-Vishwanath.jpg"
    }
  ]

  const countries = [
    { value: "all", label: "All Countries" },
    { value: "USA", label: "United States" },
    { value: "France", label: "France" },
    { value: "Japan", label: "Japan" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Greece", label: "Greece" },
    { value: "India", label:"India"},
  ]

  const destinations = selectedCountry === "all" 
    ? allDestinations 
    : allDestinations.filter(dest => dest.country === selectedCountry)

  const handleMarkerClick = (destinationId: number) => {
    setSelectedDestination(destinationId)
    setIsPixelated(false) // Reset pixelated state when changing destination
  }

  const selectedDest = destinations.find(d => d.id === selectedDestination)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Explore Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on the markers to discover amazing places around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-6 h-[500px] relative overflow-hidden">
              {/* Category Dropdown - Inside Map Card */}
              <div className="absolute top-4 left-4 z-30">
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 min-w-[160px]"
                  >
                    <span className="text-gray-700 font-medium text-sm">
                      {countries.find(c => c.value === selectedCountry)?.label || "Select Category"}
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden min-w-[160px]"
                      >
                        {countries.map((country, index) => (
                          <motion.button
                            key={country.value}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            onClick={() => {
                              setSelectedCountry(country.value)
                              setIsDropdownOpen(false)
                              setSelectedDestination(null)
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 text-sm ${
                              selectedCountry === country.value 
                                ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium' 
                                : 'text-gray-700 hover:text-blue-600'
                            }`}
                          >
                            {country.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* World Map Background */}
              <div className="absolute inset-6 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("/World-Map.jpg")' }}>
              </div>

              {/* Destination Markers */}
              <AnimatePresence>
                {destinations.map((destination, index) => (
                  <motion.button
                    key={`${selectedCountry}-${destination.id}`}
                    className="absolute z-10 group"
                    style={{
                      left: `${destination.position.x}%`,
                      top: `${destination.position.y}%`,
                    }}
                    onClick={() => handleMarkerClick(destination.id)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div 
                      className={`relative ${selectedDestination === destination.id ? 'z-20' : 'z-10'}`}
                      animate={{
                        y: selectedDestination === destination.id ? [-5, 5, -5] : [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <MapPin 
                        className={`h-8 w-8 transition-colors duration-200 ${
                          selectedDestination === destination.id 
                            ? 'text-red-500' 
                            : 'text-blue-500 group-hover:text-red-400'
                        }`} 
                      />
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap backdrop-blur-sm">
                        <div className="font-semibold">{destination.name}</div>
                        <div className="text-gray-300 text-xs">{destination.city}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </div>
                    </motion.div>
                  </motion.button>
                ))}
              </AnimatePresence>

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {destinations.map((dest, index) => (
                  <motion.circle
                    key={`pulse-${selectedCountry}-${dest.id}`}
                    cx={`${dest.position.x}%`}
                    cy={`${dest.position.y}%`}
                    r="0"
                    fill="rgba(59, 130, 246, 0.3)"
                    initial={{ r: 0 }}
                    animate={{
                      r: [0, 30, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                ))}
              </svg>
            </Card>
          </motion.div>

          {/* Destination Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <AnimatePresence mode="wait">
              {selectedDest ? (
                <motion.div
                  key={selectedDest.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    className="h-[500px] overflow-hidden relative group cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={cardRef}
                  >
                    <button
                      onClick={() => setSelectedDestination(null)}
                      className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-30 bg-white/80 backdrop-blur-sm"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    
                    {/* Full Screen Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={selectedDest.image} 
                        alt={selectedDest.name} 
                        className={`w-full h-full object-cover cursor-pointer transition-all duration-300 ${
                          isPixelated 
                            ? 'scale-110 pixelated' 
                            : 'hover:scale-105'
                        }`}
                        onClick={() => setIsPixelated(!isPixelated)}
                        style={{
                          imageRendering: isPixelated ? 'pixelated' : 'auto',
                          filter: isPixelated ? 'contrast(1.2) saturate(1.1)' : 'none',
                        }}
                      />
                      {isPixelated && (
                        <div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage: `url(${selectedDest.image})`,
                            backgroundSize: '20px 20px',
                            backgroundRepeat: 'repeat',
                            imageRendering: 'pixelated',
                            opacity: 0.3,
                            mixBlendMode: 'multiply'
                          }}
                        />
                      )}
                    </div>

                    {/* Direction-Aware Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6"
                      initial={{ 
                        opacity: 0,
                        x: mouseDirection.x > 0 ? 100 : mouseDirection.x < 0 ? -100 : 0,
                        y: mouseDirection.y > 0 ? 100 : mouseDirection.y < 0 ? -100 : 0
                      }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : (mouseDirection.x > 0 ? 100 : mouseDirection.x < 0 ? -100 : 0),
                        y: isHovered ? 0 : (mouseDirection.y > 0 ? 100 : mouseDirection.y < 0 ? -100 : 0)
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <CardTitle className="text-2xl mb-2 text-white drop-shadow-lg">
                        {selectedDest.name}
                      </CardTitle>
                      <CardDescription className="text-white/90 mb-4 drop-shadow-md text-lg">
                        {selectedDest.city}, {selectedDest.country}
                      </CardDescription>
                      
                      <p className="text-white/80 mb-4 drop-shadow-md">
                        {selectedDest.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="font-semibold text-white">{selectedDest.rating}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-white">{selectedDest.price}</span>
                        </div>
                        <div className="flex items-center space-x-2 col-span-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-white">{selectedDest.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log(`Added ${selectedDest.name} to trip`);
                          }}
                        >
                          Add to Trip
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full bg-white/90 hover:bg-white text-black border-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log(`View details for ${selectedDest.name}`);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[500px] flex items-center justify-center"
                >
                  <Card className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🗺️</div>
                      <h3 className="text-xl font-semibold mb-2">Select a Destination</h3>
                      <p className="text-muted-foreground">
                        Click on any marker on the map to explore that destination
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
