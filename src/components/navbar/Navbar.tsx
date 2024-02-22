import * as React from "react";
import logo from "../../assets/logo_dumbways.png";

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  const handleLoginClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-between px-[2vw] py-2 bg-black text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-10 h-10" />
        <span className="font-semibold">PEMILU PRESIDEN DUMBWAYS.ID</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Partai</span>
        <span>|</span>
        <span>Paslon</span>
        <span>|</span>
        <span>Voting</span>

        {isLogin ? (
          <>
            <button
              onClick={handleLoginClick}
              className="bg-white rounded-full w-14 h-14 text-center items-center p-4 text-black ml-5"
            >
              S
            </button>
          </>
        ) : (
          <div className="bg-white text-black px-4 py-1 rounded-md ml-5">
            <button onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
