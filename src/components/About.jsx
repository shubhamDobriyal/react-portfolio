import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import bootstrapLogo from "../assets/bootstrap.png";
import phpLogo from "../assets/php.png";
import gitLogo from "../assets/git.jpg";
import mysqlLogo from "../assets/mysql.png";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React.js", logo: reactLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "PHP", logo: phpLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Git", logo: gitLogo },
];

const About = () => {
  return (
    <div className="flex flex-col sm:flex-col p-2 lg:flex-row">
      <div className="sm:w-full text-center sm:text-left flex flex-col justify-start flex-wrap flex-auto w-full lg:w-2/3 3xl:3/4">
        <h1
          className="text-2xl sm:text-3xl md:text-3xl text-center font-bold lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-4xl"
        >
          ABOUT ME
        </h1>
        <p className="home-about-body text-xs sm:text-sm text-left md:text-sm lg:text-base p-4 3xl:text-xl">
          I got into technology a few years ago when I completed my
          <i>
            <b className="purple"> diploma </b>
          </i>
          and then my
          <i>
            <b className="purple"> Bachelor's degree in Computer Science. </b>
          </i>
          <br />
          <br />I am fluent in technologies like &nbsp;
          <i>
            <b className="purple">
              HTML, CSS, Javascript, React.js, core-Php and My-SQL.{" "}
            </b>
          </i>
          <br />
          <br />I am passionate about leveraging technology to create impactful
          solutions, I've been particularly drawn to &nbsp;
          <i>
            <b className="purple">Front End Development &nbsp;</b>
          </i>
          specially using Javascript framework
          <b className="purple">&nbsp; React.js.</b>
          <br />
          <br />
          During my studies, I had the opportunity to do
          <i>
            <b className="purple"> internships </b>
          </i>
          where I learned a lot.
          <br />
          <br />I also did special training under &nbsp;
          <i>
            <b className="purple">
              Pradhan Mantri Kaushal Vikas Yojna (PMKVY){" "}
            </b>
          </i>
          scheme, where I learned more about HTML, CSS, JavaScript and React.js.
        </p>
      </div>
      <div className="w-full sm:w-full text-center flex flex-col justify-start lg:w-1/3 3xl:w-1/4">
        <h1
          className="text-2xl sm:text-3xl text-center font-bold md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-4xl"
        >
          Skills
        </h1>

        <div className="flex flex-wrap gap-4 justify-center p-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-2 shadow-md rounded-lg transform transition-transform hover:scale-110 w-16 sm:w-20 3xl:w-20"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="size-5 sm:size-8 mb-2 md:size-10 lg:size-10 3xl:size-12"
              />
              <p className="text-xs sm:text-sm md:text-sm lg:text-base 3xl:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
