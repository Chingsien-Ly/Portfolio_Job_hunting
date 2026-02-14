import React from "react";
import Mountain from "../assets/mountain.jpg";
import Star from "./Star";
function Trello() {
  return (
    <>
      {/* Trello container */}
      <div
        className="w-full h-[800px] bg-gray-300 rounded-2xl bg-cover bg-center Trello"
        style={{ backgroundImage: `url(${Mountain})` }}
      >
        {/* Header container*/}
        <div className="h-[100px] rounded-t-2xl bg-gray-500 opacity-80 flex p-10">
          {/* left header container */}
          <div className="flex-1 flex items-center justify-start gap-10">
            <span className="text-4xl font-bold text-white">Smart project</span>
            {/* star */}
            <Star />
            {/* poeple list */}
            <img src="" alt="people list" />
            {/* Board drop down */}
            <div>
              {/* button */}
              <div>
                <img src="" alt="board shape" />
                <span></span>
              </div>
              {/* dropdown */}
              <img src="" alt="dropdown" />
            </div>
          </div>
          {/* right header container */}
          <div className="flex-1 flex items-center justify-end">
            {/* people avatar list */}
            <div></div>
            {/* share button */}
            <div>
              <img src="" alt="add people" />
              <span>Share</span>
            </div>
            {/* ... */}
            <img src="" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trello;
