import { useEffect } from "react";
import ProductCard from "../components/productcard";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "All-Over Print Men's O-neck Long Tank Top",
    imageUrl: "images/checkout/product1.png",
    price: 19,
    color: "White",
    size: "M",
    quantity: 1,
  },
  {
    name: "Corporate baseball cap",
    imageUrl: "images/checkout/product2.png",
    price: 8,
    color: "Green",
    size: "Universal",
    quantity: 1,
  },
];

const Sidebar = ({ total, setTotal }) => {
  const tax = 72.50;
  // const [tax, setTax] = useState(72.50);
  const navigate = useNavigate();

  useEffect(() => {
    const newTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [setTotal]);

  return (
    <div className="flex flex-col w-full selection:select-none">
      <div className="bg-[#f4ede3] flex flex-col px-4 gap-2 h-[90vh] overflow-auto">
        <span className="text-[28px] text-left font-bold px-4 py-8">
          PAGHEERA
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] font-bold">MY CART</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <span className="text-[#485D5E] text-[14px] text-left">
            Lorem ipsum dolor sit amet consectetur. Pulvinar tortor ultrices
            sapien id.
          </span>
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
          <div className="flex flex-col gap-2 border-y-[1px] border-[#CAAC94]/50 py-4">
            <div className="flex flex-row justify-between">
              <span>Subtotal:</span>
              <span className="text-[16px] font-bold text-[#053536]">${total}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Delivery:</span>
              <span className="text-[16px] font-bold text-[#053536]">FREE</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Taxes:</span>
              <span className="text-[16px] font-bold text-[#053536]">${tax}</span>
            </div>
          </div>
          <div className="flex flex-row justify-between py-4">
            <span className="text-[16px] font-bold text-[#053536]">TOTAL:</span>
            <span className="text-[16px] font-bold text-[#053536]">${Number(total) + Number(tax)}</span>
          </div>
        </div>
      </div>
      <div className="px-4 bg-[#f4ede3]">
        <div className="flex py-2 h-[10vh] justify-center items-center w-full cursor-pointer border-t-[1px] border-t-[#CAAC94]/50">
          <span className="text-[#276E70] font-bold border border-[#276E70] w-full px-4 py-2 selection:select-none" onClick={() => navigate("/image_edit")}>
            Back to Image Editing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
