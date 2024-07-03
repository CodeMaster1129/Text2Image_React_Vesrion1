import ImageCard from "./components/imagecard";
import Slider from "./components/slider";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";

const Product_Selection = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full bg-[#fbf7f2] flex flex-col selection:select-none">
          <Header />
          <div className="flex flex-col px-10 bg-[#fbf7f2] pt-10">
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
            <div className=" grid grid-cols-5 gap-5 pt-10 pr-10 pb-10 h-[80vh] overflow-auto selection:select-none cursor-pointer">
              <ImageCard imgurl={"images/product_selection/img1.png"} price={7.45} />
              <ImageCard imgurl={"images/product_selection/img2.png"} price={21.40} />
              <ImageCard imgurl={"images/product_selection/img3.png"} price={8.10} />
              <ImageCard imgurl={"images/product_selection/img4.png"} price={11.85} />
              <ImageCard imgurl={"images/product_selection/img5.png"} price={9.10} />
              <ImageCard imgurl={"images/product_selection/img6.png"} price={5.15} />
              <ImageCard imgurl={"images/product_selection/img7.png"} price={16.70} />
              <ImageCard imgurl={"images/product_selection/img8.png"} price={11.95} />
              <ImageCard imgurl={"images/product_selection/img9.png"} price={14.63} />
              <ImageCard imgurl={"images/product_selection/img7.png"} price={17.20}  />
              <ImageCard imgurl={"images/product_selection/img8.png"} price={17.20}  />
              <ImageCard imgurl={"images/product_selection/img9.png"} price={17.20}  />
              <ImageCard imgurl={"images/product_selection/img7.png"} price={17.20}  />
              <ImageCard imgurl={"images/product_selection/img8.png"} price={17.20}  />
              <ImageCard imgurl={"images/product_selection/img9.png"} price={17.20}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Selection;
