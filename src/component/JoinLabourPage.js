import React from "react";
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
        <h2>Join the Labour Party</h2>
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
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Reduced
                </button>
                <h4 className="col">£2.21 per month</h4>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>


          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        {/* end accordion */}
      </div>
    </div>
  );
}
