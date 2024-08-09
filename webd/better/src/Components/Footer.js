import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* footer 1 */}
      <div className="p-20">
        <h1 className="text-4xl font-bold text-[#236d58]">Better</h1>
        <div className="flex justify-between ">
          <div className="w-96">
            <p className="py-6">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            <h2 className="text-xl text-slate-400 py-2">
              <span className="font-bold text-[#236d58]  ">Better </span>
              Mortgage
            </h2>
            <p>
              We can’t wait to say “Welcome home.” Apply 100% online, with
              expert customer support.
            </p>
            <h2 className="text-xl text-slate-400 py-2">
              <span className="font-bold text-[#236d58]  ">Better </span>
              Real Estate
            </h2>
            <p>
              Connect with a local Better Real Estate Partner Agent to find out
              all the ways you can save.
            </p>
            <h2 className="text-xl text-slate-400 py-2">
              <span className="font-bold text-[#236d58]  ">Better </span>
              Cover
            </h2>
            <p>
              Shop, bundle, and save on insurance coverage for home, auto, life,
              and more.
            </p>
            <h2 className="text-xl text-slate-400 py-2">
              <span className="font-bold text-[#236d58]  ">Better </span>
              Inspect
            </h2>
            <p>
              Get free repair estimates, 24-hour turnarounds on reports, and
              rest easy with our 100-day inspection guarantee.
            </p>
            <h2 className="text-xl text-slate-400 py-2">
              <span className="font-bold text-[#236d58]  ">Better </span>
              Settlement Services
            </h2>
            <p>
              Get transparent rates when you shop for title insurance all in one
              convenient place.
            </p>
          </div>
          <div className="w-48">
            <h2 className=" my-6 font-semibold text-lg text-slate-800 ">
              Resources
            </h2>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Home affordability calculator
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Mortgage calculator
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Free mortgage calculator
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Mortgage calculator with taxes
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Mortgage calculator with PMI
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Rent vs buy calculator
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              HELOC payment calculator
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              HELOC vs cash-out refinance calculator
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Buy a home
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Sell a home
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Get home inspection
            </p>
          </div>
          <div className="w-48">
            <h2 className=" my-6 font-semibold text-lg text-slate-800 ">
              Company
            </h2>
            <p className="my-3 hover:cursor-pointer hover:underline">
              About Us
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">Careers</p>
            <p className="my-3 hover:cursor-pointer hover:underline">Media</p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Partner With Us
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Learning center
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">FAQs</p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Investor Relations
            </p>
          </div>
          <div className="w-48">
            <h2 className=" my-6 font-semibold text-lg text-slate-800 ">
              Contact Us
            </h2>
            <p className="my-3 hover:cursor-pointer hover:underline">
              hello@better.com
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              415-523-8837
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">FAQ</p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Glossary
            </p>
            <h2 className=" my-6 font-semibold text-lg text-slate-800 ">
              Legal
            </h2>
            <p className="my-3 hover:cursor-pointer hover:underline">
              NMLS Consumer Access
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Privacy Policy
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Terms of Use
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Disclosures & Licensing
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Affiliated Business
            </p>
            <p className="my-3 hover:cursor-pointer hover:underline">
              Browser Disclaimer
            </p>
          </div>
        </div>
      </div>
      {/* footer 2 */}
      <div className="p-20">
        <div className="text-slate-900">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className=" text-3xl mr-6 hover:text-[#004733] hover:cursor-pointer"
          />
          <FontAwesomeIcon
            className=" text-3xl mr-6 hover:text-[#004733] hover:cursor-pointer"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className=" text-3xl mr-6 hover:text-[#004733] hover:cursor-pointer"
          />
        </div>
        <div className="text-gray-600 text-sm py-16">
          <sup>1</sup>Better Mortgage’s One Day Mortgage™ promotion offers
          qualified customers who provide certain required financial
          information/documentation to Better Mortgage within 4 hours of locking
          a rate on a mortgage loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place
          pre-closing and which may trigger additional required documentation
          from the customer. Better Mortgage does not guarantee that initial
          underwriting approval will result in a final underwriting approval.
          See{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            One Day Mortgage™ Terms and Conditions.
          </u>{" "}
          <br />
          <br />
          <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers
          qualified customers who provide certain required financial
          information/documentation to Better Mortgage within 4 hours of locking
          a rate on a HELOC loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place
          pre-closing and which may trigger additional required documentation
          from the customer. Better Mortgage does not guarantee that initial
          underwriting approval will result in final underwriting approval. See{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            One Day Heloc™ Terms and Conditions.
          </u>{" "}
          <br />
          <br />
          <sup>3</sup>Assumes borrowers are eligible for the Automated Valuation
          Model (AVM) to calculate their home value, their loan amount is less
          than $400,000, all required documents are uploaded to their Better
          Mortgage online account within 24 hours of application, closing is
          scheduled for the earliest available date and time, and a notary is
          readily available. Funding timelines may vary and may be longer if an
          appraisal is required to calculate a borrower’s home value. <br />
          <br />
          <br />
          <hr />
          <br />
          <br />© 2024 Better Home & Finance Holding Company and/or its
          affiliates. Better is a family of companies. Better Mortgage
          Corporation provides home loans; Better Real Estate, LLC and Better
          Real Estate California Inc License # 02164055 provides real estate
          services; Better Cover, LLC sells insurance products; and Better
          Settlement Services provides title insurance services; and Better
          Inspect, LLC provides home inspection services. All rights reserved.
          <br />
          <br /> Home lending products offered by Better Mortgage Corporation.
          Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World
          Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007.
          Loans made or arranged pursuant to a California Finance Lenders Law
          License. Not available in all states. Equal Housing Lender.{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            NMLS Consumer Access
          </u>{" "}
          <br />
          <br />
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            license numbers.
          </u>{" "}
          Better Real Estate, LLC provides access to real estate brokerage
          services via its nationwide network of partner brokerages and real
          estate agents (“Better Real Estate Partner Agents”). Equal Housing
          Opportunity. All rights reserved.
          <br />
          <br />{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            New York State Fair Housing Notice
          </u>{" "}
          <br />
          <br />
          <u className="cursor-pointer hover:text-[#004733]">
            New York Standard Operating Procedures
          </u>{" "}
          <br />
          <br />
          Texas Real Estate Commission:{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            Information About Brokerage Services
          </u>{" "}
          |{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            Consumer Protection Notice
          </u>{" "}
          <br />
          <br />
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
          <br />
          <br /> Homeowners insurance policies are offered through Better Cover,
          LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
          <br />
          <br /> Insurance quotes and policies are offered through Better Cover,
          LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is
          a full listing of Better Cover, LLC’s{" "}
          <u className="cursor-pointer hover:text-[#004733]">
            license numbers.{" "}
          </u>
          <br />
          <br />
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
          <br />
          <br /> Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          & Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states. <br />
          <br />
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company. Better Home & Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </div>
      </div>
    </>
  );
};

export default Footer;
