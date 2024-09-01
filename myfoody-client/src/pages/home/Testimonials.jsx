import React from "react";
import testimonials from "/images/home/testimonials/testimonials.png";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src={testimonials} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-center">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
