import React from "react";
import "./home.css";
import rightimg from "../../assets/Images/home-bg-1.png";
import Features from "../Features/features";
import Aboutus from "../Aboutus/aboutus";
import Trial from "../Trial/trial";
import Services from "../Services/Services";
import Team from "../Team/team";
import Price from "../Price/price";
import News from "../News/news";
import Contactus from "../Contactus/contactus";



function Home() {
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="home-left home-page-box">
                  <h2 className="mt-5">We serve Digital Marketing solutions</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    className="btn-animation border light"
                    href="#"
                    data-animation="animated fadeInDown"
                  >
                    Get Started <i className="arrow_right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="home-right home-page-box">
                  <img src={rightimg} className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space10">
        <Features/>
        </div>
        
        <div className="space10">
        <Trial/>
        </div>

        <div className="space10 container-fluid">
        <Aboutus/>
        </div>
        <div className="space10">
        <Services/>
        </div>
        <div className="space10">
        <Team/>
        </div>
        <div className="space10">
        <Price/>
        </div>
        <div className="space10">
        <News/>
        </div>
        <div className="space10">
        <Contactus/>
        </div>
    </div>
  );
}

export default Home;
