import React, { useState } from "react";
import SelectBox from "../components/selectbox";

const Resolution = ({ setSize }) => {
  const [isActive, setIsActive] = useState(1);

  const toggleActive1 = () => {
    setSize(1);
    setIsActive(1);
  };
  const toggleActive2 = () => {
    setSize(2);
    setIsActive(2);
  };
  const toggleActive3 = () => {
    setSize(3);
    setIsActive(3);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-1">
        <SelectBox resolution={"1024×1024"} isActive={isActive === 1} toggleActive={toggleActive1} />
        <SelectBox resolution={"1024×1792"} isActive={isActive === 2} toggleActive={toggleActive2} />
        <SelectBox resolution={"1792×1024"} isActive={isActive === 3} toggleActive={toggleActive3} />
      </div>
    </div>
  );
};

export default Resolution;
