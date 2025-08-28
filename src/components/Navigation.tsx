import { useState, useEffect } from "react"
import { Menu, Plane, Home, MapPin, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FloatingDock } from "@/components/ui/floating-dock"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  const navItems = [
    { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "Trips", href: "#trips", icon: <MapPin className="h-4 w-4" /> },
    { name: "Bookings", href: "#bookings", icon: <Calendar className="h-4 w-4" /> },
    { name: "Profile", href: "#profile", icon: <User className="h-4 w-4" /> },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1)) // Remove # from href
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    // Set initial active section
    handleScroll()
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Handle hash changes (when clicking nav items)
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home")
    }
    
    window.addEventListener('hashchange', handleHashChange)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setActiveSection(href)
    setIsOpen(false) // Close mobile menu
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Plane className="h-8 w-8 text-primary animate-float" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TravelEase
          </span>
        </div>

        {/* Desktop Navigation with FloatingDock */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <FloatingDock items={navItems} activeItem={activeSection} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Planning
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TravelEase
                  </span>
                </SheetTitle>
                <SheetDescription>
                  Plan your perfect trip with ease
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-2 py-1 text-lg transition-colors rounded-md",
                      activeSection === item.href
                        ? "text-white bg-gradient-to-r from-blue-500 to-purple-600"
                        : "hover:text-primary hover:bg-gray-100"
                    )}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                ))}
                <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Start Planning
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
