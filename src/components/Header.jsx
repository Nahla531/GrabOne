import React, { useState } from "react";
import { locationNames } from "../location";
import DropdownItem from "./DropdownItem";
const Header = () => {
  const [region, setRegion] = useState("Jordan");
  const handleRegion = (e) => {
    setRegion(e.target.innerText);
  };
  const userLinks = [
    "My Accounts",
    "Gifts",
    "Profile",
    "My Subscription",
    "My Purchases",
    "Login",
  ];
  return (
    <header id="banner" className="main-header" role="header">
      {/* Top nav */}
      <nav className="banner-primary-nav">
        <div className="banner-primary-nav_content">
          <div id="banner-brand">
            <a href="https://new.grabone.co.nz">GrabOne</a>
          </div>

          <div className="dropdown ">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span>{region}</span>
            </button>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenu2"
              onClick={handleRegion}
            >
              {locationNames.map((location) => {
                return (
                  <DropdownItem
                    key={Math.random()}
                    locationName={location.name}
                    link={location.link}
                    className="dropdown-item"
                  />
                );
              })}
            </ul>
          </div>
          <div className="account-links ">
            <ul>
              <li className="wishbox">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </a>
              </li>
              <li className="cart">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </a>
                  </button>
                  {/* user dropdown */}
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {userLinks.map((link) => {
                      return (
                        <DropdownItem
                          key={Math.random()}
                          locationName={link}
                          link={link}
                          className="dropdown-item"
                        />
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="banner-account-links_subscribe">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                  Subscribe
                </a>
              </li>
              <li className="powered-by-logo">
                <a href="#"></a>
                <img src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png" />
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
      {/* Bottom nav */}
      <nav className="banner-secondary-nav">
        <div className="banner-secondary-nav_content">
          <ul className="menu-container">
            <li>
              <div className="dropdown mega-menu">
                <a href="">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="catg-btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Browse Categories
                  </button>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {locationNames.map((location) => {
                    return (
                      <DropdownItem
                        key={Math.random()}
                        locationName={location.name}
                        link={location.link}
                        className="dropdown-item"
                      />
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">What's New</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">For You</a>
            </li>
            <li>
              <a href="#">Shop Products</a>
            </li>
          </ul>
          <div className="banner-secondary-nav_container">
            <div id="banner-search " className="header-search">
              <form
                id="search-bar"
                className="search-bar"
                method="get"
                action=""
                autoComplete="on"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search search-bar-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  className="search-bar_input"
                  type="text"
                  placeholder="Search GrabOne"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
