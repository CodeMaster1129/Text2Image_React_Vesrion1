import Slider from "./components/slider";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import { useNavigate } from "react-router-dom";

const ProductDesign = () => {
  // const [compareStatus, setCompareStatus] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full bg-[#fbf7f2] flex flex-col">
          <Header />
          <div className="flex flex-col justify-between h-full px-10 bg-[#fbf7f2] pt-10 selection:select-none">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row w-3/4 justify-between text-left cursor-pointer">
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  1. Generate Images
                </div>
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  2. Image Editing
                </div>
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  3. Product Selection
                </div>
                <div className="w-1/4 text-[#485D5E] py-2 border-b-[1px] border-gray-400">
                  4. Checkout
                </div>
              </div>
              <Slider />
            </div>
            <div className="flex flex-col w-full justify-between">
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col w-4/5 h-full justify-between">
                  <div className="flex flex-row gap-5 px-10 w-full">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <span>Front</span>
                        <img src="images/product_design/front.png" alt="front" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <span>Back</span>
                        <img src="images/product_design/back.png" alt="back" />
                      </div>
                    </div>
                    <div className="flex w-full justify-center items-center">
                      <img src="images/product_design/front_result.png" alt="front_result" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start mt-20">
                    <div className="w-2/5">
                      <div className="flex flex-row w-2/5 justify-center bg-white shadow-md items-center px-3 py-2 gap-2">
                        <span>Actions:</span>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/image_edit/undo.png" alt="undo" />
                        </div>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/image_edit/redo.png" alt="redo" />
                        </div>
                      </div>
                    </div>
                    <div className="w-3/5">
                      <div className="flex flex-row w-2/5 justify-center bg-white shadow-md items-center px-3 py-2 gap-2">
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/product_design/flip-horizontal.png" alt="flip-horizontal" />
                        </div>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/product_design/flip-vertical.png" alt="flip-vertical" />
                        </div>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/product_design/align.png" alt="align" />
                        </div>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/product_design/rotate-left.png" alt="rotate-left" />
                        </div>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/product_design/tool-crop.png" alt="tool-crop" />
                        </div>
                        <div className="p-2 cursor-pointer border-white hover:bg-[#F9F2E9] border hover:border-[#CAAC94]/50">
                          <img src="images/product_design/clone.png" alt="clone" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-[#f4ede3] w-1/6 px-4">
                  <span className="font-bold text-[#276E70] py-4">LAYERS:</span>
                  <div className="flex flex-col gap-3">
                    <div className="border border-[#CAAC94]/50 flex flex-row items-center gap-3 w-full justify-center py-2 cursor-pointer">
                      <img src="images/product_design/add_text.png" alt="add_text" />
                      <span>Add Text</span>
                    </div>
                    <div className="border border-[#CAAC94]/50 flex flex-row items-center gap-3 w-full justify-center py-2 cursor-pointer">
                      <img src="images/image_edit/add_layer.png" alt="add_layer" />
                      <span>Add Image</span>
                    </div>
                    <div className="w-full flex bg-white border-2 border-[#276E70] justify-center cursor-pointer">
                      <img className="h-[100px] w-auto" src="images/generate_image/1.png" alt="generate_image" />
                    </div>
                    <div className="w-full h-[100px] flex bg-white border border-[#CAAC94]/50 justify-center cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fbf7f2] border-t-2 border-[#EDE4D5] mt-2 flex flex-row w-full justify-end py-3 gap-3">
              <span className="text-[#276E70] font-semibold bg-[#fbf7f2] px-4 py-2 selection:select-none border-[#276E70] border-[1px] cursor-pointer">
                Reset
              </span>
              <span className="text-[white] font-semibold bg-[#276E70] px-4 py-2 selection:select-none cursor-pointer" onClick={() => navigate("/checkout")}>
                Save & Add to Cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
