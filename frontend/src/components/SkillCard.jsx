import React from "react";

function SkillCard({ skill }) {
  return (
    <div className="card bg-[#CDCDCD] text-center  w-[75px] h-10 flex items-center justify-center">
      <div className="card-body">{skill}</div>
    </div>
  );
}

export default SkillCard;
