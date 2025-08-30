"use client";

import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export default function QualificationSection() {
  const perfectFor = [
    "You're doing $100K+ revenue and want to 3x-10x your business",
    "You're tired of slow growth and want to dominate your competition",
    "You have a proven business model and want to pour fuel on the fire",
    "You measure success in revenue, not vanity metrics"
  ];

  const notFor = [
    "If you're looking for cheap solutions, we're not your team",
    "We scale winners, we don't fix broken business models",
    "If you want to micromanage every detail, hire someone else",
    "Growth takes 30-90 days. If you quit after 2 weeks, don't apply"
  ];

  return (
    <section className="bg-white dark:bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#121212] dark:text-white mb-4">
            WHO GETS TO WORK WITH US
          </h2>
          <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto">
            We're picky. We only work with brands that are serious about <span className="text-[#FF8C42] font-bold">DOMINATING</span> their market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* PERFECT FOR */}
          <div className="bg-white dark:bg-[#161616] rounded-2xl p-8 border border-[#ececec] dark:border-[#2a2a2a]">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">PERFECT FOR:</h3>
            </div>
            
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR */}
          <div className="bg-white dark:bg-[#161616] rounded-2xl p-8 border border-[#ececec] dark:border-[#2a2a2a]">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400">NOT FOR:</h3>
            </div>
            
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-semibold px-8 py-4 rounded-xl hover:from-[#FF7A28] hover:to-[#E6621E] transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            SEE IF YOU QUALIFY <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
