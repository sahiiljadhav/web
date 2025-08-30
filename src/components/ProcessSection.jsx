"use client";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "AI AUDIT & STRATEGY",
      description: "We analyze your entire business with our AI systems and create a custom domination plan in 48 hours."
    },
    {
      number: "2",
      title: "LAUNCH & OPTIMIZE",
      description: "We deploy our AI-powered campaigns across all channels and optimize them 24/7 for maximum results."
    },
    {
      number: "3",
      title: "SCALE & DOMINATE",
      description: "Once we find what works, we pour gasoline on the fire and scale your winning campaigns to the moon."
    },
    {
      number: "4",
      title: "REPEAT & CONQUER",
      description: "We continuously find new opportunities and expand your dominance across every possible channel."
    }
  ];

  return (
    <section className="bg-white dark:bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#121212] dark:text-white mb-4">
            HOW WE ABSOLUTELY DESTROY YOUR COMPETITION
          </h2>
          <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto">
            Our battle-tested 4-step system that turns struggling brands into market leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-[#161616] rounded-2xl p-6 md:p-8 border border-[#ececec] dark:border-[#2a2a2a] text-center hover:shadow-xl transition-all duration-300 hover:border-[#FF8C42]/30">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-4 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
