import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ imgurl, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative h-[30vh] shadow-xl shadow-gray-400 overflow-hidden"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover filter transition duration-300"
          style={{
            backgroundImage: `url(${imgurl})`,
            filter: isHovered ? "brightness(50%)" : "none",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          {isHovered && (
            <div className="flex flex-col gap-3 w-full justify-center items-center">
              <div className="text-white w-4/5 bg-opacity-50 py-3 border border-white rounded">
                See Details
              </div>
              <div className="text-white w-4/5 bg-[#276E70] py-3 rounded" onClick={() => navigate("/product_design")}>
                Start Design
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-start w-full text-left gap-1">
        <span className="text-[14px] text-[#485D5E]">All-Over Print Men's O-neck Long Tank Top</span>
        <span className="text-[12px] text-[#485D5E]">Avg.production time 4-5 days</span>
        <span className="text-[24px] text-[#276E70]">${price}</span>
      </div>
    </div>
  );
};

export default ImageCard;
