import React from "react";
import logo from "../assets/logo_dumbways.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="px-[13vw] py-10 flex flex-row items-center">
        <div className="text-white">
          <img src={logo} alt="" className="bg-cover" />
        </div>
          <div className="text-white ml-10">
            <span className="font-bold text-2xl">DUMBWAYS.ID</span>
            <p className="text-[#B6B6B6] text-base">Jl. Elang IV, Sawah Lama, Kec, Ciputat, Kota</p>
            <p className="text-[#B6B6B6] text-base">Tangerang Selatan, Banten 15413</p>
          </div>
      </div>

      <div className="border-y-2"></div>

      <div className="py-5 text-white flex items-center justify-center">
        <p>Komisi Pemilihan Umum DumbWays.ID | Rizky Syahri Ramadhan 2023</p>
      </div>
    </div>
  );
};

export default Footer;
