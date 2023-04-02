import React from "react";
import footerLogo from "../images/footerLogo.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="text-center bg-slate-800 mx-20 my-32 rounded-xl py-16">
        <h1 className="font-sans not-italic text-5xl text-white font-light w-3/5 m-auto leading-tight">
          An enterprise template to ramp up your company website
        </h1>
        <div className="flex gap-5 justify-center pt-14">
          <input
            type="text"
            placeholder="Your email address"
            className="w-96 h-16 rounded-full pl-10 text-xl text-black"
          />
          <button className="text-black text-xl bg-green-300 w-48 h-16 rounded-full">
            Start now
          </button>
        </div>
      </div>

      {/* <div className="flex justify-between p-20 gap-48 box-border"> */}
      <div className="grid gap-3 grid-cols-4 px-24 py-16">
        <div>
          <img src={footerLogo} alt="" />
          <p className="font-sans not-italic font-light text-slate-500 text-lg w-80 pt-12 pb-16">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80">
            All rights reserved.
          </h6>
        </div>

        <div className="ml-40">
          <h2 className="font-sans not-italic font-semibold text-xl w-80">
            Landings
          </h2>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80 py-10">
            Home
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80">
            Products
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80 py-10">
            Services
          </h6>
        </div>
        <div className="ml-20">
          <h2 className="font-sans not-italic font-semibold text-xl w-80">
            Company
          </h2>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80 py-10">
            Home
          </h6>
          <div className="flex justify-between">
            <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80">
              Careers
            </h6>
            {/* <h5>Hiring!</h5> */}
          </div>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80 py-10">
            Services
          </h6>
        </div>
        <div>
          <h2 className="font-sans not-italic font-semibold text-xl w-80">
            Resources
          </h2>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80 py-10">
            Blog
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80">
            Products
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg w-80 py-10">
            Services
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
