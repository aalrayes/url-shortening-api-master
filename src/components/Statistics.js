import React from "react";
import brandRecognitionIcon from "../assets/images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../assets/images/icon-fully-customizable.svg";
import Statcard from "./StatCard";
export default function Statistics() {
  const stats = [
    {
      icon: brandRecognitionIcon,
      alt: "Brand recognition icon",
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: DetailedRecordsIcon,
      alt: "Detailed Records icon",
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },

    {
      icon: FullyCustomizableIcon,
      alt: "Fully Customizable icon",
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <section className="w-screen bg-slate-100  pb-20 font-poppins">
      <div className=" mx-auto w-5/6  max-w-desktop flex-col p-10">
        <div className="flex flex-col">
          <h1 className="mt-32 text-center text-lg font-bold text-veryDarkBlue lg:text-4xl">
            Advanced Statistics
          </h1>
          <p className="mx-auto mt-4 w-11/12 text-center text-body text-grayishViolet lg:w-1/2">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className=" mx-auto mt-20 flex flex-col lg:flex-row">
          {stats.map((item, index) => {
            return <Statcard key={index} {...item} order={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
