import React from "react";
import logo from "../assets/logo.png";
import "../components/modified.css";

const AuthLayouts = ({ children }) => {
  return (
    <>
      <header className="flex justify-center items-center py-3 h-20 shadow-md header-modify">
        <img src={logo} alt="logo" width={180} height={60} />
      </header>

      {children}
    </>
  );
};

export default AuthLayouts;
