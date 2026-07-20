import React, { useState } from "react";
import Mountain from "../assets/mountain.jpg";

import Star from "./Star";
import Avatar from "./Avatar";

import People from "../assets/people.svg";
import Board from "../assets/board.svg";
import Drop from "../assets/down.svg";
import Add from "../assets/add.svg";
import Dot from "../assets/dot.svg";

import AddList from "../assets/add-pictures-svgrepo-com.svg";
import AddList2 from "../assets/add2-pictures-svgrepo-com.svg";
import RadioButton from "./RadioButton";
import Edit from "../assets/edit.svg";
import Dnd from "./Dnd";
import TrelloModal from "./TrelloModal";

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
        <Dnd />
        {/* Add Another List */}
        <div className="p-4 bg-[#93868db2] w-[300px] h-[60px] flex items-center gap-2 hover:bg-[#93868df1] text-white text-lg font-semibold rounded-lg cursor-pointer">
          <img src={AddList} alt="add list" className="size-5" />
          <div>Add another list</div>
        </div>
      </div>
      <TrelloModal />
    </div>
  );
}

export default Trello;
