import React from "react";
import Dot from "../../assets/dot.svg";

function NotificationModal() {
  return (
    <div
      className="shadow-2xl absolute -right-14 top-full mt-3 w-[420px] cursor-default
            rounded-lg bg-[#242728] text-white h-auto
            min-h-[300px] max-h-[500px]
            overflow-hidden z-50 p-4 border border-gray-400/20"
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <span className="text-2xl text-[#e2e5e9]">Notification</span>
          <img src={Dot} alt="..." className="size-5" />
        </div>
        <div className="flex items-center mt-1 gap-2">
          <span className="py-2 px-4 rounded-3xl bg-[#273953] text-[#75b7ff] hover:bg-[#47576f] cursor-pointer">
            All
          </span>
          <span className="hover:bg-[#333334] px-4 py-2 rounded-3xl cursor-pointer">
            Unread
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
