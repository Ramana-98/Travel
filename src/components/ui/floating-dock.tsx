import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingDockItem {
  name: string
  href: string
  icon?: React.ReactNode
}

interface FloatingDockProps {
  items: FloatingDockItem[]
  activeItem?: string
  className?: string
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ items, activeItem, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
        {items.map((item, index) => {
          const isActive = activeItem === item.href
          
          return (
            <motion.a
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                isActive 
                  ? "text-white bg-gradient-to-r from-blue-500 to-purple-600" 
                  : "text-gray-700 hover:text-gray-900"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {hoveredIndex === index && !isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Active state background */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  layoutId="activeBackground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6
                  }}
                />
              )}
              
              <motion.div
                className="relative z-10 flex items-center space-x-2"
                animate={{
                  y: hoveredIndex === index ? -2 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.icon && (
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                )}
                <span>{item.name}</span>
              </motion.div>

              {/* Floating tooltip */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: isActive
                    ? "0 0 25px rgba(59, 130, 246, 0.4), 0 0 50px rgba(147, 51, 234, 0.3)"
                    : hoveredIndex === index 
                      ? "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)"
                      : "0 0 0px rgba(59, 130, 246, 0)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}
