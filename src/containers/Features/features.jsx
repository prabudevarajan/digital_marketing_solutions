import React from "react";
import "./features.css";
import { BsArrowRight } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { SiPagespeedinsights } from "react-icons/si";
import { MdDocumentScanner } from "react-icons/md";

function Features() {
  return (
    <div className="our-features-area default-padding bottom-less">
      <div className="container">
        <div className="features-box">
          <div className="row">
            <div className="col-lg-12 featur-item">
              <div className="row">
                <div className="col-lg-3 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i>
                        <TbReportSearch />
                      </i>
                    </div>
                    <div className="content">
                      <h4>Research &amp; Analyze</h4>
                      <p>
                        Cousin no itself eldest in dinner Boisterous estimating
                        is interested collecting get conviction.
                      </p>
                      <a href="#">
                        <i className="arrow_right">
                          <BsArrowRight />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i>
                        <BsSpeedometer2 />
                      </i>
                    </div>
                    <div className="content">
                      <h4>Sketch &amp; Optimizing</h4>
                      <p>
                        Cousin no itself eldest in dinner Boisterous estimating
                        is interested collecting get conviction.
                      </p>
                      <a href="#">
                        <i className="arrow_right">
                          <BsArrowRight />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-results">
                        <SiPagespeedinsights />
                      </i>
                    </div>
                    <div className="content">
                      <h4>Data Analysis</h4>
                      <p>
                        Cousin no itself eldest in dinner Boisterous estimating
                        is interested collecting get conviction.
                      </p>
                      <a href="#">
                        <i className="arrow_right">
                          <BsArrowRight />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i className="flaticon-rocket">
                        <MdDocumentScanner />
                      </i>
                    </div>
                    <div className="content">
                      <h4>Final Result</h4>
                      <p>
                        Cousin no itself eldest in dinner Boisterous estimating
                        is interested collecting get conviction.
                      </p>
                      <a href="#">
                        <i className="arrow_right">
                          <BsArrowRight />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
