import { motion } from "framer-motion"
import { Plane, MapPin, Camera, Utensils, Bed, Clock } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ItineraryTimeline = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Paris",
      date: "March 15, 2024",
      activities: [
        {
          time: "10:00 AM",
          title: "Flight Arrival",
          description: "Land at Charles de Gaulle Airport",
          icon: Plane,
          type: "transport"
        },
        {
          time: "12:00 PM",
          title: "Hotel Check-in",
          description: "Le Marais Boutique Hotel",
          icon: Bed,
          type: "accommodation"
        },
        {
          time: "2:00 PM",
          title: "Lunch at Café de Flore",
          description: "Traditional French bistro experience",
          icon: Utensils,
          type: "dining"
        },
        {
          time: "4:00 PM",
          title: "Seine River Walk",
          description: "Leisurely stroll along the riverbank",
          icon: MapPin,
          type: "activity"
        }
      ]
    },
    {
      day: 2,
      title: "Classic Paris Tour",
      date: "March 16, 2024",
      activities: [
        {
          time: "9:00 AM",
          title: "Eiffel Tower Visit",
          description: "Skip-the-line tickets included",
          icon: Camera,
          type: "sightseeing"
        },
        {
          time: "12:00 PM",
          title: "Lunch at Trocadéro",
          description: "Dining with Eiffel Tower view",
          icon: Utensils,
          type: "dining"
        },
        {
          time: "2:30 PM",
          title: "Louvre Museum",
          description: "Guided tour of masterpieces",
          icon: Camera,
          type: "sightseeing"
        },
        {
          time: "6:00 PM",
          title: "Champs-Élysées Shopping",
          description: "Explore luxury boutiques",
          icon: MapPin,
          type: "activity"
        }
      ]
    },
    {
      day: 3,
      title: "Montmartre & Culture",
      date: "March 17, 2024",
      activities: [
        {
          time: "10:00 AM",
          title: "Sacré-Cœur Basilica",
          description: "Panoramic views of Paris",
          icon: Camera,
          type: "sightseeing"
        },
        {
          time: "1:00 PM",
          title: "Artist Quarter Tour",
          description: "Discover Montmartre's artistic heritage",
          icon: MapPin,
          type: "activity"
        },
        {
          time: "3:30 PM",
          title: "Wine Tasting",
          description: "Local vineyard experience",
          icon: Utensils,
          type: "dining"
        },
        {
          time: "7:00 PM",
          title: "Moulin Rouge Show",
          description: "Iconic cabaret performance",
          icon: Camera,
          type: "entertainment"
        }
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      transport: "bg-blue-100 text-blue-800",
      accommodation: "bg-purple-100 text-purple-800",
      dining: "bg-orange-100 text-orange-800",
      activity: "bg-green-100 text-green-800",
      sightseeing: "bg-red-100 text-red-800",
      entertainment: "bg-pink-100 text-pink-800"
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Trip Itinerary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully planned journey through the City of Light
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" defaultValue={["day-1"]} className="space-y-6">
            {itinerary.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`day-${day.day}`} 
                  className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {day.day}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{day.title}</h3>
                        <p className="text-muted-foreground">{day.date}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200" />
                      
                      <div className="space-y-6">
                        {day.activities.map((activity, activityIndex) => {
                          const IconComponent = activity.icon
                          
                          return (
                            <motion.div
                              key={activityIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: activityIndex * 0.1 
                              }}
                              viewport={{ once: true }}
                              className="relative flex items-start space-x-4"
                            >
                              {/* Timeline Dot */}
                              <div className="relative z-10 flex-shrink-0">
                                <div className="w-12 h-12 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center shadow-sm">
                                  <IconComponent className="h-5 w-5 text-blue-600" />
                                </div>
                              </div>
                              
                              {/* Activity Card */}
                              <Card className="flex-1 hover:shadow-md transition-shadow">
                                <CardHeader className="pb-3">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <Clock className="h-4 w-4 text-muted-foreground" />
                                      <span className="text-sm font-medium text-muted-foreground">
                                        {activity.time}
                                      </span>
                                    </div>
                                    <Badge 
                                      variant="secondary" 
                                      className={getTypeColor(activity.type)}
                                    >
                                      {activity.type}
                                    </Badge>
                                  </div>
                                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                  <CardDescription className="text-base">
                                    {activity.description}
                                  </CardDescription>
                                </CardContent>
                              </Card>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default ItineraryTimeline
