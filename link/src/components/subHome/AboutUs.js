import React from "react";

function AboutUs() {
  return (
    <div className="container py-5 about">
      <div className="about_content">
          <h1 className="about_title">
            About<span className="about_span">Us</span>
          </h1>
        <div className="row">
          <div className="about_image col-md-6">
            <img src="https://th.bing.com/th/id/R.d6b67cdca66dfa0fdaada8cf124e09b7?rik=y%2bWXb3kfm%2b%2bEqQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2017%2f01%2f3D-Cool-Image.jpg&ehk=lBoPoC6TaCEURIOydqHsuOFxknEfbEoB4nF6V5Wj10s%3d&risl=&pid=ImgRaw&r=0" />
          </div>
          <div className="about_Text col-md-6">
            <div>
              <h1> Tilte</h1>
              <h1> Description</h1>
              <div>
                <p ><i className="about_span fa fa-star"></i>hemgjg</p>
                <p ><i className="about_span fa fa-star"></i>hemgjg</p>
                <p ><i className="about_span fa fa-star"></i>hemgjg</p>
                <p ><i className="about_span fa fa-star"></i>hemgjg</p>
                <p ><i className="about_span fa fa-star"></i>hemgjg</p>
                <p ><i className="about_span fa fa-star"></i>hemgjg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
