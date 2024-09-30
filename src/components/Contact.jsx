import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="text-2xl font-bold p-2 sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-5xl">
        FIND ME ON
      </h2>

      <p className="text-m mb-8 text-gray-400 p-2 sm:text-xl md:text-xl lg:text-xl xl:text-3xl 2xl:text-6xl 3xl:text-3xl">
        Feel free to connect with me below
      </p>

      {/* Contact Icons */}
      <div className="flex justify-center sm:space-x-4 flex-wrap gap-2 p-2">
        {/* Email */}
        <a
          href="mailto:shubhamdobriyal09563@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white hover:text-blue-400 transition-colors duration-300 sm:mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-8 sm:size-8 md:size-10 xl:w-12 xl:h-12 lg:size-10 2xl:size-32 3xl:size-16 mb-2 fill-white transform transition-transform hover:scale-125"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <span className="md:text-sm lg:text-sm 3xl:text-xl">Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shubham-dobriyal-8b3064250/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white hover:text-blue-400 transition-colors duration-300 sm:mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-8 sm:size-8 md:size-10 xl:w-12 xl:h-12 lg:size-10 2xl:size-32 3xl:size-16 mb-2 fill-white transform transition-transform hover:scale-125"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          <span className="md:text-sm lg:text-sm 3xl:text-xl">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shubhamDobriyal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white hover:text-blue-400 transition-colors duration-300 sm:mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-8 sm:size-8 md:size-10 xl:w-12 xl:h-12 lg:size-10 2xl:size-32 3xl:size-16 mb-2 fill-white transform transition-transform hover:scale-125"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm44.1 36.3c-2.3 1.6-1.6 5.2 1.3 7.5 2.6 2.3 5.9 2.6 7.5 0 1.3-2-1-5.6-3.9-7.5-2.9-1.6-5.6-1.6-7-.1z" />
          </svg>
          <span className="md:text-sm lg:text-sm 3xl:text-xl">GitHub</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/shubhamdobriyal63/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white hover:text-blue-400 transition-colors duration-300 sm:mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="size-8 sm:size-8 md:size-10 xl:w-12 xl:h-12 lg:size-10 2xl:size-32 3xl:size-16 mb-2 fill-white transform transition-transform hover:scale-125"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186c-39.2 0-71.1-31.9-71.1-71.1s31.9-71.1 71.1-71.1 71.1 31.9 71.1 71.1-31.9 71.1-71.1 71.1zm146.4-194.5c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9c14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6S388.7 24.7 353 23c-35.7-1.7-142.8-1.7-178.5 0-35.7 1.7-67.3 9.9-93.6 36.2S24.7 123.3 23 159c-1.7 35.7-1.7 142.8 0 178.5 1.7 35.7 9.9 67.3 36.2 93.6s57.9 34.6 93.6 36.2c35.7 1.7 142.8 1.7 178.5 0 35.7-1.7 67.3-9.9 93.6-36.2s34.6-57.9 36.2-93.6c1.7-35.7 1.7-142.8 0-178.5zm-48.5 214c-7.8 19.7-22.9 35.8-42.7 43.6-29.6 11.8-99.9 9-132.7 9s-103.1 2.6-132.7-9c-19.7-7.8-35.8-22.9-43.6-42.7-11.8-29.6-9-99.9-9-132.7s-2.6-103.1 9-132.7c7.8-19.7 22.9-35.8 42.7-43.6 29.6-11.8 99.9-9 132.7-9s103.1-2.6 132.7 9c19.7 7.8 35.8 22.9 43.6 42.7 11.8 29.6 9 99.9 9 132.7s2.8 103.1-9 132.7z" />
          </svg>
          <span className="md:text-sm lg:text-sm 3xl:text-xl">Instagram</span>
        </a>
      </div>
    </>
  );
};

export default Contact;
