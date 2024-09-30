import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Loader from "./components/Loader"; 
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="flex flex-col p-2">
        <section
          id="home"
          className="container mx-auto w-full pt-16 pb-8 sm:pt-20 sm:pb-16 min-h-screen"
        >
          <Home />
        </section>

        <section
          id="about"
          className="container mx-auto border-t-2 p-4 sm:p-16 pt-16 min-h-screen"
        >
          <About />
        </section>

        <section
          id="projects"
          className="container mx-auto border-y-2 p-4 sm:p-16 pt-16 min-h-screen"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="container mx-auto text-center pt-16 pb-8 sm:pt-20 sm:pb-16"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
