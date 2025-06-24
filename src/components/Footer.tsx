import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">SS Classes</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Providing quality education and personalized learning experiences for students across all levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">
                
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
                
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculties" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Faculties
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Important</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+918307927661" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  +91 83079 27661
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:onedayiws03@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base break-all">
                  onedayiws03@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Rajouri Garden, New Delhi
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SS-Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;