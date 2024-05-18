import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 backdrop-blur-lg border-b border-neutral-700/20 z-50">
      <div className="container p-4 relative px-4 mx-auto text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" width={60} height={10} />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center hidden lg:block space-x-4">
            <a className="border-2 px-4 py-2 rounded-xl border-gray-200" href="#h">
              Sign in
            </a>
            <a
              className="p-2 border-2 border-[#FB6407] bg-gradient-to-r from-[#FB6407] to-[#FD9D16] text-black rounded-xl"
              href="#h"
            >
              Create an Account
            </a>
          </div>
          <div className="flex items-center lg:hidden">
            <button onClick={handleMenuClick}>
              {menuOpen ? <RiCloseLine size={30} /> : <RiMenu3Fill size={22} />}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        {menuOpen && (
          <div className="fixed right-0 space-y-10 w-screen min-h-screen bg-[#171616] flex flex-col items-center pt-[25vh] lg:hidden">
            <ul className="space-y-10 text-center gap-10 text-white text-lg">
              {navItems.map((link, index) => (
                <li  key={index}>
                  <a href={link.href} onClick={handleMenuClick}>
                    {link.label}
                  </a>
                </li>
              ))}
              <div className="flex items-center gap-6 justify-center flex-row">
                <a className="border-2 px-4 py-2 rounded-xl border-gray-200" href="#h" onClick={handleMenuClick}>
                  Sign in
                </a>
                <a
                  className="p-2 border-2 border-[#FB6407] bg-gradient-to-r from-[#FB6407] to-[#FD9D16] text-black rounded-xl"
                  href="#h"
                  onClick={handleMenuClick}
                >
                  Create an Account
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;