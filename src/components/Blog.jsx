import React from 'react'

const Blog = () => {
    const mainContent = {
        image: {
          src: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          alt: 'UI Image'
        },
        intro: {
          text: 'Want to know',
          heading: 'What do you want to know about UI/UX'
        },
        author: {
          image: {
            src: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            alt: 'Amelia Anderson'
          },
          name: 'Amelia Anderson',
          role: 'Lead Developer'
        }
      };
    
      const sidebarContent = [
        {
          title: 'Design Instrument',
          description: 'How to raise $100k+ by using Blox UI kit on your design'
        },
        {
          title: 'UI Resource',
          description: 'Should you create UI Product by using Blox?'
        },
        {
          title: 'Premium Collection',
          description: 'Top 10 Blocks you can get on Blox\'s collection.'
        },
        {
          title: 'Premium Kits',
          description: 'Top 10 UI kits you can get on Blox\'s collection.'
        }
      ];
  return (
    <>
  
      <section className=" ">
      <div className="container px-6 py-10 mx-auto">
      <div className="lg:flex lg:-mx-6">
        {/* Main content */}
        <div className="lg:w-3/4 lg:px-6">
          <img
            className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            src={mainContent.image.src}
            alt={mainContent.image.alt}
          />

          <div>
            <p className="mt-6 text-sm text-blue-500 uppercase">{mainContent.intro.text}</p>
            <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
              {mainContent.intro.heading}
            </h1>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={mainContent.author.image.src}
                alt={mainContent.author.image.alt}
              />
              <div className="mx-4">
                <h1 className="text-sm text-gray-700">{mainContent.author.name}</h1>
                <p className="text-sm text-gray-500">{mainContent.author.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
          {sidebarContent.map((item, index) => (
            <div key={index}>
              <h3 className="text-blue-500 capitalize">{item.title}</h3>
              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500"
              >
                {item.description}
              </a>
              {index < sidebarContent.length - 1 && (
                <hr className="my-6 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
</section>
    </>
  )
}

export default Blog
