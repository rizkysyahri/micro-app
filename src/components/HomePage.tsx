import React from "react";
import branded from "../assets/brandred 1.png";
import kotakSuara from "../assets/kotak-suara.png";
import headline from "../assets/headline.png";
import Footer from "./Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-[#cecece]">
        <div className="px-[2vw] py-14">
          <div className="relative ">
            <div className="w-full h-[516px] gradient rounded-2xl flex">
              <div className="flex flex-col">
                <img
                  src={branded}
                  alt=""
                  className="w-[342px] opacity-75 rounded-tl-30 bg-"
                />

                <div className="mt-32 mx-6 text-white">
                  <p className="font-bold text-[64px] leading-[77.45px]">
                    SELAMAT DATANG
                  </p>
                  <p className="font-bold text-2xl">
                    PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR{" "}
                  </p>
                  <p className="font-bold text-2xl">
                    DIPILIH MELALUI SEBUAH ARTI NAMA
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={kotakSuara}
                  alt=""
                  className="w-[286px] h-[473px] bg-cover mb-11 ml-60"
                />
              </div>
            </div>
          </div>

          <section className="mt-20">
            <div>
              <img src={headline} alt="" />
            </div>
          </section>
        </div>
      </div>

      <section className="my-20 px-[13vw]">
        <div className="flex items-center justify-center">
          <p className="text-center font-bold text-black text-4xl">
            PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN
            MEREKA TIDAK MEMLIKI VISI MISI UNTUK MELEGALKAN SLOT
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
