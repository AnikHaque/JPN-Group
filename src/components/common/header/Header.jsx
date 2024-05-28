import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaAngleDown,
} from "react-icons/fa";

const Header = () => {
  const [dropdownServices, setDropdownServices] = useState(false);
  const [dropdownRecruitment, setDropdownRecruitment] = useState(false);

  const toggleDropdownServices = () => {
    setDropdownServices(!dropdownServices);
    if (dropdownRecruitment) {
      setDropdownRecruitment(false);
    }
  };

  const toggleDropdownRecruitment = () => {
    setDropdownRecruitment(!dropdownRecruitment);
    if (dropdownServices) {
      setDropdownServices(false);
    }
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top Row for Contact and Social Icons */}
      <header className="bg-black shadow-md text-white py-2">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center">
              <FaPhone className="mr-1 text-[#27ae60]" />
              <span className="text-white ml-2 mr-2">+123 456 7890</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center">
              <FaEnvelope className="mr-1 text-[#27ae60]" />
              <span className="text-white ml-2 mr-2">info@example.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#27ae60]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#27ae60]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#27ae60]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#27ae60]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#27ae60]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </header>

      {/* Bottom Row for Navigation */}
      <header className="bg-white shadow-md z-50 pt-3 pb-3">
        <div className="container mx-auto flex items-center justify-between h-full py-4 px-4">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="w-32" />
          </div>
          <div className="nav flex space-x-8">
            {nav.map((item, index) => (
              <React.Fragment key={index}>
                {item.submenu ? (
                  <div className="relative">
                    <Link
                      onClick={
                        item.text.toLowerCase() === "concern"
                          ? toggleDropdownServices
                          : toggleDropdownRecruitment
                      }
                      className="text-black hover:text-neutral-900"
                    >
                      {item.text}{" "}
                      {item.text.toLowerCase() === "concern" && (
                        <FaAngleDown className="inline-block ml-1 text-sm" />
                      )}
                      {item.text.toLowerCase() === "recruitment" && (
                        <FaAngleDown className="inline-block ml-1 text-sm" />
                      )}
                    </Link>
                    {item.text.toLowerCase() === "concern" &&
                      dropdownServices && (
                        <ul className="dropdown-menu absolute z-50 mt-2 rounded-lg shadow-lg bg-white w-52">
                          {item.submenu.map((submenuItem, submenuIndex) => (
                            <li key={submenuIndex}>
                              <Link
                                to={submenuItem.path}
                                className="block px-4 py-2 text-sm text-black hover:bg-neutral-200 focus:bg-neutral-200"
                              >
                                {submenuItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    {item.text.toLowerCase() === "recruitment" &&
                      dropdownRecruitment && (
                        <ul className="dropdown-menu absolute z-50 mt-2 rounded-lg shadow-lg bg-white w-52">
                          {item.submenu.map((submenuItem, submenuIndex) => (
                            <li key={submenuIndex}>
                              <Link
                                to={submenuItem.path}
                                className="block px-4 py-2 text-sm text-black hover:bg-neutral-200 focus:bg-neutral-200"
                              >
                                {submenuItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-black hover:text-neutral-900"
                  >
                    {item.text}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
          <div>
            <button className="">Brochur</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
