import React from 'react';
import { pricingOptions } from '../constants/index';

const Price = () => {
  return (
    <div className=' flex justify-center items-center w-full'>
      <div className='w-[80%]'>
        <h1 className='text-5xl font-semibold text-center py-14 pb-[6vw]'>Pricing</h1>
        <div className="grid gap-10 justify-center items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingOptions.map((item, index) => (
            <div key={index} className="border-2 p-12 border-gray-600 shadow-xl rounded-2xl w-full">
              <h1 className='text-2xl mb-4'>
                {item.title}
                {item.title === "Pro" && <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-lg bg-clip-text text-transparent'> - Most Popular</span>}
              </h1>
              <p className='text-4xl font-bold mb-4 '>{item.price} / month</p>
              <ul className='list-disc gap-6 list-inside mb-6'>
                {item.features.map((feature, i) => (
                  <li key={i} className='pt-4 text-lg'>{feature}</li>
                ))}
              </ul>
              <button
                className={`py-2 px-4 w-full  rounded ${
                  item.title === "Pro"
                    ? 'bg-gradient-to-r  to-orange-800 from-orange-400  text-white'
                    : 'bg-transparent border border-gray-600 text-white hover:text-black hover:bg-gray-200'
                }`}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
