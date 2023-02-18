import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cards } from "../data";

function Header() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", isActive);

      return () => {
        window.removeEventListener("scroll", isActive);
      };
    } else {
      setActive(true);
    }
  }, [location]);

  const routerMatch = (router) => {
    if (router === location.search.slice(5).replace("_", " ")) {
      return true;
    } else {
      return false;
    }
  };

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  return (
    <div
      className={`w-full  fixed top-0 z-50 font-serif transition-all duration-700 ease-linear ${
        active ? `bg-white border-b ` : `bg-transparent `
      }`}
    >
      {/* top */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex px-3 items-center  justify-between">
          {/* left */}
          <Link to="/">
            <div
              className={`text-[40px] p-4 flex font-bold ${
                active ? `text-black ` : `text-white  `
              }`}
            >
              <h1>Fiverr</h1>
              <span className="text-green-500">.</span>
            </div>
          </Link>
          {/* right */}
          <div
            className={`flex items-center gap-5  text-lg ${
              active ? `text-black ` : `text-white  `
            } `}
          >
            <ul className="flex items-center gap-5 font-semibold cursor-pointer">
              <li className="hidden lg:inline-flex transform duration-100 ease-linear hover:text-green-400 ">
                Fiverr Business
              </li>
              <li className="hidden lg:inline-flex transform duration-100 ease-linear hover:text-green-400 ">
                Explore
              </li>
              <li className="hidden lg:inline-flex transform duration-100 ease-linear hover:text-green-400 ">
                English
              </li>
              <li className="hidden lg:inline-flex transform duration-100 ease-linear hover:text-green-400 ">
                Become a Seller
              </li>
              {!currentUser && (
                <li className=" transform duration-100 ease-linear hover:text-green-400 ">
                  Sign in
                </li>
              )}
            </ul>
            {currentUser ? (
              <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer  rounded-lg text-lg transform duration-100 ease-linear font-semibold "
              >
                <img src="" alt="" />
                <h3>{currentUser.username}</h3>
              </div>
            ) : (
              <button className=" px-4 py-2 rounded-lg border-2 transform duration-100 ease-linear hover:border-green-400 hover:bg-green-400 hover:text-white">
                JoIn
              </button>
            )}
          </div>
        </div>

        {open && (
          <div className="text-lg absolute right-0 top-16 bg-white px-10 py-4 border-2 rounded-lg">
            <ul className="space-y-5 ">
              <li
                onClick={() => navigate("/mypost")}
                className="hover:underline underline-offset-4 cursor-pointer"
              >
                Posts
              </li>
              <li
                onClick={() => navigate("/addpost")}
                className="hover:underline underline-offset-4 cursor-pointer"
              >
                Add New Posts
              </li>
              <li
                onClick={() => navigate("/orders")}
                className="hover:underline underline-offset-4 cursor-pointer"
              >
                Orders
              </li>
              <li
                onClick={() => navigate("/messages")}
                className="hover:underline underline-offset-4 cursor-pointer"
              >
                Messages
              </li>
              <li
                onClick={() => navigate("/")}
                className="hover:underline underline-offset-4 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {active && (
        <>
          <hr />
          {/* bottom */}
          <div className="max-w-7xl mx-auto">
            <div
              className={`flex overflow-x-scroll px-2 py-3 w-full flex-nowrap whitespace-nowrap gap-10 items-center justify-between ${
                active ? `text-black ` : `text-white  `
              } `}
            >
              {cards.map((card) => (
                <span
                  onClick={() =>
                    navigate(`/gigs?cat=${card.title.replace(" ", "_")}`)
                  }
                  key={card.id}
                  className={`cursor-pointer text-gray-500 hover:underline underline-offset-4 ${
                    routerMatch(card.title) && `underline underline-offset-4`
                  }`}
                >
                  {card.title}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
