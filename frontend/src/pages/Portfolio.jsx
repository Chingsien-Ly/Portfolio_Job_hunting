import React from "react";
import Trello from "../components/Trello";
import Facebook from "../components/Facebook";
function Portfolio() {
  return (
    <div className="p-28 w-full h-full overflow-auto">
      <div className="text-4xl mb-2 font-bold">#Trello Clone</div>
      {/* Trello container */}
      <Trello />
      <div className="text-4xl mb-2 font-bold">#Facebook Clone</div>
      <Facebook />
    </div>
  );
}

export default Portfolio;
