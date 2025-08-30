"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Twitter, Linkedin, Instagram } from "lucide-react";

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      alt: "Portrait of Sarah Mitchell, Creative Director",
      bio: "Leading creative vision with 8+ years in brand storytelling",
      specialties: ["Brand Strategy", "Creative Direction", "Visual Identity"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Marketing Lead",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      alt: "Portrait of Marcus Rodriguez, Digital Marketing Lead",
      bio: "Growth hacker who turns data into marketing gold",
      specialties: ["Performance Marketing", "Analytics", "Growth Strategy"]
    },
    {
      name: "Emma Chen",
      role: "Brand Designer",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      alt: "Portrait of Emma Chen, Brand Designer",
      bio: "Design wizard who makes brands impossible to ignore",
      specialties: ["Logo Design", "UI/UX", "Package Design"]
    },
    {
      name: "James Wilson",
      role: "Video Producer",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      alt: "Portrait of James Wilson, Video Producer",
      bio: "Storyteller who brings brands to life through video",
      specialties: ["Video Production", "Animation", "Post-Production"]
    },
    {
      name: "Lisa Park",
      role: "Social Media Strategist",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      alt: "Portrait of Lisa Park, Social Media Strategist",
      bio: "Social media maven who creates viral-worthy content",
      specialties: ["Content Strategy", "Community Management", "Influencer Relations"]
    },
    {
      name: "David Thompson",
      role: "SEO Specialist",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      alt: "Portrait of David Thompson, SEO Specialist",
      bio: "SEO expert who puts brands at the top of search results",
      specialties: ["Technical SEO", "Content Optimization", "Local SEO"]
    },
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

  return (
    <section 
      id="team"
      ref={sectionRef}
      className="bg-white dark:bg-[#121212] py-24 md:py-32"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Left Column - Headline */}
          <div className="lg:col-span-6">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                🦒 Our Team
              </div>
              
              <h2 className="text-[#000000] dark:text-white leading-tight tracking-tight">
                <span className="block font-light text-4xl md:text-5xl lg:text-6xl mb-2">
                  Meet the Giraffes —
                </span>
                <span className="block font-bold text-4xl md:text-5xl lg:text-6xl text-[#FF8C42] dark:text-[#FF6B1A]">
                  Tall Talent Team
                </span>
              </h2>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:col-span-6 flex items-center">
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[#6E6E6E] dark:text-[#B3B3B3] text-lg leading-relaxed">
                Our diverse team of marketing experts, creative minds, and digital innovators 
                work together to elevate your brand to new heights. Each team member brings 
                unique skills and a shared passion for exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-[#1E1E1E] rounded-3xl border border-[#EDEDED] dark:border-[#333333] overflow-hidden hover:border-[#FF8C42] dark:hover:border-[#FF8C42] transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${(index + 2) * 100}ms` 
              }}
            >
              {/* Photo Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C42]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Specialties on Hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-white/90 text-[#FF8C42] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 md:p-8">
                {/* Name and Role */}
                <div className="mb-4">
                  <h3 className="font-bold text-[#000000] dark:text-white text-xl leading-tight mb-1 group-hover:text-[#FF8C42] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#FF8C42] dark:text-[#FF6B1A] text-sm font-medium leading-tight">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3] text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-[#DADADA] dark:border-[#4A4A4A] flex items-center justify-center hover:border-[#FF8C42] dark:hover:border-[#FF8C42] hover:bg-[#FF8C42] hover:text-white transition-all duration-200 group/icon"
                      aria-label={`Visit ${member.name}'s LinkedIn`}
                    >
                      <Linkedin
                        size={14}
                        className="text-black/60 dark:text-white/60 group-hover/icon:text-white transition-colors duration-200"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-[#DADADA] dark:border-[#4A4A4A] flex items-center justify-center hover:border-[#FF8C42] dark:hover:border-[#FF8C42] hover:bg-[#FF8C42] hover:text-white transition-all duration-200 group/icon"
                      aria-label={`Follow ${member.name} on Twitter`}
                    >
                      <Twitter
                        size={14}
                        className="text-black/60 dark:text-white/60 group-hover/icon:text-white transition-colors duration-200"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-[#DADADA] dark:border-[#4A4A4A] flex items-center justify-center hover:border-[#FF8C42] dark:hover:border-[#FF8C42] hover:bg-[#FF8C42] hover:text-white transition-all duration-200 group/icon"
                      aria-label={`Follow ${member.name} on Instagram`}
                    >
                      <Instagram
                        size={14}
                        className="text-black/60 dark:text-white/60 group-hover/icon:text-white transition-colors duration-200"
                      />
                    </a>
                  </div>

                  {/* Contact Button */}
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-4 py-2 rounded-full text-xs font-medium hover:from-[#FF7A28] hover:to-[#E6621E] transform hover:scale-105 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>

              {/* Floating Effect Background */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A]" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 md:mt-20 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] rounded-3xl p-8 md:p-12">
            <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
              Want to Work with Our Amazing Team?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our talented team is ready to help your brand reach new heights. Let's discuss your project!
            </p>
            <button className="bg-white text-[#FF8C42] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Meet the Team
            </button>
          </div>
        </div>
      </div>

      {/* Team Hover Animations */}
      <style jsx global>{`
        @keyframes team-member-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .team-member:hover {
          animation: team-member-float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}