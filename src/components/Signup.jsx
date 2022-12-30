import React from "react";
import Bacckground from "./Bacckground";
import Header from "./Header";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <>
      <div className="relative">
        <Bacckground />
        <div className="absolute top-0 left-0 h-[100vh] w-full bg-black/60 grid grid-rows-[15vh 85vh] px-4 md:px-12 pb-8">
          <Header login />
          <div className="flex flex-col pt-16 justify-center align-middle text-white h-[100%] w-[100%]">
            <div className="flex flex-col text-center justify-center items-center gap-4">
              <h1 className="font-extrabold text-[1.6rem] md:text-[2.9rem] px-4 md:max-w-[600px] leading-none">
                Unlimited movies, TV shows, and more.
              </h1>
              <h4 className="text-lg md:text-2xl font-medium">
                Watch anywhere. Cancel anytime.
              </h4>
              <SignupForm
                emailId={"emailone"}
                passwordId={"passwordone"}
                signupId={"signupone"}
                getstartedId={"getstartedone"}
                formId={"formone"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
