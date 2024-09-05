import React, {useEffect,useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { blogPosts } from '../components/data';
import profilePhoto from "../assets/profile.png"

const Hero = () => {
    const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <>
      <header className="bg-custom roboto-mono-font flex sm:flex-col md:flex-row sm:justify-between">
   

    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2 animate-fade-right animate-once animate-duration-[1200ms] animate-ease-in-out animate-normal">
            <div className={`${fadeIn ? 'w-full lg:w-full animate-fade-right animate-once animate-duration-[1200ms] animate-ease-in-out animate-normal' : 'opacity-0'}`}>
                <h1 className="text-5xl font-semibold tracking-wide  text-gray-800  lg:text-5xl ">Louis Cunningham</h1>
                <h2 className="mt-4 text-4xl font-semibold tracking-wide text-gray-600 dark:text-gray-300 italic">Front-End Web developer</h2>
                

             

                 <div className="flex mb-20 md:mb-2 lg:mb-2">
                 <div className=" mx-auto py-9 mb-20">
    <p className=" h-2 mb-6 rounded-lg ">
    I'm Louis Cunningham, a passionate web developer who brings ideas to life through clean, efficient code and beautiful design. Whether it's building dynamic web applications or creating pixel-perfect interfaces, I love turning challenges into solutions.
    </p>
    
</div>
                </div> 
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          
        
<div className="p-4  shadow-lg rounded-2xl w-100 mb-6 md:mb-2 profile-card">
    <div className="flex flex-col md:flex-row lg:flex-row items-start lg:gap-4">
        <img src={profilePhoto} className="rounded-lg w-50 h-52"/>
        <div className="flex flex-col justify-between sm:justify-evenly w-full h-48">
            <div>
                <p className="text-xl font-medium text-gray-800 ">
                    Louis Cunningham
                </p>
                <p className="text-xs text-gray-400">
                    Front-End Dev
                </p>
            </div>
            <div className="w-full p-4 bg-blue-100 rounded-lg ">
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                    <p className="flex sm:flex-col flex-col mx-1">
                        Articles
                        <span className="font-bold text-black dark:text-indigo-500">
                            {blogPosts.length}
                        </span>
                    </p>
                    <p className="flex flex-col mx-1">
                        Followers
                        <span className="font-bold text-black dark:text-indigo-500">
                            919
                        </span>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-between gap-4 mt-6">
        <button  type="button" className="w-1/2 px-4 py-2 text-base bg-white border rounded-lg text-grey-500 hover:bg-gray-200 ">
            <a href="https://github.com/LouisCunningham" target="_blank">Follow</a>
        </button>
        <button type="button" className="w-1/2 px-4 py-2 text-base text-white bg-gray-500 border rounded-lg hover:bg-black  animate-wiggle animate-thrice animate-ease-in-out animate-normal hover:animate-jump">
            <a href='#portfolio' >CV/RESUME</a>
        </button>
    </div>
</div>



        </div>
    </div>
</header>
<hr className="my-20 pt-20 shadow-lg" />
    </>
  )
}

export default Hero
