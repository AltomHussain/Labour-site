import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="first-container">
        <h2>See our latest campaigns</h2>
        <div className="first-child">
          <h4>Jobs, Jobs, Jobs</h4>
          <p>
            British faces a job crises: we must fight for jobs business and high
            streets.
          </p>
        </div>
        <div className="second-child">
          <h4>Run to rebuild: Key workers standing up for their communities</h4>
          <p>
            Key workers you have led the way through this pandemic. You should
            be at the heard of decision-making across the country.
          </p>
        </div>
      </div>
      {/* Second container */}
      <div className="second-container">
        <div className="first-child">
          <img src="" />
        </div>
        <div className="second-child">
          <h2>Meet Keir Starmer</h2>
          <p>
            eir Starmer is the Leader of the Labour Party. Find out more about
            Keir now.
          </p>
          <span>LEARN ABOUT THE LEADER OF LABOUR arrow here</span>
        </div>

        <div className="third-child">
          <div>
            <h3>font-awesome here Find your local Labour representative</h3>
            <form>
              <button>
                <i class="fas fa-search"></i>
              </button>
              <input type="text" placeholder="Search by postcode" />
              <button>
                <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="third-container">
        <div className="first-child">
          <h2>Join our people-powered movement</h2>
          <p>
            Labour is made up of over half a million members, determined to
            transform Britain. It's simple and affordable to become a member,
            and it unlocks a ton of opportunities.
          </p>
          <span>FIND OUT WHY YOU SHOULD JOIN LABOUR arrow here</span>
        </div>

        <div className="second-child">
          <div className="become-member">
            <p><i class="far fa-arrow-alt-circle-right"></i></p>
            <p>BECOME A MEMBER</p>
          </div>
          <div className="why-labour">
            <p><i class="far fa-arrow-alt-circle-right"></i></p>
            <p>WHY JOIN LABOUR?</p>
          </div>
          <div className="renew">
            <p><i class="far fa-arrow-alt-circle-right"></i></p>
            <p>RENEW MEMBERSHIP</p>
          </div>
          <div className="access">
            <p><i class="far fa-arrow-alt-circle-right"></i></p>
            <p>ACCESS MY LABOUR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
