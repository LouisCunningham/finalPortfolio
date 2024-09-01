// BlogPostPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './data';

const BlogPostPage = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <p>Blog post not found!</p>;
  }

  return (
    <main>
      <article>
        <header className="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-2 text-center shadow-lg relative space-grotesk-font">
          <p className="text-gray-500">Published {blogPost.date}</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">{blogPost.title}</h1>
          <p className="mt-6 text-lg text-gray-700">
            {blogPost.author}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {blogPost.categories?.map((category, index) => (
              <button key={index} className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                {category}
              </button>
            ))}
             <img className="sm:h-[34rem] mt-10 w-full object-contain" src={blogPost.image} alt="Featured Image" />
          </div>
          <img className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover" src={blogPost.image} alt={blogPost.title} />
        </header>

        <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg roboto-mono-font">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>
      </article>
      


      <div className="mx-2 my-10 rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
  <div className="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-center">
      <img className="h-14 w-14 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
      <div className="ml-4 w-56">
        <p className="text-slate-800 text-xl font-extrabold">Richard Hendricks</p>
        <p className="text-slate-500">Algorithms Expert</p>
      </div>
    </div>
    <button className="flex items-center justify-center gap-1 rounded-lg border border-emerald-500 px-4 py-2 font-medium text-emerald-500 focus:outline-none focus:ring hover:bg-emerald-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>

      <span>Sponsor</span>
    </button>
  </div>
  <div className="mb-2 flex justify-between border-b py-8 text-sm sm:text-base">
    <div className="flex flex-col items-center">
      <p className="text-slate-700 mb-1 text-xl font-extrabold">14</p>
      <p className="text-slate-500 text-sm font-medium">Posts</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-slate-700 mb-1 text-xl font-extrabold">1124</p>
      <p className="text-slate-500 text-sm font-medium">Followers</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-slate-700 mb-1 text-xl font-extrabold">25</p>
      <p className="text-slate-500 text-sm font-medium">Sponsors</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-slate-700 mb-1 text-xl font-extrabold">3</p>
      <p className="text-slate-500 text-sm font-medium">Awards</p>
    </div>
  </div>
  <div className="flex justify-between py-8">
    <button className="text-slate-500 hover:bg-slate-100 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">Message</button>
    <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Follow</button>
  </div>
</div>



    </main>
  );
};

export default BlogPostPage;
