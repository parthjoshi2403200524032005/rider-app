import React from "react";
import logo from "../image/logo.png";

import Slider from "./slider";
import { Footer } from "./footer";

// import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  // const navigate = useNavigate();
  if (isLoading) {
    return <div className="text-center">Loading ...</div>;
  }
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img
            className="h-[70px] w-[100px] bg-blend-multiply rounded-[50px] border-2 border-white shadow-md"
            src={logo}
            alt=""
          />
 <div className="flex justify-between">
          <ul className="flex space-x-4 ">
            <li className="text-white hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline text-xl">
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
          <ul className="flex items-center space-x-4 ">
      <li className="list-none">
        {isAuthenticated && (
          <>
          <p className="text-white font-semibold ml-[20px]">{user.name}</p>
         
          </>
        )}
      </li>
      {isAuthenticated ? (
        <li>
          <span
            className="text-white hover:text-black cursor-pointer transition duration-400 ease-in-out"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </span>
        </li>
      ) : (
        <li>
          <span
            className="text-white hover:text-black cursor-pointer transition duration-400 ease-in-out ml-[100px]"
            onClick={() => loginWithRedirect()}
          >
            Login
          </span>
        </li>
      )}
      
    </ul>
    </div>
          <div className="flex space-x-4"></div>
        </div>
      </nav>

      <Slider />

      <h2 className="text-2xl font-bold mb-4 ml-[500px]">
        Summary, conclusion and recommendation Findings :
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            1. A total of ___ kirana shops from 7 talukas in thane district were
            chosen to study the significant competitive strengths of unorganized
            retailers of Kirana stores and their survival strategies to face the
            challenges in the retail market. It is observed that the unorganized
            kirana stores are becoming more prosperous with their survival
            strategies in the organized retail market.
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            2. Unorganised retailers in the vicinity of organized retailers
            experienced a decline in their profit and business volume in the
            initial years after the arrival of the organized retailers; however,
            it changed gradually.
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            3. Most of the unorganized retailers of kirana stores initially
            feared losing their customer but now …show more content…
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            4. Majority of unorganized retailers of kirana stores interviewed
            were undertaking some changes to retain their customers’ patrons,
            but when it came to changing in to an air condition store, uniform
            for their staff and acceptance of credit cards. Most of them were
            shown their unwillingness could be because of the feeling that they
            can win over their customers by other ways rather than adopting such
            superficial changes and passing the cost of this makeover on their
            customers.
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            5. Most of the unorganized retailers of kirana stores are not
            joining and also not aware the advantages of an association.
            Therefore, there is a responsibility of kirana association to spread
            awareness about itself.
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            6. Unorganized retailers of kirana stores through the personal
            attention they give customer and their trustworthiness seems to win
            the hearts of their customers which makes it very clear that they
            will surely face the competition, survive and co-exit with their
            organized retailers.
          </p>
        </div>

        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            7. Majority of Unorganized retailers of kirana stores give an
            impression to know their customers well. Since most of them are
            aware their customers are well informed about their rights, this can
            be added advantages for unorganized retailers to serve their
            customers well and keep them happy and …show more content…
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            8. Unless and until the fruit of liberalization, privatization and
            globalization reaches to the lowest strata of the society, it is
            conceived that there is no threat to unorganized retail shops in
            India as lowest strata of society depends on daily wages and they
            hesitate to peep into glittering super and hyper markets. Hence,
            they wish to visit the shops in their locality{" "}
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md  hover:scale-105 transition-transform">
          <p className="text-lg font-semibold leading-snug">
            9. In Thane district, retail market is slowly and steadily moving
            towards organised sector, but still there is great impact of
            unorganised retail sectors, Both the sectors having their own
            different place in the minds of the customers.{" "}
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;