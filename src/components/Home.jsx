import React from "react";
import Type from "./Type";
import profileImage from "../assets/avatar.svg";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-full sm:flex-col  sm:items-center md:flex-row md:items-end lg:items-end lg:justify-center lg:flex-row">
      <div className="w-full text-center flex flex-col items-center  justify-center mb-8 md:w-auto 3xl:w-1/2">
        <h1 className="text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl 3xl:text-4xl">
          Hi There!
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="text-lg text-center font-bold sm:text-base md:text-xl lg:text-xl 3xl:text-2xl">
          I'M 
        
        </h1>
        <h1 className="text-lg text-center font-bold sm:text-lg">  
          <strong className="main-name text-xl text-purple-600 sm:text-xl md:text-2xl lg:text-3xl 3xl:text-4xl">
            SHUBHAM DOBRIYAL
          </strong></h1>
        <div>
          <Type />
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-auto flex justify-center sm:justify-center 3xl:w-1/2">
        <img
          src={profileImage}
          alt="Profile"
          className="w-3/5 sm:size-40 h-auto rounded-full md:size-56 lg:size-64 3xl:size-96"
        />
      </div>
    </div>
  );
};

export default Home;

