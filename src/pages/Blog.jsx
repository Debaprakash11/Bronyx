import React from 'react';

const blogs = [
  {
    title: 'Tips for a Stress-Free Household Shifting',
    date: 'March 15, 2025',
    excerpt: 'Moving can be challenging, but with the right planning and preparation, you can have a smooth experience. Read our top tips for a hassle-free move.',
  },
  {
    title: 'How to Pack Fragile Items Safely',
    date: 'March 10, 2025',
    excerpt: 'Learn the best techniques for packing delicate items like glassware, electronics, and artwork to prevent damage during transit.',
  },
  {
    title: 'Benefits of Hiring Professional Packers and Movers',
    date: 'March 5, 2025',
    excerpt: 'Discover why choosing a reliable moving company can save you time, effort, and reduce the risk of damage to your belongings.',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        <p className="mb-12 text-gray-400">Stay updated with helpful tips and insights for your next move.</p>

        {blogs.map((blog, index) => (
          <div key={index} className="mb-8 border-b border-gray-700 pb-8">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-400 mb-2">{blog.date}</p>
            <p>{blog.excerpt}</p>
            <button className="mt-4 text-blue-400 hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
