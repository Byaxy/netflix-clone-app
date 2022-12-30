import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaPowerOff } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";

const Navbar = ({ isScrolled }) => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/netflix" },
    { name: "Movies", path: "/movies" },
    { name: "Series", path: "/series" },
    { name: "My List", path: "/account" },
  ];

  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        className={`${
          isScrolled
            ? "scrolled flex justify-between items-center p-3 md:px-12 h-[5rem] w-full top-0 fixed z-20 transition"
            : "bg-transparent flex justify-between items-center p-3 md:px-12 h-[5rem] w-full top-0 fixed z-20 transition"
        }`}
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center">
            <img className="h-[2.5rem] sm:h-[2rem]" src={logo} alt="log" />
          </div>
          <ul className="flex gap-6 text-white">
            {links.map(({ name, path }) => {
              return (
                <li key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white">
            <p>{user.email}</p>
          </div>
          <button
            onClick={handleSignout}
            className="focus:outline-none bg-transparent"
          >
            <FaPowerOff className="text-redColor" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
