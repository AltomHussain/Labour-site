import React from "react";

export default function JoinDetail() {
  let Address = [
    "Country",
    "Address",
    "Address line two",
    "Town/city",
    "Postcode",
  ];
  const contactDetails = [
    "Phone number",
    "Email address",
    "Confirm Email address",
  ];
  return (
    <div>
      <form className="form-control">
        <div>
          <h2>Your Details</h2>
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
          <input type="text" placeholder="Last Name" className="form-control" />
          <label>Gender</label>
          <input type="text" placeholder="Gender" className="form-control" />
          <label>Date of birth</label>
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
          <h2>Address</h2>
          {Address.map((contact) => {
            return (
              <div>
                <label>{contact}</label>
                <input
                  type="text"
                  placeholder={contact}
                  className="form-control"
                />
              </div>
            );
          })}
          <hr />
        </div>
        <div>
          <h2>Contact details</h2>
          <p>
            For any queries we may have and to keep you updated. We will never
            pass your information on to any third parties.
          </p>
          {contactDetails.map((detail) => {
            return (
              <div>
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
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
}
