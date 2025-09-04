import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Calendar, Users, X, Star, Clock, DollarSign, Plane, Camera, MapIcon, Wifi, Car, Utensils } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)

  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "City of Light and Romance",
      image: "/Paris.jpg",
      price: "$1,299",
      duration: "7 days",
      rating: 4.8,
      reviews: 2847,
      highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Seine River Cruise"],
      bestTime: "April to June, September to October",
      activities: ["City Tours", "Museum Visits", "River Cruises", "Fine Dining"],
      included: ["Hotel Accommodation", "Daily Breakfast", "Airport Transfers", "City Tour Guide"],
      climate: "Temperate oceanic climate with mild temperatures",
      currency: "Euro (EUR)",
      language: "French",
      timeZone: "CET (UTC+1)"
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "Modern meets Traditional",
      image: "/Tokyo.jpg",
      price: "$1,599",
      duration: "10 days",
      rating: 4.9,
      reviews: 3241,
      highlights: ["Tokyo Skytree", "Senso-ji Temple", "Shibuya Crossing", "Mount Fuji Day Trip"],
      bestTime: "March to May, September to November",
      activities: ["Temple Visits", "Shopping", "Food Tours", "Cultural Experiences"],
      included: ["Ryokan Stay", "Traditional Meals", "JR Pass", "Cultural Guide"],
      climate: "Humid subtropical climate with distinct seasons",
      currency: "Japanese Yen (JPY)",
      language: "Japanese",
      timeZone: "JST (UTC+9)"
    },
    {
      id: 3,
      name: "Bali, Indonesia",
      description: "Tropical Paradise",
      image: "/Bali.jpg",
      price: "$899",
      duration: "5 days",
      rating: 4.7,
      reviews: 1923,
      highlights: ["Uluwatu Temple", "Rice Terraces", "Beach Clubs", "Volcano Hiking"],
      bestTime: "April to October (Dry Season)",
      activities: ["Beach Activities", "Temple Tours", "Spa Treatments", "Adventure Sports"],
      included: ["Beach Resort", "Spa Sessions", "Island Tours", "Airport Transfers"],
      climate: "Tropical climate with wet and dry seasons",
      currency: "Indonesian Rupiah (IDR)",
      language: "Indonesian, Balinese",
      timeZone: "WITA (UTC+8)"
    },
    {
      id: 4,
      name: "New York, USA",
      description: "The City That Never Sleeps",
      image: "/New York.jpg",
      price: "$1,199",
      duration: "6 days",
      rating: 4.6,
      reviews: 4156,
      highlights: ["Statue of Liberty", "Central Park", "Times Square", "Broadway Shows"],
      bestTime: "April to June, September to November",
      activities: ["City Tours", "Broadway Shows", "Museum Visits", "Shopping"],
      included: ["Manhattan Hotel", "Broadway Show", "City Pass", "Airport Transfers"],
      climate: "Humid subtropical climate with four distinct seasons",
      currency: "US Dollar (USD)",
      language: "English",
      timeZone: "EST (UTC-5)"
    },
    {
      id: 5,
      name: "Santorini, Greece",
      description: "Aegean Sea Beauty",
      image: "/Santorini.jpg",
      price: "$1,099",
      duration: "8 days",
      rating: 4.9,
      reviews: 2634,
      highlights: ["Oia Sunset", "Blue Domed Churches", "Wine Tasting", "Volcanic Beaches"],
      bestTime: "April to October",
      activities: ["Sunset Viewing", "Wine Tours", "Beach Relaxation", "Photography"],
      included: ["Cliffside Hotel", "Wine Tasting", "Sunset Cruise", "Island Tours"],
      climate: "Mediterranean climate with warm, dry summers",
      currency: "Euro (EUR)",
      language: "Greek",
      timeZone: "EET (UTC+2)"
    },
    {
      id: 6,
      name: "Dubai, UAE",
      description: "Luxury and Adventure",
      image: "/Dubai.jpg",
      price: "$1,399",
      duration: "7 days",
      rating: 4.8,
      reviews: 3789,
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"],
      bestTime: "November to March",
      activities: ["Desert Safari", "Shopping", "Luxury Dining", "Adventure Sports"],
      included: ["5-Star Hotel", "Desert Safari", "City Tours", "Mall Access"],
      climate: "Hot desert climate with very hot summers",
      currency: "UAE Dirham (AED)",
      language: "Arabic, English",
      timeZone: "GST (UTC+4)"
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
          className="relative"
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
                className={`group cursor-pointer transition-all duration-500 ${
                  hoveredCard && hoveredCard !== destination.id 
                    ? 'blur-sm scale-95 opacity-50' 
                    : 'blur-0 scale-100 opacity-100'
                }`}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md overflow-hidden relative">
                  <CardHeader className="relative p-0">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                        initial={{ opacity: 0.3 }}
                        animate={{ 
                          opacity: hoveredCard === destination.id ? 0.7 : 0.3 
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                      {destination.duration}
                    </div>
                  </CardHeader>
                  
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCard === destination.id ? 1 : 0,
                      y: hoveredCard === destination.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <CardTitle className="text-xl mb-2 text-white drop-shadow-lg">
                      {destination.name}
                    </CardTitle>
                    <CardDescription className="text-white/90 mb-4 drop-shadow-md">
                      {destination.description}
                    </CardDescription>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {destination.price}
                      </span>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="bg-white/90 hover:bg-white text-primary hover:text-primary backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(destination.id);
                        }}
                      >
                        View Details →
                      </Button>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Destination Details Popover - Overlays the cards section */}
          <AnimatePresence>
            {selectedDestination && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-50 flex items-start justify-center p-4 pt-8 pb-8"
                onClick={() => setSelectedDestination(null)}
              >
                {/* Light backdrop */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl" />
                
                {/* Popover Content - Entire container is scrollable */}
                <div
                  className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[calc(100vh-8rem)] overflow-y-auto shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const dest = destinations.find(d => d.id === selectedDestination);
                    if (!dest) return null;
                    
                    return (
                      <div className="relative">
                        {/* Header with Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={dest.image} 
                            alt={dest.name}
                            className="w-full h-full object-cover"
                            style={{ 
                              backgroundImage: `url(${dest.image})`, 
                              backgroundSize: "cover", 
                              backgroundPosition: "center" 
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Close Button - Right side of image */}
                          <button
                            onClick={() => setSelectedDestination(null)}
                            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors backdrop-blur-sm z-10 shadow-lg"
                          >
                            <X className="h-5 w-5" />
                          </button>
                          
                          {/* Title Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                              {dest.name}
                            </h2>
                            <div className="flex flex-wrap items-center gap-4 text-white/90">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="font-semibold">{dest.rating}</span>
                                <span className="text-sm">({dest.reviews} reviews)</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{dest.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <DollarSign className="h-4 w-4" />
                                <span className="font-bold text-lg">{dest.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                              {/* Description */}
                              <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                  <MapIcon className="h-5 w-5 mr-2 text-blue-600" />
                                  About This Destination
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  {dest.description}. Experience the perfect blend of culture, adventure, and relaxation in this amazing destination.
                                </p>
                              </div>
                              
                              {/* Highlights */}
                              <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                  <Camera className="h-5 w-5 mr-2 text-purple-600" />
                                  Top Highlights
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                  {dest.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                      <span className="text-sm font-medium">{highlight}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Activities */}
                              <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                  <Plane className="h-5 w-5 mr-2 text-green-600" />
                                  Activities
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {dest.activities.map((activity, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                      {activity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="space-y-6">
                              {/* Travel Info */}
                              <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                  <Wifi className="h-5 w-5 mr-2 text-orange-600" />
                                  Travel Information
                                </h3>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium">Best Time to Visit</span>
                                    <span className="text-sm text-gray-600">{dest.bestTime}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium">Climate</span>
                                    <span className="text-sm text-gray-600">{dest.climate}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium">Currency</span>
                                    <span className="text-sm text-gray-600">{dest.currency}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium">Language</span>
                                    <span className="text-sm text-gray-600">{dest.language}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium">Time Zone</span>
                                    <span className="text-sm text-gray-600">{dest.timeZone}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* What's Included */}
                              <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                  <Utensils className="h-5 w-5 mr-2 text-red-600" />
                                  What's Included
                                </h3>
                                <div className="space-y-2">
                                  {dest.included.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                                      </div>
                                      <span className="text-sm">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
                            <Button 
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12"
                              onClick={() => {
                                console.log(`Booking ${dest.name}`);
                                setSelectedDestination(null);
                              }}
                            >
                              <Car className="h-5 w-5 mr-2" />
                              Book Now - {dest.price}
                            </Button>
                            <Button 
                              variant="outline" 
                              className="flex-1 h-12"
                              onClick={() => {
                                console.log(`Added ${dest.name} to wishlist`);
                              }}
                            >
                              Add to Wishlist
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default SearchSection
