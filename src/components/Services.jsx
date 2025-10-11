import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tailored catering and event solutions for every occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={`/services/${service.slug}`} className="block h-full">
                <div className="glass-effect rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;