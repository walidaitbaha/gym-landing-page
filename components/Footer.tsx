export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-black text-yellow-400 mb-3">
              FIT<span className="text-white">ZONE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your body. Transform your life.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Programs</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-yellow-400">Strength Training</a></li>
              <li><a href="#services" className="hover:text-yellow-400">HIIT Cardio</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Boxing & MMA</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Personal Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Company</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>📍 123 Fitness Street</li>
              <li>📞 +1 234 567 890</li>
              <li>✉️ info@fitzone.com</li>
              <li>🕐 Open 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FitZone Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}