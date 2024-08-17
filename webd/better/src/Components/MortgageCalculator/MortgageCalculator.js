import React, { useState } from "react";
const MortgageCalculator = () => {
  let p = 20000;
  const [homePrice, setHomePrice] = useState(300);
  const [downPayment, setDownPayment] = useState(0);
  const [rate, setRate] = useState(0);
  const [length, setLength] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleInputChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 0), 3000000); // Restrict value between 0 and 3000000
    setHomePrice(value);
  };

  const handleSliderChange = (e) => {
    setHomePrice(e.target.value);
  };

  return (
    <>
      <div className="pt-20">
        <div className="py-20 px-14 text-[#292B29] bg-[#F0F7F1]">
          <h1 className="font-semibold text-5xl">Mortgage calculator</h1>

          <p className="text-[#565D5A] py-8 w-3/5  ">
            Use our mortgage calculator built directly into it! Get accurate
            estimates for your monthly mortgage payments if you will be required
            to have private mortgage insurance (PMI). Also learn why
          </p>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-semibold py-3 text-[#292B29]">Home price</h2>
              <input
                type="number"
                onChange={handleInputChange}
                className="w-[300px] h-[80px] hover:border-[#017848] hover:border-4 bg-white border border-[#b0b4b3] rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <h2 className="font-semibold py-3 text-[#292B29]">
                Monthly payment
              </h2>
              <h1 className="font-semibold text-5xl h-[80px] flex items-center">
                $959/mo
              </h1>
            </div>
            <div className="rounded-lg bg-[#017848] h-[60px] w-[250px] flex items-center justify-center text-white font-semibold">
              Get pre-approved
            </div>
          </div>
          {/* <input
            type="range"
            min="0"
            max="3000000"
            value={homePrice}
            onChange={handleSliderChange}
            className="w-full mt-4"
          /> */}
          <div>
            <div className="flex justify-between mt-14">
              <div className="flex justify-between">
                {/* ZIP code */}
                <div className="relative w-64 mr-4">
                  <input
                    type="number"
                    id="ZIPCode"
                    className=" px-4 w-full h-[60px] hover:border-[#017848] hover:border-4 focus:outline-none peer bg-white border border-[#b0b4b3] rounded-lg"
                  />
                  <label
                    className="absolute top-4 left-3 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-500 duration-300 font-semibold "
                    htmlFor="ZIPCode"
                  >
                    ZIP Code
                  </label>
                </div>
                {/* Down Payment */}
                <div className="relative w-64">
                  <input
                    type="number"
                    id="DownPayment"
                    className="inline-block align-top px-4 w-3/4 h-[60px] hover:border-[#017848] hover:border-4 focus:outline-none peer bg-white border border-[#b0b4b3] rounded-l-lg"
                  />
                  <div className="inline-block align-top w-1/4 h-[60px] hover:border-[#017848] hover:border-4 bg-white border-r border-t border-b border-[#b0b4b3] rounded-r-lg"></div>
                  <label
                    className="absolute top-4 left-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-1 text-gray-500 duration-300 font-semibold"
                    htmlFor="DownPayment"
                  >
                    Down Payment
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                {/* Interest Rate */}
                <div className="relative w-64  mr-4 ">
                  <input
                    type="number"
                    id="InterestRate"
                    className=" px-4 w-full h-[60px] hover:border-[#017848] hover:border-4 focus:outline-none peer bg-white border border-[#b0b4b3] rounded-lg"
                  />
                  <label
                    className="absolute top-4 left-3 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-2 text-gray-500 duration-300 font-semibold "
                    htmlFor="InterestRate"
                  >
                    Interest Rate
                  </label>
                </div>
                {/* Length of loan */}
                <div className="relative w-64">
                  <select
                    id="Length"
                    className="px-4 w-full h-[60px] hover:border-[#017848] hover:border-4 focus:outline-none  bg-white border border-[#b0b4b3] rounded-lg appearance-none"
                  >
                    <option value="30 years">30 years</option>
                    <option value="20 years">20 years</option>
                    <option value="15 years">15 years</option>
                  </select>
                  <label
                    className="absolute top-4 left-1 scale-75 -translate-y-4 text-gray-500  font-semibold"
                    htmlFor="Length"
                  >
                    Length of loan
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="pt-20 px-14">
        {/* How does a mortgage calculator help me? */}
        <h1 className="text-[#292B29] font-semibold text-3xl py-10">
          How does a mortgage calculator help me?
        </h1>
        <p className="pb-10 text-[#565D5A]">
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>
        <hr />

        {/* How much monthly mortgage payment can I afford? */}
        <h1 className="text-[#292B29] font-semibold text-3xl py-10">
          How much monthly mortgage payment can I afford?
        </h1>
        <p className=" text-[#565D5A]">
          Lenders determine how much you can afford on a monthly housing payment
          by calculating your debt-to-income ratio (DTI). The maximum DTI you
          can have in order to qualify for most mortgage loans is often between
          45-50%, with your anticipated housing costs included.
          <br /> <br /> Your DTI is the balance between your income and your
          debt. It helps lenders understand how safe or risky it is for them to
          approve your loan. A DTI ratio represents how much of your gross
          monthly income is spoken for by creditors, and how much of it is left
          over to you as disposable income. It’s most commonly written as a
          percentage. For example, if you pay half your monthly income in debt
          payments, you would have a DTI of 50%.
        </p>
        <div className="flex justify-center py-8 text-[#565D5A]">
          <div className="w-3/5 ">
            Formula for calculating your debt-to-income (DTI) ratio:
            <img className="my-5" src="/assets/dti-formula.jpg" alt="" />
            Here’s an example of what calculating your DTI might look like:
            <img className="mt-5" src="/assets/dti-example.jpg" alt="" />
          </div>
        </div>
        <hr />

        {/* How to calculate monthly mortgage payments? */}
        <h1 className="text-[#292B29] font-semibold text-3xl py-10">
          How to calculate monthly mortgage payments?
        </h1>
        <p className=" text-[#565D5A]">
          Your monthly mortgage payment includes loan principal and interest,
          property taxes, homeowners insurance, and mortgage insurance (PMI), if
          applicable. While not typically included in your mortgage payment,
          homeowners also pay monthly utilities and sometimes pay homeowners
          association (HOA) fees, so it’s a good idea to factor these into your
          monthly budget. This mortgage calculator factors in all these typical
          monthly costs so you can really crunch the numbers.
        </p>
        <h1 className="text-[#292B29] font-semibold text-xl py-6">
          Formula for calculating monthly mortgage payments
        </h1>
        <p className="pb-5 text-[#565D5A]">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here’s the
          formula for calculating principal and interest yourself:
        </p>
        <div className="flex justify-center pb-10 ">
          <div className="w-3/5 ">
            <img
              className="pb-3"
              src="/assets/monthly-mortgage-payments-formula.jpg"
              alt=""
            />
            Where:
            <ul className="list-disc pl-10">
              <li className="list-disc pt-3">
                <span className="font-semibold">M</span> is monthly mortgage
                payments
              </li>
              <li className="pt-3">
                <span className="font-semibold">P</span> is the principal loan
                amount (the amount you borrow)
              </li>
              <li className="pt-3">
                <span className="font-semibold">r</span> is the monthly interest
                rate <br /> (annual interest rate divided by 12 and expressed as
                a decimal)
                <div className="block text-sm">
                  For example: <br />
                  if the annual interest rate is{" "}
                  <span className="font-semibold">5%</span>, <br /> the monthly
                  rate would be <span className="font-semibold">0.05/12 =</span>
                  .00417, or <span className="font-semibold">.417%</span>
                </div>
              </li>
              <li className="pt-3">
                <span className="font-semibold">n</span> is the total number of
                payments in months
                <div className="block text-sm">
                  For example: <br /> for a 30-year loan, n = 30×12 =
                  <span className="font-semibold">360</span> months
                </div>
              </li>
            </ul>
            <p className="py-3">Here’s a simple example:</p>
            <img src="/assets/monthly-mortgage-payments-example.jpg" alt="" />
          </div>
        </div>
        <p className="pb-10 text-[#565D5A]">
          This formula assumes a fixed-rate mortgage, where the interest rate
          remains constant throughout the loan term. And remember, you’ll still
          need to add on taxes, insurance, utilities, and HOA fees if
          applicable.
        </p>

        {/* More resources */}
        <hr />
        <h1 className="text-[#292B29] font-semibold text-3xl py-10">
          More resources
        </h1>
        <div className="flex">
          <div className="w-[375px] h-[200px] rounded-lg px-10 py-5 border border-[#b0b4b3]  ">
            <p className="text-2xl mb-8 text-[#292B29]">
              Get pre-approved to see how much you can borrow
            </p>
            <p className="font-semibold mb-3 text-[#017848]"> Get Started</p>
            <p className="text-sm text-[#565D5A]">Won’t impact your credit</p>
          </div>
          <div className="w-[375px] mx-14 h-[200px] rounded-lg px-10 py-5 border border-[#b0b4b3]  ">
            <p className="text-2xl mb-8 text-[#292B29]">
              See today’s rates in your area
            </p>
            <p className="font-semibold mb-3 text-[#017848]"> See Rates</p>
          </div>
          <div className="w-[375px] h-[200px] rounded-lg px-10 py-5 border border-[#b0b4b3]  ">
            <p className="text-2xl mb-8 text-[#292B29]">
              See today’s rates in your area
            </p>
            <p className="font-semibold mb-3 text-[#017848]">
              {" "}
              Try our mortgage calculator{" "}
            </p>
          </div>
        </div>
        <p className="py-10 text-[#565D5A] text-sm">
          *See Better Real Estate discount terms and conditions.
          <br />
          **The average lifetime savings estimate is based on a comparison of
          the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
          fixed-rate mortgage product with Better Mortgage’s own offered rate
          for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
          based on conventional, conforming fully-amortizing home purchase loans
          for borrowers with a loan-to-value of 80 percent and with excellent
          credit. Better Mortgage’s offered rate is based on pricing output for
          a 30-year fixed-rate mortgage product with a 30-day lock period for a
          single-family, owner-occupied residential property and a borrower with
          excellent (760 FICO) credit and a loan-to-value ratio of 80 percent.
          Individual savings could vary based on current market rates, property
          type, loan amount, loan-to-value, credit score, debt-to-income ratio
          and other variables.
        </p>
        <hr />
      </div>
    </>
  );
};

export default MortgageCalculator;
