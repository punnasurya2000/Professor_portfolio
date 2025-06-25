import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-center items-center text-center">
  {/* About (Centered Content) */}
  <div className="order-1">
    <h3 className="text-lg sm:text-xxl font-bold mb-2 mt-4">Maksud Innovation Lab</h3>
    <p className="text-sm sm:text-base text-gray-300 mb-4">
      Redesigning Materials. Rethinking Waste. Rebuilding the Future
    </p>
  </div>
</div>


       <div className="border-t border-gray-800 mt-2 pt-6 text-center text-gray-400 text-sm flex flex-col items-center gap-2">
  <div className="flex items-center gap-3">
    <Mail size={20} />
    <span>maksud@uh.edu</span>
    <Phone size={20} />
    <span>713-743-4500</span>
  </div>
  <p>&copy; {new Date().getFullYear()} Rahman Lab. All rights reserved.</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
