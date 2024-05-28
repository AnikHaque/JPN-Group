import React, { useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../data/Data";
import "./RecentCard.css"; // Import your CSS file for RecentCard

const RecentCard = () => {
  const [filter, setFilter] = useState("all"); // State to manage the filter

  // Function to filter properties based on the selected filter
  const filteredList = () => {
    switch (filter) {
      case "ongoing":
        return list.filter((item) => item.category === "Ongoing");
      case "upcoming":
        return list.filter((item) => item.category === "Upcoming");
      case "completed":
        return list.filter((item) => item.category === "Completed");
      case "category1":
        return list.filter(
          (item) =>
            item.category === "Ongoing" ||
            item.category === "Upcoming" ||
            item.category === "Completed"
        );
      case "all":
        return list;
      default:
        return list;
    }
  };

  return (
    <>
      <div className="buttons-container px-4 lg:px-0">
        <div className="buttons flex flex-wrap gap-2 lg:gap-4">
          <button
            onClick={() => setFilter("ongoing")}
            className={`btn-filter ${filter === "ongoing" ? "active" : ""}`}
          >
            Ongoing
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`btn-filter ${filter === "upcoming" ? "active" : ""}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`btn-filter ${filter === "completed" ? "active" : ""}`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`btn-filter ${filter === "all" ? "active" : ""}`}
          >
            All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mx-4 lg:mx-0">
        {filteredList().map((val, index) => {
          const { id, cover, category, location, name, price, type } = val;
          return (
            <Link
              to={`/propertydetails/${id}`}
              key={index}
              className="card-link"
            >
              <div className="box shadow p-4 bg-white rounded-lg">
                <div className="img mb-4">
                  <img
                    src={cover}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="text">
                  <div className="category flex mb-2">
                    <span
                      className={`rounded px-2 mr-2 ${
                        category === "For Rent"
                          ? "bg-green-100 text-green-600"
                          : category === "For Sale"
                          ? "bg-orange-100 text-orange-600"
                          : category === "Ongoing"
                          ? "bg-blue-100 text-blue-600"
                          : category === "Upcoming"
                          ? "bg-yellow-100 text-yellow-600"
                          : category === "Completed"
                          ? "bg-teal-100 text-teal-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart"></i>
                  </div>
                  <h4 className="text-lg font-semibold">{name}</h4>
                  <p className="text-sm mb-2">
                    <i className="fa fa-location-dot mr-1"></i> {location}
                  </p>
                  <div className="button flex items-center">
                    <button className="btn2 text-sm mr-2">{price}</button>{" "}
                    <label htmlFor="" className="text-xs">
                      {type}
                    </label>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
