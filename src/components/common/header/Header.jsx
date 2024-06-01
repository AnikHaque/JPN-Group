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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo1 from "../../../assets/logo1.png";

const Header = () => {
  const [dropdownServices, setDropdownServices] = useState(false);
  const [dropdownRecruitment, setDropdownRecruitment] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top Row for Contact and Social Icons (Hidden on Mobile) */}
      <header className="hidden lg:block bg-black shadow-md text-white py-2">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center">
              <FaPhone className="mr-1 text-[#27ae60]" />
              <span className="text-white ml-2 mr-2">+88 01925507436</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center">
              <FaEnvelope className="mr-1 text-[#27ae60]" />
              <span className="text-white ml-2 mr-2">jpnusvc@gmail.com</span>
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
      <header className="bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between h-full py-1 px-4">
          <div className="logo">
            <img src={logo1} alt="Logo" className="w-40" />
          </div>
          <div className="hidden lg:flex space-x-8">
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
                        <ul className="absolute z-50 mt-2 rounded-lg shadow-lg bg-white w-52">
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
                        <ul className="absolute z-50 mt-2 rounded-lg shadow-lg bg-white w-52">
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
          <div className="hidden lg:flex">
            <button className="bg-[#27ae60] text-white p-4 rounded-md">
              Brochure
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-black">
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-md z-40">
            <div className="container mx-auto flex flex-col items-start py-4 px-4 space-y-4">
              <div className="flex justify-between w-full items-center">
                <img src={logo1} alt="Logo" className="w-40" />
                <button onClick={toggleMobileMenu} className="text-black">
                  <FaTimes className="text-2xl" />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {nav.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.submenu ? (
                      <div className="relative w-full">
                        <Link
                          onClick={
                            item.text.toLowerCase() === "concern"
                              ? toggleDropdownServices
                              : toggleDropdownRecruitment
                          }
                          className="text-black hover:text-neutral-900 w-full block py-2"
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
                            <ul className="mt-2 rounded-lg shadow-lg bg-white w-full">
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
                            <ul className="mt-2 rounded-lg shadow-lg bg-white w-full">
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
                        className="text-black hover:text-neutral-900 w-full block py-2"
                      >
                        {item.text}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
                <button className="bg-[#27ae60] text-white p-4 rounded-md w-full">
                  Brochure
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
