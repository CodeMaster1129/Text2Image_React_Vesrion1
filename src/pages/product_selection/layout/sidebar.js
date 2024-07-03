import DropdownCategory from "../components/dropdown_category";
import CategorySelector from "../components/category_selector";
import Size from "../components/size";
import ImageEditSlider from "../../image_edit/components/image_edit_slider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [price, setPrice] = useState(8);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full selection:select-none px-4 bg-[#f4ede3]">
      <div className="flex flex-col gap-2 h-[90vh] overflow-auto">
        <span className="text-[28px] text-left font-bold px-4 py-8">
          PAGHEERA
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] font-bold">CATEGORY</span>
            <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <DropdownCategory />
          <CategorySelector />
        </div>
        <div className="flex flex-col pb-4">
          <div className="flex flex-row gap-2 items-center py-4">
            <span className="text-[16px] font-bold">SIZE</span>
            <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <Size />
        </div>
        <div className="flex flex-col pb-4">
          <div className="flex flex-row gap-2 items-center py-4">
            <span className="text-[16px] font-bold">PRICE</span>
            <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <ImageEditSlider min={8} max={42} value={price} setValue={setPrice} label={"$(USD)"} />
        </div>
      </div>
      <div className="flex py-2 bg-[#f4ede3] h-[10vh] justify-center items-center w-full cursor-pointer border-t border-[#CAAC94]/50">
        <span className="text-[#276E70] font-bold border border-[#276E70] w-full py-2 selection:select-none" onClick={() => navigate("/image_edit")}>Back to Image Editing</span>
      </div>
    </div>
  );
};

export default Sidebar;
