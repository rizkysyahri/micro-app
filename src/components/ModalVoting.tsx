import * as React from "react";
import { ExtendedVotingModal } from "../types/types";

interface ModalVotingProps {
  initialModal: ExtendedVotingModal[];
}

const ModalVoting: React.FC<ModalVotingProps> = ({ initialModal }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#5E5A00] text-3xl px-10 py-2 rounded-lg text-white font-semibold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        MASUKAN SUARAMU
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm bg-opacity-35 bg-black">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-end justify-end p-5">
                 
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <h3 className="text-4xl font-black text-center text-[#5E5400]">MASUKAN PILIHAN MU</h3>
                <div className="relative p-6 flex flex-row gap-3">
                  {initialModal.map((vote, index) => {
                    return (
                      <>
                        <div key={index} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full ">
                          <div className="bg-center">
                            <img
                              src={vote.image}
                              alt=""
                              className="h-[189px] w-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-col flex text-left mt-2">
                            <span className="text-[#5E5A00] text-lg font-semibold">{vote.name}</span>
                            <span className="text-sm">{vote.title}</span>
                            <span className="mt-2 font-semibold">{vote.list.title} :</span>
                            <li className="ml-2 text-sm">{vote.list.partai}</li>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center p-6 gap-4">
                  <button
                    className="text-[#5E5400] text-3xl border-2 rounded-lg border-[#5E5400] background-transparent font-bold uppercase px-6 py-2 w-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    RESET
                  </button>
                  <button
                    className="text-white bg-[#5E5400] active:bg-#5E5400 font-bold uppercase text-3xl rounded-lg px-6 py-3 w-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalVoting;
