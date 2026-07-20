import React from "react";

function CreatePost() {
  return (
    <div className="w-full h-[62px] p-2 bg-[#242728] rounded-lg flex items-center">
      <div className="avatar mr-2 ">
        <div className="size-10 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>
      {/* input */}
      <div className="px-3 py-2 w-[470px] bg-[#333334] rounded-3xl cursor-pointer">
        <span className="font-thin text-[#b0b3b8]">
          What's on your mind, Ly?
        </span>
      </div>
      {/* function */}
      <div className="flex items-center gap-1 ml-2">
        <div className="size-10 cursor-pointer flex items-center justify-center rounded-md hover:bg-[#333334]">
          <img
            alt="live"
            className="size-6"
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yE/r/epGAMnVkMsy.png"
          />
        </div>
        <div className="size-10 cursor-pointer flex items-center justify-center rounded-md hover:bg-[#333334]">
          <img
            alt="photo"
            className="size-6"
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/74AG-EvEtBm.png"
          />
        </div>
        <div className="size-10 cursor-pointer flex items-center justify-center rounded-md hover:bg-[#333334]">
          <img
            alt="emoji"
            className="size-6"
            src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/_RWOIsUgWGL.png"
          />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
