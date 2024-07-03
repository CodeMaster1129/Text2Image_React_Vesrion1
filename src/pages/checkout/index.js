import { useState } from "react";
import Slider from "./components/slider";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Checkbox from "../../components/ui/common/Checkbox";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [deliver, setDeliver] = useState(false);
  const [saveAddress, setSaveAddress] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-1/5">
          <Sidebar total={total} setTotal={setTotal} />
        </div>
        <div className="w-4/5 h-full bg-[#fbf7f2] flex flex-col">
          <Header />
          <div className="flex flex-col h-full px-10 bg-[#fbf7f2] pt-10">
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
                <div className="w-1/4 text-[#053536] font-bold py-2 border-b-[1px] border-[#053536]">
                  4. Checkout
                </div>
              </div>
              <Slider />
            </div>
            <div className="flex flex-row gap-10">
              <div className="w-full py-8">
                <h2 className="text-lg font-semibold mb-5 text-left text-[#053536]">
                  SHIPPING ADDRESS
                </h2>
                <div className="flex flex-col gap-2">
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      First Name:
                    </span>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="Alexander"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Exp. date:
                    </span>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="Wong"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Address Line 1:
                    </span>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="Your address"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Address Line 2:
                    </span>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="Your address"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Country:
                    </span>
                    <select className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md">
                      <option>United States of America</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      City / Town:
                    </span>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="New York"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Postal / Zip Code:
                    </span>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="546875"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Email:
                    </span>
                    <input
                      type="email"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="example@mail.com"
                    />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center">
                    <span className="text-gray-700 w-1/4 text-left">
                      Phone number:
                    </span>
                    <input
                      type="tel"
                      className="mt-1 block w-full px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                      placeholder="1 (123) 456 78 96"
                    />
                  </label>
                  <label className="flex items-center my-4">
                    <Checkbox
                      id="billing_deliver"
                      checkedstatus={deliver}
                      onchange={() => setDeliver(!deliver)}
                    />
                    <span className="ml-2 text-gray-700">
                      Billing Address Same As Deliver
                    </span>
                  </label>
                  <label className="flex items-center mb-4">
                    <Checkbox
                      id="save_address"
                      checkedstatus={saveAddress}
                      onchange={() => setSaveAddress(!saveAddress)}
                    />
                    <span className="ml-2 text-gray-700">
                      Save Delivery Address
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-full py-8 flex flex-col gap-4">
                <h2 className="text-lg text-[#053536] font-semibold mb-5 text-left">
                  Payment
                </h2>
                <div className="flex flex-row justify-start gap-3">
                  <label className="flex flex-row gap-2 justify-center items-center mr-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="form-radio text-[#276E70]"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    <span>My Card</span>
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center mr-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="form-radio text-blue-600"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                    />
                    <img src="images/checkout/paypal.png" alt="paypal" />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center mr-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="form-radio text-blue-600"
                      value="gpay"
                      checked={paymentMethod === "gpay"}
                      onChange={() => setPaymentMethod("gpay")}
                    />
                    <img src="images/checkout/googlepay.png" alt="googlepay" />
                  </label>
                  <label className="flex flex-row gap-2 justify-center items-center mr-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="form-radio text-blue-600"
                      value="applepay"
                      checked={paymentMethod === "applepay"}
                      onChange={() => setPaymentMethod("applepay")}
                    />
                    <img src="images/checkout/applepay.png" alt="applepay" />
                  </label>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <label className="w-1/4 text-gray-700 text-left">
                    Card number:
                  </label>
                  <input
                    type="text"
                    className="w-3/4 px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                    placeholder="1234-5678-1234-5678"
                  />
                </div>
                <div className="flex flex-row w-full justify-center items-center">
                  <label className="block mb-2 text-gray-700 w-1/4 text-left">
                    Exp. date:
                  </label>
                  <input
                    type="text"
                    className="w-1/4 px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                    placeholder="02/26"
                  />
                  <label className="block mb-2 text-gray-700 w-1/4 text-right">CVV:</label>
                  <input
                    type="text"
                    className="w-1/4 px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md"
                    placeholder="***"
                  />
                </div>
                <div className="flex flex-row w-full justify-center items-center">
                  <label className="w-1/4 text-gray-700 text-left">
                    Purchasing currency:
                  </label>
                  <select className="w-3/4 px-3 py-2 bg-[#fbf7f2] border border-[#CAAC94]/50 rounded-md">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <label className="flex items-center mb-4">
                  <Checkbox
                    id="saveCard"
                    checkedstatus={saveCard}
                    onchange={() => setSaveCard(!saveCard)}
                  />
                  <span className="ml-2 text-gray-700">Save My Card</span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-[#fbf7f2] border-t-2 border-[#EDE4D5] mt-2 flex flex-row justify-end items-center py-3 gap-3 mx-10">
            <span className="text-[14px] text-[#485D5E]">
              By Cliling Pay Now I Agree to the Terms & Conditions
            </span>
            <span className="text-[white] font-semibold bg-[#276E70] px-4 py-2 selection:select-none cursor-pointer">
              Pay Now ${total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
