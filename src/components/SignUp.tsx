import { FC } from "react";

interface SignUpProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignUp: FC<SignUpProps> = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <form className="relative p-6 gap-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="text-[#5E5400] flex flex-col">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">FullName</label>
            <input
              className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="fullname"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Alamat</label>
            <input
              className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="address"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Jenis Kelamin
            </label>
            <input
              className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="gender"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Username</label>
            <input
              className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
        ``
        <div className="flex flex-col items-center justify-center p-6 rounded-b ">
          <button
            className="w-full text-white bg-[#5E5400] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
