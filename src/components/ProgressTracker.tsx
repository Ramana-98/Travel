import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Plane, Hotel, Camera, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0)
  const [animatedProgress, setAnimatedProgress] = useState(0)

  const tripSteps = [
    {
      id: 1,
      title: "Flights Booked",
      description: "Round-trip tickets confirmed",
      icon: Plane,
      status: "completed",
      completedAt: "2 days ago"
    },
    {
      id: 2,
      title: "Hotels Reserved",
      description: "Accommodation secured",
      icon: Hotel,
      status: "completed",
      completedAt: "1 day ago"
    },
    {
      id: 3,
      title: "Activities Planned",
      description: "Tours and experiences booked",
      icon: Camera,
      status: "in-progress",
      completedAt: null
    },
    {
      id: 4,
      title: "Travel Documents",
      description: "Passport and visa ready",
      icon: Clock,
      status: "pending",
      completedAt: null
    }
  ]

  const completedSteps = tripSteps.filter(step => step.status === "completed").length
  const totalSteps = tripSteps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  useEffect(() => {
    setProgress(progressPercentage)
    
    // Animate progress bar
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage)
    }, 500)

    return () => clearTimeout(timer)
  }, [progressPercentage])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "pending":
        return "bg-gray-100 text-gray-600 border-gray-200"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="h-4 w-4" />
      case "in-progress":
        return <Clock className="h-4 w-4 animate-spin" />
      case "pending":
        return <Clock className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Trip Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your booking progress and get ready for your adventure
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Overall Progress</CardTitle>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-3xl font-bold text-primary"
                  >
                    {Math.round(animatedProgress)}%
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress 
                    value={animatedProgress} 
                    className="h-3"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{completedSteps} of {totalSteps} steps completed</span>
                    <span>
                      {totalSteps - completedSteps} remaining
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tripSteps.map((step, index) => {
              const IconComponent = step.icon
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    step.status === "completed" ? "border-green-200 bg-green-50/50" :
                    step.status === "in-progress" ? "border-blue-200 bg-blue-50/50" :
                    "border-gray-200"
                  }`}>
                    {/* Status Indicator */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${
                      step.status === "completed" ? "bg-green-500" :
                      step.status === "in-progress" ? "bg-blue-500" :
                      "bg-gray-300"
                    }`} />

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            step.status === "completed" ? "bg-green-100" :
                            step.status === "in-progress" ? "bg-blue-100" :
                            "bg-gray-100"
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              step.status === "completed" ? "text-green-600" :
                              step.status === "in-progress" ? "text-blue-600" :
                              "text-gray-500"
                            }`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </div>
                        </div>
                        
                        <Badge 
                          variant="secondary" 
                          className={`${getStatusColor(step.status)} border`}
                        >
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(step.status)}
                            <span className="capitalize">{step.status.replace("-", " ")}</span>
                          </div>
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      
                      {step.completedAt && (
                        <div className="flex items-center space-x-2 text-sm text-green-600">
                          <Check className="h-4 w-4" />
                          <span>Completed {step.completedAt}</span>
                        </div>
                      )}
                      
                      {step.status === "in-progress" && (
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center space-x-2 text-sm text-blue-600"
                        >
                          <Clock className="h-4 w-4" />
                          <span>In progress...</span>
                        </motion.div>
                      )}
                      
                      {step.status === "pending" && (
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>Pending</span>
                        </div>
                      )}
                    </CardContent>

                    {/* Completion Animation */}
                    {step.status === "completed" && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="absolute top-4 right-4"
                      >
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Complete activity bookings for your Paris trip</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Prepare travel documents and check visa requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Download offline maps and travel apps</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProgressTracker
