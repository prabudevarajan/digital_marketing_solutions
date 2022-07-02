import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";


function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-5 col-md-6 item">
                <div className="f-item about">
                  <h4 className="widget-title">About Prabudevarajan</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <BsFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <BsTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <BsLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <BsBehance />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 item">
                <div className="f-item link">
                  <h4 className="widget-title">Services</h4>
                  <div className="menu-footer-link-1-container">
                    <ul className="menu">
                      <li>
                        <a>SEO Marketing</a>
                      </li>
                      <li>
                        <a>Pay Per Click</a>
                      </li>
                      <li>
                        <a>SEO Services</a>
                      </li>
                      <li>
                        <a>Social Media</a>
                      </li>
                      <li>
                        <a>SEO Audit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 item">
                <div className="f-item link">
                  <h4 className="widget-title">Company</h4>
                  <div className="menu-footer-link-2-container">
                    <ul className="menu">
                      <li>
                        <a>About Us </a>
                      </li>
                      <li>
                        <a>Contact Us</a>
                      </li>
                      <li>
                        <a>Career</a>
                      </li>
                      <li>
                        <a>Terms</a>
                      </li>
                      <li>
                        <a>Team Members</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="f-item contact">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="address">
                    <ul>
                      <li>
                        <p>ADDRESS</p>
                        <strong>Chennai, Tamilnadu</strong>
                      </li>
                      <li>
                        <p>EMAIL</p>
                        <strong>prabu@gmail.com</strong>
                      </li>
                      <li>
                        <p>CONTACT</p>
                        <strong>+44 987456 321</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row align-center">
              <div className="col-lg-4">
                <p>© Copyright 2022 Prabudevarajan</p>
              </div>
              <div className="col-lg-4 text-center logo">
                <a href="#" />
              </div>
              <div className="col-lg-4 text-right newsletter">
                <form action="#">
                  <div className="input-group stylish-input-group">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="form-control"
                      name="email"
                    />
                    <span className="input-group-addon">
                      <button type="submit">
                        <BiMailSend/>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
