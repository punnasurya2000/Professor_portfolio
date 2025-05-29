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
      <div className="container-wide flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-semibold text-primary-800 hover:text-primary-700 transition-colors"
        >
          Rahman Lab
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Research', 'Publications', 'People', 'Teaching', 'News', 'Contact'].map(
            (item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary-600 ${
                    isActive ? 'text-primary-600' : 'text-gray-800'
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-800 hover:text-primary-600 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-4">
            {['Home', 'Research', 'Publications', 'People', 'Teaching', 'News', 'Contact'].map(
              (item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary-600 ${
                      isActive ? 'text-primary-600' : 'text-gray-800'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;