import React from "react";

function Birthday() {
  return (
    <div>
      <span className="text-lg text-[#a7aaaf]">Birthdays</span>
      <div className="w-full p-2 hover:bg-[#545456] flex items-center gap-2 rounded-lg cursor-pointer">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/b0Fg5oCP2vk.png"
          alt="gift"
          className="size-8"
        />
        <div className="wrap-break-word text-white text-xs">
          <b className="font-semibold ">Chingsien Ly</b> have birthday today.
        </div>
      </div>
    </div>
  );
}

export default Birthday;
