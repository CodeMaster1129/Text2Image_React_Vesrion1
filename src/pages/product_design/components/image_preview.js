import React, { useState } from "react";

const Image = ({ imgurl, isshow }) => {
  return (
    <div>
      {isshow &&
        <div className="p-2 bg-[#276E70] hover:brightness-[150%]">
          <img className="size-4" src={imgurl} alt="img" />
        </div>}
    </div>
  );
};

const ImagePreview = ({ imgurl }) => {
  const [showtool, setshowtool] = useState(false);
  return (
    <div
      className="flex items-center space-x-2 h-[40vh] hover:brightness-[75%]"
      style={{
        backgroundImage: `url(${imgurl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onMouseOver={() => setshowtool(true)}
      onMouseLeave={() => setshowtool(false)}
    >
      {/* <img className="relative" src={imgurl} /> */}
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-row justify-between m-2">
          <Image imgurl={"images/product_design/arrow_expand.png"} isshow={showtool} />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
