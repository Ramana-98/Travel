import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "City of Light and Romance",
      image: "🗼",
      price: "$1,299",
      duration: "7 days"
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "Modern meets Traditional",
      image: "🏯",
      price: "$1,599",
      duration: "10 days"
    },
    {
      id: 3,
      name: "Bali, Indonesia",
      description: "Tropical Paradise",
      image: "🏝️",
      price: "$899",
      duration: "5 days"
    },
    {
      id: 4,
      name: "New York, USA",
      description: "The City That Never Sleeps",
      image: "🏙️",
      price: "$1,199",
      duration: "6 days"
    },
    {
      id: 5,
      name: "Santorini, Greece",
      description: "Aegean Sea Beauty",
      image: "🏛️",
      price: "$1,099",
      duration: "8 days"
    },
    {
      id: 6,
      name: "Dubai, UAE",
      description: "Luxury and Adventure",
      image: "🕌",
      price: "$1,399",
      duration: "7 days"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Where do you want to go?
            </h2>
            <p className="text-xl text-muted-foreground">
              Search for your dream destination and start planning
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-2xl shadow-lg border">
              {/* Destination Input */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Where to?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-0 focus-visible:ring-0 text-lg"
                />
              </div>

              {/* Date Input */}
              <div className="flex-1 relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="When?"
                  type="date"
                  className="pl-10 h-12 border-0 focus-visible:ring-0 text-lg"
                />
              </div>

              {/* Travelers Input */}
              <div className="flex-1 relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Travelers"
                  className="pl-10 h-12 border-0 focus-visible:ring-0 text-lg"
                />
              </div>

              {/* Search Button */}
              <Button 
                size="lg" 
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(destination.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md overflow-hidden">
                  <CardHeader className="relative p-0">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl relative overflow-hidden">
                      {destination.image}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                      {destination.duration}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {destination.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {destination.description}
                    </CardDescription>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {destination.price}
                      </span>
                      <motion.div
                        animate={{ 
                          x: hoveredCard === destination.id ? 5 : 0,
                          opacity: hoveredCard === destination.id ? 1 : 0.7
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                          View Details →
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SearchSection
