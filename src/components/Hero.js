import React from "react";
import heroImage from "../assets/images/illustration-working.svg";
export default function Hero() {
  return (
    <section className="mt-20 flex justify-between">
      <div className="flex flex-col my-auto w-3/5">
        <h1 className="font-bold text-7xl"> More Than just shorter links</h1>
        <p className="text-body text-gray mt-3 font-medium w-3/4">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-cyan hover:bg-c text-white w-fit py-4 px-8 mt-4 rounded-full font-medium hover:bg-cyan/90">
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
