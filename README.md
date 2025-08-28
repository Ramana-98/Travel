# TravelEase - AI-Powered Trip Planner

A modern, responsive trip planning application built with React, TypeScript, Tailwind CSS, and Framer Motion. Features beautiful animations, interactive components, and a comprehensive booking system.

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful gradient backgrounds, smooth animations, and responsive design
- **✈️ Animated Hero Section**: Flying airplane animation and gradient text effects
- **🔍 Interactive Search**: Smart search bar with destination cards and hover effects
- **🗺️ Interactive Map**: Clickable markers with animated destination details
- **📅 Trip Timeline**: Accordion-style itinerary with scroll-based animations
- **💳 Booking System**: Modal dialogs for flights, hotels, and activities
- **📊 Progress Tracker**: Animated progress bar with completion status
- **📱 Fully Responsive**: Mobile-first design with collapsible navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TravelEase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **ShadCN UI** - Component library

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── Navigation.tsx      # Main navigation component
│   ├── HeroSection.tsx     # Landing page hero
│   ├── SearchSection.tsx   # Search and destinations
│   ├── MapSection.tsx      # Interactive map
│   ├── ItineraryTimeline.tsx # Trip timeline
│   ├── BookingSection.tsx  # Booking cards and modals
│   └── ProgressTracker.tsx # Trip progress tracker
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## 🎯 Key Components

### Navigation
- Responsive navigation bar with mobile drawer
- Smooth scroll to sections
- Animated logo with floating effect

### Hero Section
- Large animated hero with gradient backgrounds
- Flying airplane animation across the screen
- Call-to-action buttons with hover effects
- Statistics section with animated counters

### Search Section
- Interactive search bar with icons
- Destination cards with hover animations
- Lift and shadow effects on card hover

### Interactive Map
- Clickable destination markers
- Bounce animations on markers
- Sliding detail panel with destination info
- Pulse animations around markers

### Itinerary Timeline
- Accordion-style layout for each day
- Timeline with activity icons
- Scroll-based fade-in animations
- Activity type badges with color coding

### Booking Section
- Cards for flights, hotels, and activities
- Modal dialogs with detailed information
- Smooth scale-up transitions
- Comprehensive booking details

### Progress Tracker
- Animated progress bar with gradient
- Step completion indicators
- Status badges and icons
- Next steps recommendations

## 🎨 Animations

The app uses Framer Motion for smooth, performant animations:

- **Page transitions**: Fade and slide effects
- **Scroll animations**: Elements animate into view
- **Hover effects**: Card lifts, button interactions
- **Loading states**: Skeleton screens and spinners
- **Micro-interactions**: Icon animations, progress bars

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Collapsible navigation for mobile
- Optimized layouts for all screen sizes

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌟 Future Enhancements

- Real API integration for destinations and bookings
- User authentication and profiles
- Payment processing
- Real-time flight and hotel data
- Social sharing features
- Offline support with PWA
- Multi-language support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@travelease.com or join our community Discord.

---

Made with ❤️ for travelers worldwide
