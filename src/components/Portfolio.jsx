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
      description: 'This project is a fully responsive clone of the official SpaceX website, built to showcase modern web development techniques and design skills. The clone replicates the sleek, futuristic design and dynamic content of the original SpaceX site, including high-quality images, smooth scrolling animations, and interactive elements. It is built using HTML, CSS, and JavaScript, with a focus on clean code, performance optimization, and cross-browser compatibility. The project demonstrates an ability to recreate complex, visually striking websites while maintaining attention to detail and user experience.',
      imageUrl: spaceX,
    },
    {
      category: 'Vanilla JS',
      title: 'Neumorphic Calculator',
      description: 'This project is a visually appealing calculator built using HTML, CSS, and JavaScript, featuring a sleek neumorphic design. The interface mimics soft, raised surfaces and subtle shadows, creating a modern and minimalist user experience. The calculator performs basic arithmetic functions with smooth animations and responsive button clicks. The project demonstrates expertise in CSS for implementing the neumorphism design trend, along with JavaScript for handling calculations and user interactions',
      imageUrl: neuCalc,
    },
    {
      category: 'Api Based',
      title: 'QR Code Generator',
      description: 'This project is a web-based QR code generator that utilizes a third-party API to create customized QR codes. Built with HTML, CSS, and JavaScript, the generator allows users to input text or URLs and instantly generate QR codes that can be downloaded or shared. The interface is user-friendly, featuring real-time previews and customization options such as color schemes and size adjustments. By integrating API calls to generate the codes, this project highlights proficiency in working with external APIs, handling asynchronous operations, and building functional, interactive web applications.',
      imageUrl: qrCode,
    },
    {
      category: 'Vanilla JS',
      title: 'Mario Matching Game',
      description: 'This project is a fun and engaging Mario-themed matching game, built entirely with vanilla JavaScript, HTML, and CSS. The game challenges players to match pairs of iconic Mario characters and items, with smooth card flip animations and visual feedback for correct and incorrect matches. The project includes a timer, score tracker, and restart functionality, all implemented without the use of external libraries. It showcases solid JavaScript skills in DOM manipulation, game logic, and event handling, while the nostalgic Mario theme adds an element of creativity and entertainment to the user experience.',
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
      description: 'This project is a replica of the Hulu streaming platforms website, designed to demonstrate proficiency in front-end development and responsive design. The clone features a clean, modern UI with custom navigation menus, dynamic content sections, and engaging hover effects, closely mimicking the original Hulu website experience. Built using HTML, CSS, and JavaScript, the project showcases skills in media queries for device compatibility, as well as optimization techniques for faster load times and smooth user interaction.',
      imageUrl: huluClone,
    },
    {
      category: 'React',
      title: 'Dashboard Theme',
      description: 'This project is a custom dashboard theme built with React, showcasing a modular and highly interactive user interface. The theme includes dynamic widgets, real-time data visualization using charting libraries, and responsive design to ensure an optimal experience across devices. The dashboard features a clean and intuitive layout with smooth transitions between different sections, user authentication, and state management powered by React hooks and Context API. Designed for scalability and performance, this project demonstrates expertise in building modern web applications with a focus on functionality, aesthetics, and user experience.',
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
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize pb-4">
                {item.title}
              </h2>
              <p className="text-lg tracking-wider text-gray-400 uppercase">{item.description}</p>
              
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
