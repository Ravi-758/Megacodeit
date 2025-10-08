import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function About() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        `At <strong>MegacodeiT</strong>, we are a team of skilled developers and consultants passionate about helping businesses succeed with modern technology. We specialize in Salesforce development, custom applications, and end-to-end digital solutions. With expertise across industries, we ensure every project is delivered with precision, innovation, and long-term support.<br><br>Our mission is to help businesses grow through technology-driven innovation.`,
      ],
      typeSpeed: 25,
      backSpeed: 0,
      showCursor: true,
      cursorChar: "|",
      loop: false,
      smartBackspace: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12" >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Us
        </h2>
        <p ref={typedElement} className="text-gray-600 leading-relaxed text-lg" ></p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-md flex items-center justify-center">
          <img
            src="/logo.webp"
            alt="Illustration"
            className="w-100 h-100 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
