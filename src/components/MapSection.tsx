import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X, Star, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MapSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)

  const destinations = [
    {
      id: 1,
      name: "Eiffel Tower",
      city: "Paris",
      country: "France",
      position: { x: 45, y: 35 },
      rating: 4.8,
      price: "$25",
      duration: "2-3 hours",
      description: "Iconic iron lattice tower and symbol of Paris",
      image: "🗼"
    },
    {
      id: 2,
      name: "Tokyo Skytree",
      city: "Tokyo",
      country: "Japan",
      position: { x: 85, y: 25 },
      rating: 4.7,
      price: "$18",
      duration: "1-2 hours",
      description: "Broadcasting and observation tower in Sumida",
      image: "🏯"
    },
    {
      id: 3,
      name: "Uluwatu Temple",
      city: "Bali",
      country: "Indonesia",
      position: { x: 78, y: 65 },
      rating: 4.6,
      price: "$5",
      duration: "2-3 hours",
      description: "Ancient sea temple perched on a cliff",
      image: "🏝️"
    },
    {
      id: 4,
      name: "Statue of Liberty",
      city: "New York",
      country: "USA",
      position: { x: 25, y: 30 },
      rating: 4.5,
      price: "$23",
      duration: "3-4 hours",
      description: "Symbol of freedom and democracy",
      image: "🗽"
    },
    {
      id: 5,
      name: "Oia Village",
      city: "Santorini",
      country: "Greece",
      position: { x: 52, y: 40 },
      rating: 4.9,
      price: "Free",
      duration: "Half day",
      description: "Famous for stunning sunsets and white buildings",
      image: "🏛️"
    }
  ]

  const handleMarkerClick = (destinationId: number) => {
    setSelectedDestination(destinationId)
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
              {/* World Map Background */}
              <div className="absolute inset-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                <div className="text-8xl opacity-20">🗺️</div>
              </div>

              {/* Destination Markers */}
              {destinations.map((destination) => (
                <motion.button
                  key={destination.id}
                  className="absolute z-10 group"
                  style={{
                    left: `${destination.position.x}%`,
                    top: `${destination.position.y}%`,
                  }}
                  onClick={() => handleMarkerClick(destination.id)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: selectedDestination === destination.id ? [-5, 5, -5] : [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={`relative ${selectedDestination === destination.id ? 'z-20' : 'z-10'}`}>
                    <MapPin 
                      className={`h-8 w-8 transition-colors duration-200 ${
                        selectedDestination === destination.id 
                          ? 'text-red-500' 
                          : 'text-blue-500 group-hover:text-red-400'
                      }`} 
                    />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {destination.name}
                    </div>
                  </div>
                </motion.button>
              ))}

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {destinations.map((dest, index) => (
                  <motion.circle
                    key={`pulse-${dest.id}`}
                    cx={`${dest.position.x}%`}
                    cy={`${dest.position.y}%`}
                    r="0"
                    fill="rgba(59, 130, 246, 0.3)"
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
                  <Card className="h-[500px] overflow-hidden">
                    <CardHeader className="relative">
                      <button
                        onClick={() => setSelectedDestination(null)}
                        className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      
                      <div className="text-center">
                        <div className="text-6xl mb-4">{selectedDest.image}</div>
                        <CardTitle className="text-2xl mb-2">{selectedDest.name}</CardTitle>
                        <CardDescription className="text-lg">
                          {selectedDest.city}, {selectedDest.country}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        {selectedDest.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold">{selectedDest.rating}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="font-semibold">{selectedDest.price}</span>
                        </div>
                        <div className="flex items-center space-x-2 col-span-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="font-semibold">{selectedDest.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          Add to Trip
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
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
