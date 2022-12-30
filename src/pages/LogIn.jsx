import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflix from "../assets/netflix.jpg";
import Header from "../components/Header";
import { UserAuth } from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const signinForm = document.getElementById("signinForm");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/netflix");
      signinForm.reset();
    } catch (error) {
      setErr(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      {/** TO DO: fix image background to cover entire content. */}
      <div className="relative h-[100vh] lg:h-auto w-full">
        <img
          className="min-h-full min-w-full object-cover"
          src={netflix}
          alt="Background"
        />

        <div className="absolute top-0 left-0 h-full w-full bg-black sm:bg-black/60 grid grid-rows-[15vh 85vh] ">
          <Header />
          <div className="flex flex-col justify-center items-center text-white pt-12 px-5 md:px-12">
            <div className="flex flex-col gap-6 min-h-[60vh] py-14 sm:w-[440px] sm:p-14 pb-20 bg-black/50 rounded">
              <div>
                <h3 className="text-3xl font-bold">Sign In</h3>
              </div>
              <p className="text-redColor text-sm ">{err}</p>
              <form
                id="signinForm"
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 "
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 text-sm rounded text-black outline-none"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-3 text-sm rounded text-black outline-none"
                  type="password"
                  placeholder="Password"
                  required
                />
                <button className="px-4 py-3 text-sm rounded bg-redColor">
                  Sign In
                </button>
              </form>
              <div className="flex justify-between text-xs text-veryLightGray">
                <div>
                  <input className="accent-veryLightGray" type="checkbox" />
                  <span>Remember me</span>
                </div>
                <p className="hover:underline decoration-solid">
                  <Link to="">Need Help?</Link>
                </p>
              </div>
              <div className="text-lightGrayColor flex flex-col gap-2">
                <p className="text-sm">
                  New to Netflix?
                  <span className="text-white hover:underline decoration-solid">
                    <Link to="/"> Sign up now.</Link>
                  </span>{" "}
                </p>
                <p className="text-xs">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <span className="text-blue-800 hover:underline decoration-solid">
                    <Link to="">Learn more.</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
