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
    <section className="bg-slate-100 w-screen  font-poppins pb-20">
      <div className="w-desktop flex-col mx-auto p-10">
        <div className="flex flex-col">
          <h1 className="text-veryDarkBlue text-center mt-32 text-4xl font-bold">
            Advanced Statistics
          </h1>
          <p className="text-grayishViolet text-body text-center w-1/2 mt-4 mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className=" flex mt-20">
          {stats.map((item, index) => {
            return <Statcard key={index} {...item} order={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
