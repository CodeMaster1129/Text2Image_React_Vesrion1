import React, { useState } from "react";
import SelectBox from "../components/selectbox";

const Resolution = ({ setSize }) => {
  const [isActive, setIsActive] = useState(1);
  const toggleActive1 = () => {
    setSize(0);
    setIsActive(1);
  };
  const toggleActive2 = () => {
    setSize(1);
    setIsActive(2);
  };
  const toggleActive3 = () => {
    setSize(2);
    setIsActive(3);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-1">
        <SelectBox resolution={"1024x1024"} isActive={isActive === 1} toggleActive={toggleActive1} />
        <SelectBox resolution={"1024x1792"} isActive={isActive === 2} toggleActive={toggleActive2} />
        <SelectBox resolution={"1792x1024"} isActive={isActive === 3} toggleActive={toggleActive3} />
      </div>
    </div>
  );
};

export default Resolution;
