import React from "react";
import "./team.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import team1 from "../../assets/Images/team1.jpg";
import team2 from "../../assets/Images/team2.jpg";
import team3 from "../../assets/Images/team3.jpg";

function Team() {
  return (
    <div className="team-area default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="heading-center text-center">
              <h5>Team members</h5>
              <h2>Meet our professional and expert team members</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="team-items text-center">
          <div className="row">
            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb">
                  <img src={team1} alt="Thumb" className="img-fluid" />
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <BsInstagram />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="info">
                  <h4>Lucas Ethan</h4>
                  <span>SEO Expert</span>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb">
                  <img src={team2} alt="Thumb" className="img-fluid" />
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <BsInstagram />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="info">
                  <h4>Jack Alexander</h4>
                  <span>Marketing Expert</span>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb">
                  <img src={team3} alt="Thumb" className="img-fluid" />
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i>
                            <BsInstagram />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="info">
                  <h4>William James</h4>
                  <span>Graphic Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
