import React from "react";
import Logo from "./Logo";
import { IoMenu } from "react-icons/io5";
export default function Nav() {
  return (
    <header className="mx-auto mt-7 w-full ">
      <nav className="flex">
        <Logo />

        <ul className="my-1 ml-12 hidden w-72 justify-between font-bold text-gray md:flex">
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

        <IoMenu className="ml-auto cursor-pointer text-3xl text-gray md:hidden" />

        <div className="ml-auto hidden w-44 justify-between md:flex ">
          <button className="font-medium text-gray">Login</button>
          <button className="rounded-3xl bg-cyan py-2 px-4 text-white hover:bg-cyan/80">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
