import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import LogoImg from '../assets/Logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (path) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        const sectionId = path.substring(2);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={LogoImg}
                alt="GG Caterers Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <span className="text-2xl font-playfair font-bold text-gold">GG Caterers</span>
                <p className="text-sm text-gray-400">Event & Catering Management</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating unforgettable celebrations across Jammu & Kashmir with exceptional catering and event management services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-gold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection("/#"+item.toLowerCase())}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li><a className="text-gray-400 hover:text-gold transition-colors duration-300" href="https://physiocurencare.com" target="_blank">Physiotherapy Clinic in Jammu</a></li>
              <li><a className="text-gray-400 hover:text-gold transition-colors duration-300" href="https://royalgeneraltrading.me" target="_blank">Dubai Scrap Buyer</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-gold mb-6 block">Our Services</span>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/services/indian-wedding-planning">Indian Wedding Planning</Link>
              </li>
              <li>
                <Link to="/services/destination-weddings">Destination Weddings</Link>
              </li>
              <li>
                <Link to="/services/corporate-events">Corporate Events</Link>
              </li>
              <li>
                <Link to="/services/social-events">Social Events</Link>
              </li>
              <li>
                <Link to="/services/catering-services">Catering Services</Link>
              </li>
              <li>
                <Link to="/services/event-photography">Event Photography</Link>
              </li>
              <li>
                <Link to="/services/roka-caterers">Roka Caterers</Link>
              </li>
              <li>
                <Link to="/services/ring-ceremony-caterers">Ring Ceremony Caterers</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold text-gold mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div>
                  <p className="text-gray-400">
                  <a href="tel:+917889631171">
                    <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0 inline" size={20} />
                    +91 7889631171
                  </a>
                  </p>
                  <p className="text-gray-400">
                    <a href="tel:+919596906600">
                    <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0 inline" size={20} />
                    +91 9596906600
                  </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-gray-400">gouravgupta39057@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">CAMP GOLE GUJRAL</p>
                  <p className="text-gray-400">BEHIND RK RESORT</p>
                  <p className="text-gray-400">Jammu, J&K</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} GG Caterers. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-400">for memorable celebrations</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;