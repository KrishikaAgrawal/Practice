import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      {/* hero section */}
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
      <div className="w-full h-screen flex ">
        <div></div>
        <div>
          <div className="text-8xl font-semibold ">
            Find out why we’re better.
          </div>
          <div
            className=" my-4 h-14 w-56 text-lg font-semibold text-center rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
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
          <div>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#23ad7a", fontSize: "24px" }}
            />
            <span className="pl-1 pr-2 font-medium">Trustpilot</span>
            <span className="px-2 font-medium text-gray-600">Excellent</span>
            <span className="px-2  text-gray-600">
              <span className="font-medium">4.3</span> out of 5
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="div1"></div>
        <div className="div2">
          <span>Arian</span>
          <span>Amanda</span>
          <span>Paul</span>
        </div>
      </div>
    </>
  );
};

export default Home;
