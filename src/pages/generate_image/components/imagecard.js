import React, { useState } from "react";
import { useGenerateImageStore } from "../../../store";
import { toast } from "react-toastify";

const Image = ({ imgurl, isshow, onClick }) => {
  return (
    <div>
      {isshow &&
        <div className="p-2 bg-[#276E70] transition duration-300 hover:brightness-[150%] cursor-pointer" onClick={onClick}>
          <img className="size-4" src={imgurl} alt="img" />
        </div>}
    </div>
  );
};

const ImageCard = ({ image }) => {
  const [showtool, setshowtool] = useState(false);
  const { editingImages, setEditingImages } = useGenerateImageStore();
  return (
    <div
      className="flex items-center max-w-[30vh] min-w-[30vh] space-x-2 h-[30vh] shadow-xl transition duration-300 shadow-gray-400 hover:brightness-[75%]"
      style={{
        backgroundImage: `url(${image.image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onMouseOver={() => setshowtool(true)}
      onMouseLeave={() => setshowtool(false)}
    >
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-row justify-between m-2">
          <Image imgurl={"images/edit_rect.png"} isshow={showtool} />
          <div className="flex flex-row gap-1">
            <Image imgurl={"images/edit_arrowexpand.png"} isshow={showtool} />
            <Image imgurl={"images/edit_plus.png"} isshow={showtool} onClick={() => {
              const alreadyAdded = editingImages.includes(image);
              if (alreadyAdded) {
                toast.error('This image is already added');
              } else {
                setEditingImages([...editingImages, image])
                toast.success("Added one image");
              }
            }} />
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
