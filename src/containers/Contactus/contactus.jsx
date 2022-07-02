import React from "react";
import "./contactus.css";
import { BiMapPin } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";

function Contactus() {
  return (
    <div className="contact-area default-padding">
      <div className="container">
        <div className="contact-items">
          <div className="row">
            <div className="col-lg-7 contact-box">
              <div className="form-items">
                <h5>Contact Us</h5>
                <h2>Then book your trip from our exclusive offers.</h2>

                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <span>
                          <input
                            size="40"
                            className="form-control"
                            placeholder="Name"
                          />
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <span className="email">
                          <input
                            size="40"
                            className="form-control"
                            placeholder="Email*"
                          />
                        </span>
                        <br />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <span className="phone">
                          <input
                            size="40"
                            className="form-control"
                            placeholder="Phone"
                          />
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <span className="comments">
                          <textarea
                            cols="40"
                            rows="2"
                            className="form-control"
                            placeholder="Please describe what you need. *"
                          ></textarea>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit">
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 left-info">
              <div className="info-items">
                <div className="item">
                  <div className="icon">
                    <i>
                      <BiMapPin />
                    </i>
                  </div>
                  <div className="info">
                    <h5>Location</h5>
                    <p>
                      Chennai,Tamilnadu
                      <br />
                      India.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <i>
                      <BiPhoneCall />
                    </i>
                  </div>
                  <div className="info">
                    <h5>Make a Call</h5>
                    <p>
                      +1-940-394-2948 <br /> +1-389-385-3807{" "}
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <i>
                      <BiMailSend />
                    </i>
                  </div>
                  <div className="info">
                    <h5>flaticon-email</h5>
                    <p>
                      info@Maxa.com <br />
                      support@Maxa.com{" "}
                    </p>
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

export default Contactus;
