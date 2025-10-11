import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import wedding1 from '../assets/wedding1.jpeg';
import wedding2 from '../assets/wedding2.jpeg';
import wedding3 from '../assets/wedding3.jpeg';
import catering1 from '../assets/catering1.jpeg';
import catering2 from '../assets/catering2.jpeg';
import catering3 from '../assets/catering3.jpg';
import deco1 from '../assets/deco1.jpeg';
import deco2 from '../assets/deco2.jpeg';
import deco3 from '../assets/deco3.jpeg';
import deco4 from '../assets/deco4.jpeg';
import corporate1 from '../assets/corporate1.jpg';
import corporate2 from '../assets/corporate2.png';


const galleryImages = [
  { id: 1, src: wedding1 , category: 'Wedding', alt: 'Elegant Indian wedding mandap by caterers in Jammu Kashmir', description: 'Elegant Indian wedding mandap with golden drapes and floral decorations' },
  { id: 2, src: wedding2, category: 'Wedding', alt: 'Beautiful bride at a wedding organized in Jammu', description: 'Beautiful Indian bride in traditional wedding attire' },
  { id: 3, src: corporate1, category: 'Corporate', alt: 'Professional corporate event setup by event organizers in Jammu', description: 'Modern corporate event with people networking in a conference hall' },
  { id: 4, src: deco1, category: 'Decoration', alt: 'Stunning floral arrangements for a Jammu wedding', description: 'Vibrant marigold and rose flower decorations for an Indian wedding ceremony' },
  { id: 5, src: catering3, category: 'Catering', alt: 'Food served in marriage caterers in Jammu Kashmir', description: 'Delicious Indian food buffet with various dishes for a celebration' },
  { id: 6, src: wedding3, category: 'Wedding', alt: 'Destination wedding setup in Kashmir by top event organizers', description: 'Breathtaking outdoor destination wedding setup with mountain views' },
  { id: 7, src: corporate2, category: 'Corporate', alt: 'Corporate conference hall arranged by GG Caterers in Jammu', description: 'Large audience in a professional corporate seminar' },
  { id: 8, src: catering2, category: 'Catering', alt: 'Traditional Kashmiri cuisine by caterers in Jammu Kashmir', description: 'Authentic and flavorful traditional Kashmiri food platter' },
  { id: 9, src: deco2, category: 'Decoration', alt: 'Exquisite table setting for an Indian wedding reception', description: 'Elegant dining table setting with golden cutlery for a wedding reception' },
  { id: 10, src: deco3, category: 'Decoration', alt: 'Exquisite table setting for an Indian wedding reception', description: 'Elegant dining table setting with golden cutlery for a wedding reception' },
  { id: 11, src: catering1, category: 'Catering', alt: 'Elaborate wedding feast by marriage caterers in Jammu Kashmir', description: 'Delicious Indian food buffet with various dishes for a celebration' },
  { id: 12, src: deco4, category: 'Decoration', alt: 'Mata ka Jagrata in Indian wedding', description: 'Mata ka Jagrata in Indian ' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Wedding', 'Catering', 'Decoration', 'Corporate'];

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Our <span className="text-gold">Event Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of stunning events and celebrations that showcase why we are the best event organizers in Jammu Kashmir.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-white text-gray-600 hover:bg-gold hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt={image.alt}
                src={image.src}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">{image.category}</p>
                  <p className="text-sm">Click to view</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img
                className="w-full h-auto rounded-lg"
                alt={selectedImage.alt}
                src={selectedImage.src}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;