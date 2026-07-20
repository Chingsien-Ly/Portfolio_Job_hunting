import React from "react";
import Header from "./FacebookComponents/Header";
import MainBoday from "./FacebookComponents/MainBoday";

function Facebook() {
  return (
    <div className="w-full h-[850px] bg-gray-300 rounded-2xl bg-cover bg-center">
      {/* header */}
      <Header />
      {/* main */}
      <MainBoday />
    </div>
  );
}

export default Facebook;
