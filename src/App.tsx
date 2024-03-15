import * as React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import SignIn from "./components/SignIn";
import DetailPage from "./components/homePage/DetailPage";
import SignUp from "./components/SignUp";
import Admin from "./pages/admin/Admin";
import ListPaslon from "./components/dashboard/ListPaslon";
import ListPartai from "./components/dashboard/ListPartai";
import AddPaslon from "./components/dashboard/addButton/AddPaslon";
import AddPartai from "./components/dashboard/addButton/AddPartai";
import { IRegister } from "./types/types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [formRegister, setFormRegister] = React.useState<IRegister>({
    fullname: "",
    address: "",
    gender: "",
    username: "",
    password: "",
  });

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/list-paslon" element={<ListPaslon />} />
        <Route path="/list-partai" element={<ListPartai />} />
        <Route path="/add-paslon" element={<AddPaslon />} />
        <Route path="/add-partai" element={<AddPartai />} />
        <Route path="/signin" element={<SignIn onLoginSuccess={handleLoginSuccess}/>} />
        <Route
          path="/signup"
          element={
            <SignUp handleChange={handleOnChange} handleSubmit={handleSubmit} />
          }
        />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </>
  );
}

export default App;
