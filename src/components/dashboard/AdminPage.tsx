import * as React from "react";
import monkeyPaslon from "../../assets/image 1.png";
import { Candidate, Voters } from "../../types/types";
import axios from "axios";
import { BASE_URL } from "../../lib/config";

interface AdminPageProps {}

const AdminPage: React.FC<AdminPageProps> = ({}) => {
  const [isVoters, setIsVoters] = React.useState<Voters[]>([]);
  const [isCandidate, setIsCandidate] = React.useState<Candidate[]>([]);

  React.useEffect(() => {
    const fetchVoters = async () => {
      const res = await axios.get(`${BASE_URL}/api/v1/votes`);
      const voters = await res.data.data;
      setIsVoters(voters);
    };

    fetchVoters();
  }, []);

  React.useEffect(() => {
    const fetchCandidate = async () => {
      const res = await axios.get(`${BASE_URL}/api/v1/candidate`);
      const candidates = await res.data.data;
      setIsCandidate(candidates);
    };

    fetchCandidate();
  }, []);

  // sort number id
  const sortedIdVoters = isVoters.slice().sort((a, b) => a.id - b.id);

  const sortedIdCandidate = isCandidate.slice().sort((a, b) => a.id - b.id);

  //total voters
  const totalVotes = isVoters.reduce((total, voter) => {
    return total + voter.users.length;
  }, 0);

  // const totalVotesPerCandidate = isVoters.map((voter) => voter.users.length);
  // const totalVotesUsers = totalVotesPerCandidate.reduce(
  //   (total, votes) => total + votes,
  //   0
  // );
  // const percetages = totalVotesPerCandidate.map(
  //   (votes) => (votes / totalVotesUsers) * 100
  // );

  return (
    <>
      <section className="flex flex-col px-[2vw] py-14">
        <div className="">
          <h1 className="text-5xl font-black text-[#5E5400] text-center">
            DASHBOARD
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {sortedIdCandidate.map((candidate, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <span
                    className={` rounded-full px-6 py-3 border-8 text-4xl font-bold ${
                      candidate.serial_number === 1
                        ? "bg-[#FF5656] border-[#5E0000] text-[#5E0000]"
                        : candidate.serial_number === 2
                        ? "bg-[#56FFF5] border-[#00585E] text-[#00585E]"
                        : "bg-[#FFCD56] border-[#5E5400] text-[#5E5400]"
                    }`}
                  >
                    {candidate.serial_number}
                  </span>
                  <div
                    className={` mt-8 px-4 py-6 rounded-2xl ${
                      candidate.serial_number === 1
                        ? "bg-[#FF5656]"
                        : candidate.serial_number === 2
                        ? "bg-[#56FFF5]"
                        : "bg-[#FFCD56]"
                    }`}
                  >
                    <div>
                      <img
                        src={monkeyPaslon}
                        alt=""
                        className="w-[330.3px] h-[262px] object-cover rounded-lg"
                      />
                      <div className="text-[#5E5400] my-3 flex-col flex">
                        <h1 className="font-black text-4xl custom">
                          {candidate.candidate_name}
                        </h1>

                        <span className="text-xl font-bold custom2">
                          Akumulasi : 75%
                        </span>

                        <span className="text-xl font-bold custom2">
                          Jumlah Vote : {totalVotes} Voters
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#D9D9D9]">
        <div className="flex flex-col items-center justify-center px-[2vw] py-36">
          <h1 className="text-5xl font-black text-[#5E5400]">LIST VOTER</h1>
          <div className="mt-10 text-black">
            <table className="min-w-full border text-left text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r pr-12 px-6 py-4 dark:border-neutral-500"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 pr-28 py-4 dark:border-neutral-500"
                  >
                    Alamat
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 pr-28 py-4 dark:border-neutral-500"
                  >
                    Jenis Kelamin
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 pr-28 py-4 dark:border-neutral-500"
                  >
                    Paslon
                  </th>
                </tr>
              </thead>
              <tbody className=" text-left bg-white">
                {sortedIdVoters.map((member, index) => {
                  const sequntialId = index + 1;

                  return (
                    <>
                      <tr
                        key={index}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {sequntialId}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.users.length > 0
                            ? member.users[0].fullname
                            : null}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.users.length > 0
                            ? member.users[0].address
                            : null}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.users.length > 0
                            ? member.users[0].gender
                            : null}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-[#061E99]">
                          {member.candidates && member.candidates.length > 0
                            ? member.candidates[0].candidate_name
                            : null}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>

            <p className="mt-10 font-bold text-2xl">
              TOTAL SUARA TERKUMPUL : {totalVotes} Voters
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
