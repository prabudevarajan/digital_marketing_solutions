import React from "react";
import "./aboutus.css";
import aboutimg from "../../assets/Images/aboutus.jpg";

function Aboutus() {
  return (
    <div className="choose-us-area relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 thumb">
            {/* <img src={aboutimg} className="img-fluid" /> */}
          </div>
          <div className="col-lg-6 info">
            <h5>Statistics</h5>
            <h2>Help to website growth including next level visitor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
