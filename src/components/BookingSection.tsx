import { useState } from "react"
import { motion } from "framer-motion"
import { Plane, Hotel, Camera, Star, Users, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

const BookingSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const bookingOptions = [
    {
      id: 1,
      category: "Flights",
      icon: Plane,
      items: [
        {
          id: 101,
          title: "Paris Round Trip",
          airline: "Air France",
          price: "$899",
          duration: "8h 45m",
          stops: "Direct",
          rating: 4.8,
          image: "",
          details: {
            departure: "JFK → CDG",
            departureTime: "10:30 PM",
            arrival: "12:15 PM +1",
            aircraft: "Boeing 777-300ER",
            baggage: "2 x 23kg included"
          }
        },
        {
          id: 102,
          title: "Tokyo Adventure",
          airline: "Japan Airlines",
          price: "$1,299",
          duration: "14h 20m",
          stops: "1 Stop",
          rating: 4.9,
          image: "🛫",
          details: {
            departure: "LAX → NRT",
            departureTime: "11:45 AM",
            arrival: "3:05 PM +1",
            aircraft: "Boeing 787-9",
            baggage: "2 x 23kg included"
          }
        }
      ]
    },
    {
      id: 2,
      category: "Hotels",
      icon: Hotel,
      items: [
        {
          id: 201,
          title: "Le Marais Boutique Hotel",
          location: "Paris, France",
          price: "$189/night",
          duration: "3 nights",
          rating: 4.7,
          image: "🏨",
          details: {
            amenities: ["Free WiFi", "Breakfast", "Gym", "Spa"],
            roomType: "Deluxe King Room",
            checkIn: "March 15, 2024",
            checkOut: "March 18, 2024",
            cancellation: "Free cancellation until 24h before"
          }
        },
        {
          id: 202,
          title: "Tokyo Bay Resort",
          location: "Tokyo, Japan",
          price: "$245/night",
          duration: "5 nights",
          rating: 4.8,
          image: "🏯",
          details: {
            amenities: ["Ocean View", "Onsen", "Restaurant", "Concierge"],
            roomType: "Premium Suite",
            checkIn: "April 10, 2024",
            checkOut: "April 15, 2024",
            cancellation: "Free cancellation until 48h before"
          }
        }
      ]
    },
    {
      id: 3,
      category: "Activities",
      icon: Camera,
      items: [
        {
          id: 301,
          title: "Eiffel Tower Skip-the-Line",
          location: "Paris, France",
          price: "$35",
          duration: "2 hours",
          rating: 4.6,
          image: "🗼",
          details: {
            includes: ["Skip-the-line access", "Audio guide", "Summit access"],
            meetingPoint: "Eiffel Tower South Pillar",
            time: "2:00 PM - 4:00 PM",
            groupSize: "Max 15 people",
            languages: ["English", "French", "Spanish"]
          }
        },
        {
          id: 302,
          title: "Seine River Cruise",
          location: "Paris, France",
          price: "$28",
          duration: "1.5 hours",
          rating: 4.5,
          image: "🚢",
          details: {
            includes: ["Commentary", "Refreshments", "Photo opportunities"],
            meetingPoint: "Pont Neuf",
            time: "7:00 PM - 8:30 PM",
            groupSize: "Max 50 people",
            languages: ["English", "French"]
          }
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Complete Your Booking
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect trip in one place
          </p>
        </motion.div>

        <div className="space-y-16">
          {bookingOptions.map((category, categoryIndex) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setHoveredCard(item.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden ${
                            item.id === 101 ? 'bg-cover bg-center' : ''
                          }`} 
                          style={item.id === 101 ? { backgroundImage: 'url(/Flight.jpg)' } : {}}>
                            {item.id === 101 && (
                              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-0" />
                            )}
                            <CardHeader className="relative overflow-hidden z-10">
                              <div className="flex items-center justify-between mb-4">
                                {item.id !== 101 && <div className="text-4xl">{item.image}</div>}
                                <div className="flex items-center space-x-1">
                                  <Star className={`h-4 w-4 fill-current ${item.id === 101 ? 'text-yellow-400' : 'text-yellow-500'}`} />
                                  <span className={`text-sm font-semibold ${item.id === 101 ? 'text-white' : ''}`}>{item.rating}</span>
                                </div>
                              </div>
                              
                              <CardTitle className={`text-xl group-hover:text-primary transition-colors ${
                                item.id === 101 ? 'text-white drop-shadow-lg' : ''
                              }`}>
                                {item.title}
                              </CardTitle>
                              
                              <CardDescription className={`flex items-center space-x-2 ${
                                item.id === 101 ? 'text-white/90 drop-shadow-md' : ''
                              }`}>
                                {category.category === "Flights" && (
                                  <>
                                    <span>{(item as any).airline}</span>
                                    <span>•</span>
                                    <span>{(item as any).stops}</span>
                                  </>
                                )}
                                {category.category === "Hotels" && (
                                  <>
                                    <MapPin className="h-4 w-4" />
                                    <span>{(item as any).location}</span>
                                  </>
                                )}
                                {category.category === "Activities" && (
                                  <>
                                    <MapPin className="h-4 w-4" />
                                    <span>{(item as any).location}</span>
                                  </>
                                )}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="relative z-10">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                  <div className={`text-2xl font-bold ${
                                    item.id === 101 ? 'text-white drop-shadow-lg' : 'text-primary'
                                  }`}>
                                    {item.price}
                                  </div>
                                  <Badge variant="secondary" className={`${
                                    item.id === 101 ? 'bg-white/20 text-white border-white/30 backdrop-blur-sm' : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {item.duration}
                                  </Badge>
                                </div>
                                
                                <motion.div
                                  animate={{ 
                                    x: hoveredCard === item.id ? 5 : 0,
                                    opacity: hoveredCard === item.id ? 1 : 0.7
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Button variant="ghost" size="sm" className={`cursor-pointer ${
                                    item.id === 101 ? 'text-white hover:bg-white/20 backdrop-blur-sm' : 'text-primary'
                                  }`}>
                                    View Details →
                                  </Button>
                                </motion.div>
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>

                        <DialogContent className="max-w-2xl">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <DialogHeader>
                              <div className="flex items-center space-x-4 mb-4">
                                <div className="text-5xl">{item.image}</div>
                                <div>
                                  <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                                  <DialogDescription className="text-lg">
                                    {category.category === "Flights" && (item as any).airline}
                                    {category.category === "Hotels" && (item as any).location}
                                    {category.category === "Activities" && (item as any).location}
                                  </DialogDescription>
                                </div>
                              </div>
                            </DialogHeader>

                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                                  <span className="font-semibold">{item.rating} Rating</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-5 w-5 text-blue-500" />
                                  <span className="font-semibold">{item.duration}</span>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-lg">Details</h4>
                                {category.category === "Flights" && (
                                  <div className="space-y-2">
                                    <p><strong>Route:</strong> {(item.details as any).departure}</p>
                                    <p><strong>Departure:</strong> {(item.details as any).departureTime}</p>
                                    <p><strong>Arrival:</strong> {(item.details as any).arrival}</p>
                                    <p><strong>Aircraft:</strong> {(item.details as any).aircraft}</p>
                                    <p><strong>Baggage:</strong> {(item.details as any).baggage}</p>
                                  </div>
                                )}
                                {category.category === "Hotels" && (
                                  <div className="space-y-2">
                                    <p><strong>Room:</strong> {(item.details as any).roomType}</p>
                                    <p><strong>Check-in:</strong> {(item.details as any).checkIn}</p>
                                    <p><strong>Check-out:</strong> {(item.details as any).checkOut}</p>
                                    <p><strong>Cancellation:</strong> {(item.details as any).cancellation}</p>
                                    <div>
                                      <strong>Amenities:</strong>
                                      <div className="flex flex-wrap gap-2 mt-2">
                                        {(item.details as any).amenities.map((amenity: string, index: number) => (
                                          <Badge key={index} variant="secondary">{amenity}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {category.category === "Activities" && (
                                  <div className="space-y-2">
                                    <p><strong>Time:</strong> {(item.details as any).time}</p>
                                    <p><strong>Meeting Point:</strong> {(item.details as any).meetingPoint}</p>
                                    <p><strong>Group Size:</strong> {(item.details as any).groupSize}</p>
                                    <div>
                                      <strong>Includes:</strong>
                                      <div className="flex flex-wrap gap-2 mt-2">
                                        {(item.details as any).includes.map((include: string, index: number) => (
                                          <Badge key={index} variant="secondary">{include}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center justify-between pt-6 border-t">
                                <div className="text-3xl font-bold text-primary">
                                  {item.price}
                                </div>
                                <Button 
                                  size="lg" 
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer"
                                >
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BookingSection
