import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import eventImg from '../assets/event-services.png';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - GG Caterers</title>
        <meta name="description" content={`Expert ${service.title} in Jammu & Kashmir. Contact GG Caterers for premium event planning and catering services.`} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="relative pt-48 pb-24 text-white bg-slate-500">
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover opacity-30" alt={`Abstract background for ${service.title}`} src={eventImg} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              {service.excerpt}
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="prose lg:prose-xl max-w-none text-slate-700"
              >
                {service.content}
              </motion.div>

              {service.faq && service.faq.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-20"
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faq.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-20 text-center"
              >
                <h2 className="text-3xl font-bold mb-4 text-slate-800">Ready to Plan Your Event?</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Contact GG Caterers today to make your next celebration truly memorable!
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg">
                  <Link to="/#contact">
                    Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ServicePage;