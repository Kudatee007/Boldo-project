import React from "react";
import heroGraphics from "../images/hero graphics.svg";
import boldoLight from "../images/boldolight.svg";
import prestoLight from "../images/prestolight.svg";
import boldoThick from "../images/boldothick.svg";
import prestoThick from "../images/prestothick.svg";
import boldo2 from "../images/boldothick2.svg";
import prestoHalf from "../images/prestohalf.svg";
import Navbar from "./Navbar";

const Hompage1 = () => {
  return (
    <div className="relative px-7 lg:px-20 sm:px-12 bg-[url('/src/images/backgrounddark.svg')] bg-no-repeat bg-slate-800 bg-right-top">
      <Navbar />
      <div className="flex flex-col gap-10 md:flex-row lg:gap-0 items-center py-7">
        <div className="">
          <h1 className="text-white lg:w-11/12 xl:w-9/12 text-5xl leading-snug">
            Save time by building fast with Boldo Template{" "}
          </h1>
          <p className="text-zinc-400 w-10/12 lg:w-9/12 xl:w-8/12 pt-2 pb-8">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row">
           <a href="#temPlate"> <button
              className="w-60 h-16 bg-green-400 rounded-full font-sans font-bold not-italic text-lg"
              style={{ border: "2px solid #69E6A6" }}
            >
              Buy template
            </button></a>
            <button className="w-60 sm:w-40 text-white border border-white rounded-full h-16 font-sans font-bold not-italic text-lg border-2">
              Explore
            </button>
          </div>
        </div>
        <div>
          <img src={heroGraphics} alt="" className="w-full sm:max-w-7xl"/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-7 justify-items-center sm:grid-cols-3 lg:grid-cols-6 py-20">
        <img src={boldoLight} alt="" className="opacity-20" />
        <img src={prestoLight} alt="" className="opacity-40" />
        <img src={boldoThick} alt="" />
        <img src={prestoThick} alt="" />
        <img src={boldo2} alt="" />
        <img src={prestoHalf} alt="" className="opacity-20" />
      </div>
    </div>
  );
};

export default Hompage1;
