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
    <div className="relative px-20 bg-[url('/src/images/backgrounddark.svg')] bg-no-repeat bg-slate-800 bg-right-top">
      <Navbar />
      <div className="flex justify-between gap-20 items-center">
        <div>
          <h1 className="text-white text-5xl w-9/12 leading-snug">
            Save time by building fast with Boldo Template{" "}
          </h1>
          <p className="text-zinc-400 w-10/12 pt-2 pb-8">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex gap-5">
            <button
              className="w-60 h-16 bg-green-400 rounded-full font-sans font-bold not-italic text-lg"
              style={{ border: "2px solid #69E6A6" }}
            >
              Buy template
            </button>
            <button className="w-40 text-white border border-white rounded-full h-16 font-sans font-bold not-italic text-lg border-2">
              Explore
            </button>
          </div>
        </div>
        <div>
          <img src={heroGraphics} alt="" className="w-screen max-w-lg" />
        </div>
      </div>

      <div className="flex justify-between py-20">
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
