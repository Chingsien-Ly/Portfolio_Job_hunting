import React from "react";
import MainImg from "../assets/sneaker1.png";
import sneaker2 from "../assets/sneaker2.png";
import sneaker3 from "../assets/sneaker3.png";
import "../components/styles/animation.css";
function Design() {
  return (
    <div>
      <div className="pl-28 pb-5 pt-10 w-full h-[50px] flex items-center justify-center">
        <span className="text-[32px] font-bold underline italic">
          Complex Layout Design
        </span>
      </div>
      {/* first design */}
      <div className="pl-28 pb-5 pt-10 text-[28px] font-semibold">
        Design #1
      </div>
      <div className="grid grid-cols-6 grid-rows-4 w-full h-[500px] px-28">
        <div className="row-span-4 col-span-2 bg-[#e4e6e7] font-bold flex items-center justify-center">
          1
        </div>
        <div className="bg-amber-400 row-span-2 col-span-2 text-white font-bold flex items-center justify-center">
          2
        </div>
        <div className="bg-[#25497D] text-white font-bold flex items-center justify-center">
          3
        </div>
        <div className="bg-[#34B5FE] text-white font-bold flex items-center justify-center">
          {" "}
          4
        </div>
        <div className="bg-[#F54346] text-white font-bold flex items-center justify-center">
          5
        </div>
        <div className="bg-[#507FA3] text-white font-bold flex items-center justify-center">
          6
        </div>
        <div className="col-span-2 row-span-2  font-bold flex items-center justify-center bg-[#ECE4D4]">
          7
        </div>
        <div className=" col-span-2 row-span-2 text-white font-bold flex items-center justify-center bg-gray-400 ">
          8
        </div>
      </div>
      {/* Second Design */}
      <div className="pl-28 pb-5 pt-10 text-[28px] font-semibold">
        Design #2
      </div>
      <div className="grid grid-cols-4 grid-rows-2 w-full h-[500px] px-28 mt-5">
        <div className="col-span-2 row-span-2 bg-amber-800 text-white font-bold flex items-center justify-center">
          1
        </div>
        <div className="bg-amber-100 col-span-2  font-bold flex items-center justify-center">
          2
        </div>
        <div className="bg-blue-600 text-white font-bold flex items-center justify-center">
          3
        </div>
        <div className="bg-orange-400 text-white font-bold flex items-center justify-center">
          4
        </div>
      </div>
      {/* Third design */}
      <div className="pl-28 pb-5 pt-10 text-[28px] font-semibold">
        Design #3
      </div>
      <div className="grid gap-5 grid-cols-6 grid-rows-4 w-full h-[500px] px-28 mt-5">
        <div className="ring rounded-lg col-span-6 flex items-center justify-center font-bold">
          1
        </div>
        <div className="ring rounded-lg col-span-3 row-span-2 flex items-center justify-center font-bold">
          2
        </div>
        <div className="ring rounded-lg col-span-3 row-span-2 flex items-center justify-center">
          3
        </div>
        <div className="ring rounded-lg col-span-6 flex items-center justify-center font-bold">
          4
        </div>
      </div>
      {/* Fourth design */}
      <div className="pl-28 pb-5 pt-10 text-[28px] font-semibold">
        Design #4
      </div>
      <div className="grid grid-cols-12 grid-rows-13 w-full h-[1200px] px-28 mt-5 gap-2">
        <div className=" rounded-lg bg-black text-white flex items-center justify-center col-span-4 row-span-4">
          1
        </div>
        <div className="rounded-lg bg-purple-500 text-white flex items-center justify-center col-span-4 row-span-4">
          2
        </div>
        <div className="col-span-2 row-span-2 bg-amber-800 text-white flex items-center justify-center rounded-lg">
          {" "}
          3
        </div>
        <div className="col-span-2 row-span-2 bg-gray-800 text-white flex items-center justify-center rounded-lg">
          4
        </div>
        <div className="col-span-2 row-span-2 bg-blue-800 text-white flex items-center justify-center rounded-lg">
          5
        </div>
        <div className="col-span-2 row-span-2 bg-blue-100 flex items-center justify-center rounded-lg">
          6
        </div>
        <div className="col-span-6 row-span-4 bg-blue-300 text-white flex items-center justify-center rounded-lg">
          7
        </div>
        <div className="col-span-6 row-span-4 bg-blue-700 flex items-center text-white justify-center rounded-lg">
          8
        </div>
        <div className="col-span-4 row-span-1 bg-red-500 text-white flex items-center justify-center rounded-lg">
          9
        </div>
        <div className="col-span-4 row-span-1 border bg-yellow-100 flex items-center justify-center rounded-lg">
          10
        </div>
        <div className="col-span-4 row-span-1 bg-purple-600 text-white flex items-center justify-center rounded-lg">
          11
        </div>
        <div className="col-span-6 row-span-4 bg-blue-300 text-white flex items-center justify-center rounded-lg">
          12
        </div>
        <div className="col-span-6 row-span-4 bg-blue-300 text-white flex items-center justify-center rounded-lg">
          13
        </div>
      </div>
      {/* Fifth design */}
      <div className="pl-28 pb-5 pt-10 text-[28px] font-semibold">
        Design #5
      </div>
      <div className="grid grid-cols-12 grid-rows-8 w-full h-[500px] px-28 my-5 gap-2">
        <div className="col-span-8 row-span-8 relative rounded-2xl border border-[#CDCDCD] overflow-hidden">
          <img
            src={MainImg}
            alt="sneaker1"
            className="w-full h-full object-cover"
          />
          <div className="bg-white  flex items-center justify-center font-bold h-[100px] w-full absolute bottom-0 ">
            <span className="animate-bounce text-[32px]">Discount 50%</span>
          </div>
        </div>
        <div className="col-span-4 row-span-4 rounded-2xl border-[#CDCDCD] border overflow-hidden">
          <img
            src={sneaker2}
            alt="sneaker2"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="col-span-4 row-span-4 rounded-2xl border overflow-hidden border-[#CDCDCD]">
          <img
            src={sneaker3}
            alt="sneaker3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="pl-28 pb-5 pt-10 w-full h-[50px] flex items-center justify-center">
        <span className="text-[32px] font-bold underline italic">
          Animation
        </span>
      </div>
      {/* Animation content */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] px-28 my-5">
        {/* jumping animation */}
        <div className="border p-2 rounded-md flex items-center justify-center">
          <div className="animate-bounce text-[28px] font-bold">
            Discount 10%
          </div>
        </div>
        {/* Customer animation */}
        <div className="border bg-[#1f1f1f] rounded-md text-[35px] p-2 flex items-center justify-center font-bold gap-0.5 ">
          <div className="animation flex ">
            <div className="animation">A</div>
            <div className="animation">n</div>
            <div className="animation">i</div>
            <div className="animation">m</div>
            <div className="animation">a</div>
            <div className="animation">t</div>
            <div className="animation">i</div>
            <div className="animation">o</div>
            <div className="animation">n</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Design;
