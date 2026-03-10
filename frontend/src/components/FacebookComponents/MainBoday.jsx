import React from "react";
import Friend from "../../assets/friend.png";
import CreatePost from "./MiddleContainer/CreatePost";
import Carousel from "./MiddleContainer/Carousel";
import Birthday from "./RightContainer/Birthday";
import ContactList from "./RightContainer/ContactList";
import GroupChat from "./RightContainer/GroupChat";
import MainContent from "./MiddleContainer/MainContent";
function MainBoday() {
  return (
    <div className="w-full h-[calc(100%-72px)] bg-[#1c1c1d] px-2 py-2 flex items-center ">
      {/* Left */}
      <div className="flex-1 h-[calc(100%-40px)] pr-2.5">
        <div className="w-full flex flex-col gap-3 cursor-pointer">
          {/* profile */}
          <div className="flex items-center gap-5 p-2 hover:bg-[#545456] rounded-lg ">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
            <span className="text-sm text-white">Ly Chingsien</span>
          </div>
          {/* Meta */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v4/yg/r/G6uPup76BXD.png"
              alt="meta"
              className="size-9"
            />
            <span className="text-sm text-white">Meta AI</span>
          </div>
          {/* Friends */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            <div
              className="bg-position-[0px_-814px] bg-size-[37px_1702px] bg-no-repeat size-9"
              style={{ backgroundImage: `url(${Friend})` }}
            ></div>
            <span className="text-sm text-white">Friends</span>
          </div>
          {/* Saved */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            <div
              className="bg-position-[0px_-518px] bg-size-[37px_1702px] bg-no-repeat size-9"
              style={{ backgroundImage: `url(${Friend})` }}
            ></div>
            <span className="text-sm text-white">Saved</span>
          </div>
          {/* memories */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            <div
              className="bg-position-[0px_-1218px] bg-size-[37px_1702px] bg-no-repeat size-9"
              style={{ backgroundImage: `url(${Friend})` }}
            ></div>
            <span className="text-sm text-white">Memories</span>
          </div>
          {/* group */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            <div
              className="bg-position-[0px_-185px] bg-size-[37px_1702px] bg-no-repeat size-9"
              style={{ backgroundImage: `url(${Friend})` }}
            ></div>
            <span className="text-sm text-white">Group</span>
          </div>
          {/* reels */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            <div
              className="bg-position-[0px_-110px] bg-size-[37px_1702px] bg-no-repeat size-9"
              style={{ backgroundImage: `url(${Friend})` }}
            ></div>
            <span className="text-sm text-white">Reels</span>
          </div>
          {/* marketPlace */}
          <div className="flex items-center p-2 hover:bg-[#545456] gap-3 rounded-lg ">
            {" "}
            <div
              className="bg-position-[0px_-962px] bg-size-[37px_1702px] bg-no-repeat size-9"
              style={{ backgroundImage: `url(${Friend})` }}
            ></div>
            <span className="text-sm text-white">MarketPlace</span>
          </div>
          {/* see more */}
          <div className="flex gap-3 p-2 hover:bg-[#545456] items-center rounded-lg">
            <div className="size-9 bg-[#333334] flex items-center justify-center rounded-full">
              <svg
                viewBox="0 0 16 16"
                width="20"
                height="20"
                fill="#ffffff"
                aria-hidden="true"
                className="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
              >
                <g fillRule="evenodd" transform="translate(-448 -544)">
                  <path
                    fillRule="nonzero"
                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="text-sm text-white ">See more</span>
          </div>
        </div>
        {/* separator */}
        <div className="w-full border-[0.5px] border-gray-300/20 my-5"></div>
        {/* Shortcut */}
        <div className="cursor-pointer">
          <div className="flex items-center justify-between group mb-5">
            <span className="text-lg text-[#b0b3b8]">My Shortcut</span>
            <span className="text-primary font-semibold group-hover:block hidden">
              Edit
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#545456]">
            <img
              src="https://scontent.fadl3-1.fna.fbcdn.net/v/t39.30808-6/287522182_10230115374894669_478700496313283764_n.jpg?stp=c342.0.565.565a_cp0_dst-jpg_s75x225_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f752f3&_nc_ohc=TZrZ5GQUzs0Q7kNvwEyHMd8&_nc_oc=AdmJnILyrTX5CqSY5zmgkwY7yo5K9zeJ9nFok2ow0fszdjKH6RmI3eUbGPHgsF7ZWYE&_nc_zt=23&_nc_ht=scontent.fadl3-1.fna&_nc_gid=v_7QLTV4NXwC8WRytmpPtw&oh=00_Afv2ETWjcusBolcKBewjPnX7my_q29NDMnysTy-9l69iYg&oe=699EEE2F"
              alt="avatar"
              className="size-9 rounded-md"
            />
            <span className="text-sm font-thin text-white">
              Job In Adelaide
            </span>
          </div>
        </div>
      </div>
      {/* Middle */}
      <div className="flex-2 flex flex-col h-full w-full overflow-y-auto">
        <CreatePost />
        {/* Slideshow */}
        <Carousel />
        {/* main content */}
        <MainContent />
      </div>
      {/* Right */}
      <div className="ml-12 flex-1 flex h-full flex-col">
        <Birthday />
        {/* separator */}
        <div className="w-full border-[0.5px] border-gray-300/20 my-5"></div>
        <ContactList />
        {/* separator */}
        <div className="w-full border-[0.5px] border-gray-300/20 my-5"></div>
        <GroupChat />
      </div>
    </div>
  );
}

export default MainBoday;
