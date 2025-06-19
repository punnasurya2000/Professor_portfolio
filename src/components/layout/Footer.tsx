import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Rahman Lab</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Smart Materials and Additive Manufacturing Lab at the University of Houston.
            </p>
            <div className="flex space-x-4">
              {/* Optional: Add social icons here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Research', 'Publications', 'People', 'Teaching', 'News', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-4 text-sm sm:text-base text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  Mechanical Engineering Department, University of Houston, Houston, TX
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>mrahman19@uh.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>713-743-6766</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rahman Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
