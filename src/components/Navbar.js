import React from "react";
import boldoLogo from "../images/Logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <img src={boldoLogo} alt="" />
      <div className="flex justify-between gap-10 items-center Open Sans font-semibold text-base">
        <h1 className="text-white">Product</h1>
        <h1 className="text-white">Services</h1>
        <h1 className="text-white">About</h1>
        <button className="bg-white w-32 h-11 rounded-3xl Open Sans font-semibold text-base">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
