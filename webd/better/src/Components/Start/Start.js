import React from "react";

const Start = () => {
  return (
    <>
      <div className="flex flex-col items-center text-slate-800">
        <div className="flex flex-col items-center text-3xl font-semibold my-8  ">
          <p>Hi, I'm Betty! </p>
          <p>What can I help you with?</p>
        </div>
        <div className=" mb-5 flex items-center font-semibold pl-[20px] hover:text-[#5cac95] hover:border-[#25725c] hover:border-4 transition-all duration-200 w-2/5 h-14 border border-slate-400 rounded-lg">
          <p>Buying a home</p>
        </div>
        <div className=" mb-5 flex items-center font-semibold pl-[20px] hover:text-[#5cac95] hover:border-[#25725c] hover:border-4 transition-all duration-200 w-2/5 h-14 border border-slate-400 rounded-lg">
          <p>Refinance my mortgage</p>
        </div>
        <div className=" mb-5 flex items-center font-semibold pl-[20px] hover:text-[#5cac95] hover:border-[#25725c] hover:border-4 transition-all duration-200 w-2/5 h-14 border border-slate-400 rounded-lg">
          <p>Get cash from my home</p>
        </div>
        <div className="w-2/5 flex justify-between my-10 ">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-4xl my-4">$100B</h1>
            <p className="text-sm text-slate-600">
              home loans funded entirely online
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-4xl my-4">400K</h1>
            <p className="text-sm text-slate-600">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>
        <div className=" my-10 py-3 text-slate-600 flex flex-col items-center w-2/5 bg-[#F0F7F1]">
          <p className="py-1 text-center">
            After a few questions, you'll unlock:
          </p>
          <div className=" px-5">
            <p className="py-1 text-left">Custom mortgage rates</p>
            <p className="py-1 text-left">Exclusive offers</p>
            <p className="py-1 text-left">A personalized dashboard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
