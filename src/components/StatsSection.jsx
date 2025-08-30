"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Users, TrendingUp, Award } from "lucide-react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    campaigns: 0,
    clients: 0,
    growth: 0,
    awards: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Target,
      value: 500,
      suffix: "+",
      caption: "Successful Marketing Campaigns",
      bgColor: "#FF8C42",
      darkBgColor: "#FF6B1A",
      animationKey: "campaigns"
    },
    {
      icon: Users,
      value: 150,
      suffix: "+",
      caption: "Happy Clients Worldwide",
      bgColor: "#FF6B1A",
      darkBgColor: "#FF8C42",
      animationKey: "clients"
    },
    {
      icon: TrendingUp,
      value: 250,
      suffix: "%",
      caption: "Average ROI Increase",
      bgColor: "#FF8C42",
      darkBgColor: "#FF6B1A",
      animationKey: "growth"
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      caption: "Industry Awards Won",
      bgColor: "#FF6B1A",
      darkBgColor: "#FF8C42",
      animationKey: "awards"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        campaigns: Math.floor(500 * easeOutQuart),
        clients: Math.floor(150 * easeOutQuart),
        growth: Math.floor(250 * easeOutQuart),
        awards: Math.floor(25 * easeOutQuart)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white dark:bg-[#121212] py-16 md:py-24 overflow-hidden"
    >
      {/* Giraffe Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 140, 66, 0.4) 0%, transparent 70%),
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              rgba(255, 140, 66, 0.1) 0deg 60deg,
              transparent 60deg 120deg
            )
          `,
          backgroundSize: "cover, 120px 120px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-18">
          {/* Left Column - Headline */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-light text-[#121212] dark:text-white leading-tight">
                <span className="block text-4xl md:text-5xl lg:text-6xl">
                  Our track record shows
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl">
                  marketing{" "}
                  <span className="text-[#FF8C42] dark:text-[#FF6B1A] font-bold">
                    excellence
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:col-span-5 flex items-end">
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-light text-[#666666] dark:text-[#B3B3B3] text-lg md:text-xl leading-relaxed text-left lg:text-right">
                We believe in letting our results do the talking. Here's what we've achieved for brands that trusted us to reach new heights.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-12 md:mt-18">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedStats[stat.animationKey];
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-6 md:p-8 transition-all duration-500 ease-out hover:scale-105 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  backgroundColor: stat.bgColor,
                  transitionDelay: `${index * 80}ms`,
                }}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 10px,
                          rgba(255,255,255,0.1) 10px,
                          rgba(255,255,255,0.1) 20px
                        )
                      `,
                    }}
                  />
                </div>

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-white">
                  <div className="mb-2">
                    <span className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight block">
                      {animatedValue}{stat.suffix}
                    </span>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-relaxed text-white/90">
                    {stat.caption}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Animation on Hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-all duration-300">
                  <div className="w-8 h-8 border-2 border-white/30 rounded-full animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>


      </div>

      {/* Floating Elements Animation */}
      <style jsx global>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
        
        .stats-float {
          animation: float-gentle 4s ease-in-out infinite;
        }
        
        .stats-float:nth-child(2) {
          animation-delay: 1s;
        }
        
        .stats-float:nth-child(3) {
          animation-delay: 2s;
        }
        
        .stats-float:nth-child(4) {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}