import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const Homepage3 = () => {
  const slides = [test1, test2, test3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div>
      <div className="bg-slate-900 py-20 px-5 md:px-10 xl:px-40" id="temPlate">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="font-sans not-italic font-normal text-5xl text-white md:w-3/5 leading-snug">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex justify-between content-end gap-6 pt-20">
            <img src={arrowLeft} onClick={goToPreviousSlide} alt="" />
            <img src={arrowRight} onClick={goToNextSlide} alt="" />
          </div>
        </div>

        <div className="carousel-container relative">
          {/* show multiple images on desktop */}
          <div className="hidden md:flex justify-center items-center md:flex-row md:justify-between mt-10">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`${
                  index === currentSlide
                    ? "opacity-100 transition-opacity duration-500 ease-in-out"
                    : "opacity-50"
                }`}
              />
            ))}
          </div>
          {/* show one image on mobile */}
          <div className="mobile-image block md:hidden mt-10">
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
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
        <div className="grid grid-cols-1 justify-items-center py-16 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-0">
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
            <div className="flex items-center gap-4 py-5">
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
              Seed round direct mailing non-disclosure agreement.
            </p>
            <div className="flex items-center gap-4 py-5">
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
            <div className="flex items-center gap-4 py-5">
              <img src={chandler} alt="" />
              <p className="text-lg font-light">Monica Gellar</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/blog">
            <button className="border border-slate-900 w-60 h-16 rounded-full border-2 font-sans not-italice font-bold text-lg text-slate-900">
              Load more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage3;
