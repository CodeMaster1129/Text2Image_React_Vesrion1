import { useEffect, useState } from "react";
import axios from "axios";
// import ImageCard from "./components/imagecard";
// import Slider from "./components/slider";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Loader from "../../components/ui/common/Loader";
import { useNavigate } from "react-router-dom";
import { useGenerateImageStore } from "../../store";

const ImageEdit = () => {
  const [colorAdjustmentValues, setColorAdjustmentValues] = useState({
    saturation: 0,
    temperature: 0,
    tint: 0
  });
  const { originImage, setOriginImage } = useGenerateImageStore();
  const [enhancedImageUrl, setEnhancedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedImage = JSON.parse(localStorage.getItem('originImage'));
    if (Object.keys(storedImage).length > 0) {
      setOriginImage(storedImage);
      setLoading(true);
      const getEnhancedImage = async () => {
        axios.post(`${process.env.REACT_APP_API_URL}/edit_image/`, {
          description: storedImage.description,
          image_url: storedImage.image_url,
        })
          .then((res) => {
            if (res.status === 200) {
              setEnhancedImageUrl(res.data.image_url);
              setLoading(false);
            }
          })
          .catch(err => console.error(err))
      }

      getEnhancedImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-[50px]">
          <Sidebar colorAdjustmentValues={colorAdjustmentValues} setColorAdjustmentValues={setColorAdjustmentValues} />
        </div>
        <div className="w-full h-[100vh] bg-[#fbf7f2] flex flex-col">
          <Header />
          <div className="flex flex-col grow justify-between px-10 bg-[#fbf7f2] pt-10 selection:select-none">
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
            <div className="flex flex-col w-full grow justify-between">
              <div className="flex lg:flex-col w-full h-full justify-between">
                <div className="flex flex-row grow gap-5 px-10">
                  <div className="flex flex-col w-full h-full gap-5 pt-10">
                    <span>Before</span>
                    <div className="flex justify-center items-center grow">
                      <div className="relative w-full h-full">
                        {originImage && (
                          <img
                            src={originImage.image_url}
                            alt="generate_image"
                            className="absolute top-0 left-0 max-w-full max-h-full m-auto object-contain"
                            style={{ width: 'min(100%, 100vh)', height: 'min(100%, 100vh)' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-full gap-5 pt-10">
                    <span>After</span>
                    <div className="flex justify-center items-center grow">
                      <div className="relative w-full h-full">
                        {loading ? <Loader /> : <img
                          src={enhancedImageUrl}
                          alt="generate_image"
                          className="absolute top-0 left-0 max-w-full max-h-full m-auto object-contain"
                          style={{ width: 'min(100%, 100vh)', height: 'min(100%, 100vh)' }}
                        />}
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
      </div >
    </div >
  );
};

export default ImageEdit;
