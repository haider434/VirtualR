import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from '../constants/index';

const Footer = () => {
  return (
    <div className="mt-20 border-t border-t-gray-300 p-10">
      <div className="grid gap-8  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-[100vw] lg:w-[70%] mx-auto justify-center">
        <div>
          <h1 className="text-xl">Resources</h1>
          <ul className="flex flex-col gap-4 mt-4">
            {resourcesLinks.map((link, index) => (
              <a href={link.href} className="text-sm text-gray-400" key={index}>
                {link.text}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl ">Platform Links</h1>
          <ul className="flex flex-col gap-4 mt-4">
            {platformLinks.map((link, index) => (
              <a href={link.href} className="text-sm text-gray-400" key={index}>
                {link.text}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl">Community Links</h1>
          <ul className="flex flex-col gap-4 mt-4">
            {communityLinks.map((link, index) => (
              <a href={link.href} className="text-sm text-gray-400" key={index}>
                {link.text}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
