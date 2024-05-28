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
      <div className="buttons-container">
        <div className="buttons">
          <button onClick={() => setFilter("ongoing")}>Ongoing</button>
          <button onClick={() => setFilter("upcoming")}>Upcoming</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("all")}>All</button>
        </div>
      </div>
      <div className="content grid3 mtop">
        {filteredList().map((val, index) => {
          const { id, cover, category, location, name, price, type } = val;
          return (
            <Link
              to={`/propertydetails/${id}`}
              key={index}
              className="card-link"
            >
              <div className="box shadow">
                <div className="img">
                  <img src={cover} alt="" />
                </div>
                <div className="text">
                  <div className="category flex">
                    <span
                      style={{
                        background:
                          category === "For Rent"
                            ? "#25b5791a"
                            : category === "For Sale"
                            ? "#ff98001a"
                            : category === "Ongoing"
                            ? "#007bff1a"
                            : category === "Upcoming"
                            ? "#ffc1071a"
                            : category === "Completed"
                            ? "#28a7451a"
                            : "#007bff1a",
                        color:
                          category === "For Rent"
                            ? "#25b579"
                            : category === "For Sale"
                            ? "#ff9800"
                            : category === "Ongoing"
                            ? "#007bff"
                            : category === "Upcoming"
                            ? "#ffc107"
                            : category === "Completed"
                            ? "#28a745"
                            : "#007bff",
                      }}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart"></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i> {location}
                  </p>
                </div>
                <div className="button flex">
                  <div>
                    <button className="btn2">{price}</button>{" "}
                    <label htmlFor="">{type}</label>
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
