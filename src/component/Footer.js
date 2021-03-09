import React from "react";
import HomeFooterInfo from "./HomeFooterInfo.json"
import "./Footer.css";
export default function Footer() {


  // for(const key in testing){
  //   console.log(`${key} ${testing[key]} `);
  // }
  // footerInfo.map((p) => console.log(p.test));
  console.log(HomeFooterInfo);
  return (
    <footer>
    


      <div className="fifth-container">
        <span>
          <strong> The Labour Party</strong>
          <br></br>
          Labour Central, Kings Manor<br></br>
          Newcastle upon Tyne
          <br></br> NE1 6PA <br></br>
          <br></br>
          Promoted by David Evans on behalf of the Labour Party, both at
          Southside, 105 Victoria Street, London SW1E 6QT.
          <br></br>
        </span>
      </div>
    </footer>
  );
}
