import React from "react";
import { featured } from "../../data/Data";
import "./Featured.css";

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid grid-cols-5 gap-4 mt-4">
        {featured.map((items, index) => (
          <div className="box hover-rotate" key={index}>
            <img src={items.cover} alt={items.name} className="rounded-full" />
            <h4 className="mt-2">{items.name}</h4>
            <label className="text-gray-500">{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
