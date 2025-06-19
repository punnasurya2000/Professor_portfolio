import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-green-900 hover:text-green-900 transition-colors"
        >
          Maksud Lab
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-lg lg:text-xl font-semibold transition-colors hover:text-green-800 ${
                  isActive ? 'text-green-800' : 'text-black'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-800 hover:text-green-800 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-green-800 ${
                    isActive ? 'text-green-800' : 'text-gray-800'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
