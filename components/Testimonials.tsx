const testimonials = [
  {
    name: "Mike Turner",
    role: "Lost 25kg in 6 months",
    text: "FitZone completely changed my life. The trainers are incredible and the community keeps you motivated every single day.",
    emoji: "💪",
  },
  {
    name: "Sarah Chen",
    role: "Gained 8kg muscle mass",
    text: "I tried other gyms but nothing comes close to FitZone. The equipment, the classes, the people — it's on another level.",
    emoji: "🏆",
  },
  {
    name: "James Okafor",
    role: "Marathon runner",
    text: "The HIIT and cycling classes took my running to a completely new level. I smashed my personal best by 20 minutes!",
    emoji: "🏃",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-3">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Real People. Real Results.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors"
            >
              <div className="text-4xl mb-4">{t.emoji}</div>
              <p className="text-gray-300 text-lg italic mb-6">"{t.text}"</p>
              <div>
                <div className="text-white font-black">{t.name}</div>
                <div className="text-yellow-400 text-sm font-bold">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}