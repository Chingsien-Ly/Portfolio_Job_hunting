import React, { useState } from "react";
import Mountain from "../assets/mountain.jpg";

import Star from "./Star";
import Avatar from "./Avatar";

import People from "../assets/people.svg";
import Board from "../assets/board.svg";
import Drop from "../assets/down.svg";
import Add from "../assets/add.svg";
import Dot from "../assets/dot.svg";
import Dot2 from "../assets/dot2.svg";
import AddList from "../assets/add-pictures-svgrepo-com.svg";
import AddList2 from "../assets/add2-pictures-svgrepo-com.svg";
import RadioButton from "./RadioButton";
import Edit from "../assets/edit.svg";

function Trello() {
  // state for onfocus
  const [onFocusItem, setOnFocusItem] = useState(0);
  // on Click edit handler
  const [onClickEdit, setOnClickEdit] = useState("");
  // Input entry of edit
  const [editInput, setEditInput] = useState("");
  // cards
  const lists = [
    {
      id: "1",
      title: "To Do",
      cards: [
        {
          id: "11",
          title: "Design login page UI",
          completed: false,
        },
        {
          id: "12",
          title: "Fix navbar alignment issue",
          completed: true,
        },
        {
          id: "13",
          title: "Write unit tests for auth module",
          completed: false,
        },
      ],
    },
    {
      id: "2",
      title: "In Progress",
      cards: [
        {
          id: "21",
          title: "Implement drag & drop feature",
          completed: true,
        },
        {
          id: "22",
          title: "Optimize API response time",
          completed: false,
        },
      ],
    },
  ];

  return (
    <div
      className="w-full h-[800px] bg-gray-300 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${Mountain})` }}
    >
      {/* Header */}
      <div className="h-[100px] rounded-t-2xl bg-gray-500/80 flex px-5">
        {/* Left header */}
        <div className="flex-1 flex items-center gap-10">
          <span className="text-4xl font-semibold text-white">
            Smart project
          </span>

          <Star />

          <img src={People} className="size-10 opacity-90" alt="people list" />

          <div className="flex gap-5">
            <div className="px-4 py-2 bg-[#dfe0e8] flex items-center gap-2 rounded-md">
              <img src={Board} className="size-10 opacity-75" alt="board" />
              <span className="font-semibold text-xl opacity-75">Board</span>
            </div>

            <img src={Drop} alt="dropdown" className="cursor-pointer" />
          </div>
        </div>

        {/* Right header */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <Avatar />

          <div className="px-4 py-2 bg-[#dfe0e8] flex gap-2 items-center rounded-md">
            <img src={Add} className="opacity-80" alt="add people" />
            <span className="text-xl opacity-75 font-semibold">Share</span>
          </div>

          <img src={Dot} alt="dot" className="size-10 cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="w-full h-[calc(100%-120px)] mt-5 px-5 flex gap-5 items-start">
        {/* List Column */}
        {lists.map((list) => (
          <div className="p-4 w-[350px] min-h-[20%] max-h-[calc(100%-20px)] rounded-lg bg-[#101204] flex flex-col ">
            {/* Header */}
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-lg text-[#cecfd2]">
                {list.title}
              </div>
              <img src={Dot2} alt="options" className="size-5 cursor-pointer" />
            </div>

            {/* Middle (grows + scrolls) */}
            <div className="flex-1 min-h-0 mt-3 ">
              {list?.cards?.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="hover:border-primary hover:border border border-transparent group flex items-center gap-2 bg-[#242528] text-white p-3 rounded-md shadow-sm mb-3 min-h-12 max-h-[100px] cursor-pointer"
                  >
                    {/* Radio wrapper ALWAYS exists */}

                    {onClickEdit === "" && (
                      <RadioButton completed={card.completed} />
                    )}

                    {/* Title */}
                    {onClickEdit === card.id ? (
                      <input
                        type="text"
                        value={card.title}
                        className="w-full h-full p-1"
                      />
                    ) : (
                      <div
                        onClick={() =>
                          document.getElementById("my_modal_4").showModal()
                        }
                        className="flex-1 wrap-break-words"
                      >
                        {card.title}
                      </div>
                    )}

                    {/* Edit icon (also always exists) */}
                    {onClickEdit === "" && (
                      <div
                        onClick={() => setOnClickEdit(card.id)}
                        className="w-7 h-7 flex justify-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100  rounded-full hover:bg-[#0000003a]  items-center "
                      >
                        {/* {onClickEdit}
                      {card.id} */}
                        <img src={Edit} alt="edit" className="size-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-3 flex items-center gap-2 cursor-pointer">
              <img src={AddList2} alt="add card" className="size-5" />
              <div className="font-semibold text-lg text-[#aaabaf]">
                Add a card
              </div>
            </div>
          </div>
        ))}

        {/* Add Another List */}
        <div className="p-4 bg-[#93868db2] w-[300px] h-[70px] flex items-center gap-2 hover:bg-[#93868df1] text-white text-lg font-semibold rounded-lg cursor-pointer">
          <img src={AddList} alt="add list" className="size-5" />
          <div>Add another list</div>
        </div>
      </div>
      {/* this is the modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Trello;
