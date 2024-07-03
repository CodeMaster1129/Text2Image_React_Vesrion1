import React, { useState } from "react";
import SelectBox from "./selectbox";

const Size = () => {
  const [activeSizes, setActiveSizes] = useState([]);

  const toggleActive = (size) => {
    if (activeSizes.includes(size)) {
      setActiveSizes(activeSizes.filter(item => item !== size));
    } else {
      setActiveSizes([...activeSizes, size]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-1 mt-1">
        <SelectBox resolution={"3XS"} isActive={activeSizes.includes(1)} toggleActive={() => toggleActive(1)}/>
        <SelectBox resolution={"2XS"} isActive={activeSizes.includes(2)} toggleActive={() => toggleActive(2)} />
        <SelectBox resolution={"XS"} isActive={activeSizes.includes(3)} toggleActive={() => toggleActive(3)} />
        <SelectBox resolution={"S"} isActive={activeSizes.includes(4)} toggleActive={() => toggleActive(4)} />
        <SelectBox resolution={"M"} isActive={activeSizes.includes(5)} toggleActive={() => toggleActive(5)} />
        <SelectBox resolution={"L"} isActive={activeSizes.includes(6)} toggleActive={() => toggleActive(6)} />
        <SelectBox resolution={"XL"} isActive={activeSizes.includes(7)} toggleActive={() => toggleActive(7)} />
        <SelectBox resolution={"XXL"} isActive={activeSizes.includes(8)} toggleActive={() => toggleActive(8)} />
        <SelectBox resolution={"3XL"} isActive={activeSizes.includes(9)} toggleActive={() => toggleActive(9)} />
        <SelectBox resolution={"4XL"} isActive={activeSizes.includes(10)} toggleActive={() => toggleActive(10)} />
      </div>
    </div>
  );
};

export default Size;