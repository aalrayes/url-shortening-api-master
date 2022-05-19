import React from "react";
import heroImage from "../assets/images/illustration-working.svg";
export default function Hero() {
  return (
    <section className="mt-20 flex flex-col-reverse justify-between lg:flex-row">
      <div className="my-auto mt-10 flex w-full flex-col lg:w-3/5">
        <h1 className="text-center text-4xl font-bold lg:text-left lg:text-5xl xl:text-7xl">
          {" "}
          More Than just shorter links
        </h1>
        <p className="mt-3 w-full text-center text-body font-medium text-gray lg:w-3/4 lg:text-left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="hover:bg-c mx-auto mt-4 w-fit rounded-full bg-cyan py-4 px-8 font-medium text-white hover:bg-cyan/90 lg:mx-0">
          <a
            href="#input"
            onClick={() => {
              document
                .getElementById("linksSection")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </a>
        </button>
      </div>

      <div>
        <img src={heroImage} alt="Hero svg" />
      </div>
    </section>
  );
}
