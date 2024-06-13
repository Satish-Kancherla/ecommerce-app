import React from 'react'

const Hero = () => {
    return (
        <div className="h-[90vh] bg-gradient-to-b from-[#ffb4b4] to-[#e1ffea22] flex">
          <div className="flex-1 flex flex-col justify-center gap-5 pl-[180px] leading-tight">
            <h2 className="text-[26px] font-semibold text-[#090909]">NEW ARRIVALS ONLY</h2>
            <div>
              <div className="flex items-center gap-5">
                <p className="text-[80px] font-bold text-[#171717]">new</p>
                <img src="wave.png" alt='' className="w-[80px]"/>
              </div>
              <p className="text-[80px] font-bold text-[#171717]">collections</p>
              <p className="text-[80px] font-bold text-[#171717]">for everyone</p>
            </div>
            {/* <div className="flex justify-center items-center gap-[15px] w-[310px] h-[70px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium rounded-full">
                <div>Latest Collection</div>
                <img src={arrow} alt='' className="w-[40px]"/>
            </div> */}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="wom.png" alt='' className="w-[100%] mr-[100px]"/>
          </div>
        </div>
      )
    }

export default Hero