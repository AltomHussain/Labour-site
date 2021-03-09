import React from "react";
import HomeFooterInfo from "./HomeFooterInfo";
import "./Footer.css";
export default function Footer() {
  const headings = Object.keys(HomeFooterInfo);
  const headingPragraphs = (paragrap) => HomeFooterInfo[paragrap];

  let array = [];
  console.log(array);
  return (
    <footer>
      {headings.map((list, index) => {
        return (
          <div key={index} className="home-footer-info">
            <ul>
              <p>{list}</p>
              <li>
                {headingPragraphs(list).map((p) => (
                  <li>{p}</li>
                ))}
              </li>
            </ul>
          </div>
        );
      })}
    </footer>
  );
}
