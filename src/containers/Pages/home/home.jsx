import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        className="App h-screen flex"
        style={{ height: "calc(100vh - 44px)" }}
      >
        <div className="w-1/2 flex items-center justify-center bg-black">
          <div className="w-full h-full">
            <img
              src="../assests/1.jpg"
              alt="Himanshu Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-cinzel pb-3">I'm Himanshu Singh</h1>
          <h2 className="text-3xl font-cursive">
            <Typewriter
              options={{
                strings: ["I have a strong passion for programming and coding.", "I possess a vibrant imagination and a penchant for originality."],
                autoStart: true,
                loop: true,
                deleteSpeed: 8,
              }}
            />
          </h2>
          <div className="text-lg font-montserrat  flex flex-col items-center space-y-1">
            <p>I'm a Java Backend Developer 🚀</p>
            <p>&</p>
            <p>an enthusiast who continuously learn and upgrade myself.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/about" className="relative group">
              <button className="w-24 h-10  bg-white text-black border-2 border-black iconC">
                About
              </button>
            </Link>

            <Link to="/projects" className="relative group">
              <button className="w-24 h-10  bg-white text-black border-2 border-black iconC">
                Projects
              </button>
            </Link>
            <Link to="/contact" className="relative group">
              <button className="w-24 h-10  bg-white text-black border-2 border-black iconC">
                Contact
              </button>
            </Link>
             <a href="https://drive.google.com/file/d/1LPoNTXnfHzZlUUQKq1zM5fhWVQNHxfzb/view?usp=drive_link" className="relative group">
              <button className="w-24 h-10  bg-white text-black border-2 border-black iconC">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
