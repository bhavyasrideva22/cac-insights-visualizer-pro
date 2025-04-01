
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CAC Insights</h3>
            <p className="text-gray-200">
              Helping businesses understand and optimize their customer acquisition costs with
              professional analytics tools and insights.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-200 hover:text-white">
                  CAC Calculator
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-200 hover:text-white">
                  Blog & Resources
                </a>
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={18} />
              <a href="mailto:contact@cacinsights.com" className="text-gray-200 hover:text-white">
                contact@cacinsights.com
              </a>
            </div>
            <p className="text-gray-200 mt-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CAC Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
