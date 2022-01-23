import React, { useEffect, useState } from "react";
import axios from "axios";
export default function LinkShortner() {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );

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
  const handleSubmit = (e) => {
    e.preventDefault();
    getShortenedLink();
  };

  return (
    <section className="mx-auto bg-darkViolet py-14 px-14 z-10 rounded-md bg-link-pattern-desktop bg-cover mt-9 relative -bottom-20">
      <form className="flex justify-between">
        <input
          type="text"
          value={link}
          onChange={handleChange}
          className="rounded-lg px-5 py-2 w-5/6 h-16 font-bold placeholder:text-grayishViolet "
          placeholder="Shorten a link here..."
        />
        <button
          className="bg-cyan w-40 p-4 rounded-lg font-bold text-white hover:bg-cyan/80"
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
                <button className="text-white bg-cyan rounded-md w-24 h-9 ml-5 hover:bg-cyan/80">
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
