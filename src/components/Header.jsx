import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left w-full mb-4 md:mb-0">
          Shubham Dobriyal
        </h1>
        <nav className="w-full flex justify-center md:justify-start mt-4 md:mt-0">
          <ul className="flex flex-row items-center text-center justify-center text-sm text-white sm:flex-row md:flex-row md:items-center gap-2 flex-wrap sm:space-y-0 sm:space-x-6 md:space-x-4  sm:text-base md:text-base">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            <li>
              <a
                href="/ShubhamDobriyalResume.pdf"
                download
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-all"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
