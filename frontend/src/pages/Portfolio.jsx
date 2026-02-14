import React from "react";
import Trello from "../components/Trello";
function Portfolio() {
  return (
    <div className="p-28 w-full h-full overflow-auto">
      <div className="text-4xl mb-2 font-bold">#Trello Clone</div>
      {/* Trello container */}
      <Trello />
    </div>
  );
}

export default Portfolio;
