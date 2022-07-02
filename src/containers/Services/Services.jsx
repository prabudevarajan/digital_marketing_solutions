import React from "react";
import "./Services.css";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import bgimg from "../../assets/Images/service-bg.jpg";

function Services() {
  return (
    <div className="services-content-area text-center carousel-shadow bg-gray default-padding">
      <div className="shape" style={{ backgroundImage: bgimg }}></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="heading-center text-center">
              <h5>Services We Provide</h5>
              <h2>We create &amp; design award winning Digital products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-content-box services-stage-carousel">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="item">
                <div className="icon">
                  <i>
                    <MdOutlineScreenSearchDesktop />
                  </i>
                </div>
                <h4>Competitor Research</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <a href="#">
                  Read More
                  <i>
                    <BsArrowRight />
                  </i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="item">
                <div className="icon">
                  <i>
                    <MdOutlineManageSearch />
                  </i>
                </div>
                <h4>Keyword Research</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <a href="#">
                  Read More
                  <i>
                    <BsArrowRight />
                  </i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="item">
                <div className="icon">
                  <i>
                    <MdOutlineGroups />
                  </i>
                </div>
                <h4>Social Media marketing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <a href="#">
                  Read More
                  <i>
                    <BsArrowRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
