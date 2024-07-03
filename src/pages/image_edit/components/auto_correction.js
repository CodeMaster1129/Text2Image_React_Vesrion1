import React from "react";
import SelectBox from "./selectbox";

const AutoCorrection = () => {

  return (
    <div>
      <div className="flex flex-row w-full gap-3 justify-between">
        <SelectBox method={"Auto"} imgurl={"images/image_edit/sparkles.png"} />
        <SelectBox method={"B/W"} imgurl={"images/image_edit/circle-half.png"} />
        <SelectBox method={"Pop"} imgurl={"images/image_edit/magic-wand.png"} />
      </div>
    </div>
  );
};

export default AutoCorrection;
