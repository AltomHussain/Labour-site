import React, { useState } from "react";
import LogoImages from "../LogoImages";
import {motion} from "framer-motion"
import "./Donate.css";
export default function DonateParty() {
  const amounts = [10, 20, 50];
  const amounts2 = [50, 250, 100];

  return (
    <div className="home-container">
      <div className="donate-container">
        <LogoImages
          image={
            <img
              src="https://i2-prod.mirror.co.uk/incoming/article6405837.ece/ALTERNATES/s1200/Labour-Party-Logo.jpg"
              className="donate-logo"
              alt="Labour_image"
            />
          }
        />
        <motion.div className="amount-to-donate"
        initial={{y: '100vw'}}
        animate={{y:0}}
        transition={{type: 'spring', duration: 3}}
        >
          <h1>Help fund our people powered movement. Donate now.</h1>

          <table className="table">
            <tbody>
              <tr>
                {amounts.map((amount, index) => {
                  return (
                    <td key={index}>
                      <button value={index} className="btn btn-success">
                        £{amount}
                      </button>
                    </td>
                  );
                })}
              </tr>
              <tr>
                {amounts2.map((amount, index) => {
                  return (
                    <td key={index}>
                      <button className="btn btn-success">£{amount}</button>
                    </td>
                  );
                })}
              </tr>

              <tr>
                <td>
                  <button>£1000</button>
                </td>
                <td colspan="2">
                  <input
                    type="text"
                    placeholder="£ Other amount"
                    className="form-control amount-input"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <motion.button className="btn btn-success next form-control"
          initial={{x:'70vw', y: '-10vw'}}
          animate={{x: 0, y:0}}
          transition={{type: 'spring', delay: 1, duration:1}}
          >Next</motion.button>
        </motion.div>
      </div>

      <footer>
        <div className="donate-footer-container">
          <div className="terms-container">
            <a href="#">Terms and Conditions</a>
            <a href="#">Disability Access</a>
          </div>
          <div className="copy-right-container">
            <p>
              Copyright Labour Party. All rights reserved. Promoted by David
              Evans on behalf of the Labour Party both at Southside, 105
              Victoria Street, London SW1E 6QT. The Labour Party will place
              cookies on your computer to help us make this website better. To
              find out more about these cookies, see our
            </p>
            <div className="policy-note">
              {" "}
              <a href="#">Policy notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
