import React from "react";

const StatCard = ({ icon, alt, title, description, order }) => {
  const cardPosition = ["mt-5", "mt-16", "mt-32"];
  return (
    <section className="flex flex-col lg:flex-row">
     
      <div className={`h-72 rounded-md bg-white p-5 lg:hidden`}>
        <div className="relative -top-16 z-10 mx-auto w-fit rounded-full bg-darkViolet p-5 text-cyan md:mx-0">
          <img src={icon} alt={alt} />
        </div>

        <div className="flex flex-col justify-between ">
          <h2 className="mb-5 -mt-8 text-2xl font-bold text-veryDarkBlue">
            {" "}
            {title}
          </h2>

          <p className="text-body font-medium text-grayishViolet">
            {description}
          </p>
        </div>
      </div>

      <div className={`h-72 rounded-md bg-white p-5 lg:block  hidden ${cardPosition[order]}`}>
        <div className="relative -top-16 z-10 mx-auto w-fit rounded-full bg-darkViolet p-5 text-cyan md:mx-0">
          <img src={icon} alt={alt} />
        </div>

        <div className="flex flex-col justify-between ">
          <h2 className="mb-5 -mt-8 text-2xl font-bold text-veryDarkBlue">
            {" "}
            {title}
          </h2>

          <p className="text-body font-medium text-grayishViolet">
            {description}
          </p>
        </div>
      </div>


      {order !== 2 && (
        <div className="my-auto mx-auto h-40 w-2 bg-cyan lg:h-2 lg:w-48"></div>
      )}
    </section>
  );
};

export default StatCard;
