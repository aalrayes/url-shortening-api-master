import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "./Link";
import "skeleton-elements/css";
import { SkeletonBlock } from "skeleton-elements/react";

export default function LinkShortener() {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortLinks, setShortLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  const [auth, setAuth] = useState(false);
  const authClass = ["border-4 border-red", ""];

  useEffect(() => {
    window.localStorage.setItem("links", JSON.stringify(shortLinks));
  }, [shortLinks]);

  const getShortenedLink = async () => {
    setIsLoading(true);
    let url = "https://api.shrtco.de/v2/shorten?url=";
    axios
      .get(url + link)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setShortLinks([...shortLinks, res]);
        } else {
          console.log(res.error);
          setAuth(res.error);
        }
        setIsLoading(false);
      });

    setLink("");
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const toggleAuthClasses = () => {
    setAuth((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /[(http(s) ?): /(www)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
    const isValid = regex.test(link);

    if (isValid) {
      getShortenedLink();
    } else {
      console.log("invalid url");
      return auth ? "" : toggleAuthClasses();
    }
  };
  return (
    <section
      className="border-1 relative -bottom-20 z-10 mx-auto mt-9 rounded-md  bg-darkViolet bg-link-pattern-desktop bg-cover p-8 lg:p-14"
      id="linksSection"
    >
      <form className="flex flex-col justify-between lg:flex-row">
        <div className="w-100 flex flex-col lg:w-5/6">
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
            className={`w-100 h-16 rounded-lg px-5 py-2 font-bold placeholder:text-grayishViolet ${
              authClass[auth ? 0 : 1]
            }`}
            placeholder="Shorten a link here..."
            required
          />
          {auth && (
            <div className="mt-2 font-poppins text-red">
              Please enter a valid URL
            </div>
          )}
        </div>

        <button
          className="w-100 mt-5 h-16 rounded-lg bg-cyan py-2 px-10 font-bold text-white hover:bg-cyan/80 lg:mt-0 lg:ml-3 lg:w-fit"
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </form>

      <div className="flex flex-col">
        {isLoading && (
          <SkeletonBlock
            className="mt-5 rounded-lg p-11 "
            tag="div"
            width="100%"
            effect={"wave"}
          />
        )}
        {shortLinks.map((link) => {
          return <Link key={link.result.code} link={link} />;
        })}
      </div>
    </section>
  );
}
