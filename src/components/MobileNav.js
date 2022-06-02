import React from "react";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ handleToggle }) => {
  return (
    <div
      className=" absolute  right-0 z-50
            block h-64 w-full rounded-2xl bg-violet-900 md:hidden"
    >
      <IoClose
        onClick={handleToggle}
        className=" mt-2 mr-3 ml-auto cursor-pointer text-4xl text-white"
      />
      <ul className="my-1 mr-3 flex flex-col justify-between text-center text-xl font-bold text-white">
        <li>
          <a className="m-5 hover:text-veryDarkBlue" href="/">
            Features
          </a>
        </li>
        <li>
          <a className="m-5 hover:text-veryDarkBlue" href="/">
            Pricing
          </a>
        </li>
        <li>
          <a className="m-5 hover:text-veryDarkBlue" href="/">
            Resources
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
