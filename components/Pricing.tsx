const plans = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for beginners",
    features: [
      "Gym access (6am–10pm)",
      "2 group classes/week",
      "Locker room access",
      "Fitness assessment",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "59",
    period: "month",
    description: "Most popular choice",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition guide",
      "Guest passes (2/month)",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "99",
    period: "month",
    description: "For serious athletes",
    features: [
      "24/7 gym access",
      "Unlimited everything",
      "4 PT sessions/month",
      "Custom meal plan",
      "Priority booking",
      "Unlimited guest passes",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-3">
            Membership Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            No hidden fees. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? "bg-yellow-400 border-yellow-400"
                  : "bg-black border-gray-800"
              }`}
            >
              {plan.highlighted && (
                <div className="text-black font-black text-xs uppercase tracking-widest mb-4">
                  ⭐ Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-black mb-1 ${plan.highlighted ? "text-black" : "text-white"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}>
                {plan.description}
              </p>
              <div className={`text-5xl font-black mb-6 ${plan.highlighted ? "text-black" : "text-white"}`}>
                ${plan.price}
                <span className={`text-lg font-normal ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 ${plan.highlighted ? "text-black" : "text-gray-300"}`}
                  >
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>
              
               <a href="#contact"
                className={`block text-center font-black py-3 rounded-full transition-colors ${
                  plan.highlighted
                    ? "bg-black text-yellow-400 hover:bg-zinc-900"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}