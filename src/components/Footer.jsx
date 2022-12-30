import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full border-t-8 border-solid border-grayColor border-x-0">
        <div className="flex flex-col justify-center px-6 sm:px-8 py-12 text-lightGrayColor gap-6 md:w-[80%] md:mx-auto md:px-0 lg:w-[65%]">
          <Link>
            <h6 className="text-sm hover:underline decoration-solid">
              Questions? Contact Us.
            </h6>
          </Link>
          <ul className="text-xs grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <li className="hover:underline decoration-solid">
              <Link>FAQ</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Help Center</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Account</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Media Center</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Investor Relations</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Jobs</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Ways to Watch</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Terms of Use</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Privacy</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Cookie Preferences</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Speed Test</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Legal Notices</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link>Only on Netflix</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
