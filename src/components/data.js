
// data.js
export const blogPosts = [
    {
      id: 1,
      title: "Flexbox vs Grid: Which One Should You Use?",
      date: "August 31, 2024",
      author: "Louis Cunningham",
      categories: ["Marketing", "Branding", "Digital", "Identity"],
      content:  `
      <h1 class="text-3xl font-bold mb-4">Flexbox vs Grid: Which One Should You Use?</h1>
      <p class="mb-4">When it comes to designing modern web layouts, Flexbox and CSS Grid are two powerful tools in a front-end developer's toolkit. Both have their strengths and use cases, so understanding their differences and knowing when to use each can significantly enhance your design workflow. Let's dive into a comparison of Flexbox and Grid to help you decide which one is best for your project.</p>
      
      <h2 class="text-2xl font-semibold mb-2">What is Flexbox?</h2>
      <p class="mb-4">Flexbox, short for "Flexible Box Layout," is a one-dimensional layout model. It is ideal for arranging items in a row or column. With Flexbox, you can distribute space and align items with ease, making it a great choice for simple layouts and aligning elements within a container.</p>
      
      <h3 class="text-xl font-semibold mb-2">Flexbox Example</h3>
      <div class="bg-gray-100 p-4 mb-4">
        <pre class="bg-gray-800 text-white p-4 rounded"><code>
      <div class="flex space-x-4">
        <div class="flex-1 bg-blue-500 p-4">Item 1</div>
        <div class="flex-1 bg-green-500 p-4">Item 2</div>
        <div class="flex-1 bg-red-500 p-4">Item 3</div>
      </div>
        </code></pre>
      </div>
      <p class="mb-4">In this example, we use the Flexbox utility classes from Tailwind CSS to create a horizontal layout with evenly spaced items.</p>
      
      <h2 class="text-2xl font-semibold mb-2">What is CSS Grid?</h2>
      <p class="mb-4">CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns. Unlike Flexbox, Grid can handle both dimensions simultaneously, making it suitable for more intricate designs and layouts where precise control is needed.</p>
      
      <h3 class="text-xl font-semibold mb-2">Grid Example</h3>
      <div class="bg-gray-100 p-4 mb-4">
        <pre class="bg-gray-800 text-white p-4 rounded"><code>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-blue-500 p-4">Item 1</div>
        <div class="bg-green-500 p-4">Item 2</div>
        <div class="bg-red-500 p-4">Item 3</div>
        <div class="bg-yellow-500 p-4 col-span-3">Item 4</div>
      </div>
        </code></pre>
      </div>
      <p class="mb-4">In this Grid example, we use Tailwind CSS classes to create a three-column layout with a gap between items and an item that spans all columns.</p>
      
      <h2 class="text-2xl font-semibold mb-2">When to Use Flexbox vs Grid</h2>
      <p class="mb-4">- Use <strong>Flexbox</strong> when you need a simple, one-dimensional layout with items aligned in a row or column. It's great for navigation bars, toolbars, and small components.</p>
      <p class="mb-4">- Use <strong>Grid</strong> when you need a complex, two-dimensional layout with both rows and columns. It excels at creating overall page layouts and managing larger, more intricate designs.</p>
      
      <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="mb-4">Both Flexbox and CSS Grid are essential tools for modern web design. Understanding their differences and knowing when to use each will allow you to create more responsive and aesthetically pleasing layouts. By leveraging the power of both, you can tackle a wide range of design challenges with confidence.</p>
    `,
      image: "https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    
  ];
  