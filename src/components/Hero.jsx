import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="justify-center flex flex-col items-center text-center lg:mt-20 mt-10 lg:p-0 pt-16">
      <h1 className="lg:text-7xl text-5xl font-semibold mb-10">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orangeText to-red-800 text-transparent bg-clip-text">
          {" "}
          For Developers
        </span>
      </h1>
      <p className="text-zinc-400 lg:text-lg text-md max-w-2xl ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
        placeat? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facilis, placeatfaff?
      </p>
      <div className="flex justify-center gap-8 lg:mt-10 mt-2 mb-8 items-center">
        <a
          href="#t"
          className="bg-gradient-to-r from-orangeText to-red-800 text-white py-3 px-5 rounded-2xl"
        >
          Start for free
        </a>
        <a href="#t" className="border-2 border-gray-200 py-3 px-4 rounded-2xl">
          Documentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl justify-center mt-8 lg:mt-10 gap-12">
        <video
          autoPlay
          loop
          className="rounded-xl md:w-1/2 h-auto object-cover border-red-800 border-2"
          src={video1}
        ></video>
        <video
          autoPlay
          loop
          className="rounded-xl md:w-1/2 h-auto object-cover border-red-800 border-2"
          src={video2}
        ></video>
      </div>
    </div>
  );
};

export default Hero;
