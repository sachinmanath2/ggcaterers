import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogData';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-slate-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - GG Caterers</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
                </Link>
              </Button>
            </div>

            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-lg text-slate-500">{post.excerpt}</p>
            </header>

            <div className="prose prose-lg max-w-none prose-h2:font-bold prose-h2:text-3xl prose-h3:font-semibold prose-h3:text-2xl prose-a:text-orange-600 hover:prose-a:text-orange-700">
              {post.content}
            </div>
          </div>
        </article>
      </motion.div>
    </>
  );
};

export default BlogPost;