import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 items-center justify-between p-3 md:px-12 z-[100] w-full absolute">
      <Link to="/">
        <img className="h-[2.4rem] sm:h-[2rem]" src={logo} alt="Logo" />
      </Link>
      {props.login ? (
        <button
          onClick={() => navigate("/login")}
          className="bg-redColor text-white text-sm px-4 py-[6px] rounded cursor-pointer"
        >
          Sign In
        </button>
      ) : props.signup ? (
        <button
          onClick={() => navigate("/signup")}
          className="bg-redColor text-white text-sm px-4 py-[6px] rounded cursor-pointer"
        >
          Sign Up
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;
