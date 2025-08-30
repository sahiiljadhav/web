"use client";

import { Users, Monitor, Zap, Target, Mail, BarChart3, ArrowRight } from "lucide-react";

export default function AIWeaponsSection() {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      iconBg: "bg-purple-500",
      title: "AI CONTENT THAT CONVERTS LIKE CRAZY",
      description: "Our AI creates authentic UGC that makes your audience BUY. No more boring content that gets ignored.",
      benefits: ["500% increase in engagement", "80% reduction in content costs"],
      cta: "DOMINATE WITH CONTENT",
      link: "#schedule"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      iconBg: "bg-blue-500",
      title: "YOUR AI CLONE WORKS 24/7",
      description: "Scale your personal brand with AI avatars that never sleep, never get tired, and always close deals.",
      benefits: ["24/7 brand presence", "Speaks 50+ languages"],
      cta: "CLONE YOURSELF NOW",
      link: "#schedule"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      iconBg: "bg-green-500",
      title: "TEST 1000s OF ADS IN MINUTES",
      description: "While competitors test 5 ads per month, we test 500. Our AI finds winners FAST.",
      benefits: ["95% faster optimization", "90% cost reduction"],
      cta: "CRUSH WITH TESTING",
      link: "#schedule"
    },
    {
      icon: <Target className="w-6 h-6" />,
      iconBg: "bg-[#FF8C42]",
      title: "AI MEDIA BUYING THAT PRINTS MONEY",
      description: "Our AI optimizes your ad spend every second. No more wasted budget on ads that don't convert.",
      benefits: ["70% lower acquisition costs", "Real-time optimization"],
      cta: "MAXIMIZE MY ROAS",
      link: "#schedule"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      iconBg: "bg-purple-500",
      title: "EMAILS THAT MAKE PEOPLE BUY",
      description: "Our AI writes emails so good, your subscribers will think you hired a mind reader.",
      benefits: ["65% higher open rates", "Automated optimization"],
      cta: "DOMINATE INBOXES",
      link: "#schedule"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      iconBg: "bg-[#FF8C42]",
      title: "DATA THAT ACTUALLY MAKES SENSE",
      description: "No more confusing dashboards. Our AI tells you exactly what to do next to make more money.",
      benefits: ["Predictive insights", "Automated reporting"],
      cta: "GET SMART INSIGHTS",
      link: "#schedule"
    }
  ];

  return (
    <section className="bg-white dark:bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#121212] dark:text-white mb-4">
            OUR AI WEAPONS OF MASS GROWTH
          </h2>
          <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto">
            While your competitors are still doing things the old way, we're using AI to absolutely DEMOLISH the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-[#161616] rounded-2xl p-6 md:p-8 border border-[#ececec] dark:border-[#2a2a2a] hover:shadow-xl transition-all duration-300 hover:border-[#FF8C42]/30">
              <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-[#6E6E6E] dark:text-[#B3B3B3] mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[#6E6E6E] dark:text-[#B3B3B3]">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-semibold px-6 py-3 rounded-xl hover:from-[#FF7A28] hover:to-[#E6621E] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {service.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
