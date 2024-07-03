import React from "react";

const SelectBox = ({ resolution, isActive, toggleActive }) => {
  // const [isActive, setIsActive] = useState(false);

  // const toggleActive = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div>
      <div
        className={`flex flex-col border-[1px] cursor-pointer selection:select-none 
                    ${isActive
            ? "border-[#276E70] bg-[#FBF7F2] font-bold"
            : "border-[#CAAC94] bg-[#EDE4D5]"
          }
                    text-[#276E70]`}
        onClick={toggleActive}
      >
        <div className="flex flex-row justify-center">
          <div className="py-2 text-center w-full">
            <span
              className={`${isActive ? "text-[#276E70]" : "text-[#485D5E]"}`}
            >
              {resolution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
