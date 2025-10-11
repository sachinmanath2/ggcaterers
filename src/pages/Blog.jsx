import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - GG Caterers</title>
        <meta name="description" content="Explore our blog for wedding planning tips, venue guides, and catering ideas in Jammu & Kashmir." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Our <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Your guide to the best wedding venues and event planning in Jammu & Kashmir.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block glass-effect rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-slate-600 mb-6">{post.excerpt}</p>
                    <div className="flex items-center font-semibold text-orange-600">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Blog;