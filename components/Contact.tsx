"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", goal: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Claim Your Free Trial
          </h2>
          <p className="text-gray-400 text-lg">
            Fill in the form and we'll contact you within 24 hours to book your free session.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="bg-black border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            className="bg-black border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="tel"
            className="bg-black border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <select
            className="bg-black border border-gray-700 text-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
            required
          >
            <option value="">Select Your Goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="fitness">General Fitness</option>
            <option value="sport">Sport Performance</option>
          </select>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-yellow-400 text-black font-black text-lg py-4 rounded-full hover:bg-yellow-300 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Claim Free Trial →"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-center font-bold">
              ✅ We'll be in touch within 24 hours!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}