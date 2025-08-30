"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const filters = ["All", "Branding", "Digital Marketing", "Web Design", "Video Production"];

  const projects = [
    {
      id: 1,
      title: "TechFlow Startup",
      category: "Branding",
      description: "Complete brand identity redesign that increased their market presence by 300%",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: "+300% Brand Recognition",
      type: "image",
      tags: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
    },
    {
      id: 2,
      title: "EcoGreen Campaign",
      category: "Digital Marketing",
      description: "Environmental awareness campaign that reached 2M+ people and drove 150% increase in engagement",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: "+150% Engagement",
      type: "video",
      tags: ["Social Media", "Content Strategy", "Influencer Marketing"]
    },
    {
      id: 3,
      title: "FoodieHub Website",
      category: "Web Design",
      description: "Complete website redesign that improved user experience and conversion rates",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: "+85% Conversions",
      type: "image",
      tags: ["UI/UX Design", "Development", "Mobile Optimization"]
    },
    {
      id: 4,
      title: "Fashion Forward",
      category: "Video Production",
      description: "Dynamic video campaign that captured the essence of modern fashion and went viral",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: "2.5M Views",
      type: "video",
      tags: ["Video Production", "Creative Direction", "Social Media"]
    },
    {
      id: 5,
      title: "HealthTech Revolution",
      category: "Digital Marketing",
      description: "Healthcare technology marketing campaign that established industry leadership",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: "+400% Leads",
      type: "image",
      tags: ["Lead Generation", "Content Marketing", "SEO"]
    },
    {
      id: 6,
      title: "Urban Coffee Brand",
      category: "Branding",
      description: "Coffee shop rebrand that transformed a local business into a regional franchise",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: "5x Store Expansion",
      type: "image",
      tags: ["Brand Strategy", "Package Design", "Marketing Collateral"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
      id="portfolio"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#FFF8F3] to-white dark:from-[#0F0F0F] dark:to-[#121212] py-20 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 140, 66, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 107, 26, 0.2) 0%, transparent 50%),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                rgba(255, 140, 66, 0.05) 50px,
                rgba(255, 140, 66, 0.05) 52px
              )
            `,
            backgroundSize: "cover, cover, 100px 100px",
          }}
        />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <ExternalLink className="w-4 h-4" />
              Our Portfolio
            </div>
            
            <h2 className="font-bold text-[#121212] dark:text-white leading-tight mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">
                Success Stories That
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                <span className="text-[#FF8C42]">Stand Tall</span> and Inspire
              </span>
            </h2>
            
            <p className="font-light text-[#6E6E6E] dark:text-[#B3B3B3] text-lg md:text-xl leading-relaxed max-w-[680px] mx-auto">
              Explore our portfolio of transformative marketing campaigns that helped brands 
              reach new heights and achieve remarkable results.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white border-[#FF8C42] shadow-lg transform scale-105"
                  : "bg-white dark:bg-[#1E1E1E] text-[#6E6E6E] dark:text-[#B3B3B3] border-[#E0E0E0] dark:border-[#333333] hover:border-[#FF8C42] hover:text-[#FF8C42]"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-[#1E1E1E] rounded-3xl overflow-hidden border border-[#F0F0F0] dark:border-[#333333] hover:border-[#FF8C42] dark:hover:border-[#FF8C42] transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 cursor-pointer ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${(index + 3) * 100}ms` 
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button for Videos */}
                {project.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#FF8C42] ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Results Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {project.results}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-[#FF8C42] px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-[#121212] dark:text-white text-xl mb-3 group-hover:text-[#FF8C42] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3] text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#FF8C42]/10 text-[#FF8C42] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="#contact" className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white px-6 py-3 rounded-xl font-medium text-sm hover:from-[#FF7A28] hover:to-[#E6621E] transform hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
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
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create a marketing campaign that becomes your next showcase project.
            </p>
            <button className="group bg-white text-[#FF8C42] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <style jsx global>{`
        @keyframes portfolio-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        
        .portfolio-card:hover {
          animation: portfolio-float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}