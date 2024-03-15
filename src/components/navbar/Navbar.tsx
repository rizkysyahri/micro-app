import * as React from "react";
import logo from "../../assets/logo_dumbways.png";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { IRegister } from "../../types/types";
import UserAccountNav from "../UserAccountNav";

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isActive, setIsActive] = React.useState("signin");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [formRegister, setFormRegister] = React.useState<IRegister>({
    fullname: "",
    address: "",
    gender: "",
    username: "",
    password: "",
  });

  const handleSignInClick = () => {
    setShowModal(true);
    setIsActive("signin");
    window.history.pushState(null, "", "/signin");
  };

  const handleSignUpClick = () => {
    setShowModal(true);
    setIsActive("signup");
    window.history.pushState(null, "", "/signup");
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
    window.history.pushState(null, "", "/");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const config = {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formRegister),
      };

      const response = await fetch(
        "http://localhost:3000/api/v1/register",
        config
      );

      console.log(response);
      if (response.ok) {
        navigate("/signin");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      // console.log(error)
      throw error;
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleCloseModalClick();
  };

  return (
    <>
      <div className="flex items-center justify-between px-[2vw] py-2 bg-black text-white">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10" />

          <span className="font-semibold">
            <Link to="/">PEMILU PRESIDEN DUMBWAYS.ID</Link>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>Partai</span>
          <span>|</span>
          <span>Paslon</span>
          <span>|</span>
          <span>
            <Link to="/voting">Voting</Link>
          </span>

          <>
            {isLoggedIn ? (
              <>
                <UserAccountNav />
              </>
            ) : (
              <>
                <button
                  className="bg-white text-black px-4 py-1 rounded-md ml-5 "
                  onClick={handleSignInClick}
                >
                  Login
                </button>
              </>
            )}

            {showModal ? (
              <>
                <div className="block justify-center items-center overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-opacity-35">
                  <div className="relative w-auto my-10 mx-auto max-w-sm">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none">
                      <div className="flex items-start justify-end p-5 border-gray-300 rounded-t">
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={handleCloseModalClick}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                            x
                          </span>
                        </button>
                      </div>
                      {isActive === "signin" ? (
                        <h3 className="text-3xl font-semibold text-[#5E5400] text-center">
                          LOGIN
                        </h3>
                      ) : (
                        <h3 className="text-3xl font-semibold text-[#5E5400] text-center">
                          Register
                        </h3>
                      )}

                      {isActive === "signin" ? (
                        <SignIn onLoginSuccess={handleLoginSuccess} />
                      ) : (
                        <SignUp
                          handleChange={handleOnChange}
                          handleSubmit={handleSubmit}
                        />
                      )}

                      <>
                        {isActive === "signin" ? (
                          <p className="text-black text-center mb-5">
                            Belum memiliki akun?{" "}
                            <button
                              onClick={handleSignUpClick}
                              className="underline underline-offset-4 text-[#0092A6] italic"
                            >
                              Sign Up
                            </button>
                          </p>
                        ) : (
                          <p className="text-black text-center mb-5">
                            <button
                              onClick={handleSignInClick}
                              className="underline underline-offset-4 text-[#0092A6] italic"
                            >
                              Sign In
                            </button>
                          </p>
                        )}
                      </>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
