import React, { useRef, useState } from "react";

const Link = ({ link }) => {
  const copyRef = useRef();
  const [copy, setCopy] = useState(false);
  return (
    <div
      key={link.result.code}
      className="bg-white flex justify-between mt-5 rounded-lg p-5 font-poppins "
    >
      <span className="my-auto">{link.result.original_link}</span>

      <div className="flex">
        <a className="text-cyan my-auto" href={link.result.full_short_link}>
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
              ? "text-white bg-purple-900 rounded-md px-6 py-3 ml-5 hover:bg-purple/80 transition-colors duration-150"
              : "text-white bg-cyan rounded-md px-6 py-3 ml-5 hover:bg-cyan/80 transition-colors duration-150"
          }
        >
          {copy ? "copied !" : "copy"}
        </button>
      </div>
    </div>
  );
};

export default Link;
