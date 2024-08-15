import React from "react";

const About = () => {
  return (
    <>
      {/* Mission */}
      <div className="flex flex-col items-center py-36">
        <h1 className="text-[#017848] text-3xl py-10 font-semibold text-center">
          Our mission
        </h1>
        <p className="w-4/5 text-[#292B29] text-5xl font-semibold text-center">
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </div>

      {/* The status quo is broken */}
      <div className="flex justify-between px-20 py-20">
        <div className="w-1/2 px-16">
          <h1 className="text-3xl py-2 font-semibold text-[#292B29]">
            The status quo is broken
          </h1>
          <p className="text-[#60625A] py-6  text-base">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <div className="bg-[#017848] text-white w-[230px] text-center py-5 rounded-md font-semibold">
            Read Vishal's Story
          </div>
        </div>
        <div className="w-1/2 h-80 px-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1KjYlLBM9j4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className=" text-white bg-[#017848] py-20 px-40 my-20">
        <h1 className=" text-5xl pb-10 font-semibold">
          How we’re changing things
        </h1>
        <p className="">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers’. <br /> <br /> That’s why Better.com is redefining the
          homeownership process from the ground up. We’re using technology to
          make it faster and more efficient, and humans to help make it friendly
          and enjoyable.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Container */}
        <div className="relative z-10 space-y-8">
          <div className="space-y-8 z-10">
            {/* 2014 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2014
              </div>
            </div>
            <div className=" flex  justify-center w-full pr-24">
              <div className=" text-left w-1/3 p-8 mr-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                After Vishal Garg’s first attempt to purchase his own dream
                home, he quickly realized that the homebuying process is
                unnecessarily broken. This inspired him to found a
                technology-first company led by engineers and data experts with
                the mission of digitizing and automating home finance to make it
                cheaper, easier, and faster for all.
              </div>
            </div>

            {/* 2015 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2015
              </div>
            </div>
            <div className=" flex  justify-center w-full pl-24">
              <div className=" text-left w-1/3 p-8 ml-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage funds its first mortgage loan entirely online
                (without a single phone call!).
              </div>
            </div>

            {/* 2016 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2016
              </div>
            </div>
            <div className=" flex  justify-center w-full pr-24">
              <div className=" text-left w-1/3 p-8 mr-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage becomes a Fannie Mae approved seller + servicer
                and establishes relationships with top mortgage investors.
              </div>
            </div>

            {/* 2017 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2017
              </div>
            </div>
            <div className=" flex  justify-center w-full pl-24">
              <div className=" text-left w-1/3 p-8 ml-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better expands into the real estate market with Better Real
                Estate.
              </div>
            </div>

            {/* 2018 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2018
              </div>
            </div>
            <div className=" flex  justify-center w-full pr-24">
              <div className=" text-left w-1/3 p-8 mr-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage partners with Ally Bank to build Ally powered by
                Better.
              </div>
            </div>

            {/* 2019 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2019
              </div>
            </div>
            <div className=" flex  justify-center w-full pl-24">
              <div className=" text-left w-1/3 p-8 ml-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage launches its pilot partnership with American
                Express to deliver a seamless homebuying experience to AMEX
                customers.
              </div>
            </div>

            {/* 2021 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2021
              </div>
            </div>
            <div className=" flex  justify-center w-full pr-24">
              <div className=" text-left w-1/3 p-8 mr-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better acquires Trussle — The UK’s most innovative online
                mortgage broker.
              </div>
            </div>

            {/* 2022 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2022
              </div>
            </div>
            <div className=" flex justify-center w-full pl-24">
              <div className=" text-left w-1/3 p-8 ml-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage becomes the first fintech to fund $100B home
                loans entirely online.
              </div>
            </div>

            {/* 2023 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                2023
              </div>
            </div>
            <div className=" flex  justify-center w-full pr-24">
              <div className=" text-left w-1/3 p-8 mr-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage launches One Day Mortgage¹: The first offering
                to customers to go from application to full mortgage Commitment
                Letter within 24 hours vs. typical industry process of 30+ days.
              </div>
            </div>
            <div className=" flex  justify-center w-full pl-24">
              <div className=" text-left w-1/3 p-8 ml-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage launches the fully digital 3-day HELOC².
              </div>
            </div>
            <div className=" flex  justify-center w-full pr-24">
              <div className=" text-left w-1/3 p-8 mr-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                Better Mortgage launches One Day Verified Approval Letter.
              </div>
            </div>

            {/* Today */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-[#017848] font-semibold text-2xl text-white rounded-full">
                Today
              </div>
            </div>
            <div className=" flex  justify-center w-full pl-24">
              <div className=" text-left w-1/3 p-8 ml-96 bg-[#DFE0DC] text-[#566162] rounded-lg">
                You become part of the story by joining tens of thousands of
                happy Better Mortgage borrowers.
                <div className="p-3 bg-[#017848] font-semibold w-[120px] text-white rounded-lg text-center mt-4">
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 z-0"></div>
      </div>
    </>
  );
};

export default About;
