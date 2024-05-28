import React from "react";
import img from "../images/about.jpg";
import img1 from "../../assets/house1 (1).jpeg";
import img2 from "../../assets/house1 (14).jpeg";
import img3 from "../../assets/house2.jpeg";
import img4 from "../../assets/house3.jpeg";
import img5 from "../../assets/house4(4).jpeg";
import img6 from "../../assets/house1 (5).jpeg";
import img7 from "../../assets/house1 (6).jpeg";
import img8 from "../../assets/house1 (7).jpeg";
import img9 from "../../assets/house1 (8).jpeg";
import img10 from "../../assets/house1 (9).jpeg";
import img11 from "../../assets/house1 (10).jpeg";
import img12 from "../../assets/house1 (11).jpeg";
import Back from "../common/Back";

const Gallary = () => {
  return (
    <div>
      <Back
        name="Gallary"
        title="Our Photos - Our memorable Pictrures"
        cover={img}
      />
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img4} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img7} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img8} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={img9} alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={img10}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={img11}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={img12}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
