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
      <div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {/* 2014 */}
            <div className=" flex  justify-center w-full">
              <div className=" text-center w-1/12 p-2 bg-green-500 text-white rounded-full">
                2014
              </div>
            </div>
            <div className=" flex  justify-center w-full">
              <div className=" text-left w-2/ p-8 mr-96 bg-[#DFE0DC] text-slate-600 rounded-lg">
                After Vishal Garg’s first attempt to purchase his own dream
                home, he quickly realized that the homebuying process is
                unnecessarily broken. This inspired him to found a
                technology-first company led by engineers and data experts with
                the mission of digitizing and automating home finance to make it
                cheaper, easier, and faster for all.
              </div>
            </div>
            <div></div>

            <div className="flex items-center w-full">
              <div className="w-1/2 text-right pr-8">
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                  Content for 2014
                </div>
              </div>
              <div className="w-1/12 text-center">
                <div className="p-2 bg-green-500 text-white rounded-full">
                  2014
                </div>
              </div>
            </div>

            {/* 2015 */}
            <div className="flex items-center w-full">
              <div className="w-1/12 text-center">
                <div className="p-2 bg-green-500 text-white rounded-full">
                  2015
                </div>
              </div>
              <div className="w-1/2 text-left pl-8">
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                  Content for 2015
                </div>
              </div>
            </div>

            {/* 2016 */}
            <div className="flex items-center w-full">
              <div className="w-1/2 text-right pr-8">
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                  Content for 2016
                </div>
              </div>
              <div className="w-1/12 text-center">
                <div className="p-2 bg-green-500 text-white rounded-full">
                  2016
                </div>
              </div>
            </div>

            {/* 2017 */}
            <div className="flex items-center w-full">
              <div className="w-1/12 text-center">
                <div className="p-2 bg-green-500 text-white rounded-full">
                  2017
                </div>
              </div>
              <div className="w-1/2 text-left pl-8">
                <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                  Content for 2017
                </div>
              </div>
            </div>

            {/* Repeat for other years up to 2023 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
