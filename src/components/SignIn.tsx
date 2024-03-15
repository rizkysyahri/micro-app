import * as React from "react";
import { IAuth } from "../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  onLoginSuccess: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = React.useState<IAuth>({
    username: "",
    password: "",
  });

  // const [formLoginAdmin, setFormLoginAdmin] = React.useState<IAuth>({
  //   username: "admin",
  //   password: "admin123",
  // });

  const handleOnChangeFormLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });

    // setFormLoginAdmin({
    //   ...formLoginAdmin,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await axios.post<IAuth>(
        "http://localhost:3000/api/v1/signin",
        {
          username: formLogin.username,
          password: formLogin.password,
        }
      );

      console.log(response.data);

      if (response.data) {
        onLoginSuccess();

        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmitLogin(e)}>
        <div className="relative p-6 gap-3">
          <div className="text-[#5E5400] flex flex-col">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Username</label>
              <input
                className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                onChange={handleOnChangeFormLogin}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                className="shadow appearance-none border-2 border-[#595959] rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                name="password"
                onChange={handleOnChangeFormLogin}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 rounded-b ">
          <button
            className="w-full text-white bg-[#5E5400] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
