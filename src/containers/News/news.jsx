import React from "react";
import "./news.css";
import news1 from "../../assets/Images/news1.jpg";
import news2 from "../../assets/Images/news2.jpg";
import Author from "../../assets/Images/prabudevarajan.jpg";

function News() {
  return (
    <div className="blog-area blog-standard default-padding bottom-less default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="heading-center text-center">
              <h5>LATEST NEWS</h5>
              <h2>Most Popular Breaking News &amp; Top Stories</h2>
            </div>
          </div>
        </div>
        <div className="blog-items">
          <div className="row">
            <div className="col-lg-4 col-md-6 single-item">
              <div className="item">
                <div className="thumb">
                  <img src={news1} alt="Thumb" />
                  <div className="date">15 Jan, 2022</div>
                  <div className="overlay">
                    <div className="content">
                      <h4>
                        <a href="#">
                          The for fully had she there leave merit enjoy forth.
                        </a>
                      </h4>
                    </div>
                    <div className="footer-meta">
                      <ul>
                        <li>
                          <img src={Author} alt="Author" />
                          <span>By </span>
                          <a href="#">Prabu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 single-item thumb-less">
              <div className="item">
                <div className="date">18 Jan, 2022</div>
                <h4>
                  <a href="#">
                    Impossible admiration in particular conviction up.
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate 
                </p>
                <div className="footer-meta">
                  <ul>
                    <li>
                      <img src={Author} alt="Author" />
                      <span>By </span>
                      <a href="#">Deva</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 single-item">
              <div className="item">
                <div className="thumb">
                  <img src={news2} alt="Thumb" />
                  <div className="date">27 Jun, 2022</div>
                  <div className="overlay">
                    <div className="content">
                      <h4>
                        <a href="#">
                          Throwing sociable children to achieving point.
                        </a>
                      </h4>
                    </div>
                    <div className="footer-meta">
                      <ul>
                        <li>
                          <img src={Author} alt="Author" />
                          <span>By </span>
                          <a href="#">Raj</a>
                        </li>
                      </ul>
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

export default News;
