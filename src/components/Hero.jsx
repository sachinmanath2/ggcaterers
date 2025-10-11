import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import MainWeddingImg from '../assets/wedding.jpg'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={MainWeddingImg} className="w-full h-full object-cover" alt="Elegant Indian wedding decoration for the best caterers in Jammu, with marigold flowers and golden drapes" />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            GG Caterers: Best Caterers in Jammu
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-4 text-gold font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating Unforgettable Celebrations
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The best event organizers in Jammu & Kashmir, specializing in Indian weddings, marriage catering, destination celebrations, and corporate events.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Button>
            <Button
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              View Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {/* <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gold rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
      
      {/* <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
    </section>
  );
};

export default Hero;