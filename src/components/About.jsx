import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Heart } from 'lucide-react';
import foodImg from '../assets/food-table.jpg';
const About = () => {
  const stats = [
    { icon: Calendar, number: '500+', label: 'Events Completed' },
    { icon: Users, number: '10K+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Heart, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              About <span className="text-gold">GG Caterers in Jammu Kashmir</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Jammu at CAMP GOLE GUJRAL, BEHIND RK RESORT, GG Caterers has been the premier choice for exceptional event management and catering services across Jammu & Kashmir for over a decade. We are known as the best caterers in Jammu for a reason.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in creating magical Indian weddings, providing top-tier marriage caterers, organizing spectacular destination celebrations, and managing corporate events. Our commitment to excellence has made us the trusted partner for thousands of families looking for the best event organizers in Jammu Kashmir.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  
                className="w-full h-96 object-cover" 
                alt="Professional team of marriage caterers in Jammu preparing an elegant Indian wedding feast"
               src={foodImg} />
              
              {/* Overlay Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To create extraordinary celebrations that reflect your unique style and exceed your expectations, making every moment unforgettable.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;