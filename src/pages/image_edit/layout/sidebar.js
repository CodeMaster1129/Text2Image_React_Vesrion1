import AutoCorrection from "../components/auto_correction";
import ColorAdjustment from "../components/color_adjustment";
import LightAdjustment from "../components/light_adjustment";
import DetailAdjustment from "../components/detail_adjustment";
// import { useNavigate } from "react-router-dom";

const Sidebar = ({ colorAdjustmentValues, setColorAdjustmentValues }) => {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full h-[100vh] bg-[#f4ede3]">
      <div className="flex flex-col w-full h-full selection:select-none">
        <div className="h-full">
          <div className="bg-[#f4ede3] flex flex-col gap-2 h-full">
            <span className="text-[28px] text-left font-bold px-4 py-8">
              PAGHEERA
            </span>
            <div className="flex flex-row overflow-auto">
              <div className="flex flex-col gap-5 px-3 border-r-[1px] border-[#CAAC94]/50">
                <div>
                  <img
                    className="w-4 auto"
                    src="images/image_edit/multiple-alt.png"
                    alt="multiple-alt"
                  />
                </div>
                <div>
                  <img src="images/image_edit/multiple-alt.png" alt="multiple-alt" />
                </div>
                <div>
                  <img src="images/image_edit/multiple-alt.png" alt="multiple-alt" />
                </div>
                <div>
                  <img src="images/image_edit/multiple-alt.png" alt="multiple-alt" />
                </div>
                <div>
                  <img src="images/image_edit/multiple-alt.png" alt="multiple-alt" />
                </div>
              </div>
              <div className="w-full flex flex-col overflow-auto">
                <div className="flex flex-col pb-20 px-4 border-b-2 border-[#EDE4D5] overflow-auto">
                  <div className="flex flex-row gap-2 items-center py-4">
                    <span className="text-[16px] font-bold">
                      AUTO CORRECTION
                    </span>
                    <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
                  </div>
                  <AutoCorrection />
                  <div className="flex flex-row gap-2 items-center py-4">
                    <span className="text-[16px] font-bold">
                      COLOR
                    </span>
                    <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
                  </div>
                  <ColorAdjustment colorAdjustmentValues={colorAdjustmentValues} setColorAdjustmentValues={setColorAdjustmentValues} />
                  <div className="flex flex-row gap-2 items-center py-4">
                    <span className="text-[16px] font-bold">
                      LIGHT
                    </span>
                    <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
                  </div>
                  <LightAdjustment />
                  <div className="flex flex-row gap-2 items-center py-4">
                    <span className="text-[16px] font-bold">
                      DETAILS
                    </span>
                    <img className="w-4 h-4" src="images/question_circle.png" alt="question_circle" />
                  </div>
                  <DetailAdjustment />
                </div>
                <div className="flex flex-row justify-between gap-4 py-3 px-4">
                  <div className="py-2 text-center w-full font-semibold text-[#276E70] border border-[#276E70] cursor-pointer">Cancel</div>
                  <div className="py-2 text-center w-full font-semibold text-white bg-[#276E70] cursor-pointer" onClick={() => {
                    console.log(colorAdjustmentValues);
                    // navigate("/product_selection")
                  }}>Apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
