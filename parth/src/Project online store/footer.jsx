import React from "react";
import man from "../image/man.jpg";
import man2 from "../image/man2.jpg";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer-container bg-[#000000] text-white py-4 h-[600px]">
        <div className="flex">
          <input
            type="text"
            placeholder="       Email"
            className="ml-[550px] mt-[61px] border-solid border-white border-t-2 border-l-2 border-r-2 bg-[black] h-[50px] w-[350px]"
          />
          <div
            className="mt-[61px] border-solid border-white border-t-2 border-r-2 bg-[black] h-[50px] w-[100px] text-center hover:bg-white hover:text-[black]"
            onClick={() => navigate("/login")}
          >
            <p className="mt-[8px]" onClick={() => navigate("/login")}>
              Send
            </p>
          </div>
        </div>
        <div className="border-solid border-white border-t-2 ml-[200px] w-[1250px]"></div>
        <div className="flex">
          <img
            src={man}
            alt=""
            className=" rounded-[280px] w-[480px] ml-[20px]"
          />
          <ul className="flex space-x-4 ml-[150px] mt-[200px]">
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              Home
            </li>
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              About
            </li>
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              Services
            </li>
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              Contact
            </li>
          </ul>
          <img
            src={man2}
            alt=""
            className=" rounded-[280px] ml-[180px]  w-[480px] "
          />
        </div>
      </div>
    </>
  );
};
