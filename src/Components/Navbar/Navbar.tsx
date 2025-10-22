import React from "react";
import logo from "./logo1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="relative container mx-auto p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
              <Link to="/">
                  <img src={logo} alt="" />
            </Link>
            <div className="hidden font-bold lg:flex">
              {/* <a href="" className="text-black hover:text-darkBlue">
                Dashboard
              </a> */}
              <Link to="/search" className="text-lightGreen hover:text-darkGreen">
                Search
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="text-lightGreen hover:text-lightGreen">Login</div>
            {/* <a
              href=""
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </a> */}
          <button className="px-8 py-3 font-bold text-white bg-lightGreen border border-gray-300 rounded shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Signup
          </button>
      {/* <button className="relative px-10 py-3 font-medium text-white transition duration-300 ease-out group">
        <span className="absolute inset-0 w-full h-full rounded-lg opacity-50 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-70 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-100 group-hover:rotate-180"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 group-hover:opacity-0"></span>
        <span className="relative">Aurora</span>
      </button> */}
      {/* <button className="relative px-8 py-4 rounded-xl bg-white text-black font-bold text-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-100 ease-linear hover:translate-y-1 hover:shadow-[0_10px_25px_rgba(8,_112,_184,_0.6)] active:translate-y-2 active:shadow-[0_5px_12px_rgba(8,_112,_184,_0.5)]">
        3D Push
      </button> */}
      {/* <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-lightGreen-600 transition duration-300 ease-out border-2 border-lightGreen rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lightGreen group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-lightGreen transition-all duration-300 transform group-hover:translate-x-full ease">Signup</span>
        <span className="relative invisible">Signup</span>
      </button> */}
      {/* <button className="relative px-10 py-3 font-medium text-white transition duration-300 ease-out group">
        <span className="absolute inset-0 w-full h-full rounded-lg opacity-50 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-70 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-100 group-hover:rotate-180"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 group-hover:opacity-0"></span>
        <span className="relative">Aurora</span>
      </button> */}
          </div>
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;
