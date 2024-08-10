import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center my-32">
        <h1 className="text-[#017848] text-3xl py-10 font-semibold text-center">
          Our mission
        </h1>
        <p className="w-4/5 text-[#292B29] text-5xl font-semibold text-center">
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </div>

      <div>
        <div>
          <h1 className="text-3xl py-2 font-semibold text-[#292B29]">
            The status quo is broken
          </h1>
          <p className="text-[#60625A] py-6 text-base">
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
        <div></div>
      </div>
      <div></div>
    </>
  );
};

export default About;
