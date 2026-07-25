import React from "react";
import logo from "../assets/hero.png";
import ramillogo from "../assets/ramillogo.png";

const Header = () => {
  return (
    <div>
      <div className="w-[100%] h-12 bg-blue-950 flex flex-row justify-between place-items-center">
        <div className="w-[3%] ml-3 text-pink-500">
          <img className="" src={ramillogo} alt="logo" />
        </div>
        <nav className="w-[50%] flex flex-row justify-end gap-5">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>

        <div>
          <button className="mr-1 bg-pink-500 text-white p-2 rounded-md">
            Sign Up
          </button>
          <button className="mr-5 bg-pink-500 text-white p-2 rounded-md">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
