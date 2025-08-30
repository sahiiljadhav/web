"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Working with Tall Giraffe was a game-changer for our startup. Their creative vision and strategic approach helped us establish a strong brand presence that stands out in a crowded market. The results exceeded our expectations in every way.",
      author: "Jessica Martinez",
      role: "CEO & Founder",
      company: "TechFlow Innovations",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      rating: 5,
      results: "+300% Brand Recognition"
    },
    {
      id: 2,
      quote: "The team at Tall Giraffe doesn't just create campaigns - they create magic. Our environmental awareness campaign reached millions and generated engagement levels we never thought possible. Their passion for meaningful work shows in everything they do.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "EcoGreen Solutions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      rating: 5,
      results: "+150% Engagement Rate"
    },
    {
      id: 3,
      quote: "I've worked with many marketing agencies, but Tall Giraffe stands truly tall above the rest. Their innovative strategies and attention to detail transformed our digital presence and drove incredible growth for our business.",
      author: "Sarah Williams",
      role: "VP of Marketing",
      company: "HealthTech Pro",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      rating: 5,
      results: "+400% Lead Generation"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play testimonial carousel
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isVisible, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#0D1428] to-[#1A1A1A] dark:from-[#0A0A0A] dark:to-[#121212] py-20 md:py-32 overflow-hidden"
    >
      {/* Background "TESTIMONIALS" word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="text-[#2A2A2A] dark:text-[#1A1A1A] opacity-20 dark:opacity-30 font-extralight whitespace-nowrap"
          style={{
            fontSize: "clamp(6rem, 12vw, 18rem)",
            letterSpacing: "0.15em",
          }}
        >
          TESTIMONIALS
        </div>
      </div>

      {/* Giraffe Spots Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] animate-pulse"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Client Stories
            </div>
            
            <h2 className="font-bold text-white leading-tight mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">
                What Our Clients
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Say About <span className="text-[#FF8C42]">Us</span>
              </span>
            </h2>
            
            <p className="font-light text-white/80 text-lg md:text-xl leading-relaxed max-w-[680px] mx-auto">
              Don't just take our word for it. Here's what industry leaders say about 
              working with Tall Giraffe.
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Testimonial Card */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/10 dark:border-[#333333] max-w-4xl mx-auto">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-[#121212] dark:text-white text-xl md:text-2xl lg:text-3xl leading-relaxed font-light mb-8">
                  "{currentTest.quote}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFB818] fill-[#FFB818]" />
                  ))}
                </div>

                {/* Results Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
                  <span>{currentTest.results}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <img
                  src={currentTest.image}
                  alt={`${currentTest.author} portrait`}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#FF8C42]"
                />
                <div className="text-center md:text-left">
                  <div className="font-bold text-[#121212] dark:text-white text-lg">
                    {currentTest.author}
                  </div>
                  <div className="text-[#FF8C42] text-sm font-medium">
                    {currentTest.role}
                  </div>
                  <div className="text-[#6B6B6B] dark:text-[#B3B3B3] text-sm">
                    {currentTest.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-[#FF8C42] scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>


      </div>

      {/* Testimonial Animation Styles */}
      <style jsx global>{`
        @keyframes testimonial-fade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .testimonial-card {
          animation: testimonial-fade 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}