import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="re">
      <div className="footre1">
        <div className="row footer_container">
          <div className="col-md-3">
            <h1 className="banner_text_span">GetConnect</h1>
          </div>
          <div className="col-md-3">
            <div className=" d-flex">
              <div className="mx-3">
                <h5>Usefull link</h5>
                <div>
                  <p>
                    <Link>Link 1</Link>
                  </p>
                  <p>
                    <Link>Link 1</Link>
                  </p>
                </div>
              </div>
              <div className="mx-3">
                <h5>Usefull link</h5>
                <div>
                  <p>
                    <Link>Link 1</Link>
                  </p>
                  <p>
                    <Link>Link 1</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="footre2">
        <div className=" footer_container2">
          <h5 className="">© Copyright GetConnect. All Rights Reserved </h5>
          <p className="">
            Designed by{" "}
            <span className="banner_text_span">Prashant Srivastav</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
