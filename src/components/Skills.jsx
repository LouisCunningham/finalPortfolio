import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faMicrochip} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import IonIcon from '@reacticons/ionicons';
const skills = [
    {
        icon: (
           <IonIcon name='logo-html5' className="w-6 h-6"/>
        ),
        title: "HTML",
        description:
          "The foundational markup language for creating structured web pages and applications.",
      },
      {
        icon: (
          <IonIcon name='logo-css3' className="w-6 h-6"/>
        ),
        title: "CSS",
        description:
          "A stylesheet language used to describe the presentation of a document written in HTML.",
      },
      {
        icon: (
          <IonIcon name='logo-javascript' className="w-6 h-6"/>
          
        ),
        title: "JavaScript",
        description:
          "A versatile scripting language for creating dynamic and interactive web content.",
      },
      {
        icon: (
          <IonIcon name='logo-react' className="w-6 h-6"/>
        ),
        title: "React",
        description:
          "A JavaScript library for building user interfaces, particularly single-page applications.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m-9-9h18" />
          </svg>
        ),
        title: "PHP",
        description:
          "A server-side scripting language used for web development and creating dynamic web content.",
      },
      {
        icon: (
          <IonIcon name='logo-wordpress' className="w-6 h-6"/>
        ),
        title: "WordPress",
        description:
          "A content management system (CMS) that powers millions of websites and blogs with an easy-to-use interface.",
      },
      {
        icon: (
          <IonIcon name='logo-sass' className="w-6 h-6"/>
        ),
        title: "Sass",
        description:
          "A CSS preprocessor that extends CSS with variables, nested rules, and mixins.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
        title: "Bootstrap",
        description:
          "A popular CSS framework for developing responsive and mobile-first websites.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2a2 2 0 012-2h8a2 2 0 012 2v20a2 2 0 01-2 2H8a2 2 0 01-2-2V2z" />
          </svg>
        ),
        title: "Tailwind CSS",
        description:
          "A utility-first CSS framework for building custom designs without leaving your HTML.",
      },
     
  ];

const Skills = () => {
  return (
    <>
      <section id='skills'>
      <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl text-center space-grotesk-font">
        Core <br /> Skills & 
        <span className="underline decoration-gray-500"> Languages</span>
      </h1>

      <p className="mt-4 text-gray-500 xl:mt-6 text-center dark:text-gray-300 roboto-mono-font pb-10">
      Showcasing a diverse skill set in modern web development technologies, tools, and frameworks, built to deliver innovative and efficient solutions.
      </p>

      <div className=" grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 roboto-mono-font">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-3 p-8  shadow-lg rounded-2xl w-100 mb-6 md:mb-2 profile-card">
            <span className="inline-block p-3 text-gray-500 bg-blue-100 rounded-full">
              {skill.icon}
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize">
              {skill.title}
            </h1>

            <p className="text-gray-500 dark:text-gray-300">{skill.description}</p>

          
          </div>
        ))}
      </div>
    </div>
</section>
<hr className="my-20 pt-20 shadow-lg" />
    </>
  )
}

export default Skills
