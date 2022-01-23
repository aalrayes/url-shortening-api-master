import React from "react";
import Logo from "./Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="h-96 bg-veryDarkViolet text-white font-poppins w-screen">
      <div className="w-desktop flex justify-between mx-auto pt-20">
        <Logo fill="white" />

        <div className="flex justify-between w-1/3 -mr-36">
          <ul>
            <li className="mb-4">Feature</li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Link Shortening{" "}
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Branded Links
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Analytics
            </li>
          </ul>
          <ul>
            <li className="mb-4">Resources</li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Blog
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Developers
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Support
            </li>
          </ul>
          <ul>
            <li className="mb-4">Company</li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              About{" "}
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Our Team
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              Careers
            </li>
            <li className="text-gray my-2 hover:text-cyan cursor-pointer">
              {" "}
              Contact
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex w-1/3 justify-between">
            <li className="mx-5 text-2xl hover:text-cyan cursor-pointer">
              <FaFacebookSquare />
            </li>
            <li className="mx-5 text-2xl hover:text-cyan cursor-pointer">
              <FaTwitter />
            </li>
            <li className="mx-5 text-2xl hover:text-cyan cursor-pointer">
              <FaPinterest />
            </li>
            <li className="mx-5 text-2xl hover:text-cyan cursor-pointer">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
