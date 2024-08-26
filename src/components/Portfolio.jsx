import React, { useState } from 'react';


const Portfolio = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('Animation');

  // Data for portfolio items
  const portfolioItems = [
    {
      category: 'Animation',
      title: 'Block of Ui kit collections',
      description: 'Ui kit',
      imageUrl: 'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
      category: 'Web design',
      title: 'Best free website layout',
      description: 'Wireframe',
      imageUrl: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    // Add more portfolio items for each category...
  ];

  // Filtered items based on the active category
  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="container px-6 py-10 mx-auto roboto-mono-font">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
        Latest Work
      </h1>

      {/* Category Buttons */}
      <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
        {['Animation', 'Web design', 'App design', 'Branding'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
              activeCategory === category
                ? 'text-blue-600 border-blue-500'
                : 'text-gray-700 border-gray-200 hover:border-gray-400'
            } bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <section className="mt-8 space-y-8 lg:mt-12">
        {filteredItems.map((item, index) => (
          <section key={index} className="lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <p className="text-lg tracking-wider text-blue-500 uppercase">{item.description}</p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                {item.title}
              </h2>
            </div>
            <div className="mt-4 lg:w-1/2 lg:mt-0">
              <img
                className="object-cover w-full h-64 rounded-lg md:h-96"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
