import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import ImageCard from "./components/imagecard";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Loader from '../../components/ui/common/Loader';
import { useEffect } from "react";
import { useGenerateImageStore } from "../../store";
import { useGenerateImageActions } from "../../actions/generateActions";

const Generate_Image = () => {
  const navigate = useNavigate();
  const { generatedImages, originImage, loading } = useGenerateImageStore();
  const { getAllGeneratedImages } = useGenerateImageActions();

  const handleEditImageClick = () => {
    if (Object.keys(originImage).length === 0) {
      toast.error('You have to select images');
    } else {
      localStorage.setItem("originImage", JSON.stringify(originImage));
      navigate("/image_edit");
    }
  };

  useEffect(() => {
    getAllGeneratedImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/5 h-full bg-[#f4ede3] min-w-[380px]">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full bg-[#fbf7f2] flex flex-col">
          <Header />
          <div className={`flex flex-col px-10 h-full bg-[#fbf7f2] pt-10 overflow-hidden`}>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row w-full justify-between text-left">
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  1. Generate Images
                </div>
                <div className="w-1/4 text-[#485D5E] py-2 border-b-[1px] border-gray-400">
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
            <div className={`overflow-auto grow`}>
              {loading ? (
                <Loader />
              ) : (
                <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[16px] pt-5">
                  {generatedImages && generatedImages.map((image, index) => (
                    <ImageCard key={index} image={image} alt={image.description} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#fbf7f2] border-t-2 border-[#EDE4D5] mt-2 flex flex-row justify-end py-3 gap-3 mx-10">
            <span
              className="text-[#276E70] font-semibold bg-[#fbf7f2] px-4 py-2 selection:select-none border-[#276E70] border-[1px] cursor-pointer"
              onClick={handleEditImageClick}
            >
              Edit image
            </span>
            <span
              className="text-[white] font-semibold bg-[#276E70] px-4 py-2 selection:select-none cursor-pointer"
              onClick={() => navigate("/product_selection")}
            >
              Select product to print
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate_Image;
