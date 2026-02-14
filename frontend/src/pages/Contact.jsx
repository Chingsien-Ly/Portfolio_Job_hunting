import React from "react";
import Email from "../assets/email.svg";
import ThumbUp from "../assets/thumbs.svg";
import Linkedin from "../assets/linkedin.svg";
import Outlook from "../assets/outlook.svg";
import Github from "../assets/github.svg";
function Contact() {
  return (
    <div className="h-full w-full flex items-center justify-center px-28">
      <div className="w-full h-[90%] flex ">
        {/* Left container */}
        <div className="flex-1 flex flex-col items-center justify-center w-full gap-25">
          {/* Left upper container */}
          <div className="flex  flex-col gap-10 w-[80%]">
            <span className="text-5xl text-[#e57f49] font-semibold">
              Hire Me!
            </span>
            <span className=" text-3xl text-[#e57f49]">
              I'd like to hear from you!
            </span>
            <div className="flex flex-col text-xl text-gray-500">
              <span>If you have any inquiries or just want to</span>
              <span>say Hi, please use the contact form!</span>
            </div>
          </div>
          {/* Left down container */}
          <div className="flex w-[80%] flex-col gap-5">
            {/* first row */}
            <div className="flex gap-8 items-center">
              <img src={Email} alt="email" className="size-6" />
              <a
                href="mailto:Lysien707@gmail.com"
                className="text-lg underline"
              >
                Lysien707@gmail.com
              </a>
            </div>
            {/* Second row */}
            <div className="flex gap-7 items-center">
              <img src={ThumbUp} alt="thumbup" className="size-7" />
              <div className="flex gap-3">
                <img src={Linkedin} alt="linkedin" className="size-7" />
                <img src={Outlook} alt="outlook" className="size-7" />
                <img src={Github} alt="github" className="size-7" />
              </div>
            </div>
          </div>
        </div>
        {/* Right  container*/}
        <div className="flex-1 flex  justify-center flex-col gap-5">
          <div className="w-[90%] gap-2 flex flex-col">
            <div className="flex gap-5 w-full">
              <div className="flex-col flex flex-1">
                <label htmlFor="firstname">Firstname*</label>
                <input
                  type="text"
                  id="firstname"
                  className="border-black border p-2 rounded-sm"
                />
              </div>
              <div className="flex-col flex flex-1">
                <label htmlFor="lastname">Lastname*</label>
                <input
                  type="text"
                  id="lastname"
                  className="border-black border p-2 rounded-sm"
                />
              </div>
            </div>
            <div className="flex-col flex w-full">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                className="border-black border p-2 rounded-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="msg">Message</label>
              <textarea
                name="msg"
                id="msg"
                className="border-black border w-full h-[150px] resize-none p-2"
              ></textarea>
            </div>
            <button className="cursor-pointer w-[100px] bg-[#e57f49] p-3 rounded-md text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
