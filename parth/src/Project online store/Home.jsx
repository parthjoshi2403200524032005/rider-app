import React, { useEffect, useState } from "react";

import logo from "../image/logo.png";

import { useNavigate } from "react-router-dom";

import Slider from "./slider";
import { Footer } from "./footer";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const existingEmail = localStorage.getItem("Email");
    const existingPassword = localStorage.getItem("Password");
    setIsLoggedIn(!!(existingEmail && existingPassword));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    setIsLoggedIn(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const array = [
    {
      id: 1,
      title:
        " A total of ___ kirana shops from 7 talukas in thane district werechosen to study the significant competitive strengths of unorganize retailers of Kirana stores and their survival strategies to face thechallenges in the retail market.",
    },
    {
      id: 2,
      title:
        " Unorganised retailers in the vicinity of organized retailers experienced a decline in their profit and business volume in the initial years after the arrival of the organized retailers; however, it changed gradually.",
    },
    {
      id: 3,
      title:
        " Most of the unorganized retailers of kirana stores initially feared losing their customer but now …show more content…",
    },
    {
      id: 4,
      title:
        " Majority of unorganized retailers of kirana stores interviewedwere undertaking some changes to retain their customers’ patrons, but when it came to changing in to an air condition store, uniform for their staff and acceptance of credit cards. Most of them were shown their unwillingness could be because of the feeling. ",
    },
    {
      id: 5,
      title:
        " Most of the unorganized retailers of kirana stores are not joining and also not aware the advantages of an association.Therefore, there is a responsibility of kirana association to spreadawareness about itself.  Most of them were shown their unwillingness could be because of the feeling.",
    },
    {
      id: 6,
      title:
        " Unorganized retailers of kirana stores through the personal attention they give customer and the trustworthiness seems to win the hearts of their customers which makes it very clear that they will        surely face the competition, survive and co-exit with their organized retailers.",
    },
    {
      id: 7,
      title:
        " Majority of Unorganized retailers of kirana stores give an impression to know their customers well. Since most of them are aware their customers are well informed about their rights, this can be added advantages for unorganized retailers to serve their customers well and keep them happy and …show more content…",
    },
    {
      id: 8,
      title:
        "Unless and until the fruit of liberalization, privatization and globalization reaches to the lowest strata of the society, it is conceived that there is no threat to unorganized retail shops in India as lowest strata of society depends on daily wages and they hesitate to peep into glittering super and hyper markets. ",
    },
    {
      id: 9,
      title:
        "In Thane district, the retail market is slowly and steadily moving towards the organized sector, but still, there is a great impact of unorganized retail sectors. Both the sectors have their own different place in the minds of the customers.",
    },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;
    setIsScrolled(scrollPosition > scrollThreshold);
  };

  return (
    <>
      <div className="bg-[black]">
        <nav
          className={`bg-[#202124] p-4 fixed top-0 w-full z-50 h-[80px] hover:scale-105 transition-transform  cursor-pointer transition duration-[450ms] ease-in-out  ${ isScrolled ? "rounded-[50px]" : ""
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <img
              className="h-[50px] w-[70px] bg-blend-multiply rounded-[50px] border-2 border-white shadow-md"
              src={logo}
              alt=""
            />
            <div className="flex space-x-4">
              <ul className="flex space-x-4 mr-[350px] ">
                <li
                  className="text-white hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline text-xl"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li className="text-white hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline text-xl">
                  About
                </li>
                <li className="text-white hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline text-xl">
                  Services
                </li>
                <li className="text-white hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline text-xl">
                  Contact
                </li>
              </ul>

              <div className="flex items-center space-x-[100px]">
                <button
                  className="text-white hover:text-gray-400 hover:bg-white cursor-pointer transition duration-400 ease-in-out border-inherit border-2 border-solid pl-[10px] pr-[10px] rounded "
                  onClick={() => navigate("/Shoping")}
                >
                  Shop Now
                </button>

                {isLoggedIn ? (
                  <button
                    className="text-white hover:text-gray-400 hover:bg-white cursor-pointer transition duration-400 ease-in-out border-inherit border-2 border-solid pl-[10px] pr-[10px] rounded "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <div
                    className="text-white hover:text-gray-400 hover:bg-white cursor-pointer transition duration-400 ease-in-out border-inherit border-2 border-solid pl-[10px] pr-[10px] rounded  "
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
    

      <Slider />
      <div className="bg-[black] rounded-[50px] h-[1000px] flex gap-[350px]  ">
        <div>
          <img
            src="https://static.wixstatic.com/media/c837a6_60962bffd69e4291917b38e8d9152d82~mv2.jpg/v1/crop/x_2526,y_1623,w_2814,h_3777/fill/w_403,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-941303834.jpg"
            alt=""
            className="h-[450px] w-[350px] ml-[250px] mt-[50px]"
          />
          <img
            src="https://static.wixstatic.com/media/c837a6_5192f11fe8b94fcd9200d06756462f97~mv2.jpg/v1/crop/x_663,y_0,w_2667,h_2667/fill/w_481,h_481,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-645381791.jpg"
            alt=""
            className="h-[400px] w-[400px] ml-[250px] absolute top-[1220px] left-[150px]"
          />
          <img
            src="https://static.wixstatic.com/media/c837a6_ef85ae1b28454a12adb7d940d9243eda~mv2.jpg/v1/crop/x_196,y_0,w_3608,h_2667/fill/w_288,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-816101994.jpg"
            alt=""
            className="h-[200px] w-[200px] ml-[250px] absolute top-[1550px] left-[95px]"
          />
        </div>
        <div className="mt-[160px]">
          <h1 className="text-[white] text-[80px] leading-[100px] font-[5px] w-[400px]">
            About the Webinar
          </h1>
          <h1 className="text-[white] w-[400px] font-normal text-[28px] ">
            Level up your brand with the latest digital marketing trends.
          </h1>
          <h1 className="text-[white] w-[400px] text-[18px] mt-[20px] ">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </h1>
        </div>
      </div>
      </div>

      <div className="bg-[black]">
        <h2 className="text-2xl text-[white] font-bold mb-4 ml-[500px]  ">
          Summary, conclusion and recommendation Findings :
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  ">
          {array.map((item) => (
            <div
              key={item.id}
              className=" text-white p-4 rounded-[50px] hover:shadow-lg transition-transform bg-[white] p-[20px] hover:scale-105 transition-transform  cursor-pointer transition duration-[450ms] ease-in-out  "
            >
              <p className="text-lg font-semibold leading-relaxed text-[black]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;