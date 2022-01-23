import React from "react";

const Statcard = ({ icon, alt, title, description, order }) => {
  const cardPosition = ["mt-5", "mt-16", "mt-32"];
  return (
    <section className="flex">
      <div className={"bg-white rounded-md p-5 h-72 " + cardPosition[order]}>
        <div className="bg-darkViolet rounded-full text-cyan w-fit p-5 relative -top-16 z-10">
          <img src={icon} alt={alt} />
        </div>

        <div className="flex flex-col justify-between ">
          <h2 className="font-bold text-veryDarkBlue text-2xl mb-5 -mt-8">
            {" "}
            {title}
          </h2>

          <p className="font-medium text-grayishViolet text-body">
            {description}
          </p>
        </div>
      </div>

      {order !== 2 && <div className="bg-cyan w-48 h-2 my-auto mx-auto"></div>}
    </section>
  );
};

export default Statcard;
