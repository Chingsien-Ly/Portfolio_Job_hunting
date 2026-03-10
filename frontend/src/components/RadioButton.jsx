import React, { useState } from "react";

function RadioButton({ completed = true, isDefault = true }) {
  const [active, setActive] = useState(completed);
  return (
    <div
      onClick={() => setActive((prev) => !prev)}
      data-tip={`${active ? "Mark incomplete" : "Mark complete"}`}
      className={`${
        !isDefault ? "tooltip " : "cursor-pointer"
      }  flex items-center transition-all duration-200 ease-out ${
        active
          ? "size-5 opacity-100"
          : !isDefault
          ? "w-0 opacity-0"
          : "size-5 opacity-100"
      }  ${
        isDefault ? "" : "group-hover:size-5 group-hover:opacity-100"
      }  rounded-full  ${
        active
          ? "bg-[#82b536] border-[#82b536] flex items-center justify-center"
          : " border-white border flex items-center justify-center"
      }`}
      style={{
        "--tt-bg": "white",
        color: "black",
      }}
    >
      <span className="text-sm font-semibold text-[#242528]">✓</span>
    </div>
  );
}

export default RadioButton;
