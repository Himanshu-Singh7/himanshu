import React from "react";
import "./works.css";

function Works() {
  return (
    <div className=" flex bg-black">
      <div className="flex-shrink-0 w-full h-full flex flex-col bg-black  justify-start items-center relative">
        <h2 className="text-80px font-montserrat mt-0 text-white">
          What I've done
        </h2>
        <hr className="w-1/2 border-1 border-white my-4" />
        <div className="flex w-3/4 gap-4 my-10">
          <div className="flex flex-col w-1/3 mr-10 gap-4">
            {/* 1*/}
            <div className="bg-white h-80 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/1.Lozzby.jpg"
                alt="Project 1"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                  Lozzby
                  </p>
                  <p className="text-white font-cinzel text-md">
                  E-Commerce Application using Spring Boot, Hibernate/JPA, and Thymeleaf
                  </p>
                  <a
                    href="https://github.com/Himanshu-Singh7/Lozzby"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 2*/}
            <div className="bg-white h-64">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 2"
              />
            </div>
            {/* 3*/}
            <div className="bg-white h-80">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 3"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 gap-4">
            {/* 4*/}
            <div className="bg-white h-56 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/4.blogapi.png"
                alt="Project 4"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                   BlogApplication APIS
                  </p>
                  <p className="text-white font-cinzel text-md">
                  REST API Using SpringBoot, Spring Data JPA (Hibernate), SpringSecurity, JWT, and MySQL.
                  </p>
                  <a
                    href="https://github.com/Himanshu-Singh7/BlogAPI8"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 5*/}
            <div className="bg-white h-40 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/5.Strip.webp"
                alt="Project 5"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                  Stripe_Payment_Module
                  </p>
                  <p className="text-white font-cinzel text-md">
                  Stripe SANDBOX ACCOUNT payment_Module for testing using Spring Boot
                  </p>
                  <a
                    href="https://github.com/Himanshu-Singh7/Stripe_Payment_Module"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
           
            
            {/* 7*/}
            <div className="bg-white h-72 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/7.Marketing.png"
                alt="Project 7"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                  Markting_app
                  </p>
                  <p className="text-white font-cinzel text-md">
                  This Spring Boot app employs MVC architecture with JSP for views and Hibernate for seamless database interaction following JPA specs.
                </p>
                  <a
                    href="https://github.com/Himanshu-Singh7/Markting_app"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 ml-10 gap-4">
            {/* 8*/}
            <div className="bg-white h-72 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/8.Microservices.jpg"
                alt="Project 8"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                  Hotel_Project
                  </p>
                  <p className="text-white font-cinzel text-md">
                  Hotel project using spring Boot And MicroServices
                  </p>
                  <a
                    href="https://github.com/Himanshu-Singh7/Hotel_Project?tab=readme-ov-file#hotel_project"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 9*/}
            <div className="bg-white h-80">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 9"
              />
            </div>
            {/* 10*/}
            <div className="bg-white h-40">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
