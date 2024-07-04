import React, { useState } from "react";
const Sidebar = ({ colorAdjustmentValues, setColorAdjustmentValues }) => {
  const [selected_item, setSelected_item] = useState(false)
  return (
    <div className="flex flex-row w-full h-[100vh] bg-[#f4ede3]">
      <div className="flex w-full flex-col items-center mt-[30px] cursor-pointer" onClick={() => {
        setSelected_item(!selected_item)
      }}>
        <img
          className={`${selected_item ? "bg-[#CAAC94]" : ""} p-[5px] rounded-[3px]`}
          src="images/image_edit/text-size.png"
          alt="text edit icon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
