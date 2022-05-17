import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
export default function LinkShortener() {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  const [auth, setAuth] = useState(false);
  const copyRef = useRef();

  const authClass = ["border-4 border-red", ""];

  const copyLink = () => {
    console.log(copyRef.current);
  };
  useEffect(() => {
    window.localStorage.setItem("links", JSON.stringify(shortLinks));
  }, [shortLinks]);

  const getShortenedLink = async () => {
    let url = "https://api.shrtco.de/v2/shorten?url=";
    axios
      .get(url + link)
      .then((res) => res.data)
      .then((res) => {
        setShortLinks([...shortLinks, res]);
      });

    setLink("");
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };
  const toggleAuthClasses = () => {
    setAuth(!auth);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (link !== "") {
      getShortenedLink();
    } else {
      console.log("empty");
      return auth ? "" : toggleAuthClasses();
    }
  };
  return (
    <section
      className="mx-auto bg-darkViolet py-14 px-14 z-10 rounded-md bg-link-pattern-desktop  bg-cover mt-9 relative -bottom-20 border-1"
      id="linksSection"
    >
      <form className="flex justify-between">
        <div className="flex flex-col w-5/6">
          <input
            type="text"
            value={link}
            id="linkInput"
            onChange={handleChange}
            onKeyPress={
              auth
                ? toggleAuthClasses
                : () => {
                    return "";
                  }
            }
            className={`rounded-lg px-5 py-2 w-full h-16 font-bold placeholder:text-grayishViolet ${
              authClass[auth ? 0 : 1]
            }`}
            placeholder="Shorten a link here..."
            required
          />
          {auth && (
            <div className="text-red font-poppins mt-2">Please add a link</div>
          )}
        </div>

        <button
          className="bg-cyan w-fit py-2 h-16  px-8 rounded-lg font-bold text-white hover:bg-cyan/80"
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </form>

      <div className="flex flex-col">
        {shortLinks.map((link) => {
          return (
            <div
              key={link.result.code}
              className="bg-white flex justify-between mt-5 rounded-lg p-5 font-poppins "
            >
              <span className="my-auto">{link.result.original_link}</span>

              <div className="flex">
                <a
                  className="text-cyan my-auto"
                  href={link.result.full_short_link}
                >
                  {link.result.short_link}
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard
                      .writeText(link.result.full_short_link)
                      .then(
                        function () {
                          alert("copy is done");
                        },
                        function () {
                          alert("copy failed");
                        }
                      );
                  }}
                  ref={copyRef}
                  className="text-white bg-cyan rounded-md px-6 py-3 ml-5 hover:bg-cyan/80"
                >
                  copy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
