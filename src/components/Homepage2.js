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
    <div className="pt-16 px-40">
      <div className="text-center">
        <h6 className="font-sans not-italic font-normal text-lg text-slate-500">
          Our Services
        </h6>
        <h1 className="font-Manrope not-italic font-light text-5xl leading-tight w-2/3 m-auto">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
      </div>
      <div className="flex justify-between py-16">
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

      <div className="flex justify-between items-center pt-20 xl:gap-80">
        <div>
          <img src={messi} alt="" />
        </div>
        <div>
          <h1 className="font-sans not-italic font-normal text-3xl w-96 leading-10 pb-8 text-black">
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
          <button className="bg-slate-900 w-40 h-10 rounded-full text-white mt-7">
            Start now
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-20 xl:gap-40">
        <div>
        <h1 className="font-sans not-italic font-normal text-3xl w-96 leading-10 pb-4 text-black">
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
        <div>
            <img src={fineLady} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
