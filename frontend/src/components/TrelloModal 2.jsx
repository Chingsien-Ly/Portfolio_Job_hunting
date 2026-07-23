import React from "react";
import Down from "../assets/down.svg";
import Dot from "../assets/dot.svg";
import RadioButton from "./RadioButton";
function TrelloModal() {
  return (
    <dialog id="my_modal_4" className="modal ">
      {/* this is the modal */}
      <div className="modal-box w-11/12 rounded-2xl h-[482px] max-w-7xl bg-[#242528] text-white p-0 ">
        {/* top header */}
        <div className="flex items-center justify-between px-7 py-5">
          <div className="flex gap-2 p-2 bg-[#4c4d51] rounded-md cursor-pointer">
            <span>Product backlog</span>
            <img src={Down} alt="down" className="size-5" />
          </div>
          <div className="flex gap-7 items-center justify-center">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <img src={Dot} alt="..." className="size-6 cursor-pointer" />
            <form method="dialog ">
              <button
                className="cursor-pointer unselectable-text "
                tabIndex="-1"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
        {/* Line */}
        <div className="h-px w-full bg-gray-400/20 "></div>
        {/* middle container */}
        <div className="px-7  flex">
          {/* right middle container */}
          <div className="flex w-full flex-1 flex-col">
            <div className="flex items-center gap-3 my-5">
              <RadioButton />{" "}
              <span className="font-bold text-4xl text-[#96999e]">Card1</span>
            </div>
            {/* tag function */}
            <div className="w-full h-fit px-7 flex items-center gap-5 cursor-pointer">
              <div className="p-1 text-[#96999e] border w-fit  flex items-center justify-center gap-1 border-gray-500/20 rounded-sm">
                <svg
                  width="15"
                  height="15"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-sm">Add</div>
              </div>
              <div className="p-1 text-xl text-[#96999e] border w-fit flex items-center justify-center gap-1 border-gray-500/20 rounded-sm">
                <svg
                  width="15"
                  height="15"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1213 2.80762C12.3403 2.02657 11.0739 2.02657 10.2929 2.80762L3.92891 9.17158C1.19524 11.9052 1.19524 16.3374 3.92891 19.0711C6.66258 21.8047 11.0947 21.8047 13.8284 19.0711L20.1924 12.7071C20.9734 11.9261 20.9734 10.6597 20.1924 9.87869L13.1213 2.80762ZM18.7782 11.2929L11.7071 4.22183L5.34313 10.5858C3.39051 12.5384 3.39051 15.7042 5.34313 17.6569C7.29575 19.6095 10.4616 19.6095 12.4142 17.6569L18.7782 11.2929ZM10 14C10 14.5523 9.55228 15 9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13C9.55228 13 10 13.4477 10 14ZM12 14C12 15.6569 10.6569 17 9 17C7.34315 17 6 15.6569 6 14C6 12.3431 7.34315 11 9 11C10.6569 11 12 12.3431 12 14Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-sm">Labels</div>
              </div>
              <div className="p-1 text-xl text-[#96999e] border w-fit h-fit flex items-center justify-center gap-1 border-gray-500/20 rounded-sm">
                <svg
                  width="15"
                  height="15"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-sm">Dates</div>
              </div>
              <div className="p-1 text-xl text-[#96999e] border w-fit flex items-center justify-center gap-1 border-gray-500/20 rounded-sm">
                <svg
                  width="15"
                  height="15"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13V18H6V6L16 6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H6ZM8.73534 10.3223C8.36105 9.91618 7.72841 9.89038 7.3223 10.2647C6.91619 10.639 6.89039 11.2716 7.26467 11.6777L10.8768 15.597C11.4143 16.1231 12.2145 16.1231 12.7111 15.6264L13.0754 15.2683C13.3699 14.9785 13.6981 14.6556 14.0516 14.3075C15.0614 13.313 16.0713 12.3169 17.014 11.3848L17.0543 11.3449C18.7291 9.68869 20.0004 8.42365 20.712 7.70223C21.0998 7.30904 21.0954 6.67589 20.7022 6.28805C20.309 5.90022 19.6759 5.90457 19.2881 6.29777C18.5843 7.01131 17.3169 8.27244 15.648 9.92281L15.6077 9.96263C14.6662 10.8937 13.6572 11.8889 12.6483 12.8825L11.8329 13.6851L8.73534 10.3223Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-sm">Checklist</div>
              </div>
              <div className="p-1 text-xl text-[#96999e] border w-fit flex items-center justify-center gap-1 border-gray-500/20 rounded-sm">
                <svg
                  width="15"
                  height="15"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.44777 7.61532 10.7518 8.59871 11.6649C5.31433 13.0065 3 16.233 3 20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19H5.07089C5.55612 15.6077 8.47353 13 12 13ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H17V14Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="text-sm">Member</div>
              </div>
            </div>
            <div className="flex gap-3 py-6 items-center">
              <svg
                width="20"
                height="20"
                role="presentation"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="font-bold text-xl">Description</span>
            </div>
            <div className="px-7 h-[100px]">
              <textarea
                name="textDesc"
                id="textDesc"
                className="border border-gray-400/20 w-full h-full"
              ></textarea>
            </div>
          </div>

          {/* left middle container */}
          <div className="bg-[#18191a] flex-1 border-l h-[400px] border-gray-400/20 -mr-7">
            <div className="flex items-center gap-3 my-5 px-5 justify-between">
              <div className="flex items-center gap-3 ">
                <svg
                  fill="none"
                  viewBox="0 0 16 16"
                  role="presentation"
                  className="size-4 _1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"
                >
                  <path
                    fill="currentcolor"
                    fillRule="evenodd"
                    d="M0 3.125A2.625 2.625 0 0 1 2.625.5h10.75A2.625 2.625 0 0 1 16 3.125v8.25A2.625 2.625 0 0 1 13.375 14H4.449l-3.327 1.901A.75.75 0 0 1 0 15.25zM2.625 2C2.004 2 1.5 2.504 1.5 3.125v10.833L4.05 12.5h9.325c.621 0 1.125-.504 1.125-1.125v-8.25C14.5 2.504 13.996 2 13.375 2zM12 6.5H4V5h8zm-3 3H4V8h5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Comments and activity</span>
              </div>
              <div className="p-2 bg-[#252627] rounded-md cursor-pointer">
                Show Details
              </div>
            </div>
            <div className="flex items-center gap-3 my-5 px-5">
              <input
                type="text"
                name=""
                id=""
                className="w-full p-2 bg-[#252627] rounded-md"
                placeholder="Write a comment..."
              />
            </div>
            <div className="px-5 flex gap-3 items-center">
              <div className="avatar ">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px]">
                  <span className="font-bold">Chingsien Ly</span> added this
                  card to Product backlogs
                </span>
                <span className="text-blue-500 underline text-[10px]">
                  15 Feb 2026, 09:15
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default TrelloModal;
