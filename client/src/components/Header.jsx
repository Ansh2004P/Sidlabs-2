import { useState, useRef } from "react";
import img1 from "../assets/imgs/HeaderLogo.png";

const Header = ({ isHeroInView }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  return (
    <div
      className={`fixed z-50 mx-auto px-4 py-4 flex items-center justify-between w-[100%] ${
        isHeroInView
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
      ref={headerRef}
    >
      {" "}
      <div
        className={`absolute inset-0 -z-10 bg-gray-900 opacity-30 ${
          isHeroInView ? "hidden" : "block"
        }`}
      />
      <div className="flex items-center">
        <img
          src={img1}
          alt="logo"
          className="ml-1 mt-1 pl-4 z-50 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 lg:w-36 lg:h-16"
        />
      </div>
      <button
        type="button"
        className={`text-current md:hidden focus:outline-none ${
          menuOpen ? "absolute right-4 top-4" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="block w-8 h-1 bg-current mb-1"></span>
        <span className="block w-8 h-1 bg-current mb-1"></span>
        <span className="block w-8 h-1 bg-current"></span>
      </button>
      <div
        className={`md:flex md:items-center transition-all duration-300 ${
          menuOpen
            ? "block absolute top-full left-0 w-full bg-neutral-900 bg-opacity-70 md:static md:bg-transparent"
            : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:flex-grow md:justify-between items-center text-current space-y-4 md:space-y-0 md:space-x-6 py-6 md:py-0">
          <hr
            className={`${menuOpen ? "block" : "hidden"} h-[0.025rem] w-full`}
          />
          <li className="my-2 md:my-0 text-center text-lg md:text-base lg:text-lg px-4 hover:cursor-pointer">
            Find Trips
          </li>
          <hr
            className={`${menuOpen ? "block" : "hidden"} h-[0.025rem] w-full`}
          />
          <li className="my-2 md:my-0 text-center text-lg md:text-base lg:text-lg px-4 hover:cursor-pointer">
            Blogs
          </li>
          <hr
            className={`${menuOpen ? "block" : "hidden"} h-[0.025rem] w-full`}
          />
          <li className="my-2 md:my-0 text-center text-lg md:text-base lg:text-lg px-4 hover:cursor-pointer">
            About us
          </li>
          <hr
            className={`${menuOpen ? "block" : "hidden"} h-[0.025rem] w-full`}
          />
          <li className="my-2 md:my-0 text-center text-lg md:text-base lg:text-lg px-4 hover:cursor-pointer">
            Contact us
          </li>
          <hr
            className={`${menuOpen ? "block" : "hidden"} h-[0.025rem] w-full`}
          />
          <li className="my-2 md:my-0 px-4">
            <button className="bg-green-500 text-white text-lg md:text-base lg:text-lg py-3 px-6 rounded-lg hover:bg-green-600">
              Join Now!
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
