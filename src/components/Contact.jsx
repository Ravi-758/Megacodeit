import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    setStatus("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Fill out the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your Message..."
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status && <p className="text-green-600 text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}
