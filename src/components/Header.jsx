import React, {useState} from "react";
import logo from "../../public/images/logo.png";
import SocialMedia from "./SocialMedia";

const dropdownOptions = {
  ABOUT: ["Annual Report", "Our Vision", "Organizational Profile"],
  NEWS: ["Latest Updates", "Events"],
  COUNTRIES: ["ACTIVE COUNTRY", "RESERVED COUNTRY"],
  FUNDING: [
    "REGULAR FUNDING CYCLE",
    "RRW ON WOMENS PARTICIPATION IN PEACR PROCESSES",
    "WINDOWS FOR WOMEN HUMAN RIGHTS",
    "FUNDING APPEALS"
  ],
  PARTNERS: [
    "ANNUAL CSO SURVEY",
    "OUR PARTNERS AROUND THE WORLD",
    "WPHF GLOBAL LEARNING HUB",
  ],
  JOINUS: ["INVEST IN WOMEN GLOBAL SURVEY", "Take Action", "Give Monthly"],
  CONTACT: ["Email Us", "Call Us"],
};

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div>
      <header className="bg-navColor shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <img src={logo} alt="WPHF" className="h-10" />
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
          <nav
            className={`md:flex ${
              isMenuOpen ? "block" : "hidden"
            } absolute md:static text-white w-full md:w-auto top-16 left-0`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
              {Object.keys(dropdownOptions).map((item, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center hover:text-blue-500 cursor-pointer"
                  >
                    {item}
                    <svg
                      className="ml-1 w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdownOpen === index && (
                    <ul className="absolute left-0 text-navColor mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                      {dropdownOptions[item].map((option, optionIndex) => (
                        <li
                          key={optionIndex}
                          className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="bg-btnColor text-white px-4 rounded cursor-pointer hover:opacity-85">
                Donate
              </li>
            </ul>
          </nav>
        </div>
        <div className="absolute right-0">
          <SocialMedia />
        </div>
      </header>
    </div>
  );
};

export default Header;