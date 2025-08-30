import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1628] dark:bg-[#0A0A0A] text-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-12 md:pb-20">
        {/* Call-to-action row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Headline */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-[720px] mx-auto lg:mx-0">
              <span className="text-white opacity-90">
                Ready to Stand
              </span>
              <br />
              <span className="text-[#FF8C42] dark:text-[#FF6B1A]">
                Tall
              </span>
              <span className="text-white opacity-90">
                {" "}
                Above the Rest?
              </span>
            </h2>
          </div>

          {/* Circular CTA button */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <div className="inline-block relative">
              {/* Outer ring */}
              <div className="absolute -inset-2 w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full border border-[#162033] dark:border-[#2A2A2A] opacity-30"></div>

              {/* Inner ring */}
              <div className="absolute -inset-1 w-46 h-46 md:w-58 md:h-58 lg:w-62 lg:h-62 rounded-full border-2 border-[#1B2435] dark:border-[#333333]"></div>

              {/* Main button */}
              <a href="#contact" className="relative bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] w-44 h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full text-white font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:from-[#FF7A28] hover:to-[#E6621E] hover:scale-105 active:from-[#E6621E] active:to-[#CC5815] active:scale-95 flex items-center justify-center touch-manipulation shadow-2xl">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold mb-1">Let's Talk</div>
                  <div className="text-sm opacity-90">Start Your Project</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Mega footer navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-14">
          {/* Column 1 - Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🦒</span>
              <h3 className="font-bold text-white text-xl">TALL GIRAFFE</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              We help brands reach new heights through innovative marketing strategies 
              and creative campaigns that make you stand tall above the competition.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={`https://wa.me/918793197804?text=${encodeURIComponent('Hi! I want to schedule a quick strategy call about AI marketing.')}`}
                className="w-10 h-10 bg-white/10 hover:bg-[#FF8C42] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="mailto:akashpawar321@gmail.com?subject=Project%20inquiry&body=Hi%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20project.%20Here%E2%80%99s%20some%20context%3A%20"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF8C42] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#schedule"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF8C42] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base mb-4">Services</h3>
            <nav className="space-y-3">
              <a
                href="#services"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Digital Marketing
              </a>
              <a
                href="#services"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Brand Design
              </a>
              <a
                href="#services"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Growth Strategy
              </a>
              <a
                href="#services"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                SEO & Analytics
              </a>
              <a
                href="#services"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Video Production
              </a>
            </nav>
          </div>

          {/* Column 3 - Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base mb-4">Company</h3>
            <nav className="space-y-3">
              <a
                href="#about"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                About Us
              </a>
              <a
                href="#team"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Our Team
              </a>
              <a
                href="#portfolio"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-sm text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#FF8C42] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white opacity-60">Email</div>
                  <a 
                    href="mailto:hello@tallgiraffe.com"
                    className="text-sm text-white hover:text-[#FF8C42] transition-colors duration-200"
                  >
                    hello@tallgiraffe.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#FF8C42] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white opacity-60">Phone</div>
                  <a 
                    href="tel:+15551234567"
                    className="text-sm text-white hover:text-[#FF8C42] transition-colors duration-200"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF8C42] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white opacity-60">Address</div>
                  <div className="text-sm text-white">
                    123 Marketing Heights<br />
                    Creative District, CA 90210
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-[#1B2435] dark:border-[#333333] pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Legal links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
              <a
                href="#"
                className="text-xs text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-xs text-white opacity-60">|</span>
              <a
                href="#"
                className="text-xs text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Terms of Service
              </a>
              <span className="text-xs text-white opacity-60">|</span>
              <a
                href="#"
                className="text-xs text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Cookie Policy
              </a>
              <span className="text-xs text-white opacity-60">|</span>
              <a
                href="#"
                className="text-xs text-white opacity-60 hover:opacity-100 hover:text-[#FF8C42] transition-all duration-200"
              >
                Accessibility
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-white opacity-60">
                © 2024 Tall Giraffe Marketing. All rights reserved. 🦒
              </p>
            </div>
          </div>
          
          {/* Extra tagline */}
          <div className="text-center mt-4 pt-4 border-t border-[#1B2435]/50 dark:border-[#333333]/50">
            <p className="text-sm text-white/50 italic">
              "Standing tall in marketing since day one"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}