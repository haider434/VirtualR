import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:px-0 lg:mt-20 mt-12 w-full">
      <div className="text-center flex flex-col mb-10">
        <span className="text-2xl font-semibold bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text">
          Features
        </span>
        <h1 className="lg:text-6xl text-4xl font-semibold lg:mt-14 mt-10">
          Easily Build
          <span className="bg-gradient-to-r from-orange-400 to-red-800 bg-clip-text text-transparent">
            {" "} your Code
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 justify-center gap-8 w-full">
        {features.map((feature, index) => (
          <div className="flex flex-col lg:w-1/3  xl:w-1/4 sm:w-1/2 w-full p-4" key={index}>
            <div className="flex items-start">
              <div className="p-4 rounded-full text-orangeText">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-semibold">{feature.text}</h1>
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
