import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Arian");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getImageSrc = () => {
    switch (selectedOption) {
      case "Arian":
        return "/assets/Arian.webp";
      case "Amanda":
        return "/assets/Amanda.webp";
      case "Paul":
        return "/assets/Paul.webp";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative" style={{ height: "900px" }}>
        <div
          className="div1 w-full absolute"
          style={{ backgroundColor: "#004733", zIndex: 1, height: "900px" }}
        ></div>
        <div
          className="div3 flex justify-center items-center absolute w-full"
          style={{ zIndex: 2, height: "900px" }}
        >
          <img
            src="/assets/hero-variant-c.webp"
            alt=""
            className="w-1/3 h-auto self-end"
          />
        </div>
        <div
          className="div2 flex justify-center pt-40 absolute w-full"
          style={{ color: "#1EE07F", zIndex: 3, height: "900px" }}
        >
          <div className="text-9xl font-semibold w-2/3 text-center">
            Mortgages made simple
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="w-full h-screen flex justify-between my-36">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="div1 w-full flex justify-center items-center mb-4">
            <img
              src={getImageSrc()}
              alt={selectedOption}
              className="w-1/2 h-auto rounded-2xl"
            />
          </div>
          <div className="div2 flex space-x-4">
            <span
              className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
                selectedOption === "Arian"
                  ? "border-[#229c6f] border-4 text-[#229c6f] font-medium"
                  : "hover:border-[#229c6f] border-4 hover:text-[#229c6f]"
              }`}
              onClick={() => handleOptionClick("Arian")}
            >
              Arian
            </span>
            <span
              className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
                selectedOption === "Amanda"
                  ? "border-[#229c6f] border-4 text-[#229c6f] font-medium"
                  : "hover:border-[#229c6f] border-4 hover:text-[#229c6f]"
              }`}
              onClick={() => handleOptionClick("Amanda")}
            >
              Amanda
            </span>
            <span
              className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
                selectedOption === "Paul"
                  ? "border-[#229c6f] border-4 text-[#229c6f] font-medium"
                  : "hover:border-[#229c6f] border-4 hover:text-[#229c6f]"
              }`}
              onClick={() => handleOptionClick("Paul")}
            >
              Paul
            </span>
          </div>
        </div>

        <div className=" flex flex-col  justify-center w-2/5">
          <div className="text-7xl font-semibold text-slate-800">
            Find out why we’re better.
          </div>
          <div
            className="my-4 h-14 w-56 text-lg font-semibold text-center rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: "#004733", color: "white" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#23ad7a")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#004733")
            }
          >
            See all our stories
          </div>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#23ad7a", fontSize: "24px" }}
            />
            <span className="pl-1 pr-2 font-medium">Trustpilot</span>
            <span className="px-2 font-medium text-gray-600">Excellent</span>
            <span className="px-2 text-gray-600">
              <span className="font-medium">4.3</span> out of 5
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
