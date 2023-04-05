import React from "react";
import arrowLeft from "../images/arrowleft1.svg";
import arrowRight from "../images/arrowright1.svg";
import test1 from "../images/Testimonial1.svg";
import test2 from "../images/Testimonial2.svg";
import test3 from "../images/Testimonial3.svg";
import fullimage from "../images/fullimage.svg";
import dropDown from "../images/dropdown.svg";
import category1 from "../images/category1.svg";
import category2 from "../images/category2.svg";
import category3 from "../images/category3.svg";
import chandler from "../images/chandler.svg";
import rachel from "../images/rachel.svg";
import monica from "../images/monica.svg";

const Homepage3 = () => {
  return (
    <div>
      <div className="bg-slate-900 py-20 px-5 md:px-10 xl:px-40">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="font-sans not-italic font-normal text-5xl text-white md:w-3/5 leading-snug">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex justify-between content-end gap-6 pt-20">
            <img src={arrowLeft} alt="" />
            <img src={arrowRight} alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center md:flex-row md:justify-between mt-10">
          <div>
            <img src={test1} alt="" />
          </div>
          <div>
            <img src={test2} alt="" />
          </div>
          <div>
            <img src={test3} alt="" />
          </div>
        </div>
      </div>

      <div className="px-5 py-10 md:px-10 xl:px-40 md:pt-20 xl:pt-32">
        <img src={fullimage} alt="" className="w-full" />
        <div className="flex flex-col md:gap-20 md:flex-row py-20 items-center">
          <div className="pb-10 md:w-1/2">
            <h1 className="font-sans font-light not-italic text-black text-4xl  leading-tight md:leading-snug">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center justify-between items-center">
              <h4 className="md:text-xl font-thin">
                We connect our customers with the best?
              </h4>
              <img src={dropDown} alt="" />
            </div>
            <hr className="my-5" />
            <div className="flex items-center justify-between pt-5">
              <h4 className="md:text-xl font-thin">
                Android research & development rockstar?
              </h4>
              <img src={dropDown} alt="" />
            </div>
            <hr className="my-5" />
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 xl:px-40">
        <div className="text-center">
          <h6 className="font-sans not-italic font-normal text-lg md:text-xl text-slate-500 pb-3">
            Our Blog
          </h6>
          <h1 className="font-Manrope not-italic font-light text-4xl md:text-5xl md:w-3/4 leading-tight md:leading-snug m-auto">
            Value proposition accelerator product management venture
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row md:justify-between md:gap-10 pt-20 pb-20 md:items-center xl:px-16">
          <div>
            <img src={category1} alt="" />
            <h3 className="font-sans not-italic font-bold text-lg text-black pt-5 pb-4">
              Category{" "}
              <span className="font-light text-slate-700">
                November 22, 2021
              </span>
            </h3>
            <p className="w-60 text-xl font-light text-black">
              Pitch termsheet backing validation focus release.
            </p>
            <div className="flex items-center gap-4">
              <img src={chandler} alt="" />
              <p className="text-lg font-light">Chandler Bing</p>
            </div>
          </div>
          <div>
            <img src={category2} alt="" />
            <h3 className="font-sans not-italic font-bold text-lg text-black pt-5 pb-4">
              Category{" "}
              <span className="font-light text-slate-700">
                November 22, 2021
              </span>
            </h3>
            <p className="w-60 text-xl font-light text-black">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="flex items-center gap-4">
              <img src={chandler} alt="" />
              <p className="text-lg font-light">Rachel Green</p>
            </div>
          </div>
          <div>
            <img src={category3} alt="" />
            <h3 className="font-sans not-italic font-bold text-lg text-black pt-5 pb-4">
              Category{" "}
              <span className="font-light text-slate-700">
                November 22, 2021
              </span>
            </h3>
            <p className="w-60 text-xl font-light text-black">
              Beta prototype sales ipad gen-z marketing network effects value
              proposition.
            </p>
            <div className="flex items-center gap-4">
              <img src={chandler} alt="" />
              <p className="text-lg font-light">Monica Gellar</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="border border-slate-900 w-60 h-16 rounded-full border-2 font-sans not-italice font-bold text-lg text-slate-900">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage3;
