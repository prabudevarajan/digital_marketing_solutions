import React from "react";
import "./price.css";

import { BsCheck } from "react-icons/bs";

function Price() {
  return (
    <div className="pricing-area plain default-padding bottom-less bg-gray">
      <div className="fixed-shape">
        <img
          src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/Rectangle-1.png"
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="heading-center text-center">
              <h5>Our Packages</h5>
              <h2>Take a look of our Pricing and select Your Choice</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pricing pricing-simple text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 single-item">
              <div className="pricing-item ">
                <div className="pricing-header">
                  <h4>Basic Plan</h4>
                  <h2>
                    <sup>$</sup>24.66 <sub>/ Mo</sub>
                  </h2>
                </div>
                <ul>
                  <li>
                    <i>
                      <BsCheck />
                    </i>
                    10 Keywords Optimized
                  </li>
                  <li>
                    <i>
                      <BsCheck />
                    </i>
                    3 Top 10 Ranking
                  </li>
                  <li>
                    <i>
                      <BsCheck />
                    </i>
                    Web site Analysis
                  </li>
                  <li>
                    <i>
                      <BsCheck />
                    </i>
                    Keyword Research
                  </li>
                  <li>
                    <i>
                      <BsCheck />
                    </i>
                    Content Optimization
                  </li>
                </ul>
                <div className="pricing-footer">
                  <a className="btn circle btn-gray border btn-sm" href="#">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 single-item">
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h4>Starter Plan</h4>
                  <h2>
                    <sup>$</sup>29.12 <sub>/ Mo</sub>
                  </h2>
                </div>
                <ul>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    12 Keywords Optimized
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    6 Top 10 Ranking
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    Web site Analysis
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    Keyword Research
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    Content Optimization
                  </li>
                </ul>
                <div className="pricing-footer">
                  <a className="btn circle btn-gray border btn-sm" href="#">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-6 single-item">
              <div className="pricing-item ">
                <div className="pricing-header">
                  <h4>Premium Plan</h4>
                  <h2>
                    <sup>$</sup>59.50 <sub>/ Mo</sub>
                  </h2>
                </div>
                <ul>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    16 Keywords Optimized
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    9 Top 10 Ranking
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    Web site Analysis
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    Keyword Research
                  </li>
                  <li>
                    {" "}
                    <i>
                      <BsCheck />
                    </i>
                    Content Optimization
                  </li>
                </ul>
                <div className="pricing-footer">
                  <a className="btn circle btn-gray border btn-sm" href="#">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
