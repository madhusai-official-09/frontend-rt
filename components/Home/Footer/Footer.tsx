import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-900/2 border-t border-red-600/20 text-gray-300 px-6 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + Description */}
        <div className="flex flex-col">

  <div className="flex items-center gap-3">
    <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
      <Image src="/ai logo.png" alt="AI Logo" width={35} height={35} />
    </div>

    <h1 className="text-xl sm:text-2xl text-white font-bold">
      Detection.AI
    </h1>
  </div>

  {/* Paragraph below */}
  <p className="text-gray-400 text-sm leading-relaxed mt-2">
    High-precision AI vision systems optimized for modern digital ecosystems.
  </p>

</div>


        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="http://localhost:3000/detection" className="hover:text-red-400 transition">Detection</a></li>
            <li><a href="http://localhost:3000/about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="http://localhost:3000/terms" className="hover:text-red-400 transition">Terms</a></li>
            <li><a href="http://localhost:3000/contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:madhusaipitani95@gmail.com"
                className="hover:text-red-400 transition"
              >
                madhusaipitani95@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+91 8247842565" className="hover:text-red-400 transition">
                +91 8247842565
              </a>
            </li>

            <li>Allavaram</li>
            <li>Andhra Pradesh, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-red-600/20 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">

        <p>© 2025 Detection.Ai All rights reserved.</p>

        <p>
          Built with <span className="text-red-400">❤️</span> using Next.js 
        </p>

      </div>
    </footer>
  );
};

export default Footer;
