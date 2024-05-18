import React from "react";
import { testimonials } from "../constants/index";

const Testimonials = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl lg:text-4xl font-medium py-6">
        What people are saying about Us
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-10 w-[90%] mx-auto ">
        {testimonials.map((testimonial,index)=>(
            <div key={index} className="p-8 border border-gray-500 rounded-xl">
                <p className="text-gray-400">{testimonial.text}</p>
                <div className="flex items-start mt-4">
                <img src={testimonial.image} alt="" className="w-16 mr-4 h-16 rounded-full" />
                <div className="justify-content items-center center">
                <h1>{testimonial.user} <br /></h1>
                <p className="text-gray-400 text-sm">
                    {testimonial.company}
                </p>
                </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
