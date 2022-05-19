import React from "react";

export default function BoostLinks() {
  return (
    <section className="w-screen bg-darkViolet  bg-link-pattern-desktop bg-cover p-10 font-poppins">
      <div className="flex flex-col ">
        <h1 className="mx-auto text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl">
          Boost your links today
        </h1>

        <button className="mx-auto mt-10 w-fit rounded-full bg-cyan py-3 px-9 text-xl font-medium text-white hover:bg-cyan/80 lg:text-2xl">
          Get Started
        </button>
      </div>
    </section>
  );
}
