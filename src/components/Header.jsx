import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import LogoImg from '../assets/Logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.jsx";
import { servicesData } from '../data/servicesData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services', dropdown: true },
    { name: 'About', path: '/#about' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.substring(2);
      
      const scrollToSection = () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      };

      setIsMobileMenuOpen(false);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(scrollToSection, 150); // A little delay to allow for navigation
      } else {
        // Delay scroll slightly to allow mobile menu to close
        if (isMobileMenuOpen) {
          setTimeout(scrollToSection, 300); // Wait for menu exit animation
        } else {
          scrollToSection();
        }
      }
    } else {
      setIsMobileMenuOpen(false);
      navigate(path);
    }
  };

  const handleDropdownItemClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsServicesOpen(false);
    }
  };


  return (    
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={LogoImg}
                alt="GG Caterers Logo"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <span className="text-2xl font-playfair font-bold text-gold">GG Caterers</span>
                <p className="text-sm text-gold">Event & Catering Management</p>
              </div>
            </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-gold hover:text-orange-200 font-medium transition-colors">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-effect">
                    {servicesData.map((service) => (
                      <DropdownMenuItem key={service.slug} onSelect={() => handleDropdownItemClick(`/services/${service.slug}`)}>
                        {service.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-gold hover:text-orange-200 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+916005807488" className="flex items-center space-x-2 text-gold hover:text-orange-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gold"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-white/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full font-bold text-gold py-2"
                    >
                      {item.name}
                      {isServicesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 border-l-2 border-orange-500 overflow-hidden"
                        >
                          <div className="py-2 space-y-2">
                            {servicesData.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={(e) => handleNavClick(e, `/services/${service.slug}`)}
                                className="block w-full text-left text-gold hover:text-orange-200 font-medium py-1"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="block w-full text-left text-gold hover:text-orange-200 font-medium py-2"
                  >
                    {item.name}
                  </Link>
                )
              )}              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
  );
};

export default Header;