import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About (Left) */}
          <div className="order-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Maksud Innovation Lab</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Redesigning Materials. Rethinking Waste. Rebuilding the Future
            </p>
            <div className="flex space-x-4">
              {/* Optional: Add social icons here */}
            </div>
          </div>

          {/* Contact Info (Center) */}
          <div className="order-3 md:order-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-4 text-sm sm:text-base text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p>University of Houston</p>
                <p>Cullen College of Engineering</p> 
                <p className="whitespace-nowrap">
                  Department of Mechanical & Aerospace Engineering
                </p>
                <p>Engineering Building 1, Room N213</p>
                <p>4226 Martin Luther King Boulevard</p>
                <p>Houston, TX 77204-4006</p>
              </div>
            </div>
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>maksud@uh.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>713-743-4500</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Right) */}
          <div className="order-2 md:order-3 flex justify-start md:justify-end pr-40 md:pr-28">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map(
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
