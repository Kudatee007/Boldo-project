import React from "react";
import cool from "../images/coolFeature.svg";
import evenCooler from "../images/evenCooler.svg";
import cool2 from "../images/coolFeature2.svg";
import arrow from "../images/arrow-right.svg";
import messi from "../images/messi.svg";
import score from "../images/scorecheck.svg";
import star1 from "../images/star1.svg";
import star from "../images/star.svg";
import sun from "../images/sun.svg";
import fineLady from "../images/finelady.svg";

const Homepage2 = () => {
  return (
    <div className="pt-16 px-7 lg:px-20 sm:px-12">
      <div className="text-center">
        <h6 className="font-sans not-italic font-normal text-sm text-slate-500 pb-5 sm:text-lg">
          Our Services
        </h6>
        <h1 className="font-Manrope not-italic font-light text-4xl leading-tight w-2/3 m-auto sm:text-5xl sm:w-auto xl:w-3/4">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center py-16 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-0">
        <div>
          <img src={cool} alt="" />
          <h2 className="text-black pt-5 pb-1 text-2xl font-extralight">Cool feature title</h2>
          <p className="text-slate-400 w-60 text-lg">
            Learning curvenetwork effects return on investments.
          </p>
          <div className="flex gap-2 py-5">
          <h5 className="underline underline-offset-8 decoration-black font-sans not-italic text-2xl font-medium">
              Explore page
            </h5>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div>
          <img src={evenCooler} alt="" />
          <h2 className="text-black pt-5 pb-1 text-2xl font-extralight">Even cooler feature</h2>
          <p className="text-slate-400 w-60 text-lg">
            Learning curvenetwork effects return on investments.
          </p>
          <div className="flex gap-2 py-5">
            <h5 className="underline underline-offset-8 decoration-black font-sans not-italic text-2xl font-medium">
              Explore page
            </h5>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div>
          <img src={cool2} alt="" />
          <h2 className="text-black pt-5 pb-1 text-2xl font-extralight">Cool feature title</h2>
          <p className="text-slate-400 w-60 text-lg">
            Learning curvenetwork effects return on investments.
          </p>
          <div className="flex gap-2 py-5">
          <h5 className="underline underline-offset-8 decoration-black font-sans not-italic text-2xl font-medium">
              Explore page
            </h5>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-28 xl:px-16 lg:flex-row lg:items-center lg:gap-20 xl:gap-40 lg:justify-center lg:space-between">
        <div className="lg:w-2/4">
          <img src={messi} alt="" />
        </div>
        <div className="lg:w-9/12 xl:w-6/12 lg:w-2/4">
         
          <h1 className="font-sans not-italic font-light text-3xl xl:leading-snug py-7 text-black lg:text-4xl xl:w-11/12">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex gap-4 items-center pb-4">
            <img src={score} alt="" />
            <h6>We connect our customers with the best.</h6>
          </div>
          <div className="flex gap-4 items-center pb-4">
            <img src={score} alt="" />
            <h6>Advisor success customer launch party.</h6>
          </div>
          <div className="flex gap-4 items-center pb-4">
            <img src={score} alt="" />
            <h6>Business-to-consumer long tail.</h6>
          </div>
          <div class="flex justify-center lg:justify-start">
          <button className="bg-slate-900 w-2/4 h-16 rounded-full text-white mt-7 text-2xl">
            Start now
          </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-28 xl:px-16 lg:flex-row-reverse lg:items-center lg:gap-20 xl:gap-40 lg:justify-center lg:space-between">
      <div className="lg:w-2/4">
            <img src={fineLady} alt="" />
        </div>
        <div className="lg:w-2/4 lg:w-8/12 xl:w-6/12">
        <h1 className="font-sans not-italic font-light text-3xl xl:leading-snug py-7 text-black lg:text-4xl xl:w-11/12">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex gap-2 p-4 items-center bg-slate-900 mb-5">
            <img src={star1} alt="" />
            <h6 className="text-white text-sm">We connect our customers with the best.</h6>
          </div>
          <div className="flex gap-2 p-4 items-center bg-white mb-5 drop-shadow-2xl">
            <img src={star} alt="" />
            <h6 className="text-black text-sm">Advisor success customer launch party.</h6>
          </div>
          <div className="flex gap-3 p-4 items-center bg-white drop-shadow-2xl">
            <img src={sun} alt="" />
            <h6 className="text-black text-sm">Business-to-consumer long tail.</h6>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Homepage2;
