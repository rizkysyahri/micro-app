import * as React from "react";
import Navbar from "../navbar/Navbar";
import monkeyPaslon from "../../assets/image 1.png";
import { useNavigate } from "react-router-dom";
import { Candidate } from "../../types/types";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

interface ListPaslonProps {}

const ListPaslon: React.FC<ListPaslonProps> = ({}) => {
  const [candidate, setCandidate] = React.useState<Candidate[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchCandidate = async () => {
      const response = await axios.get(`${BASE_URL}/api/v1/candidate`);
      const candidate = await response.data.data;
      setCandidate(candidate);
    };

    fetchCandidate();
  }, []);

  const handleCLickAddPaslon = () => {
    navigate("/add-paslon");
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-[2vw] py-14">
        <h1 className="text-5xl font-black text-[#5E5400] text-center">
          LIST PASLON
        </h1>

        <div className="flex items-start justify-end mt-4">
          <button
            onClick={handleCLickAddPaslon}
            className="bg-[#5E5400] text-white px-4 py-2 rounded-md"
          >
            Add Paslon
          </button>
        </div>

        <div className="mt-10 text-black">
          <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  No. Urut
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Visi & Misi
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Koalisi
                </th>
              </tr>
            </thead>
            <tbody className="text-left bg-white">
              {candidate.map((candidates, index) => {
                return (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r text-center px-6 py-4 font-medium dark:border-neutral-500">
                      {candidates.serial_number}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      <img
                        src={monkeyPaslon}
                        alt=""
                        className="w-[78px] h-[94px] rounded-lg"
                      />
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      {candidates.candidate_name}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      <ul className="list-disc">
                        <li>{candidates.vision_mission}</li>
                       
                      </ul>
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      <ul className="list-disc">
                        <li>Partai Persatuan Wiboo.</li>
                        <li>Partai Redbull.</li>
                        <li>Partai Black Magic.</li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListPaslon;
