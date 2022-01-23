import React from "react";
import logo from "../assets/images/logo.svg";
import Logo from "./Logo";
export default function Nav() {
  return (
    <header className="mx-auto w-full mt-7 ">
      <nav className="flex">
        <Logo />

        <ul className="flex justify-between w-72 ml-12 font-bold my-1 text-gray">
          <li>
            <a className="hover:text-veryDarkBlue" href="/">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-veryDarkBlue" href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-veryDarkBlue" href="/">
              Resources
            </a>
          </li>
        </ul>

        <div className="flex ml-auto justify-between w-44 ">
          <button className="text-gray font-medium">Login</button>
          <button className="bg-cyan rounded-3xl w-28 py-3 text-white hover:bg-cyan/80">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
