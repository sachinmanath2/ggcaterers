import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import WhatsAppFloat from './components/WhatsAppFloat';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServicePage from './pages/ServicePage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Best Caterers in Jammu & Kashmir | GG Caterers | Wedding & Event Organizers</title>
        <meta name="description" content="Looking for the best caterers in Jammu & Kashmir? GG Caterers offers premium wedding planning, marriage catering, and event organization. Contact the top event organizers in Jammu for your special day." />
        <meta name="keywords" content="caterers in jammu, caterers in jammu kashmir, best event organizers in jammu kashmir, marriage caterers, indian wedding planning jammu, destination wedding kashmir, corporate events jammu, GG Caterers, जम्मू में कैटरिंग (Catering in Jammu), जम्मू के फूड कैटरर्स (Food Caterers in Jammu), मैरिज कैटरर्स (Marriage Caterers), इवेंट कैटरर्स (Event Caterers), रोका कैटरर्स (Roka Caterers), रिंग सेरेमनी कैटरर्स (Ring Ceremony Caterers), ठका सेरेमनी कैटरर्स (Thaka Ceremony Caterers)" />
        <meta property="og:title" content="Best Caterers in Jammu & Kashmir | GG Caterers | Wedding & Event Organizers" />
        <meta property="og:description" content="Looking for the best caterers in Jammu & Kashmir? GG Caterers offers premium wedding planning, marriage catering, and event organization." />
      </Helmet>
      
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </AnimatePresence>      
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}

export default App;