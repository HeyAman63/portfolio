import React, { useState } from "react";
import myimg from "../assets/aman.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ArrowUpIcon } from "lucide-react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

const Home = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const onClickhandelar = (e) => {
    setClick(true);
    setClick2(false);
    setClick1(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  return (
    <div className="">
      <Navbar/>
      <div className="md:w-[20%] bg-black text-white h-[100vh] hidden md:block fixed">
        <div className="flex flex-col items-center mt-10">
          <img
            src={myimg}
            className="h-30 w-30 object-cover rounded-full border-8 border-gray-800"
          />
          <h2 className="text-2xl pt-4 font-bold">Aman Chaurasiya</h2>
          <div className="flex gap-3 mt-5">
            <div className=" hover:bg-blue-400 transition duration-300 text-gray-200 rounded-full hover:cursor-pointer bg-gray-700 p-3">
              <a target="_blank" href="https://instagram.com/amanchaurasiya666"><i className="fa-brands fa-instagram text-lg py-1 px-1"></i></a>
              
            </div>
            <div className="hover:bg-blue-400 transition duration-300 text-gray-200 rounded-full hover:cursor-pointer bg-gray-700 p-3">
              <a href="https://x.com/aman6389?s=21"><i className="fa-brands fa-x-twitter text-lg py-1 px-1"></i></a>
              
            </div>
            <div className="hover:bg-blue-400 transition duration-300 text-gray-200 rounded-full hover:cursor-pointer bg-gray-700 p-3">
              <i className="fa-brands fa-facebook text-lg py-1 px-1"></i>
            </div>
            <div className="hover:bg-blue-400 transition duration-300 text-gray-200 rounded-full hover:cursor-pointer bg-gray-700 p-3">
              <a target="_blank" href="https://www.linkedin.com/in/HeyAman63/"><i className="fa-brands fa-linkedin text-lg py-1 px-1"></i></a>
              
            </div>
            <div className="hover:bg-blue-400 transition duration-300 text-gray-200 rounded-full hover:cursor-pointer bg-gray-700 p-3">
              <a target="_blank" href="https://github.com/HeyAman63"><i className="fa-brands fa-github text-lg py-1 px-1"></i></a>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10  text-gray-300 text-lg">
          <ul className="gap-6 flex flex-col w-full">
            <a
              href="#hero"
              id="Home"
              onClick={onClickhandelar}
              className="py-1 flex items-center group hover:cursor-pointer hover:text-white"
            >
              <i
              onClick={scrollTo(0,0)}
                className={`fa-solid fa-house pr-3 pl-10 group-hover:text-blue-300 ${
                  click ? "text-blue-300" : ""
                }`}
              ></i>
              <span onClick={scrollTo(0,0)} className="tracking-widest">Home</span>
            </a>
            <a
              href="#about"
              onClick={() => {
                setClick5(false);
                setClick(false);
                setClick2(false);
                setClick1(true);
                setClick3(false);
                setClick4(false);
              }}
              className="py-1 group hover:cursor-pointer hover:text-white tracking-widest"
            >
              <i
                className={`fa-solid fa-user pr-3 pl-10 group-hover:text-blue-300 ${
                  click1 ? "text-blue-300" : ""
                }`}
              ></i>
              About
            </a>
            <li
              id="resume"
              onClick={() => {
                setClick5(false);
                setClick2(true);
                setClick(false);
                setClick1(false);
                setClick3(false);
                setClick4(false); }}
              className="py-1 group hover:cursor-pointer hover:text-white tracking-widest"
            >
              <i
                className={`fa-regular fa-file-lines pl-10 pr-3 group-hover:text-blue-300 ${
                  click2 ? "text-blue-300" : ""
                }`}
              ></i>
              Resume
            </li>
            <li
              id="project"
              onClick={() => {
                setClick5(false);
                setClick2(false);
                setClick(false);
                setClick1(false);
                setClick3(true);
                setClick4(false);
              }}
              className="py-1 group hover:cursor-pointer hover:text-white tracking-widest"
            >
              <i
                className={`fa-solid fa-bars-progress pr-3 pl-10 group-hover:text-blue-300 ${
                  click3 ? "text-blue-300" : ""
                }`}
              ></i>
              Projects
            </li>
            <li
              id="service"
              onClick={() => {
                setClick5(false);
                setClick2(false);
                setClick(false);
                setClick1(false);
                setClick3(false);
                setClick4(true);
              }}
              className="py-1 group hover:cursor-pointer hover:text-white tracking-widest"
            >
              <i
                className={`fa-solid fa-gear pr-3 pl-10 group-hover:text-blue-300 ${
                  click4 ? "text-blue-300" : ""
                }`}
              ></i>
              Services
            </li>
            <a
              href="#contact"
              onClick={() => {
                setClick5(true);
                setClick2(false);
                setClick(false);
                setClick1(false);
                setClick3(false);
                setClick4(false);
              }}
              className="py-1 group hover:cursor-pointer hover:text-white tracking-widest"
            >
              <i
                className={`fa-solid fa-envelope pr-3 pl-10 group-hover:text-blue-300 ${
                  click5 ? "text-blue-300" : ""
                }`}
              ></i>
              Contact
            </a>
          </ul>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Home;
