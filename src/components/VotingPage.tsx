import * as React from "react";
import { ExtendedVoting } from "../types/types";
import Footer from "./Footer";
import Modal from "./ModalVoting";
import { modalPaslon } from "../mocks/paslon";
import ChartForVoting from "./ChartForVoting";
import CarouselDefault from "./Carousel";

interface VotingPageProps {
  initialVoting: ExtendedVoting[];
}

const VotingPage: React.FC<VotingPageProps> = ({ initialVoting }) => {
  //   const [isVoting, setIsVoting] = React.useState<>();
  return (
    <>
      <div className="flex items-center justify-center px-[2vw] py-14">
        <div className="flex-col">
          <h1 className="text-5xl text-center font-black text-[#5E5400]">
            INFO PEMILU TERUPDATE
          </h1>
          <div className="flex flex-row gap-3 mt-5">
            <div className="flex items-start justify-start">
             
                <ChartForVoting />
            </div>
            <div className="flex flex-col items-end justify-end gap-3">
              {initialVoting.map((voting, index) => {
                const backgroundColor = { backgroundColor: voting.bgColor };
                const backgroundPaslon = {
                  backgroundColor: voting.bgNamePaslon,
                };
                return (
                  <>
                    <div
                      key={index}
                      className="w-full h-auto rounded-lg p-5"
                      style={backgroundColor}
                    >
                      <div className="flex flex-row">
                        <div
                          className="h-24 rounded-lg text-white flex flex-col p-2 text-center font-semibold"
                          style={backgroundPaslon}
                        >
                          <span className="">No.</span>
                          <span className="">Paslon</span>
                          <span className="text-2xl">1</span>
                        </div>
                        <div className="ml-10 flex flex-col">
                          <span
                            className={`text-4xl font-black text-[${voting.bgNamePaslon}] rounded-lg custom`}
                          >
                            {voting.name}
                          </span>
                          <span
                            className={`text-4xl font-black text-[${voting.bgNamePaslon}] custom`}
                          >
                            {voting.count}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="text-center mt-10">
            <Modal initialModal={modalPaslon} />
          </div>
        </div>
      </div>

      <section className="mt-10 bg-[#cecece]">
        <div className="py-14">
          <h1 className="text-4xl text-center text-[#5E5400] font-black">
            INFO PASLON
          </h1>

          <CarouselDefault />
        </div>
      </section>

      <section className="my-20 px-[13vw]">
        <p className="text-center font-bold text-[#FF0000] text-4xl">
          PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
          MELEGALKAN SLOT
        </p>
      </section>

      <Footer />
    </>
  );
};

export default VotingPage;
