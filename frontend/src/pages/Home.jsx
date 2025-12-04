import React from "react";
import Profile from "../assets/profile.svg";
import Linkedin from "../assets/linkedin.svg";
import Outlook from "../assets/outlook.svg";
import Github from "../assets/github.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="w-full h-full flex items-center px-28">
      <div className="w-full h-full flex items-center justify-between">
        {/* Left container */}
        <div className="flex flex-col gap-15">
          {/* welcome message */}
          <div className="text-[#262626]">
            <div className="text-[28px] font-thin">Hey there!</div>
            <div className="text-[64px] font-bold">I AM CHINGSIEN LY </div>
            <div className="text-[28px] font-thin">
              <span className="text-rotate ">
                <span className="">
                  <span>SOFTWARE ENGINEER</span>
                  <span>FULLSTACK DEVELOPER</span>
                </span>
              </span>
            </div>
          </div>
          {/* Skill container */}
          <div className="flex justify-between">
            {/* 1 container */}
            <div className="bg-[#F9FAFF] p-5 rounded-xl w-40 h-[134px] flex flex-col items-center justify-between">
              <div className="text-[36px] font-bold text-[#4070F4]">HD</div>
              <div className=" text-black text-[17px]">Website topics</div>
            </div>
            {/* 2 container */}
            <div className="bg-[#F9FAFF] p-5 rounded-xl w-40 h-[134px] flex flex-col items-center justify-between">
              <div className="text-[36px] font-bold text-[#4070F4]">10+</div>
              <div className=" text-black text-[17px]">Github projects</div>
            </div>
            {/* 3 container */}
            <div className="bg-[#F9FAFF] p-5 rounded-xl w-40 h-[134px] flex flex-col items-center justify-between">
              <div className="text-[36px] font-bold text-[#4070F4]">9/10</div>
              <div className=" text-black text-[17px]">Satisfaction</div>
            </div>
          </div>
          {/* social container */}
          <div className="flex gap-13 cursor-pointer">
            {/* first social */}
            <Link>
              <img src={Linkedin} alt="linkedin" />
            </Link>
            {/* second social */}
            <Link>
              <img src={Github} alt="github" />
            </Link>
            {/* third social */}
            <Link>
              <img src={Outlook} alt="outlook" />
            </Link>
          </div>
          <div className="flex items-center gap-9 ">
            <Link
              to="/contact"
              className="bg-[#4B7CF7] px-13 py-5 rounded-lg text-white font-bold text-[20px] cursor-pointer"
            >
              Contact Me
            </Link>
            <Link
              to="/portfolio"
              className="bg-[#4B7CF7] px-13 py-5 rounded-lg text-white font-bold text-[20px] cursor-pointer"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        {/* right container */}
        <div className="hover-3d z-10">
          <figure className="w-[490px] rounded-2xl">
            <img src={Profile} alt="profile" />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
