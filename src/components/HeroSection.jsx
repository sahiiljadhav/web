"use client";

import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative bg-white dark:bg-[#121212] overflow-hidden min-h-screen flex items-center">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 140, 66, 0.3) 0%, transparent 70%),
            linear-gradient(rgba(244, 246, 249, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 246, 249, 1) 1px, transparent 1px)
          `,
          backgroundSize: "cover, 40px 40px, 40px 40px",
        }}
      />

      {/* Floating Giraffe Spots Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] opacity-10 animate-float`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 py-16 md:py-24">
          {/* Left Column - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-bold text-[#121212] dark:text-white leading-tight mb-6 md:mb-8">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2">
                  Stand
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2">
                  <span className="text-[#FF8C42]">Tall</span> Above
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  The Competition
                </span>
              </h1>

              <div
                className={`transition-all duration-1000 ease-out delay-300 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="font-light text-[#6E6E6E] dark:text-[#B3B3B3] text-lg md:text-xl leading-relaxed max-w-[540px] mb-8 md:mb-10 mx-auto lg:mx-0">
                  We're Tall Giraffe - the marketing agency that helps your brand reach new heights. 
                  Our innovative strategies and creative campaigns deliver results that make your competitors look up in awe.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a href="#contact" className="group font-semibold bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base hover:from-[#FF7A28] hover:to-[#E6621E] transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  
                  <a href="#portfolio" className="group font-medium border-2 border-[#FF8C42] text-[#FF8C42] px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base hover:bg-[#FF8C42] hover:text-white transform hover:scale-105 transition-all duration-300">
                    View Our Work
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-[#6E6E6E] dark:text-[#B3B3B3]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FF8C42]" />
                    <span>500+ Successful Campaigns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#FFB818] fill-[#FFB818]" />
                      ))}
                    </div>
                    <span>4.9/5 Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image with Floating Elements */}
          <div className="flex-1 relative max-w-lg w-full">
            <div
              className={`relative transition-all duration-1000 ease-out delay-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div
                className="aspect-[4/3] overflow-hidden relative"
                style={{
                  borderRadius: "120px 24px 120px 24px",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative marketing team collaborating on innovative campaigns"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with giraffe pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C42]/20 to-transparent"></div>
              </div>

              {/* Floating Success Metrics */}
              <div className="absolute -top-4 -right-4 md:top-4 md:right-4 md:transform md:translate-x-6 md:-translate-y-6 bg-white dark:bg-[#1E1E1E] border border-[#E7E7E7] dark:border-[#333333] rounded-3xl p-4 md:p-6 shadow-xl max-w-[260px] w-full md:w-auto animate-bounce-slow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#121212] dark:text-white text-lg">+250%</div>
                    <div className="text-[#6E6E6E] dark:text-[#B3B3B3] text-xs">ROI Increase</div>
                  </div>
                </div>
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3] text-xs leading-relaxed">
                  Average client results in first 6 months
                </p>
              </div>

              {/* Floating Client Badge */}
              <div className="absolute -bottom-6 -left-4 md:bottom-0 md:left-0 md:transform md:-translate-x-6 md:translate-y-6 bg-white dark:bg-[#1E1E1E] border border-[#E7E7E7] dark:border-[#333333] rounded-3xl p-4 md:p-6 shadow-xl max-w-[280px] w-full md:w-auto">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="font-semibold text-[#121212] dark:text-white text-xl md:text-2xl">50+</span>
                  <span className="font-medium text-[#121212] dark:text-white text-sm">Happy Clients</span>
                </div>
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3] text-xs md:text-sm mb-3 text-center md:text-left">
                  From startups to Fortune 500 companies
                </p>
                <div className="flex justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 md:w-7 md:h-7 bg-[#FF8C42] rounded-sm flex items-center justify-center"
                    >
                      <Star size={10} className="text-white fill-white md:w-3 md:h-3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}