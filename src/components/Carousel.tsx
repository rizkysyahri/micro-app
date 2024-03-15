import { Carousel } from "@material-tailwind/react";
import monkeyImage from "../assets/image 1.png";
import * as React from "react";
import { Candidate } from "../types/types";
import axios from "axios";
import { BASE_URL } from "../lib/config";

export default function CarouselDefault() {
  const [isCandidate, setIsCandidate] = React.useState<Candidate[]>([]);

  React.useEffect(() => {
    const fetchCandidate = async () => {
      const res = await axios.get(`${BASE_URL}/api/v1/candidate`);
      const candidate = await res.data.data;
      console.log(candidate);
      setIsCandidate(candidate);
    };

    fetchCandidate();
  }, []);

  return (
    <Carousel className="rounded-xl">
      {isCandidate?.map((candidate, index) => {
        return (
          <>
            <div className="bg-white h-auto w-[947px] mx-auto p-10 flex flex-row mt-10 rounded-lg">
              <img src={monkeyImage} alt="" className="w-[246px]" />
              <div className="ml-10 flex-col flex">
                <span className="font-bold text-2xl">
                  Nomor Urut: {candidate.serial_number}
                </span>
                <span className="font-bold text-4xl text-[#5E0000]">
                  {candidate.candidate_name}
                </span>
                <p className="mt-4">VISI & MISI :</p>
                <ul className="list-disc ml-6">{candidate.vision_mission}</ul>

                <p className="mt-4">KOALISI :</p>
                <ul className="list-disc ml-6">
                  <li>Partai Pesatuan Wibop</li>
                  <li>Partai Redbull</li>
                  <li>Partai Black Magic</li>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </Carousel>
  );
}
