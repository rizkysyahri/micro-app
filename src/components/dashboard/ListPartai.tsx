import * as React from "react";
import Navbar from "../navbar/Navbar";
// import monkeyPaslon from "../../assets/image 1.png";
import { useNavigate } from "react-router-dom";
import { Parties } from "../../types/types";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

interface ListPartaiProps {}

const ListPartai: React.FC<ListPartaiProps> = ({}) => {
  const [listParties, setListParties] = React.useState<Parties[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchParties = async () => {
      const response = await axios.get(`${BASE_URL}/api/v1/parties`);
      const parties = await response.data.data
      setListParties(parties);
    };

    fetchParties();
  }, []);

  const handleClickAddPartai = () => {
    navigate("/add-partai");
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-[2vw] py-14">
        <h1 className="text-5xl font-black text-[#5E5400] text-center">
          LIST PARTAI
        </h1>

        <div className="flex items-start justify-end mt-4">
          <button
            onClick={handleClickAddPartai}
            className="bg-[#5E5400] text-white px-4 py-2 rounded-md"
          >
            Add Partai
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
                 Ketua Umum
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Logo
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Partai
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
                  Alamat
                </th>
              </tr>
            </thead>
            <tbody className="text-left bg-white">
              {listParties?.map((parties, index) => {
                return (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r text-center px-6 py-4 font-medium dark:border-neutral-500">
                     1
                    </td>
                    <td className="whitespace-nowrap border-r text-center px-6 py-4 font-medium dark:border-neutral-500">
                      {parties.parties_chairman}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      <img
                        src={parties.parties_image}
                        alt=""
                        className="w-[78px] h-[94px] rounded-lg"
                      />
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      {parties.parties_name}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      <ul className="list-disc">{parties.vision_mission}</ul>
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      {parties.parties_address}
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

export default ListPartai;
