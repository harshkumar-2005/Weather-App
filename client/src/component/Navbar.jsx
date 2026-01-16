import React from "react";
import logo from "../assets/image.png";

function Navbar() {
  return (
    <div className="bg-linear-to-r from-red-500 to-orange-400 flex items-center px-3 py-2 text-amber-100">
      <img
        src={logo}
        alt="Weather App logo"
        className="h-6 w-6 rounded-full object-cover"
      />

      <span className="ml-3 text-xl font-extrabold">Weather App</span>

      <div className="flex gap-3 ml-auto">
        <button className="border px-2 rounded-lg hover:bg-white/10">
          Docs
        </button>
        <button className="border px-2 rounded-lg hover:bg-white/10">
          Sign up
        </button>
        <button className="border px-2 rounded-lg hover:bg-white/10">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
