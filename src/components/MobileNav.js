import React from 'react';
import {IoClose} from "react-icons/io5"

const MobileNav = () => {
    return (
           <div className=" h-full w-full bg-red absolute z-50 right-0">
         <IoClose className=' text-4xl ml-auto text-zinc-600 cursor-pointer'/>      
     <ul className="my-1 justify-start text-center mr-3 flex flex-col font-bold text-gray ">
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

        </div>
    );
}

export default MobileNav;
