export type ExtendedVoting = {
  bgColor: string;
  bgNamePaslon: string;
  name: string;
  paslon: string;
  count: string;
};

export type ExtendedVotingModal = {
  noPaslon: number;
  image: string;
  name: string;
  title: string;
  list: {
    title: string;
    partai: string;
  };
};

export type ListVoterData = {
  no: number;
  name: string;
  address: string;
  gender: string;
  paslon: string;
};

export type IAuth = {
  // isAdmin: boolean
  username: string;
  password: string;
};

export type IRegister = {
  fullname: string;
  address: string;
  gender: string;
  username: string;
  password: string;
};

export type Parties = {
  parties_name: string;
  parties_chairman: string;
  vision_mission: string;
  parties_address: string;
  parties_image: string;
};

export type Candidate = {
  id: number;
  candidate_name: string;
  serial_number: number;
  vision_mission: string[];
};

export type Voters = {
  id: number;
  candidates: Candidate[];
  users: IRegister[];
};
