export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-black to-black" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 pt-20">
        <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-4">
          No Excuses. Just Results.
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
          TRANSFORM
          <span className="block text-yellow-400">YOUR BODY</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Join thousands of members who have changed their lives at FitZone.
          Expert trainers. World-class equipment. Real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
           <a href="#contact"
            className="bg-yellow-400 text-black font-black text-lg px-10 py-4 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Start Free Trial
          </a>
          
           <a href="#services"
            className="border-2 border-yellow-400 text-yellow-400 font-bold text-lg px-10 py-4 rounded-full hover:bg-yellow-400/10 transition-colors"
          >
            View Programs
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 border-t border-gray-800 pt-10">
          {[
            { number: "5000+", label: "Active Members" },
            { number: "50+", label: "Expert Trainers" },
            { number: "15+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black text-yellow-400">{stat.number}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}