import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JoinFooter from "./JoinFooter";

import "./JoinLabourPage.css";
export default function JoinLabourPage() {
  const recudeItems = [
    {
      heading: "Age 20 to 26",
      subheading: "",
    },
    {
      heading: "Required",
      subheading: "",
    },
    {
      heading: "Unwaged",
      subheading: null,
    },
    {
      heading: "Part-time Worker",
      subheading: "Fewer than 16 hours per week",
    },
    {
      heading: "Trade union member",
      subheading: "Current member of affiliated trade unions",
    },
  ];
  const othersItems = [
    {
      heading: "Aged 14 to 19",
      subheading: null,
    },
    {
      heading: "Students",
      subheading: "For the duration of yours studies",
    },
    {
      heading: "Member of British Armed forces",
      subheading: "An introductory rate for the first year of membership",
    },
  ];
  return (
    <motion.div
      className="join-container"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 80,
      }}
      // transition={{ duration: 1 }}
    >
      <div className="header">
        <div className="join-header">
          <a href="/">
            {" "}
            <img
              className="join-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf21Pw1evcj1yLKcyc1HcCpElERJIoZ5dhOA&usqp=CAU"
              alt="labour-logo"
            />
          </a>
        </div>
      </div>

      <div className="join-container">
        <h1 className="join-h2">Join the Labour Party</h1>
        <p className="mb-5">Help us campaign for a fairer Britain</p>
        <h4 className="mb-4">Choose your membership rate</h4>

        <div className="standard">
          <div className="d-flex justify-content-between m-3">
            <h4 className="">Standard</h4>
            <h4 className="">
              £4.<small>42 per month</small>
            </h4>
          </div>
          <p className="m-3">Available to anyone over 14 years old</p>
        </div>
        {/* accordion containter */}

        {/* new accordion */}

        <div className="accordion accordion-flush" id="accordionFlushExample">
          {/* Item 1*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button  bg-warning text-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Reduced
              </button>
            </h2>

            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="available-price">
                  <p>
                    Available for those aged 20 to 26, retired, unwaged,
                    part-time workers or affiliated trade union members
                  </p>
                  <div className="price">
                    £2.<small> 21</small> per month
                  </div>
                </div>
                {recudeItems.map((item, index) => {
                  return (
                    <div key={index} className="acordian-items">
                      <Link to="/join-detail">
                        <h4 className="text-white pt-2 pb-2 pl-3 heading-sub">
                          {item.heading}
                        </h4>
                        <p className="text-white pl-3">{item.subheading} </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed bg-warning text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Other use react toastify in everypage
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="available-price">
                  Available for those aged 14-19, students and current or former
                  members of the British Armed Forces
                  <p className="ml-3">
                    £3.<small>00</small> per year
                  </p>
                </div>

                {othersItems.map((item, index) => {
                  return (
                    <div key={index} className="acordian-items">
                      <Link to="/join-detail">
                        <h4 className="text-white pt-2 pb-2 pl-3 heading-sub">
                          {item.heading}
                        </h4>
                        <p className="text-white pl-3">{item.subheading} </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <hr className="col my-5" /> <p className="mt-4">Or</p>
          <hr className="col my-5" />
        </div>
        <div className="already-member">
          <Link to="/already-member">
            I am already a member. Renew membership{" "}
          </Link>
        </div>
      </div>

      <JoinFooter />
    </motion.div>
  );
}
