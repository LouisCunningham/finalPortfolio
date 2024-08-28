import React, { useState } from 'react';
import blogTemplate from '../assets/blogExample.png';
import dashTheme from '../assets/dashboardTheme.png';
import gemClone from '../assets/geminiClone.png';
import huluClone from '../assets/huluClone.png';
import marioMatch from '../assets/marioMatching.png';
import neuCalc from '../assets/neuCalc.png';
import qrCode from '../assets/qrCode.png';
import spaceX from '../assets/spaceXClone.png';


const Portfolio = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('Animation');

  // Data for portfolio items
  const portfolioItems = [
    {
      category: 'HTML / CSS',
      title: 'Space X Website Clone',
      description: 'This project is a modern and responsive blog template built with React, featuring Axios for seamless data fetching. The template is designed to provide a simple, elegant interface for creating and managing a blog, with easy integration of external APIs for content management.',
      imageUrl: spaceX,
    },
    {
      category: 'Vanilla JS',
      title: 'Neumorphic Calculator',
      description: 'This project is a modern and responsive blog template built with React, featuring Axios for seamless data fetching. The template is designed to provide a simple, elegant interface for creating and managing a blog, with easy integration of external APIs for content management.',
      imageUrl: neuCalc,
    },
    {
      category: 'Api Based',
      title: 'QR Code Generator',
      description: 'This project is a modern and responsive blog template built with React, featuring Axios for seamless data fetching. The template is designed to provide a simple, elegant interface for creating and managing a blog, with easy integration of external APIs for content management.',
      imageUrl: qrCode,
    },
    {
      category: 'Vanilla JS',
      title: 'Mario Matching Game',
      description: 'This project is a modern and responsive blog template built with React, featuring Axios for seamless data fetching. The template is designed to provide a simple, elegant interface for creating and managing a blog, with easy integration of external APIs for content management.',
      imageUrl: marioMatch,
    },
    {
      category: 'Api Based',
      title: 'Axios Blog template',
      description: 'This project is a modern and responsive blog template built with React, featuring Axios for seamless data fetching. The template is designed to provide a simple, elegant interface for creating and managing a blog, with easy integration of external APIs for content management.',
      imageUrl: blogTemplate,
    },
    {
      category: 'Api Based',
      title: 'Gemini Clone',
      description: 'Wireframe',
      imageUrl: gemClone,
    },
    {
      category: 'HTML / CSS',
      title: 'Hulu Clone',
      description: 'Wireframe',
      imageUrl: huluClone,
    },
    {
      category: 'React',
      title: 'Dashboard Theme',
      description: 'Wireframe',
      imageUrl: dashTheme,
    },
    // Add more portfolio items for each category...
  ];

  // Filtered items based on the active category
  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="container px-6 py-10 mx-auto roboto-mono-font" id='portfolio'>
      <h1 className="text-2xl font-semibold text-center text-gray-600 capitalize lg:text-3xl">
        Latest Work
      </h1>

      {/* Category Buttons */}
      <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
        {['HTML / CSS', 'React', 'Api Based', 'Vanilla JS'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
              activeCategory === category
                ? 'text-gray-400 border-black'
                : 'text-gray-800 border-gray-200 hover:border-gray-400'
            } bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <section className="mt-8 space-y-8 lg:mt-12">
        {filteredItems.map((item, index) => (
          <section key={index} className="lg:flex lg:items-center ">
            <div className="lg:w-1/2 animate-fade-left animate-once animate-duration-[1200ms] animate-delay-[900ms] animate-ease-in-out animate-normal">
              <p className="text-lg tracking-wider text-gray-400 uppercase">{item.description}</p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize ">
                {item.title}
              </h2>
            </div>
            <div className="mt-4 lg:w-1/2 lg:mt-0 animate-fade-left animate-duration-[1200ms] animate-delay-[1200ms] animate-ease-in-out animate-normal">
              <img
                className="object-cover w-full h-64 rounded-lg shadow-lg profile-card md:h-96"
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
