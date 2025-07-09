import React from "react";
import main from '../assets/main.jpg'

const About = () => {
  return (
    <div id="about" className="relative w-[80%] left-10 md:left-[20%]">
      <h2 className="mt-15 text-2xl font-bold tracking-widest border-b-3 border-blue-300 mb-10 inline-block ml-3">
        About
      </h2>
      <p className="text-lg font-sans p-4 px-4">
        Hi, I’m Aman Chaurasiya — a passionate and curious developer who loves
        turning ideas into digital experiences. Whether it's designing intuitive
        UIs, building powerful backend systems, or solving real-world problems
        with code, I’m always eager to learn and improve. I have experience
        working with technologies like JavaScript, React, Node.js, Express,
        MongoDB, Tailwind CSS, and more. Currently, I’m focused on building
        full-stack web applications and exploring machine learning, IoT, and
        modern front-end tools. When I’m not coding, you’ll find me
        experimenting with new frameworks, contributing to open-source projects,
        or helping others in the community. 
      </p>
      <div className=" mt-10 w-full md:flex gap-7">
        <img src={main} className="h-78 md:ml-5" />
        <div className="w-full mt-5">
            <h2 className="text-3xl font-semibold">UI/UX Designer & Web Developer.</h2>
            <p className="mt-5">I believe in continuous learning,
                clean code, and building things that matter.
            </p>
            <div className="mt-6 w-full md:flex  gap-40">
                <ul className="flex flex-col gap-4">
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Birthday:</span>  1 feb 2005</li>
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Website:</span>  www.example.com</li>
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Phone :</span> +91 1412514578  </li>
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> City :</span>  Lucknow, UP, India</li>
                </ul>
                <ul className="flex mt-5 flex-col gap-4 md:pl-4">
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Age:</span>  20</li>
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Degree:</span>  B.Tech (Computer Science)</li>
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Email :</span> chaurasiyaaman741@gmail.com  </li>
                    <li><i className="fa-solid fa-greater-than text-blue-600"></i><span className="font-semibold text-lg"> Freelance :</span>  Available</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
