// import React, { useState } from "react";

// const Image = ({ imgurl, isActive }) => {
//   return (
//     <div>
//       <img src={imgurl} className='hover:brightness-[150%]' alt="img" />
//     </div>
//   );
// };

const Carousel = () => {
  // const [selectImage, setSelectImage] = useState(1);

  return (
    <div className="flex flex-row gap-3 pb-3">
      <img src="images/product_design/1.png" alt="product_design" />
      <img src="images/product_design/2.png" alt="product_design" />
      <img src="images/product_design/3.png" alt="product_design" />
      <img src="images/product_design/4.png" alt="product_design" />
    </div>
  );
};

export default Carousel;