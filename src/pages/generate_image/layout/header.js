import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle clicking outside of the dropdown to close it
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <div className="bg-[#fbf7f2] flex justify-end items-center py-4 px-8 text-black w-full selection:select-none">
        <div className="flex flex-row w-3/5 justify-between items-center">
          <div className="text-[#053536] font-bold justify-center cursor-pointer">Home</div>
          <div className="text-[#485D5E] cursor-pointer">Benefits</div>
          <div className="text-[#485D5E] cursor-pointer">Pricing</div>
          <div className="text-[#485D5E] cursor-pointer">Contact</div>
          <div className="flex flex-row justify-between items-center gap-6">
            <div className="text-[#485D5E] font-bold flex flex-row gap-2 items-center">
              <img src="images/database.png" className="size-5" alt="database" />
              <span>245</span>
            </div>
            <img src="images/alert.png" className="size-5" alt="alert" />
            <img src="images/notification.png" className="w-4 h-5" alt="notification" />
            <img
              src="images/profile.png"
              alt="profile"
              className="size-10 cursor-pointer"
              onClick={() => { setShowDropdown(!showDropdown) }}
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute mt-12 right-10 top-4 bg-white shadow-lg w-48 py-3"
              >
                <div className="flex flex-row justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img className="h-full w-auto" src="images/profile_.png" alt="profile" />
                  My Profile
                </div>
                <div className="flex flex-row justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img className="h-full w-auto" src="images/history.png" alt="history" />
                  Order History
                </div>
                <div className="flex flex-row justify-start items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img className="h-full w-auto" src="images/balance.png" alt="balance" />
                  Balance
                </div>
                <div className="flex flex-col gap-2 border-t-[1px] border-t-[#CAAC94]/50 mx-4 py-3">
                  <div className="py-2 cursor-pointer text-white bg-[#276E70]">
                    New Product
                  </div>
                  <div className="py-2 border border-[#276E70] cursor-pointer text-[#276E70]" onClick={() => {
                    localStorage.removeItem('auth-state');
                    navigate("/auth/signin");
                  }}>
                    Log Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
