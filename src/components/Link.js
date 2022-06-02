 import React, { useRef, useState } from "react";

const Link = ({ link }) => {
  const copyRef = useRef();
  const [copy, setCopy] = useState(false);
  return (
    <div
      key={link.result.code}
      className="mt-5 flex justify-between rounded-lg flex-col md:flex-row bg-white p-5 font-poppins "
    >
      <span className="my-auto text-center">{link.result.original_link}</span>

      <div className="flex flex-col md:flex-row my-1">

        <a className="md:my-auto my-2 text-center  text-cyan" href={link.result.full_short_link}>
          {link.result.short_link}
        </a>
       
        <button
          onClick={() => {
            navigator.clipboard.writeText(link.result.full_short_link).then(
              function () {
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              },
              function () {
                alert("copy failed");
              }
            );
          }}
          ref={copyRef}
          className={
            copy
              ? "hover:bg-purple/80 ml-5 rounded-md bg-purple-900 px-6 py-3 text-white transition-colors duration-150"
              : "ml-5 rounded-md bg-cyan px-6 py-3 text-white transition-colors duration-150 hover:bg-cyan/80"
          }
        >
          {copy ? "copied !" : "copy"}
        </button>
      </div>
    </div>
  );
};

export default Link;
