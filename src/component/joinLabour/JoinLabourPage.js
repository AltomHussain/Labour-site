import React from "react";

import { Link } from "react-router-dom";
import JoinFooter from "./JoinFooter";

import "./JoinLabourPage.css";
export default function JoinLabourPage() {
  return (
    <div className="join-container">
      <div className="header">
        {" "}
        <div className="join-header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf21Pw1evcj1yLKcyc1HcCpElERJIoZ5dhOA&usqp=CAU"
            alt="labour-logo"
          />
        </div>
      </div>

      <div className="container">
        <h2><Link to="take-action">helo</Link> Join the Labour Party</h2>
        <p>Help us campaign for a fairer Britain</p>
        <h3>Choose your membership rate</h3>

        <div className="standard">
          <div className="row">
            <h4 className="col-5">Standard</h4>
            <h4 className="col-5">
              £4.<small>42 per month</small>
            </h4>
          </div>
          <p>Available to anyone over 14 years old</p>
        </div>
        {/* accordion containter */}

        {/* new accordion */}
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <div className="row">
                <h5 class="mb-0" className="col ">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Reduced
                  </button>
                </h5>
                <h4 className="col ml-5">£2.21 per month</h4>
              </div>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                Available for those aged 20 to 26, retired, unwaged, part-time
                workers or affiliated trade union members
                <div>
                  <div>
                    {" "}
                    <Link to="/join-detail">
                      <h3>Age 20 to 26</h3>
                    </Link>
                  </div>
                  <div>
                    <h3>Required</h3>
                  </div>

                  <div>
                    <h3>Unwaged</h3>
                  </div>

                  <div>
                    <h3>Trade union member</h3>
                    <p>Current member of affiliated trade unions</p>
                  </div>
                  <div>
                    <h3>Part-time Worker</h3>
                    <p>Fewer than 16 hours per week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div class="card">
            <div class="card-header" id="headingThree">
              <div className="row">
                <h5 class="mb-0" className="col">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Other
                  </button>
                </h5>
                <h5 className="col ml-5">
                  £3.<small>00</small>per year
                </h5>
              </div>
            </div>

            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                Available for those aged 14-19, students and current or former
                members of the British Armed Forces
                <div>
                  <div>
                    <h3>Aged 14 to 19</h3>
                  </div>
                  <div>
                    <h3>Student</h3>
                    <p>For the duration of yours studies</p>
                  </div>
                  <div>
                    <h3>Member of British Armed forces</h3>
                    <p>An introductory rate for the first year of membership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end accordion */}
          <div className="d-flex">
            <hr className="col my-5" /> <p className="mt-4">Or</p>
            <hr className="col my-5" />
          </div>
          <div className="already-member">
            <Link to="/already-member">
              I am already a member. Renew membership{" "}
            </Link>
          </div>
          <JoinFooter />
        </div>
      </div>
    </div>
  );
}
