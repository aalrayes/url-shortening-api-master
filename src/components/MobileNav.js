import React from 'react';
import {IoClose} from "react-icons/io5"

const MobileNav = ({handleToggle}) => {
    return (
      <div className=" h-64  w-full bg-violet-900
            rounded-2xl absolute z-50 right-0">
         <IoClose onClick={handleToggle} className=' text-4xl mt-2 mr-3 ml-auto text-white cursor-pointer'/>      
     <ul className="my-1 justify-between text-center mr-3 flex flex-col font-bold text-white text-xl">
          <li>
            <a className="hover:text-veryDarkBlue m-5" href="/">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-veryDarkBlue m-5" href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-veryDarkBlue m-5" href="/">
              Resources
            </a>
          </li>
        </ul>

        </div>
    );
}

export default MobileNav;
