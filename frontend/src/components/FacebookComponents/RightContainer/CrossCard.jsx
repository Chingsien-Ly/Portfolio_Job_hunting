import React from "react";

function CrossCard({ avatars }) {
  return (
    <div className="flex gap-4.5 items-center mt-5">
      <div className="relative h-8 w-8 flex">
        {/* back avatar */}
        <div className="absolute  h-6 w-6 overflow-hidden rounded-full bg-neutral-700/60 ring-2 ring-neutral-900 z-0">
          <img
            src={avatars[0].image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* front avatar */}
        <div className="absolute left-3 top-3 h-6 w-6 overflow-hidden rounded-full ring-2 ring-neutral-900 z-10">
          <img
            src={avatars[1].image}
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>

        {/* online dot
      <span className="absolute left-[118px] top-[98px] h-6 w-6 rounded-full bg-green-500 ring-4 ring-neutral-900 z-20" /> */}
      </div>
      <span className="text-white">Group social work</span>
    </div>
  );
}

export default CrossCard;
