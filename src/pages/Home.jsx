import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BlogHome from '../pages/BlogHome';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >        
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <BlogHome />
    </motion.div>
  );
};

export default Home;