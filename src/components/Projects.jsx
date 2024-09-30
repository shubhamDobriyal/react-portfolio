import React from "react";
import complaintFilingImage from "../assets/online-complaint-filing.png";
import ecommerceImage from "../assets/e-commerce.png";
import carGameImage from "../assets/js-car-game.png";
import reactLearning from "../assets/react-learning.png";
import socialMedia from "../assets/social-media.png";
import motionArt from "../assets/motion-art.png";
import universalPictures from "../assets/universal-pictures.png";
import reactToDoApp from "../assets/react-to-do.png";
import toDoApp from "../assets/todo-app.png";

const projects = [
  {
    title: "React Motion Art Website Landing Page",
    description:
      "The project provides a landing page for a website that provides Motion Art Effects.",
    link: "https://github.com/shubhamDobriyal/React-Motion-Art-Clone",
    image: motionArt,
  },
  {
    title: "Online Complaint Filing System",
    description:
      "The project provides a platform to file a complaint against any crime anonymously. It is built using HTML, CSS, JS, Bootstrap, core-PHP, My-SQL.",
    link: "https://github.com/shubhamDobriyal/Complaint-Filing-System",
    image: complaintFilingImage,
  },
  {
    title: "Universal Pictures Clone",
    description:
      "The project provides a cloned dversion of Universal Pictures Website which is an American film production and distribution company that is a division of Universal Studios, Inc., which is owned by NBCUniversal, a division of Comcast.",
    link: "https://github.com/shubhamDobriyal/Complaint-Filing-System",
    image: universalPictures,
  },
  {
    title: "React Learning Projects",
    description:
      "The project provides some beginner level React Learning Projects. These projects will help you learn react and its concpts in a much better way.",
    link: "https://github.com/shubhamDobriyal/Learn-React",
    image: reactLearning,
  },
  
  {
    title: "e-commerce Website",
    description:
      "The online e-commerce website offers a wide variety of stylish clothing, from trendy tops to comfy jeans and more. Explore our collection today.",
    link: "https://github.com/shubhamDobriyal/e-commerce-website",
    image: ecommerceImage,
  },
  {
    title: "JavaScript Car Game",
    description:
      "A thrilling online adventure where players controls a car on a busy road. Dodging objects, players earn points as they drive. Players must avoid crashing.",
    link: "https://github.com/shubhamDobriyal/JavaScript-Car-Game",
    image: carGameImage,
  },
  {
    title: "React Social Media App",
    description:
      "This project provides the user interface for a social media app.",
    image: socialMedia,
  },
  {
    title: "React To Do App",
    description:
      "This project provides a to-do app to make your to-do list so that you dont miss out anything important.",
    image: reactToDoApp,
  },
  {
    title: "To Do App",
    description:
      "This project provides a to-do app to make your to-do list and mark the completed after completing a task.",
    image: toDoApp,
  },
];

const Projects = () => {
  return (
    <>
      <h2
        className="text-2xl font-bold mt-4 mb-10 text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-4xl"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 3xl:grid-cols-3 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg transform transition-transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-42 object-cover rounded-lg mb-2 sm:size-22 md:size-22"
            />
            <div className="flex flex-col">
              <h3 className="text-sm font-bold mb-2 sm:text-base md:text-xl lg:text-xl 3xl:text-2xl">{project.title}</h3>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base 3xl:text-lg">{project.description}</p>
              <div className="">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline text-sm sm:text-sm md:text-sm lg:text-base 3xl:text-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
