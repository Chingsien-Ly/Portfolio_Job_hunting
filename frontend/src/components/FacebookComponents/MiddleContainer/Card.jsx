import React, { useState } from "react";

function Card({ story }) {
  const [index, setIndex] = useState(0);

  //   console.log(stories);
  return (
    <div className="w-28 h-[200px] overflow-hidden rounded-lg group cursor-pointer">
      {story.type === "default" ? (
        <div className="w-full h-full">
          <img
            src={story.image}
            alt="image-fit"
            className="inset-0 w-full h-[152px] object-cover transition-transform duration-300 ease-out
        group-hover:scale-102 group-hover:opacity-95"
          />
          <div className="h-[50px] w-full bg-[#242728] flex items-end pb-2 justify-center relative group-hover:bg-[#202323]">
            <span className="font-semibold text-xs text-white">
              Create Story
            </span>
            <div className="absolute -top-5 left-9 size-10 rounded-full bg-[#242728] flex items-center justify-center">
              <div className="size-8 bg-[#0966ff] rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  className="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                >
                  <g fillRule="evenodd" transform="translate(-446 -350)">
                    <g fillRule="nonzero">
                      <path
                        d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                        transform="translate(354.5 159.5)"
                      ></path>
                      <path
                        d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                        transform="translate(354.5 159.5)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full pb-2 flex items-end justify-center rounded-2xl bg-cover inset-0 bg-no-repeat bg-center group">
          <img
            src={story.image}
            alt="story"
            className="w-full h-full absolute top-0 left-0 inset-0 object-cover z-10 transition-transform duration-300 ease-out
        group-hover:scale-102 group-hover:opacity-95 grayscale-20"
          />
          <span className="font-semibold text-xs text-white z-20">
            {story.username}
          </span>
          {/* profile */}
          <div className="size-10 bg-[#0966ff] z-20 absolute top-2 left-2 rounded-full flex items-center justify-center">
            <img
              src={story.profile}
              alt="profile"
              className="size-8 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
