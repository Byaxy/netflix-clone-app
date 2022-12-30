import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = ({ emailId, passwordId, formId, signupId, getstartedId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleGetstarted = (e) => {
    e.preventDefault();

    const email = document.getElementById(emailId);
    const password = document.getElementById(passwordId);
    const signupBtn = document.getElementById(signupId);
    const getstartedBtn = document.getElementById(getstartedId);
    console.log(password);
    console.log(signupBtn);
    console.log(email);
    console.log(getstartedBtn);

    email.classList.add("hidden");
    getstartedBtn.classList.add("hidden");

    password.classList.remove("hidden");
    signupBtn.classList.remove("hidden");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col text-center text-white justify-center items-center gap-4">
        <p className="md:text-lg px-12 leading-tight">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={handleGetstarted}
          id={formId}
          className="flex flex-col md:flex-row gap-4 md:gap-0 items-center w-[80%] sm:max-w-[480px] md:max-w-[680px]"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id={emailId}
            className="text-black border-none focus:outline-0 px-3 py-3 md:py-4 text-sm w-full"
            type="email"
            placeholder="Email address"
            title="Email"
            required
          />
          <button
            id={getstartedId}
            className="bg-redColor px-2 py-2 md:py-4 md:px-4 min-w-[130px] md:min-w-[180px] text-sm md:text-[1rem] cursor-pointer"
          >
            <div className="flex justify-center  items-center">
              <span className="font-semibold mr-1">Get Started</span>
              <MdArrowForwardIos className=" font-bold w-3 h-3 md:h-4 md:w-4" />
            </div>
          </button>
        </form>
        <form
          className="flex flex-col md:flex-row gap-4 md:gap-0 items-center w-[80%] sm:max-w-[480px] md:max-w-[680px]"
          onSubmit={handleSignup}
        >
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id={passwordId}
            className="hidden text-black border-none focus:outline-0 px-2 py-3 md:py-4 text-sm w-full"
            type="password"
            placeholder="Password"
            title="Password"
            required
          />

          <button
            id={signupId}
            className="hidden bg-redColor px-2 py-2 md:py-4 md:px-4 min-w-[130px] md:min-w-[180px] text-sm md:text-[1rem]"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
