import React from "react";

const SelectBox = ({ imgurl, method, toggleActive }) => {

  return (
    <div
      className="flex flex-col items-center w-full border-[1px] cursor-pointer selection:select-none border-[#CAAC94]/50 bg-[#EDE4D5] text-[#276E70] hover:border-[#CAAC94] hover:bg-[#CAAC94]/50 hover:font-bold"
      onClick={toggleActive}
    >
      <div className="flex flex-col py-3 gap-2 justify-center items-center">
        <img src={imgurl} alt="img" />
        <span className="text-[#485D5E] hover:text-[#276E70]">
          {method}
        </span>
      </div>
    </div>
  );
};

export default SelectBox;
