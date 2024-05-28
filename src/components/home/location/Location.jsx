import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location py-10 lg:py-16">
        <div className="container mx-auto">
          <Heading
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {location.map((item, index) => (
              <div className="box relative" key={index}>
                <img
                  src={item.cover}
                  alt={item.name}
                  className="w-full h-auto rounded-lg"
                />
                <div className="overlay absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 py-2 px-4 text-white">
                  <h5 className="text-lg font-semibold">{item.name}</h5>
                  <p className="flex items-center space-x-2 mt-1">
                    {item.Villas > 0 && (
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm">
                        {item.Villas} Villas
                      </span>
                    )}
                    {item.Offices > 0 && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm">
                        {item.Offices} Offices
                      </span>
                    )}
                    {item.Apartments > 0 && (
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-sm">
                        {item.Apartments} Apartments
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
