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

const ImageCard = ({ imgurl }) => {
  const [showtool, setshowtool] = useState(false);
  return (
    <div
      className="flex items-center space-x-2 h-[30vh] shadow-xl shadow-gray-400 hover:brightness-[75%]"
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
          <Image imgurl={"images/edit_rect.png"} isshow={showtool} />
          <div className="flex flex-row gap-1">
            <Image imgurl={"images/edit_arrowexpand.png"} isshow={showtool} />
            <Image imgurl={"images/edit_plus.png"} isshow={showtool} />
            <Image imgurl={"images/edit_download.png"} isshow={showtool} />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-1 mb-2">
          <Image imgurl={"images/edit_arrowback.png"} isshow={showtool} />
          <Image imgurl={"images/edit_double.png"} isshow={showtool} />
          <Image imgurl={"images/edit_delete.png"} isshow={showtool} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
