import React from 'react'

const Banner = () => {
        return (
          <div className="w-[95%] h-[55vh] flex flex-col items-center justify-center mx-auto mb-[30px] bg-gradient-to-b from-[#e1ffea22] to-[#afff97] gap-2 py-0 ">
            <h1 className="text-[#454545] text-[50px] font-semibold">
              Get Exclusive Offers On Your Email
            </h1>
            <p className="text-[#454545] text-[20px] font-medium">
              Subscribe to our newsletter and stay updated
            </p>
            <div className="flex items-center justify-between bg-white w-[600px] h-[50px] rounded-full border border-[#e3e3e3]">
              <input
                type="email"
                placeholder="Enter your Email Id"
                className="w-[500px] h-[40px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px]"
              />
              <button className="w-[180px] h-[50px] rounded-full bg-black text-white text-[16px] cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        );
      };      

export default Banner