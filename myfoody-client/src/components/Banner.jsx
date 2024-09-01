import React from "react";
import bannerimg from "/images/home/banner1.png";
import food1 from "/images/home/b-food1.png";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* image */}
        <div className="md:w-1/2">
          <img src={bannerimg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-40">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img src={food1} alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spisy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img src={food1} alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spisy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Where Every Dish Tells a Story of
            <span className="text-green"> Taste</span>
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
      </div>
    </div>
  );
};

export default Banner;
