import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex items-center gap-5">
            <img src="{amazon}" alt="Amazon logo" className="w-15" />
            <p className="text-[#383838] text-[35px] font-bold">AMAZON</p>
          </div>
          <ul className="flex list-none gap-8 text-[#252525] text-[14px]">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="flex gap-5">
            <div className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
              <img src="whatsapp.png" alt="WhatsApp icon" className="w-5" />
            </div>
            <div className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
              <img src="youtube.png" alt="YouTube icon" className="w-5" />
            </div>
            <div className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
              <img src="/facebook.png" alt="Facebook icon" className="w-5" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 w-full mb-7 text-[#1a1a1a] text-[14px]">
            <hr className="w-4/5 border-none rounded-lg h-0.5 bg-[#c7c7c7]" />
            <p>Copyright @ 2024 - All Right Reserved</p>
          </div>
        </div>
      );
    };
    

export default Footer