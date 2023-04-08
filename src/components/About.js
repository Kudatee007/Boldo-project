import React from "react";
import about333 from "../images/about333.svg";
import dwight from "../images/dwight.svg";
import pam from "../images/pam.svg";
import Navbar2 from "./Navbar2";

const About = () => {
  return (
    <div className="relative">
      <div className="relative bg-green-300 pb-16 sm:px-16  xl:px-24 sm:pb-24">
        <Navbar2 />
        <h6 className="font-sans not-italic font-light text-lg text-center text-black md:text-xl pb-3 lg:flex lg:justify-start sm:pt-10">
          About
        </h6>
        <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-14 xl:gap-40">
          <h1 className="font-Manrope not-italic font-light text-black text-4xl md:text-5xl w-3/4 lg:w-auto leading-tight lg:leading-snug m-auto">
            We love to make great things, things that matter.
          </h1>
          <p className="text-black w-10/12 m-auto lg:w-9/12 lg:w-64 lg:leading-normal xl:w-8/12 pt-2 pb-8">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>
      <div className="py-16 md:py-24 px-4">
        <div className="text-center">
          <h6 className="font-sans not-italic font-light text-lg text-black md:text-xl pb-3">
            Our numbers
          </h6>
          <h1 className="font-Manrope not-italic font-light text-black text-4xl md:text-5xl lg:w-auto leading-tight lg:leading-snug m-auto lg:w-3/4">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center pt-16 sm:flex-row xl:gap-40">
          <div>
            <h1 className="text-6xl font-light md:text-7xl lg:text-8xl">
              120m
            </h1>
            <p className="text-md text-slate-700 font-light md:text-xl">
              Cool featute title
            </p>
          </div>
          <div>
            <h1 className="text-6xl font-light md:text-7xl lg:text-8xl">
              10.000
            </h1>
            <p className="text-md text-slate-700 font-light md:text-xl">
              Cool featute title
            </p>
          </div>
          <div>
            <h1 className="text-6xl font-light md:text-7xl lg:text-8xl">240</h1>
            <p className="text-md text-slate-700 font-light md:text-xl">
              Cool featute title
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-20 px-7 md:px-20 lg:py-24 lg:px-32 xl:px-72 xl:py-36">
        <h3 className="font-sans not-italic font-light text-lg text-slate-300 md:text-xl pb-3">
          Our story
        </h3>
        <h1 className="font-Manrope not-italic font-light text-white text-4xl w-5/6 pb-8 md:text-5xl leading-tight lg:leading-snug">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <p className="text-slate-300 font-sans not-italic font-light text-lg md:text-xl">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.{" "}
        </p>
      </div>

      <div>
        <div className="py-20 px-7 md:px-20 lg:py-24 lg:px-32 xl:px-72 xl:py-16">
          <h3 className="font-sans not-italic font-light text-lg text-slate-500 md:text-xl pb-3">
            Our team
          </h3>
          <h1 className="font-Manrope not-italic font-light text-black text-4xl w-5/6 pb-8 md:text-5xl leading-tight lg:leading-snug">
            The people behind the work
          </h1>
          <p className="text-slate-500 font-sans not-italic font-light text-lg md:text-xl">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        <div className="flex flex-col gap-12 items-center justify-between sm:flex-row sm:px-10 sm:gap-5 lg:gap-28 xl:gap-24x lg:px-20 xl:px-64">
          <div>
            <img src={about333} alt="" />
            <h1 className="text-xl font-light py-3 lg:py-5 lg:text-3xl">
              Micheal Scott
            </h1>
            <h6 className="text-sm text-slate-500 lg:text-xl">
              General Manager
            </h6>
          </div>
          <div>
            <img src={about333} alt="" />
            <h1 className="text-xl font-light py-3 lg:py-5 lg:text-3xl">
              Micheal Scott
            </h1>
            <h6 className="text-sm text-slate-500 lg:text-xl">
              General Manager
            </h6>
          </div>
          <div>
            <img src={about333} alt="" />
            <h1 className="text-xl font-light py-3 lg:py-5 lg:text-3xl">
              Micheal Scott
            </h1>
            <h6 className="text-sm text-slate-500 lg:text-xl">
              General Manager
            </h6>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-24 sm:grid-cols-2 justify-items-center md:gap-x-20 lg:gap-x-32 xl:gap-x-52 sm:gap-12 sm:px-10 lg:px-20 xl:px-64">
          <div className="flex gap-6 items-center">
            <img src={dwight} alt="" />
            <div>
              <h1 className="text-xl font-light py-2 lg:text-3xl">
                Dwight Schrute
              </h1>
              <h6 className="text-sm text-slate-500 lg:text-xl">
                General Manager
              </h6>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src={pam} alt="" />
            <div>
              <h1 className="text-xl font-light py-2 lg:text-3xl">
                Pam Beetsley
              </h1>
              <h6 className="text-sm text-slate-500 lg:text-xl">
                General Manager
              </h6>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src={pam} alt="" />
            <div>
              <h1 className="text-xl font-light py-2 lg:text-3xl">
                Pam Beetsley
              </h1>
              <h6 className="text-sm text-slate-500 lg:text-xl">
                General Manager
              </h6>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src={pam} alt="" />
            <div>
              <h1 className="text-xl font-light py-2 lg:text-3xl">
                Pam Beetsley
              </h1>
              <h6 className="text-sm text-slate-500 lg:text-xl">
                General Manager
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 py-16">
          <div className="text-center">
            <h6 className="font-sans not-italic font-light text-lg text-white md:text-xl pb-3">
              Our Blog
            </h6>
            <h1 className="font-Manrope not-italic font-light text-white text-4xl sm:w-3/4 xl:w-3/4 md:text-5xl lg:w-auto leading-tight lg:leading-snug m-auto lg:w-3/4">
              Value proposition accelerator product management venture
            </h1>
          </div>
          <div className="px-7 md:px-20 lg:px-32 xl:px-40">
            <hr className="mt-12" />
            <div className="pt-12 sm:flex sm:justify-between sm:gap-20 md:gap-28 lg:gap-0">
              <h1 className="font-Manrope not-italic font-light text-white text-3xl text-center pb-3 sm:text-start lg:text-4xl xl:text-5xl">
                We are <span className="text-green-300">commited.</span>
              </h1>
              <p className="text-slate-400 text-md lg:w-96 lg:text-xl xl:w-2/4">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.{" "}
              </p>
            </div>
            <div className="pt-12 sm:flex sm:justify-between sm:gap-20 md:gap-28 lg:gap-0">
              <h1 className="font-Manrope not-italic font-light text-white text-3xl text-center pb-3 sm:text-start lg:text-4xl xl:text-5xl">
                We are <span className="text-green-300">commited.</span>
              </h1>
              <p className="text-slate-400 text-md lg:w-96 lg:text-xl xl:w-2/4">
                Mass market iPhone buzz conversion analytics stock iteration
                responsive web design user experience business plan handshake.
                Return on investment seed round MVP backing supply chain.
              </p>
            </div>
            <div className="pt-12 sm:flex sm:justify-between sm:gap-20 md:gap-28 lg:gap-0">
              <h1 className="font-Manrope not-italic font-light text-white text-3xl text-center pb-3 sm:text-start lg:text-4xl xl:text-5xl">
                We are <span className="text-green-300">commited.</span>
              </h1>
              <p className="text-slate-400 text-md lg:w-96 lg:text-xl xl:w-2/4">
                Bootstrapping rockstar first mover advantage business model
                canvas alpha deployment launch party beta facebook metrics
                gamification growth hacking customer focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
