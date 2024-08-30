import React from "react";
import bannerimg from "/images/home/banner1.png";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-0% from-[#FAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* text */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Where Every Dish Tells a Story of
            <span className="text-green">Taste</span>
          </h2>
          <p>
            Experience the art of flavor with every dish a fusion of masterful
            skill and passionate craftsmanship
          </p>
          {/* button */}
          <button className="btn bg-green font-semibold text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>

        {/* image */}
        <div className="md:w-1/2">
          <img src={bannerimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
