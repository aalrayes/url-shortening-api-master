import React from "react";
import Logo from "./Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mx-auto h-fit w-screen bg-veryDarkViolet font-poppins text-white md:h-96">
      <div className="w-100 flex max-w-desktop flex-col mx-auto items-center pt-20 text-center md:flex-row md:justify-between md:text-left lg:w-5/6">
        <Logo fill="white" />

        <div className="flex flex-col justify-between  md:w-2/5 md:flex-row lg:-mr-36 lg:w-1/3">
          <ul className="mt-10 lg:mt-0">
            <li className="mb-4">Feature</li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Link Shortening{" "}
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Branded Links
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Analytics
            </li>
          </ul>
          <ul className="mt-10 lg:mt-0">
            <li className="mb-4">Resources</li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Blog
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Developers
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Support
            </li>
          </ul>
          <ul className="mt-10 lg:mt-0">
            <li className="mb-4">Company</li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              About{" "}
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Our Team
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              Careers
            </li>
            <li className="my-2 cursor-pointer text-gray hover:text-cyan">
              {" "}
              Contact
            </li>
          </ul>
        </div>

        <div className="mt-10 lg:mt-0">
          <ul className="flex w-1/3 justify-between">
            <li className="mx-5 cursor-pointer text-2xl hover:text-cyan">
              <FaFacebookSquare />
            </li>
            <li className="mx-5 cursor-pointer text-2xl hover:text-cyan">
              <FaTwitter />
            </li>
            <li className="mx-5 cursor-pointer text-2xl hover:text-cyan">
              <FaPinterest />
            </li>
            <li className="mx-5 cursor-pointer text-2xl hover:text-cyan">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
