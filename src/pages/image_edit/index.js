import { useEffect, useState } from "react";
// import ImageCard from "./components/imagecard";
import Slider from "./components/slider";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import { useNavigate } from "react-router-dom";
import { useGenerateImageStore } from "../../store";

const ImageEdit = () => {
  const [colorAdjustmentValues, setColorAdjustmentValues] = useState({
    saturation: 0,
    temperature: 0,
    tint: 0
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [compareStatus, setCompareStatus] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const { editingImages, setEditingImages } = useGenerateImageStore();
  const navigate = useNavigate();

  useEffect(() => {
    const savedEditingImages = localStorage.getItem("editing_images");
    if (savedEditingImages) {
      setEditingImages(JSON.parse(savedEditingImages));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editingImages && editingImages.length > 0) {
      setSelectedImage(editingImages[currentIndex]);
    }
  }, [editingImages, currentIndex]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-[50px]">
          <Sidebar colorAdjustmentValues={colorAdjustmentValues} setColorAdjustmentValues={setColorAdjustmentValues} />
        </div>
        <div className="w-full h-full bg-[#fbf7f2] flex flex-col">
          <Header />
          <div className="flex flex-col justify-between h-full px-10 bg-[#fbf7f2] pt-10 selection:select-none">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row w-full justify-between text-left cursor-pointer">
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  1. Generate Images
                </div>
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  2. Image Editing
                </div>
                <div className="w-1/4 text-[#485D5E] py-2 border-b-[1px] border-gray-400">
                  3. Product Selection
                </div>
                <div className="w-1/4 text-[#485D5E] py-2 border-b-[1px] border-gray-400">
                  4. Checkout
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full justify-between">
              <div className="flex flex-row w-full h-full justify-between">
                <div className="flex flex-col w-4/5 h-full">
                  <div className="flex flex-row grow gap-5 px-10">
                    <div className="flex flex-col w-full h-full gap-5 pt-10">
                      <span>Before</span>
                      <div className="grow">
                        {selectedImage && <img
                          className="w-auto h-full"
                          src={selectedImage.image_url}
                          alt="generate_image"
                        />}
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-5 pt-10">
                      <span>After</span>
                      <div className="grow">
                        <img
                          className="w-auto h-full"
                          src={editingImages.image_url}
                          alt="generate_image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fbf7f2] border-t-2 border-[#EDE4D5] mt-2 flex flex-row w-full justify-end py-3 gap-3" onClick={() => { localStorage.removeItem("editing_images") }}>
              <span className="text-[#276E70] font-semibold bg-[#fbf7f2] px-4 py-2 selection:select-none border-[#276E70] border-[1px] cursor-pointer" onClick={() => navigate("/generate_image")}>
                Back to generation
              </span>
              <span className="text-[white] font-semibold bg-[#276E70] px-4 py-2 selection:select-none cursor-pointer" onClick={() => navigate("/product_selection")}>
                Select product to print
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEdit;
