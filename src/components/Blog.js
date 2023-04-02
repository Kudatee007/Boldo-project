import React from "react";
import Navbar from "./Navbar";
import blogSquare from "../images/blogRectangle 1270.svg";
import chandler from "../images/chandler.svg";
import category1 from "../images/category1.svg";
import category2 from "../images/category2.svg";
import category3 from "../images/category3.svg";

const Blog = () => {
  return (
    <div className="px-20">
      <Navbar />
      <div className="text-center pt-10 pb-16">
        <h3 className="font-sans not-italic font-normal text-lg text-slate-500">
          Blog
        </h3>
        <h1 className="font-Manrope not-italic font-light text-7xl leading-tight m-auto">
          Thoughts and words
        </h1>
      </div>
      <div className="flex justify-between items-center gap-32">
        <img src={blogSquare} alt="" />
        <div>
          <h3 className="font-sans not-italic font-bold text-lg text-black py-3">
            Category{" "}
            <span className="font-light text-slate-700">November 22, 2021</span>
          </h3>
          <p className=" text-5xl font-light text-black leading-snug">
            Pitch termsheet backing validation focus release.
          </p>
          <div className="flex items-center gap-4 py-8">
            <img src={chandler} alt="" />
            <p className="text-lg font-light">Chandler Bing</p>
          </div>
        </div>
      </div>
      <hr className="mt-20 mb-20" />
      <div className="px-28">
        <h1 className="font-Manrope not-italic font-light text-5xl leading-tight m-auto pb-12">
          Latest news
        </h1>
        <div className="grid gap-3 grid-cols-3">
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
            <div className="flex items-center gap-4 py-16">
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
            <div className="flex items-center gap-4 py-3">
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
            <div className="flex items-center gap-4 py-10">
              <img src={chandler} alt="" />
              <p className="text-lg font-light">Monica Gellar</p>
            </div>
          </div>
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
            <div className="flex items-center gap-4 py-16">
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
            <div className="flex items-center gap-4 py-3">
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
            <div className="flex items-center gap-4 py-10">
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

export default Blog;
