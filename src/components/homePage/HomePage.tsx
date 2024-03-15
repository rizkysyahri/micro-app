import React from "react";
import branded from "../../assets/brandred 1.png";
import kotakSuara from "../../assets/kotak-suara.png";
import Footer from "../Footer";
import watermak from "../../assets/watermak.png";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-[#cecece]">
        <div className="px-[2vw] py-14">
          <div className="relative">
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
            <div className="flex flex-wrap gap-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <a href="/detail">
                    <img src={watermak} alt="" />
                  </a>
                </div>

                <div className="flex flex-col bg-white">
                  <img src={watermak} alt="" />
                  <div className="p-3 flex-wrap flex">
                    <div className="px-4 py-2 bg-[#FF0000] text-white rounded-[10px]">
                      <span className="font-bold text-xl">
                        SENIN, 03 JAN 2023
                      </span>
                    </div>
                    <p className="font-bold text-3xl mt-2">
                      KPU TETAPKAN 3 MENTOR TERBAIK
                    </p>
                    <p className="text-xl">SUPER ADMIN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="flex flex-col bg-white">
                <img src={watermak} alt="" />
                <div className="p-3 flex-wrap flex">
                  <div className="px-4 py-2 bg-[#FF0000] text-white rounded-[10px]">
                    <span className="font-bold text-xl">
                      SENIN, 03 JAN 2023
                    </span>
                  </div>
                  <p className="font-bold text-3xl mt-2 mr-10">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-xl">SUPER ADMIN</p>
                </div>
              </div>
              <div className="flex flex-col bg-white">
                <img src={watermak} alt="" />
                <div className="p-3 flex-wrap flex">
                  <div className="px-4 py-2 bg-[#FF0000] text-white rounded-[10px]">
                    <span className="font-bold text-xl">
                      SENIN, 03 JAN 2023
                    </span>
                  </div>
                  <p className="font-bold text-3xl mt-2 mr-10">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-xl">SUPER ADMIN</p>
                </div>
              </div>
              <div className="flex flex-col bg-white">
                <img src={watermak} alt="" />
                <div className="p-3 flex-wrap flex">
                  <div className="px-4 py-2 bg-[#FF0000] text-white rounded-[10px]">
                    <span className="font-bold text-xl">
                      SENIN, 03 JAN 2023
                    </span>
                  </div>
                  <p className="font-bold text-3xl mt-2 mr-10">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-xl">SUPER ADMIN</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="my-20 `px-[13vw]`">
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
