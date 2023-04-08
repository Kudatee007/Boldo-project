import React, { useState } from "react";
import boldoLogo from "../images/Logo.svg";
import ham from "../images/appnodesync.com by html.to.design ❤️ FREE version - 25/02/Group.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="other-page-navbar">
      <nav className="py-10 md:flex md:items-center md:justify-between relative">
        <div className="flex justify-between items-center">
          <Link to="/">
            {" "}
            <div>
              <img src={boldoLogo} alt="" className="h-10" />
            </div>
          </Link>
          <div className="md:hidden block border p-2" onClick={toggleMenu}>
            <img src={ham} alt="" className="w-5"/>
          </div>
        </div>

        <ul
          className={`md:flex md:items-center z-[-1] md:z-auto md:static w-full md:w-auto md:py-0 py-4 md:pl-o pl-7 md:block ${
            showMenu ? "block items-center top-[80px]" : "hidden top-[-400px]"
          } transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            {" "}
            <h1 className="text-white text-xl hover:text-slate-500 duration-500">
              Product
            </h1>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <h1 className="text-white text-xl hover:text-slate-500 duration-500">
              Services
            </h1>
          </li>
          <Link to="/about">
            <li className="mx-4 my-6 md:my-0">
              {" "}
              <h1 className="text-white text-xl hover:text-slate-500 duration-500">
                About
              </h1>
            </li>
          </Link>
          <button className="bg-white w-32 h-11 rounded-3xl Open Sans font-semibold text-base md:mx-4 hover:text-white hover:bg-slate-400 duration-500">
            Log In
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
