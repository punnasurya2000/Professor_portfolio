import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Rahman Lab</h3>
            <p className="text-gray-300 mb-4">
              Smart Materials and Additive Manufacturing Lab at the University of Houston.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Research', 'Publications', 'People', 'Teaching', 'News', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Mechanical Engineering Department, University of Houston, Houston, TX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>mrahman19@uh.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>713-743-6766</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rahman Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;