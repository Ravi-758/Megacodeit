import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12"
    >
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed">
          We are a passionate team of developers and consultants dedicated
          to building high-quality software. Our mission is to help businesses
          scale with modern solutions — from Salesforce integrations to
          custom web applications.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          With years of experience, we ensure every project is delivered
          with precision, innovation, and long-term support.
        </p>
      </div>

      {/* Right: Illustration / Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-md flex items-center justify-center">
          <span className="text-gray-400">[ Illustration ]</span>
        </div>
      </div>
    </section>
  );
}
