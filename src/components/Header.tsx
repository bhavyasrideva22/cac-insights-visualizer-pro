
import { BadgeIndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BadgeIndianRupee size={28} className="text-brand-primary" />
          <span className="text-xl font-bold text-brand-primary">CAC Insights</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-brand-text hover:text-brand-primary font-medium">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="text-brand-text hover:text-brand-primary font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-brand-text hover:text-brand-primary font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
