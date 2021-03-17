import React from "react";
import JoinFooter from "./JoinFooter";
import "./JoinDetail.css"
import LogoImages from "../LogoImages"
export default function JoinDetail() {
  let Address = [
    "Country",
    "Address",
    "Address line two",
    "Town/city",
  
  ];
  const contactDetails = [
    "Phone number",
    "Email address",
    "Confirm Email address",
  ];
  return (
    <>
      <div className="join-header">
        <LogoImages
          image={
            <img
              className="join-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf21Pw1evcj1yLKcyc1HcCpElERJIoZ5dhOA&usqp=CAU"
              alt="labour-logo"
            />
          }
        />
      </div>
      <div className="join-detail-container">
        <form className="form-control">
          <div>
            <h2 className="my-4">Your Details</h2>
            <label>Title</label>
            <input type="text" placeholder="title" className="form-control" />
            <label>First Name(s)</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
            <label>Preferred first name</label>
            <input
              type="text"
              placeholder="Preferred first name"
              className="form-control"
            />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
            <label>Gender</label>
            <input type="text" placeholder="Gender" className="form-control" />
            <label>Date of birth</label>
            <br></br>
            <input
              type="tel"
              min="12"
              style={{ width: "58px" }}
              max="6"
              placeholder="DD"
              className="mr-2"
            />
            <input
              type="tel"
              min="12"
              style={{ width: "58px" }}
              max="6"
              placeholder="MM"
              className="mr-2"
            />
            <input
              type="tel"
              min="12"
              style={{ width: "58px" }}
              max="6"
              placeholder="YYYY"
              className="mr-2"
            />
          </div>
          <hr />
          <div>
            <h2 className="my-4">Address</h2>
            <>
              {Address.map((contact, index) => {
                return (
                  <div key={index}>
                    <label>{contact}</label>
                    <input
                      type="text"
                      placeholder={contact}
                      className="form-control"
                    />
                  </div>
                );
              })}
              <div className="postcode-container">
                <input
                  type="text"
                  placeholder="Postcode"
                  className="form-control"
                />
                <button className="btn btn-success form-control">
                  Find Address
                </button>
              </div>
            </>
            <hr />
          </div>
          <div>
            <h2 className="my-4">Contact details</h2>
            <p className="mb-3">
              For any queries we may have and to keep you updated. We will never
              pass your information on to any third parties.
            </p>
            {contactDetails.map((detail, index) => {
              return (
                <div key={index}>
                  <label>{detail}</label>
                  <input
                    type="text"
                    placeholder={detail}
                    className="form-control"
                  />
                </div>
              );
            })}
            <div className="d-flex">
              <input type="checkbox" />
              <p>
                I have read and agree with the{" "}
                <a href="https://labour.org.uk/terms-and-conditions/">
                  terms and conditions
                </a>
              </p>
            </div>
          </div>
          <button className="btn btn-success form-control">Next</button>
        </form>
      </div>
      <JoinFooter />
    </>
  );
}
