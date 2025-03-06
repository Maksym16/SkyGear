import React from 'react';
import leftImg from '../assets/images/hero-carousel-2.png';
import rightImg from '../assets/images/hero-carousel-3.jpeg';

const Enterprize = () => {
  return (
    <div className="enterprize-section py-5 py-lg-11 px-1 px-lg-0">
      <h2 className="header-white">Enterprize</h2>
      <div className="enterprize-body px-5">
        <div className="enterprize-content left">
          <div className="enterprize-content-left">
            <h3 className="enterprize-content-header">
              Comprehensive Enterprise Drone Solutions
            </h3>
            <p className="enterprize-content-text">
              We are a team of drone experts dedicated to developing and
              supporting comprehensive UAV solutions and fleets for
              organizations across a multitude of industry verticals.
              Established in 2014, we helped hundreds of enterprises find and
              implement the best UAV solution for their unique operational
              needs.
            </p>

            <a href="mailto:skygear@gmail.com" target="_blank" rel="noreferrer" className='link-button'>talk to an expert!</a>
          </div>
          <div className="enterprize-content-right">
            <img className="h-auto w-100 mt-5" src={leftImg} alt="Enterprize" />
          </div>
        </div>
        <div className="enterprize-content right">
          <div className="enterprize-content-left">
            <h3 className="enterprize-content-header">
              Comprehensive Enterprise Drone Solutions
            </h3>
            <p className="enterprize-content-text">
              We are a team of drone experts dedicated to developing and
              supporting comprehensive UAV solutions and fleets for
              organizations across a multitude of industry verticals.
              Established in 2014, we helped hundreds of enterprises find and
              implement the best UAV solution for their unique operational
              needs.
            </p>
          </div>
          <div className="enterprize-content-right">
            <img
              className="h-auto w-100 mb-5"
              src={rightImg}
              alt="Enterprize"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprize;
