import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "./Link";
export default function LinkShortener() {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  const [auth, setAuth] = useState(false);

  const authClass = ["border-4 border-red", ""];

  useEffect(() => {
    window.localStorage.setItem("links", JSON.stringify(shortLinks));
  }, [shortLinks]);

  const getShortenedLink = async () => {
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
      });

    setLink("");
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const toggleAuthClasses = () => {};

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
      className="border-1 relative -bottom-20 z-10 mx-auto mt-9 rounded-md  bg-darkViolet bg-link-pattern-desktop bg-cover py-14 px-14"
      id="linksSection"
    >
      <form className="flex flex-col justify-between lg:flex-row">
        <div className="flex w-5/6 flex-col">
          <input
            type="text"
            value={link}
            id="linkInput"
            onChange={handleChange}
            onKeyPress={
              auth.length >= 1
                ? toggleAuthClasses
                : () => {
                    return "";
                  }
            }
            className={`h-16 w-full rounded-lg px-5 py-2 font-bold placeholder:text-grayishViolet ${
              authClass[auth ? 0 : 1]
            }`}
            placeholder="Shorten a link here..."
            required
          />
          {auth && <div className="mt-2 font-poppins text-red">{auth}</div>}
        </div>

        <button
          className="w-100 mt-5 h-16 rounded-lg bg-cyan py-2  px-8 font-bold text-white hover:bg-cyan/80 lg:w-fit"
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </form>

      <div className="flex flex-col">
        {shortLinks.map((link) => {
          return <Link key={link.result.code} link={link} />;
        })}
      </div>
    </section>
  );
}
