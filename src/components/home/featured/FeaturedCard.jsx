import React from "react";
import { featured } from "../../data/Data";
import "./Featured.css";

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        {featured.map((items, index) => (
          <div
            className="box hover-rotate p-4 bg-white rounded-lg shadow-md"
            key={index}
          >
            <img
              src={items.cover}
              alt={items.name}
              className="w-full h-48 object-cover rounded-full mx-auto"
            />
            <h4 className="mt-2 text-center">{items.name}</h4>
            <label className="text-gray-500 text-center block">
              {items.total}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
