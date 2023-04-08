import React from "react";
import footerLogo from "../images/footerLogo.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="relative bg-[url('/src/images/footeresclipse.svg')] bg-no-repeat bg-right-top text-center bg-slate-800 mx-5 my-12 lg:mx-12 lg:my-16 xl:mx-20 xl:my-32 rounded-xl py-16">
        <h1 className="font-sans not-italic text-5xl text-white font-light xl:w-3/5 m-auto leading-tight">
          An enterprise template to ramp up your company website
        </h1>
        <div className="flex flex-col md:flex-row gap-5 justify-center pt-14 px-5">
          <input
            type="text"
            placeholder="Your email address"
            className="md:w-96 h-16 rounded-full pl-10 text-xl text-black"
          />
         <div className="text-center">
         <button className="text-black text-xl bg-green-300 w-72 md:w-48 h-16 rounded-full">
            Start now
          </button>
         </div>
        </div>
      </div>


      <div className="grid  grid-cols-2 px-7 gap-10 justify-items-center py-16 lg:grid-cols-4 lg:px-20">
        <div className="col-span-2 lg:col-span-1 md:px-10">
          <img src={footerLogo} alt="" />
          <p className="font-sans not-italic font-light text-slate-500 text-lg pt-10 pb-12 xl:pb-14 lg:w-64 xl:w-80">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg">
            All rights reserved.
          </h6>
        </div>

        <div className="">
          <h2 className="font-sans not-italic font-semibold text-xl">
            Landings
          </h2>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg py-10">
            Home
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg">
            Products
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg py-10">
            Services
          </h6>
        </div>
        <div className="">
          <h2 className="font-sans not-italic font-semibold text-xl">
            Company
          </h2>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg py-10">
            Home
          </h6>
          <div className="flex gap-2">
            <h6 className="font-sans not-italic font-light text-slate-500 text-lg">
              Careers
            </h6>
            <h5 className="bg-green-300 py-1 px-4 rounded-full text-sm">Hiring!</h5>
          </div>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg py-10">
            Services
          </h6>
        </div>
        <div>
          <h2 className="font-sans not-italic font-semibold text-xl">
            Resources
          </h2>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg py-10">
            Blog
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg">
            Products
          </h6>
          <h6 className="font-sans not-italic font-light text-slate-500 text-lg py-10">
            Services
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
