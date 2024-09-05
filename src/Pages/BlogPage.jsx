import React from 'react';
import { blogPosts } from '../components/data';
import { Link } from 'react-router-dom';

const BlogPage = () => {
 

  return (
    <>
    
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-center text-2xl font-semibold text-gray-800 capitalize lg:text-3xl  space-grotesk-font">
            From the blog
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {blogPosts.map((post) => (
              <div className="lg:flex" key={post.index}>
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={post.image}
                  alt={post.alt}
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <Link
                  to={`/blog/${post.id}`}
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline  roboto-mono-font"
                  >
                    {post.title}
                  </Link>
                  <div>
                  <Link to={`/blog/${post.id}`} className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600 roboto-mono-font">Read more</Link>
                </div>
                <span className="text-sm text-gray-500  roboto-mono-font">
                    By: {post.author}
                  </span>
                  <span className="text-sm text-gray-500  roboto-mono-font">
                    On: {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
