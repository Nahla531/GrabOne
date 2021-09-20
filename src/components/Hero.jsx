import React from "react";

const Hero = () => {
  return (
    <div className="homepage-hero-banner container-width">
      <div className="homepage-inner-container ">
        <div className="header-image">
          <a href="#">
            <img
              src="https://mediacdn.grabone.co.nz/asset/yDjZTGuDg1"
              className="desktop-header-image"
              alt="Spring Collection"
            />
          </a>
        </div>
        <div className="notification-container">
          <strong>Covid 19 Update:</strong> We encourage you to shop as normal
          for all your essential products. Non-essentials also available, but
          shipping delays may occur. No pickup options available. Stay safe NZ!
        </div>
      </div>
    </div>
  );
};

export default Hero;
