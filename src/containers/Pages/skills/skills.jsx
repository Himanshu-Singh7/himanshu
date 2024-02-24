import React, { useEffect, useState, useRef, useContext } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faNode,
  faPython,
  faLinux,
  faSass,
  faGithub,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../../Header/theme.js";

function Skills() {
  const { darkMode } = useContext(ThemeContext);
  const scrollRef = useRef();
  const [currentPage, setCurrentPage] = useState(1); // Add state to track current page

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        // Calculate the new page number
        const newPage = currentPage + Math.sign(e.deltaY);
        setCurrentPage(newPage);
        // Scroll to the new page
        el.scrollTo({
          left: el.clientWidth * (newPage - 1),
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);

      // Modify keydown event listener
      const onKeyDown = (e) => {
        let newPage;
        if (e.key === "ArrowRight") {
          newPage = currentPage + 1;
        } else if (e.key === "ArrowLeft") {
          newPage = Math.max(currentPage - 1, 1);
        }
        if (newPage) {
          setCurrentPage(newPage);
          el.scrollTo({
            left: el.clientWidth * (newPage - 1),
            behavior: "smooth",
          });
        }
      };
      window.addEventListener("keydown", onKeyDown);

      return () => {
        el.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKeyDown); // Clean up the event listener
      };
    }
  }, [currentPage]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll h-full w-screen box-border"
        style={{ height: "calc(100vh - 44px)" }}
      >
        <div className="flex-shrink-0 w-screen h-full bg-black flex">
          <div className="flex-shrink-0 w-screen h-full bg-black flex flex-row justify-start items-center relative">
            <div className="w-1/2 flex justify-center items-center">
              <img
                src="../assests/coder.png"
                alt="Coder"
                className="object-cover w-3/4 h-3/4 rounded-full"
              />
            </div>
            <div className="w-1/2 text-white p-1">
              <h2 className="text-100px font-montserrat mt-0 text-white">
                What I do
              </h2>
              <p className="text-xl font-cinzel p-3">
                Experienced Java backend developer with 3.1+ years of expertise<br />
                in REST/HTTP and MicroServices using Spring Boot.<br />
                
                <br />I possess extensive expertise in MySQL database management.
                <br />
                
              </p>
              <br />
              <p className="text-xl font-zcool">
                ⚡Created a robust Spring Boot API to efficiently retrieve data from MySQL Database, 
                    resulting in a 25% decrease in frontend loading time and significantly 
                    enhancing user experience<br /> 
              </p>
              <p className="text-xl font-zcool">
                ⚡Design and implement efficient and secure backend systems
                using Java <br /> and SpringBoot , ensuring seamless integration with
                frontend components.
              </p>
              <p className="text-xl font-zcool">
                ⚡Good understanding of code helps in review processes to
                maintain a <br /> high standard of code quality.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-screen h-full bg-black flex">
          <div className="flex-shrink-0 w-screen h-full bg-black flex flex-col justify-start items-center relative">
            <h2 className="text-100px font-montserrat mt-0 text-white">
              What I'm good at
            </h2>
            <hr className="w-1/2 border-1 border-black " />
            <p className="text-2xl font-zcool mt-0 text-white  mb-4">
            A BOLD JAVA BACKEND ENGINEER KEEN ON EXPLORING VARIOUS TECH STACKS.
            </p>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col items-center space-y-4 p-1 icon text-white">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <p className="text-sm">HTML</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-1 icon text-white">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <p className="text-sm">CSS</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-1 icon text-white">
                <img className="jav" src="../assests/1.J.png" alt="Java" />
                <p className="text-sm">Java</p>
              </div>
              <div className="flex flex-col items-center space-y-5 p-3 icon text-white">
                <img src="../assests/1.C.svg" alt="springboot" />
                <p className="text-sm">Spring Boot</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-1 icon text-white">
                <img src="../assests/1.H.svg" alt="hibernate" />
                <p className="text-sm">Hibernate</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-1 icon text-white">
                <img src="../assests/1.M.png" alt="MySQL" />
                <p className="text-sm">MySQL</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-1 icon text-white">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <p className="text-sm">Git</p>
              </div>
          
            </div>
            <p className="text-5xl font-lucida subpixel-antialiased text-white mt-12">
              Proficiency
            </p>
            <div className="text-xl font-roboto  mt-3 text-white">
              <div className="flex flex-col items-start space-y-4 p-3">
                <h3 className="text-2xl font-cinzel ">Frontend/Design</h3>
                <div className="relative w-80 h-2 bg-white rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full rounded-lg bg-red"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-3">
                <h3 className="text-2xl font-cinzel ">Backend</h3>
                <div className="relative w-80 h-2 bg-white rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full bg-red rounded-lg"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-col items-start space-y-4 p-3">
                <h3 className="text-2xl font-cinzel ">Data Structures & Algorithms</h3>
                <div className="relative w-80 h-2 bg-white rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full bg-red rounded-lg"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-screen h-full bg-black flex">
          <div className="flex-shrink-0 w-screen h-full bg-black flex flex-col justify-start items-center relative">
            <h2 className="text-100px font-montserrat mt-0  text-white">
              What I Enjoy
            </h2>
            <div className="flex flex-row space-x-4 w-full">
              <div className="flex flex-col items-center space-y-4 p-3 text-white flex-grow">
                {/* Hobby 1 */}
                <img
                  src="../assests/H1.jpeg"
                  alt="Hobby 1"
                  className="object-cover w-80 h-80 rounded-full hover:border-8 hover:border-green"
                />
                <h3 className="text-2xl font-cursive">Video Editing</h3>
                <p className="object-cover w-80 font-zcool">
                  Unleashing creativity through the lens of a camera and the
                  canvas of an editing suite is my forte. I am deeply passionate
                  about video editing, a field where art meets technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-3 text-white flex-grow">
                {/* Hobby 2 */}
                <img
                  src="../assests/H2.jpeg"
                  alt="Hobby 2"
                  className="object-cover w-80 h-80 rounded-full hover:border-8 hover:border-green"
                />
                <h3 className="text-2xl font-cursive">Writing</h3>
                <p className="object-cover w-80 font-zcool">
                  Immersed in the world of words, I find my joy in writing. It’s
                  a realm where I can shape characters, plot twists, and
                  dialogues that breathe life into stories.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-3 text-white flex-grow">
                {/* Hobby 3 */}
                <img
                  src="../assests/H3.png"
                  alt="Hobby 1"
                  className="object-cover w-80 h-80 rounded-full hover:border-8 hover:border-green"
                />
                <h3 className="text-2xl font-cursive">Photography</h3>
                <p className="object-cover w-80 font-zcool">
                  Capturing the world through the lens of a camera is my
                  passion. I find joy in this art , where I can freeze moments
                  in time and tell stories without words.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
