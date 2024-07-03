import React, { useState } from "react";
import SelectBox from "../components/selectbox";

const Resolution = () => {
  const [isActive, setIsActive] = useState(1);

  const toggleActive1 = () => {
    setIsActive(1);
  };
  const toggleActive2 = () => {
    setIsActive(2);
  };
  const toggleActive3 = () => {
    setIsActive(3);
  };
  const toggleActive4 = () => {
    setIsActive(4);
  };
  const toggleActive5 = () => {
    setIsActive(5);
  };
  const toggleActive6 = () => {
    setIsActive(6);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mt-1">
        <SelectBox resolution={"512×512"} isActive={isActive === 1} toggleActive={toggleActive1} />
        <SelectBox resolution={"1024×1024"} isActive={isActive === 2} toggleActive={toggleActive2} />
        <SelectBox resolution={"640×384"} isActive={isActive === 3} toggleActive={toggleActive3} />
        <SelectBox resolution={"384x640"} isActive={isActive === 4} toggleActive={toggleActive4} />
        <SelectBox resolution={"768x512"} isActive={isActive === 5} toggleActive={toggleActive5} />
        <SelectBox resolution={"512x768"} isActive={isActive === 6} toggleActive={toggleActive6} />
      </div>
    </div>
  );
};

// <SelectBox resolution={"1"} />
// <SelectBox resolution={"2"} />
// <SelectBox resolution={"3"} />
// <SelectBox resolution={"4"} />
// <SelectBox resolution={"5"} />
// <SelectBox resolution={"6"} />
// <SelectBox resolution={"7"} />
// <SelectBox resolution={"8"} />
export default Resolution;
