import React, { useState } from "react";
import { toast } from "react-toastify";
import Lightbox from "react-image-lightbox";
import { useGenerateImageStore } from "../../../store";
import { useGenerateImageActions } from "../../../actions/generateActions";

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
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const { deleteImage } = useGenerateImageActions();
  const { originImage, setOriginImage } = useGenerateImageStore();
  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(() => alert('Could not download the image'));
  };

  return (
    <>
      <div
        className={`flex items-center max-w-[30vh] min-w-[30vh] space-x-2 h-[30vh] shadow-xl transition duration-300 shadow-gray-400 cursor-pointer ${image === originImage ? 'brightness-[50%]' : ''}`}
        style={{
          backgroundImage: `url(${image.image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onMouseOver={() => setshowtool(true)}
        onMouseLeave={() => setshowtool(false)}
        onClick={() => {
          setOriginImage(image);
          toast.success("You selected this image");
        }}
      >
        <div className="flex flex-col w-full h-full justify-between">
          <div className="flex flex-row justify-between m-2">
            <div className="flex flex-row justify-between grow">
              <div className="flex gap-x-1">
                <Image
                  imgurl={"images/edit_arrowexpand.png"}
                  isshow={showtool}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightBoxOpen(true);
                  }}
                />
                <Image
                  imgurl={"images/edit_download.png"}
                  isshow={showtool}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(image.image_url, `${image.description}.png`);
                  }}
                />
              </div>
              <div>
                <Image
                  imgurl={"images/edit_delete.png"}
                  isshow={showtool}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (image === originImage) {
                      setOriginImage({});
                    }
                    deleteImage(image.id);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {lightBoxOpen && (
        <Lightbox
          mainSrc={image.image_url}
          onCloseRequest={() => setLightBoxOpen(false)}
          reactModalStyle={{
            overlay: {
              zIndex: 1000,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
            },
            content: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: 0,
              margin: 0,
              border: 'none',
              borderRadius: 'none',
            },
          }}
        />
      )}
    </>
  );
};

export default ImageCard;
