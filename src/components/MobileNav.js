import React from 'react';

const MobileNav = () => {
    return (
          <div className=" h-full bg-red w-full ">

     <ul className="my-1 ml-12 justify-between font-bold text-gray md:flex">
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
