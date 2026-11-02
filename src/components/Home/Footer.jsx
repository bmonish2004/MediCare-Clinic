
import { Link } from "react-router-dom";

const footerLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Our Doctors", path: "/doctors" },
  { id: 4, name: "Services", path: "/services" },
  { id: 5, name: "Contact Us", path: "/contact-us" },
];

const services = [
  { id: 1, name: "General Medicine" },
  { id: 2, name: "Cardiology" },
  { id: 3, name: "Pediatrics" },
  { id: 4, name: "Orthopedics" },
  { id: 5, name: "Diagnostics" },
  { id: 6, name: "Wellness Care" },
];

const socialLinks = [
  { id: 1, name: "Facebook", icon: "ⓕ", url: "https://facebook.com" },
  { id: 2, name: "Instagram", icon: "🅾", url: "https://instagram.com" },
  { id: 3, name: "LinkedIn", icon: "🔗", url: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              MEDI<span className="text-teal-400">CARE</span>
            </h2>

            <p className="text-sm text-gray-400 leading-7 max-w-xs">
              Your health is our priority. We are committed to providing
              quality healthcare with compassion, trust and dedication.
            </p>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold hover:bg-teal-700 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-teal-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="text-sm text-gray-400 hover:text-teal-400 transition cursor-default"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <p className="flex items-start gap-3">
                <span className="text-teal-400">📍</span>
                123 Health Street, Chennai, Tamil Nadu
              </p>

              <p className="flex items-center gap-3">
                <span className="text-teal-400">📞</span>
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3">
                <span className="text-teal-400">✉️</span>
                info@medicare.com
              </p>

              <p className="flex items-center gap-3">
                <span className="text-teal-400">🕒</span>
                Mon – Sat: 9 AM – 6 PM
              </p>

            </div>

            <Link
              to="/contact-us"
              className="inline-block mt-6 bg-teal-700 hover:bg-teal-600 text-white px-5 py-3 rounded-lg text-sm font-semibold transition"
            >
              Contact Our Team →
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} MediCare Clinic. All rights reserved.
          </p>

          <p>
            Designed with ❤️ for better healthcare.
          </p>

        </div>
      </div>

    </footer>
  );
}
