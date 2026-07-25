import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Address */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-20 h-20 object-contain"
              />

              <div className="ml-3">
                <h2 className="text-[#18227B] text-3xl font-bold leading-none">
                  AL RAMIL AL ABYAD
                </h2>

                <p className="text-sm font-semibold text-gray-700 uppercase">
                  Elect. Devices Tr. LLC
                </p>
              </div>
            </div>

            <div className="space-y-3 text-[22px] text-gray-600 leading-relaxed">
              <p>
                Shop# 1, Industrial area# 6, Sharjah, UAE Sharjah, United Arab
                Emirates
              </p>

              <p>Phone: +971 50 942 7610</p>

              <p>Phone: +971 54 784 6521</p>

              <p>P.O. Box 33881 Sharjah - UAE</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold uppercase text-xl mb-8">Our Categories</h3>

            <ul className="space-y-5 text-gray-600 text-xl">
              <li>
                <a href="#">Cooking Range</a>
              </li>

              <li>
                <a href="#">Washing Machines</a>
              </li>

              <li>
                <a href="#">Televisions</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold uppercase text-xl mb-8">Useful Links</h3>

            <ul className="space-y-5 text-gray-600 text-xl">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>

              <li>
                <a href="#">About us</a>
              </li>

              <li>
                <a href="#">Our Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Footer Menu */}
          <div>
            <h3 className="font-bold uppercase text-xl mb-8">Footer Menu</h3>

            <ul className="space-y-5 text-gray-600 text-xl">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">Warranty Policy</a>
              </li>

              <li>
                <a href="#">Refund Policy</a>
              </li>

              <li>
                <a href="#">Returns Policy</a>
              </li>

              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex lg:justify-end">
            <div className="flex flex-col gap-8 text-3xl text-black">
              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTiktok />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

              <a href="#">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
