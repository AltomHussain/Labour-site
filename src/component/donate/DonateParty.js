import React from "react";
import "./Donate.css";
export default function DonateParty() {
  return (
    <div className="home-container">
      <div className="donate-container">
          <div className="amount-to-donate">
        <h2>Help fund our people powered movement. Donate now.</h2>
        <div>
        <button className="btn btn-success">£10</button>
        <button className="btn btn-success">£20</button>
        <button className="btn btn-success">£50</button>
        </div>
        <div>
        <button className="btn btn-success">£50</button>
        <button className="btn btn-success">£100</button>
        <button className="btn btn-success">£250</button>
        </div>
        <div>
        <button className="btn btn-success">£1000</button>
        <input type="text" placeholder="£ Other amount" />
        </div>
        <button className="btn btn-success" >Next</button>
        </div>
      </div>
    </div>
  );
}
