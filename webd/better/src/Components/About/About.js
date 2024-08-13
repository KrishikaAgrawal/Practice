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
    </>
  );
};

export default About;
