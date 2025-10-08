import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pexels-thepaintedsquare-583848.jpg')", // put your image in /public folder
        }}
      ></div>

      {/* Overlay (soft gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-purple-100/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          We help{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            businesses grow
          </span>
          <br />
          with modern software
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Custom web apps, Salesforce solutions, and end-to-end support for your business.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
