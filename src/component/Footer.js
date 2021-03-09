import React from "react";
import HomeFooterInfo from "./HomeFooterInfo";
import "./Footer.css";
export default function Footer() {
  const headings = Object.keys(HomeFooterInfo);
  const headingPragraphs = (paragrap) => HomeFooterInfo[paragrap];

  return (
    <footer>
      <div className="home-footer-info">
        {headings.map((list, index) => {
          return (
            <div key={index} className="container-info">
              <ul>
                <p className="headings">{list}</p>
                <li>
                  {headingPragraphs(list).map((p, index) => (
                    <li key={index} className="info">
                      {p}
                    </li>
                  ))}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
