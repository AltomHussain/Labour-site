import React from 'react'

export default function JoinFooter() {
    return (
        <div>
             <footer>
            <div className="first-col">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <a href="https://labour.org.uk/terms-and-conditions/">
                  Terms and conditions
                </a>
                <a href="">Privacy policy</a>
                <a href="">Got a question about membership?</a>
                <a href="">Join by post</a>
              </div>
              <div>
                {" "}
                <p>
                  Powered and hosted by Tangent, a registered trading name of
                  Tangent Marketing Services Limited, a company registered in
                  England Wales with number 4323657, for which the registered
                  office is at 40-44 Clipstone Street, London W1W 5DW. Promoted
                  by David Evans on behalf of the Labour Party both at
                  Southside, 105 Victoria Street, London SW1E 6QT. The Labour
                  Party will place third-party cookies on your computer to help
                  us make this website better.{" "}
                </p>
              </div>
            </div>
            <div className="second">Send us feedback</div>
            <div className="thrid-col">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>YouTube</p>
              <p>RSS</p>
            </div>
          </footer>
        </div>
    )
}
