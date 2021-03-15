import React from "react";
import "./JoinFooter.css";
export default function JoinFooter() {
  const footerInfo = {
    "Terms and conditions": "https://labour.org.uk/terms-and-conditions/",
    "Privacy policy": "https://www.google.co.uk/",
    "Got a question about membership?": "https://www.google.co.uk/",
    "Join by post": "https://www.google.co.uk/",
  };
  const socialMedia = {
    Facebook: "#",
    Twitter: "#",
    YouTube: "#",
    RSS: "#",
  };

  const JoinFooterInfo = Object.keys(footerInfo);
  const displayFooterInfo = (info) => footerInfo[info];
  const socialMediaInfo = Object.keys(socialMedia);
  const displaySocialMediaInfo = (info) => socialMedia[info];

  return (
    <footer>
      <div className="join-footer-container">
        <div className="image-info-conatainer">
          <div>
            <img src="" alt="" />
          </div>

          <div className="link-containter">
            <ul>
              {JoinFooterInfo.map((term, index) => {
                return (
                  <li key={index}>
                    <a
                      href={displayFooterInfo(term)}
                      className="links"
                    >
                      {term}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="powered-containter">
            <p className="powered">
              Powered and hosted by Tangent, a registered trading name of
              Tangent Marketing Services Limited, a company registered in
              England Wales with number 4323657, for which the registered office
              is at 40-44 Clipstone Street, London W1W 5DW. Promoted by David
              Evans on behalf of the Labour Party both at Southside, 105
              Victoria Street, London SW1E 6QT. The Labour Party will place
              third-party cookies on your computer to help us make this website
              better.
            </p>
          </div>
        </div>
        <div className="feedback-container"><li>Send us feedback</li></div>
        <div className="social-container">
          <ul>
            {socialMediaInfo.map((term, index) => (
              <li className="social-items" key={index}>
                <a href={displaySocialMediaInfo(term)}>{term}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
