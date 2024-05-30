import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Message from us"
              subtitle="Check out our company story says"
            />

            <p>
              JPN MODERN LUCKY CITY is a new horizon of lifestyle. Its
              objectives to create the new landscape of the city and upgrade the
              daily life of city dwellers. Multiple families create a community.
              That is why we introduce various types of community space to meet
              others. These spaces like children playground, Multipurpose
              convention hall, amphitheater, etc.
            </p>
            <p>
              People demand safety and security to their family members are sage
              in our highly integrated designed city. All the safety measures
              count here. This shall be the habitat for those who want to roam
              in nature with fresh air int an exchangeable cultural environment.
              That we designed. In one sentence- This JPN MODERN LUCKY CITY we
              called towards new urban experience what we assure to your family.
            </p>
            <button className="bg-[#27ae60] text-white p-4">
              More About Us
            </button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
