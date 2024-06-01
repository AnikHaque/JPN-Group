import React from "react";
import logo1 from "../../../assets/logo1.png";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-8 pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8 md:mb-0">
              <h3 className="text-xl font-bold">
                <img src={logo1} className="w-40 mt-[-20px]" alt=""></img>
              </h3>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className="flex space-x-4 mt-4">
                <i className="fa-brands fa-facebook text-2xl"></i>
                <i className="fa-brands fa-twitter text-2xl"></i>
                <i className="fa-brands fa-instagram text-2xl"></i>
                <i className="fa-brands fa-linkedin-in text-2xl"></i>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
              <h5 className="text-lg font-semibold">Quick Links</h5>
              <ul className="mt-4 space-y-2">
                <li className="nav-item">
                  <a className="hover:text-gray-400 text-white" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="hover:text-gray-400 text-white" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="hover:text-gray-400 text-white" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="hover:text-gray-400 text-white" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="hover:text-gray-400 text-white" href="/">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <h5 className="text-lg font-semibold">Contact Info</h5>
              <p className="mt-4">
                <i className="fa-solid fa-phone-volume"></i> +97 1525709908
              </p>
              <p className="mt-2">
                <i className="fa-solid fa-envelope"></i> jpnusvc@gmail.com
              </p>
              <p className="mt-2">
                <i className="fa-solid fa-paper-plane"></i> House-1007
                (Level-5), Road-09, Avenue-11, Mirpur DOHS,Dhaka-1216,
                Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 text-center py-4">
        <p>
          Design & Developed By{" "}
          <span className="text-[#27ae60]">Goinnovior Limited</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
