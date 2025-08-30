"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  // Direct submit via Formsubmit.co — no local submit state needed
  const sectionRef = useRef(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // No JS submit handler — using native form post to Formsubmit.co

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#FFF8F3] to-white dark:from-[#121212] dark:to-[#1A1A1A] py-20 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255, 140, 66, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 107, 26, 0.3) 0%, transparent 50%),
              repeating-conic-gradient(
                from 0deg at 50% 50%,
                rgba(255, 140, 66, 0.1) 0deg 60deg,
                transparent 60deg 120deg
              )
            `,
            backgroundSize: "cover, cover, 200px 200px",
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
              <Zap className="w-4 h-4" />
              Let's Talk
            </div>
            
            <h2 className="font-bold text-[#121212] dark:text-white leading-tight mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">
                Ready to Reach
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                <span className="text-[#FF8C42]">New Heights</span> Together?
              </span>
            </h2>
            
            <p className="font-light text-[#6E6E6E] dark:text-[#B3B3B3] text-lg md:text-xl leading-relaxed max-w-[680px] mx-auto">
              Let's discuss how we can elevate your brand and create marketing campaigns 
              that make your competitors look up in awe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white dark:bg-[#1E1E1E] rounded-3xl p-8 md:p-12 border border-[#F0F0F0] dark:border-[#333333] shadow-xl">
                {/* Contact Form (Formsubmit.co) */}
                <form action="https://formsubmit.co/akashpawar321@gmail.com" method="POST" className="space-y-6">
                  {/* Formsubmit options */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* <input type="hidden" name="_next" value="https://yourdomain.com/#contact" /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-[#121212] dark:text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-[#121212] dark:text-white focus:border-[#FF8C42] focus:outline-none transition-colors duration-200"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[#121212] dark:text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-[#121212] dark:text-white focus:border-[#FF8C42] focus:outline-none transition-colors duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company */}
                      <div>
                        <label className="block text-[#121212] dark:text-white font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-[#121212] dark:text-white focus:border-[#FF8C42] focus:outline-none transition-colors duration-200"
                          placeholder="Your company name"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[#121212] dark:text-white font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-[#121212] dark:text-white focus:border-[#FF8C42] focus:outline-none transition-colors duration-200"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>



                    {/* Message */}
                    <div>
                      <label className="block text-[#121212] dark:text-white font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-[#121212] dark:text-white focus:border-[#FF8C42] focus:outline-none transition-colors duration-200 resize-none"
                        placeholder="Tell us about your project, goals, and how we can help your brand reach new heights..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-semibold px-8 py-4 rounded-xl hover:from-[#FF7A28] hover:to-[#E6621E] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div
              className={`transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] rounded-3xl p-8 text-white">
                <h3 className="font-bold text-2xl mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email Us</div>
                      <div className="text-white/90">akashpawar321@gmail.com</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Call Us</div>
                      <div className="text-white/90">+91 87931 97804</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Visit Us</div>
                      <div className="text-white/90">123 Marketing Heights</div>
                      <div className="text-white/90">Creative District, CA 90210</div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Office Hours</div>
                      <div className="text-white/90">Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div className="text-white/90">Sat: 10:00 AM - 4:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-3">Quick Response Guarantee</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We respond to all inquiries within 24 hours. For urgent projects, 
                    call us directly for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20 transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="font-bold text-3xl text-[#FF8C42] mb-2">24h</div>
            <div className="text-[#6E6E6E] dark:text-[#B3B3B3] font-medium">Response Time</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl text-[#FF8C42] mb-2">98%</div>
            <div className="text-[#6E6E6E] dark:text-[#B3B3B3] font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl text-[#FF8C42] mb-2">Free</div>
            <div className="text-[#6E6E6E] dark:text-[#B3B3B3] font-medium">Initial Consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
}