import React, { useState } from "react";
import SelectBox from "../components/selectbox";

const Count = ({ setCount }) => {
  const [isActive, setIsActive] = useState(1);

  const toggleActive1 = () => {
    setCount(1);
    setIsActive(1);
  };
  const toggleActive2 = () => {
    setCount(2);
    setIsActive(2);
  };
  const toggleActive3 = () => {
    setCount(3);
    setIsActive(3);
  };
  const toggleActive4 = () => {
    setCount(4);
    setIsActive(4);
  };
  const toggleActive5 = () => {
    setCount(5);
    setIsActive(5);
  };
  const toggleActive6 = () => {
    setCount(6);
    setIsActive(6);
  };
  const toggleActive7 = () => {
    setCount(7);
    setIsActive(7);
  };
  const toggleActive8 = () => {
    setCount(8);
    setIsActive(8);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-1 mt-1">
        <SelectBox resolution={"1"} isActive={isActive === 1} toggleActive={toggleActive1} />
        <SelectBox resolution={"2"} isActive={isActive === 2} toggleActive={toggleActive2} />
        <SelectBox resolution={"3"} isActive={isActive === 3} toggleActive={toggleActive3} />
        <SelectBox resolution={"4"} isActive={isActive === 4} toggleActive={toggleActive4} />
        <SelectBox resolution={"5"} isActive={isActive === 5} toggleActive={toggleActive5} />
        <SelectBox resolution={"6"} isActive={isActive === 6} toggleActive={toggleActive6} />
        <SelectBox resolution={"7"} isActive={isActive === 7} toggleActive={toggleActive7} />
        <SelectBox resolution={"8"} isActive={isActive === 8} toggleActive={toggleActive8} />
      </div>
    </div>
  );
};

export default Count;
