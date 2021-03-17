import React from "react";
import LogoImages from "./LogoImages";
import "./Volunteers.css";
import {motion} from "framer-motion"
import { Alert } from "./Alert";
export default function Volunteers() {
  const footerItems = [
    { item: "Join", link: "" },
    { item: "Donate", link: "" },
    { item: "Volunteer", link: "" },
    { item: "Privacy Policy", link: "https://labour.org.uk/cookie-policy/" },
  ];
  return (
    <div className="volunteers-container">
      <header className="bg-danger volunteers-header">
        <LogoImages
          image={
            <img
              src="https://www.labourinternational.net/wp-content/uploads/sites/70/2019/11/LabourLogoRedBackground-1200x630-c-center.jpg"
              alt="Labour logo"
            />
          }
        />
      </header>

      <motion.div
        className="sign-up-container form-group"
        initial={{ x: "70vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0, duration: 5, stiffness: 100 }}
      >
        <h2>Sign up to volunteer with Labour</h2>
        <h3>With your help we'll build a Britain for the many, not the few.</h3>
        <div className="main-form ">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row ">
            <div className="form-group col-md-6">
              <label className="">Phone</label>
              <input type="text" placeholder="Phone" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label className="">Postcode</label>
              <input
                type="text"
                placeholder="Postcode"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <label className="">Email</label>
        <input type="text" className="form-control" />
        <p>
          Be part of our movement - with the contact details you have chosen to
          provide, the Labour Party can keep you updated via email, texts, calls
          and online advertisements on the latest campaigns, events and
          opportunities to get involved.
          <a href="https://labour.org.uk/privacy-policy/">
            Find out more about how we use your information.
          </a>
        </p>
        <motion.button
          className="btn btn-sign-up form-control my-2"
          initial={{ y: "50vw" }}
          animate={{ y: 0 }}
          transition={{type: 'spring', delay: 0.5, duration: 1}}
          onClick={Alert}
        >
          Sign Up
        </motion.button>
      </motion.div>

      <footer>
        <div className="tack-action-footer-container">
          <div className="footer-first-child">
            <img src="logo here" alt="labout logo" />
            <p>
              Copyright Labour All rights reserved. <br></br>
              Promoted by David Evans on behalf of the Labour Party<br></br>
              both at Southside, 105 Victoria Street, London SW1E 6QT.
            </p>
          </div>
          <div className="footer-second-child">
            {footerItems.map((item, index) => (
              <a href={item.link} key={index}>
                <li> {item.item}</li>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
