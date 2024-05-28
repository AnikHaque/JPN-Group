import React from "react";
import { footer } from "../../data/Data";
import logo1 from "../../../assets/logo1.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5 ml-[700px]">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800">
        <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="box">
            <div className="logo">
              <img src={logo1} alt="Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
              </p>
            </div>
            <div className="input flex">
              <input
                type="text"
                placeholder="Email Address"
                className="text-black w-2/4 p-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#27ae60] text-white p-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>

          {footer.map((val, index) => (
            <div key={index} className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="legal bg-gray-800 py-4 text-center">
        <span>
          © 2024 JPN GROUP. Designed & Developed By{" "}
          <span className="text-[#27ae60]">Goinnovior Limited</span>.
        </span>
      </div>
    </>
  );
};

export default Footer;
