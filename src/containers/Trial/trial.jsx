import React from "react";
import "./trial.css";
import { BsShieldCheck } from 'react-icons/bs';
import freeimg from '../../assets/Images/fe.svg';


function Trial() {
  return (
    <div className="free-trial-area overflow-hidden default-padding-bottom relative bg-gray mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left-info">
            <h2>
              10 <span>Day FREE trial!</span>
            </h2>
            <p>
              Whole every miles as tiled at seven or. Wished he entire esteem mr
              oh by. Possible bed you pleasure civility boy elegance ham. He
              prevent request by if in pleased. Picture too and concern has was
              comfort. Ten difficult resembled eagerness nor. Same park bore on
              be. Warmth his law design say are person. Pronounce suspected in
              belonging conveying ye repulsive.
            </p>
            <ul>
              <li><BsShieldCheck/> Grow your sales</li> 
              <li><BsShieldCheck/> Develop a Marketing Plan</li>
              <li><BsShieldCheck/> Promote services</li>
            </ul>
            <a className="btn circle btn-theme effect btn-md" href="#">
              Get Free Trial
            </a>
          </div>
          <div className="col-lg-6 thumb">
            <img
              src={freeimg}
              alt="Thumb"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trial;
