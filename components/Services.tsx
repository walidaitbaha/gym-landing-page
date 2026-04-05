const programs = [
  {
    icon: "💪",
    title: "Strength Training",
    description: "Build muscle and increase strength with our structured weight training programs led by certified coaches.",
    duration: "60 min",
    level: "All levels",
  },
  {
    icon: "🔥",
    title: "HIIT Cardio",
    description: "High-intensity interval training to burn fat fast and boost your metabolism for hours after the workout.",
    duration: "45 min",
    level: "Intermediate",
  },
  {
    icon: "🥊",
    title: "Boxing & MMA",
    description: "Learn real fighting techniques while getting an incredible full-body workout from our pro fighters.",
    duration: "60 min",
    level: "All levels",
  },
  {
    icon: "🧘",
    title: "Yoga & Flexibility",
    description: "Improve your flexibility, reduce stress, and build a stronger mind-body connection with daily yoga classes.",
    duration: "50 min",
    level: "Beginner",
  },
  {
    icon: "🚴",
    title: "Spin Cycling",
    description: "High-energy indoor cycling classes with pumping music that make cardio actually enjoyable.",
    duration: "45 min",
    level: "All levels",
  },
  {
    icon: "🏃",
    title: "Personal Training",
    description: "One-on-one sessions with a dedicated trainer who builds a fully personalised plan just for you.",
    duration: "60 min",
    level: "All levels",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our Programs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whatever your goal, we have a program designed to get you there.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-zinc-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-400 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-white font-black text-xl mb-2">{program.title}</h3>
              <p className="text-gray-400 mb-4">{program.description}</p>
              <div className="flex gap-4">
                <span className="text-yellow-400 text-sm font-bold">⏱ {program.duration}</span>
                <span className="text-gray-500 text-sm">📊 {program.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}