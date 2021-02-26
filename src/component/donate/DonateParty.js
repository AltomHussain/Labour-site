import React from "react";
import "./Donate.css";
export default function DonateParty() {
  return (
    <div className="home-container">
      <div className="donate-container">
        <img
          src="https://i2-prod.mirror.co.uk/incoming/article6405837.ece/ALTERNATES/s1200/Labour-Party-Logo.jpg"
          className="donate-logo"
        />

        <div className="amount-to-donate">
          <h2>Help fund our people powered movement. Donate now.</h2>

          <table className="table">
            <tbody>
              <tr>
                <td>
                  <button className="btn btn-success">£10</button>
                </td>
                <td>
                  <button className="btn btn-success">£20</button>
                </td>
                <td>
                  <button className="btn btn-success">£50</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className="btn btn-success">£50</button>
                </td>
                <td>
                  <button className="btn btn-success">£250</button>
                </td>
                <td>
                  <button className="btn btn-success">£100</button>
                </td>
              </tr>
              <tr>
                <td >
                  {" "}
                  <button className="btn btn-success">£1000</button>
                </td>
                <td colspan="2">
                  {" "}
                  <input type="text" placeholder="£ Other amount" className="form-control" />
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
     
      <footer>
        <div>
          <a href="#">Terms and Conditions</a>
          <a href="#">Disability Access</a>
        </div>
        <div>
          <p>
            Copyright Labour Party. All rights reserved. Promoted by David Evans
            on behalf of the Labour Party both at Southside, 105 Victoria
            Street, London SW1E 6QT. The Labour Party will place cookies on your
            computer to help us make this website better. To find out more about
            these cookies, see our
          </p>
          <a href="#">Policy notice</a>
        </div>
      </footer>
    </div>
  );
}
