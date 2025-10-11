import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `Event Inquiry from ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Number of Guests: ${formData.guests}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:gouravgupta39057@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Email Client Opened!",
      description: "Your email client has been opened with the inquiry details. Please send the email to complete your request.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['7889631171', '9596906600'],
      action: 'tel:7889631171'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['gouravgupta39057@gmail.com'],
      action: 'mailto:gouravgupta39057@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['CAMP GOLE GUJRAL', 'BEHIND RK RESORT', 'Jammu, J&K'],
      action: 'https://maps.google.com/?q=CAMP+GOLE+GUJRAL+BEHIND+RK+RESORT+Jammu'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sun: 9:00 AM - 9:00 PM', 'Available for consultations'],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Contact <span className="text-gold">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your dream event? Get in touch with us today for a personalized consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gold hover:text-white transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gold group-hover:bg-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white group-hover:text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 group-hover:text-white">
                        {info.action && detailIndex === 0 ? (
                          <a 
                            href={info.action}
                            className="hover:underline"
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: w0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select event type</option>
                      <option value="Indian Wedding">Indian Wedding</option>
                      <option value="Destination Wedding">Destination Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="Approximate number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your event requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;