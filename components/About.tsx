export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              More Than Just A Gym
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              FitZone is a community of motivated individuals who push each
              other to be better every day. Since 2010, we've helped thousands
              of people achieve their fitness goals.
            </p>
            <p className="text-gray-400 text-lg mb-8">
              Whether you're a complete beginner or a seasoned athlete, our
              expert trainers will create a personalised plan to get you to
              your goals faster than you thought possible.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "✓ State-of-the-art equipment",
                "✓ Personal training sessions",
                "✓ Group fitness classes",
                "✓ Nutrition coaching",
                "✓ Open 24/7",
                "✓ Free parking",
              ].map((item) => (
                <div key={item} className="text-gray-300 font-medium">{item}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🏋️", title: "Weight Training" },
              { emoji: "🥊", title: "Boxing" },
              { emoji: "🧘", title: "Yoga" },
              { emoji: "🚴", title: "Cycling" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black rounded-2xl p-8 text-center border border-gray-800 hover:border-yellow-400 transition-colors"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <div className="text-white font-bold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}