import Carousel from "../components/carousel";
import ImagePreview from "../components/image_preview";
import DropdownColor from "../components/dropdown_color";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full selection:select-none px-4 bg-[#f4ede3]">
      <div className="flex flex-col gap-2 h-[90vh] overflow-auto">
        <span className="text-[28px] text-left font-bold px-4 py-8">
          PAGHEERA
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] font-bold">PREVIEW</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <span className="text-left text-[14px] text-[#485D5E]">
            All-Over Print Men's O-neck Long Tank Top
          </span>
          <ImagePreview imgurl={"images/product_design/preview.png"} />
          <Carousel />
          <div className="flex flex-row gap-2 items-center border-t border-[#CAAC94]/50 pt-3">
            <span className="text-[16px] font-bold">
              BASE COLOR OF THE PRODUCT
            </span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <span className="text-left text-[14px] text-[#485D5E]">
            Arcu molestie nibh. Accumsan nullam elit turpis proin tempor libero
            ut amet.
          </span>
          <DropdownColor />
        </div>
      </div>
      <div className="flex py-2 bg-[#f4ede3] h-[10vh] justify-center items-center w-full cursor-pointer border-t border-[#CAAC94]/50">
        <span className="text-[#276E70] font-bold border border-[#276E70] w-full py-2 selection:select-none" onClick={() => navigate("/product_selection")}>
          Back to Products
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
