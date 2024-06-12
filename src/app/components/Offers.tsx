import React from "react";

const Offers = () => {
  return (
    <div className="w-[100%] h-[20vh] flex mb-10 px-[100px] justify-center  bg-gradient-to-b from-[#afff97c4] to-[#e1ffea22]">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[25px] font-semibold text-[#171717]">Exclusive</h1>
        <h1 className="text-[25px] font-semibold text-[#171717]">
          Offers For You
        </h1>
        <p className="text-[15px] font-semibold text-[#171717]">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        {/* <button className="w-[182px] h-[40px] rounded-full bg-[#ff4141] text-white text-[18px] font-medium mt-[30px] cursor-pointer">Check Now</button> */}
      </div>
      <div className="flex-0.5 flex flex-col justify-end">
        <img src="{offers}" alt="" className="w-[80%]" />
      </div>
    </div>
  );
};
export default Offers;
