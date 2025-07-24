'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Shield, Sun, Cpu, Building, Gauge, Wifi, Train, Flame, Home, Cable } from "lucide-react";

interface Service {
  id: number;
  image: string;
  title: string;
  companyName: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    image: "/LT.jpg",
    title: "LT WORK",
    companyName: "RC Power",
    description: "We provide comprehensive low tension electrical services including design, installation, maintenance and repair for residential and commercial properties.",
    icon: <Zap className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 2,
    image: "/133kva.jpg",
    title: "GRID SUB STATIONS",
    companyName: "RC Power",
    description: "Building 33/11 KV Grid Sub Stations with complete infrastructure and power distribution solutions for large-scale electrical networks.",
    icon: <Gauge className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 3,
    image: "/transmission.png",
    title: "TRANSMISSION LINES",
    companyName: "RC Power",
    description: "Overhead Transmission & Distribution Lines for LT, 11 KV & 33 KV including pole installation and lighting infrastructure.",
    icon: <Building className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 4,
    image: "/underground-cable.jpg",
    title: "UNDERGROUND CABLES",
    companyName: "RC Power",
    description: "Supply & Erection of 33 KV, 11 KV and LT underground cables for secure and reliable power distribution networks.",
    icon: <Cable className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 5,
    image: "/railway.avif",
    title: "RAILWAYS",
    companyName: "RC Power",
    description: "Electric Traction works for Indian Railways including infrastructure development and maintenance for railway electrification projects.",
    icon: <Train className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 6,
    image: "/cctv.jpg",
    title: "SECURITY & SURVEILLANCE",
    companyName: "RC Power",
    description: "Comprehensive security solutions including CCTV Cameras, HD IP Security Cameras, DVRs, Time & Attendance Systems, and Video Door Phones.",
    icon: <Shield className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 7,
    image: "/solar.webp",
    title: "SOLAR SOLUTIONS",
    companyName: "RC Power",
    description: "Integrated solar energy solutions provider offering engineering, procurement and construction (EPC) services, and operations and maintenance (O&M) services.",
    icon: <Sun className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 8,
    image: "/home-automation.jpg",
    title: "HOME AUTOMATION",
    companyName: "RC Power",
    description: "RC Power Automation creates exceptional properties, including residential and commercial developments with smart automation solutions.",
    icon: <Home className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 9,
    image: "/fire-security.jpg",
    title: "FIRE SECURITY SYSTEM",
    companyName: "RC Power",
    description: "Pioneer in installation of fire alarm systems, fire fighting & fire protection equipment, electrical panels & other LV Equipment for Government, PSU's, Railways, and leading companies.",
    icon: <Flame className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  },
  {
    id: 10,
    image: "/automatioj.avif",
    title: "INDUSTRIAL AUTOMATION",
    companyName: "RC Power",
    description: "We specialize in industrial automation solutions including SCADA systems, PLC programming, HMI development, and process control integration.",
    icon: <Cpu className="w-6 h-6 text-amber-700" />,
    color: "bg-amber-100"
  }
];

const BusinessServicesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get 3 visible cards centered around current index
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      cards.push({ ...services[index], position: i });
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-stone-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          {/* Elegant badge */}
          <div className="inline-flex items-center mb-8">
            <div className="h-px w-16 bg-amber-700 mr-6"></div>
            <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <div className="h-px w-16 bg-amber-700 ml-6"></div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-serif font-light text-slate-900 mb-6 tracking-tight">
            Main Sectors of Work
          </h1>
          
          <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            RC Power specializes in comprehensive electrical, automation, security, and infrastructure solutions 
            across multiple industry verticals with over 10 years of expertise.
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white border border-slate-300 shadow-lg hover:bg-slate-50 hover:border-amber-700 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-6">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white border border-slate-300 shadow-lg hover:bg-slate-50 hover:border-amber-700 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.4 },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {getVisibleCards().map((service, index) => (
                  <motion.div
                    key={`${service.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: service.position === 0 ? 1 : 0.6,
                      y: 0,
                      scale: service.position === 0 ? 1 : 0.95,
                    }}
                    transition={{ delay: index * 0.15 }}
                    className={`${service.position === 0 ? 'md:order-2' : service.position === -1 ? 'md:order-1' : 'md:order-3'} ${service.position !== 0 ? 'hidden md:block' : ''}`}
                  >
                    <Card className="group overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                      <div className="relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className={`absolute top-6 left-6 p-3 rounded-lg ${service.color} shadow-md`}>
                          {service.icon}
                        </div>
                      </div>

                      <CardHeader className="px-8 pt-8 pb-4">
                        <CardTitle className="text-slate-900 text-2xl font-serif font-medium tracking-wide mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-amber-700 font-medium text-base">
                          {service.companyName}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="px-8 pb-8">
                        <div className="w-12 h-0.5 bg-amber-700 mb-4"></div>
                        <p className="text-slate-600 leading-relaxed font-light text-base">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-16 flex-wrap">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-amber-700 shadow-lg scale-125" 
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium tracking-wide hover:bg-amber-700 transition-colors duration-300 group cursor-pointer">
            <a href="/lt-ht-work"><span>Explore All Services</span></a>
            <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          <div className="mt-8 text-sm text-slate-500">
            <span className="font-medium text-amber-700">{services.length}</span> specialized service areas
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessServicesSlider;