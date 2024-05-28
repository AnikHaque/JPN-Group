import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex space-x-4 items-center rounded-lg shadow-lg bg-white p-4">
            <div className="box flex items-center">
              <span className="mr-2">City/Street</span>
              <input
                type="text"
                placeholder="Location"
                className="border-b-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="box flex items-center">
              <span className="mr-2">Property Type</span>
              <input
                type="text"
                placeholder="Property Type"
                className="border-b-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="box flex items-center">
              <span className="mr-2">Price Range</span>
              <input
                type="text"
                placeholder="Price Range"
                className="border-b-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
