import { FC } from "react";
import Navbar from "../../navbar/Navbar";
import monkeyPaslon from "../../../assets/image 1.png";

interface AddPartaiProps {}

const AddPartai: FC<AddPartaiProps> = ({}) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-[2vw] py-14">
        <h1 className="text-5xl font-black text-[#5E5400] text-center">
          ADD PARTAI
        </h1>

        <div className="mt-10 flex">
          <div>
            <img src={monkeyPaslon} alt="" />
          </div>
          <div className="w-full items-end justify-end ml-10">
            <div className="flex flex-col">
              <label htmlFor="">Nama</label>
              <input
                className="mb-4 shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
              <div>
                <label htmlFor="">Ketua Umum</label>
                <input
                  className="mb-4 shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Visi & Misi</label>
                <textarea
                  rows={5}
                  className="mb-4 shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="">Alamat</label>
                <textarea
                  rows={5}
                  className="mb-4 shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <button className="bg-[#5E5400] text-white px-4 py-2 rounded-md w-10/12 font-bold text-3xl">
           SUBMIT
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPartai;
