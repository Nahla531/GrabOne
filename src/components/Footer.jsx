import React, { useState } from "react";

function Footer() {
  const [input, setInput] = useState("");
  return (
    <footer className="main-footer">
      <div className="main-footer_columns">
        <nav className="main-footer_col">
          <h4 className="main-footer_heading">Follow us on</h4>
          <div className="main-footer_social-icons-container">
            <a
              href="https://www.facebook.com/GrabOne"
              target="_blank"
              rel="noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook main-footer_social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/grab_one"
              target="_blank"
              rel="noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook main-footer_social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/grabone_nz/"
              target="_blank"
              rel="noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook main-footer_social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/grabonenz"
              target="_blank"
              rel="noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook main-footer_social-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </div>
          <h4 className="main-footer_heading">Get app exclusive deals</h4>
          <a href="" className="main-footer_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-phone main-footer_btn-icon"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            Download Our App
          </a>
        </nav>
        <nav className="main-footer_col">
          <h4 className="main-footer_heading">GrabOne</h4>
          <a className="main-footer_link " href="#">
            GrabOne Guarantee
          </a>

          <a
            className="main-footer_link footer-link-mobile"
            href="https://mobile.grabone.co.nz/contact-us"
          >
            Contact Us
          </a>

          <a className="main-footer_link " href="/about">
            About Us
          </a>

          <a className="main-footer_link " href="/terms-and-conditions">
            Terms &amp; Returns
          </a>

          <a
            className="main-footer_link "
            href="http://newblog.grabone.co.nz"
            target="_blank"
          >
            Blog
          </a>

          <a className="main-footer_link " href="/gift-card">
            Gift Cards
          </a>
        </nav>
        <nav className="main-footer_col">
          <h4 className="main-footer_heading">My Account</h4>

          <a className="main-footer_link " href="/guarantee">
            My Account
          </a>

          <a
            className="main-footer_link footer-link-desktop"
            href="https://www.grabone.co.nz/contact-us"
          >
            My Cart
          </a>

          <a
            className="main-footer_link footer-link-mobile"
            href="https://mobile.grabone.co.nz/contact-us"
          >
            My Coupons
          </a>
          <a
            className="main-footer_link footer-link-desktop"
            href="https://www.grabone.co.nz/contact-us"
          >
            FAQ
          </a>
        </nav>
        <nav className="main-footer_col">
          <h4 className="main-footer_heading">Merchants</h4>
          <a className="main-footer_link " href="/guarantee">
            Run a Deal
          </a>
          <a
            className="main-footer_link footer-link-desktop"
            href="https://www.grabone.co.nz/contact-us"
          >
            Merchant Center
          </a>
        </nav>
        <div className="main-footer_col main-footer_subscribe">
          <h4 className="main-footer_heading">Newsletter Signup</h4>
          <span className="main-footer_subscribe_message">
            Sign up for our daily emails and we'll send you all the best deals,
            tailored for you.
          </span>
          <form
            className="email-subscription email-subscription_form"
            method="post"
            action=""
          >
            <div className="email-subscription_input-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope email-subscription_icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
              <input
                name="register_email"
                type="email"
                value={input}
                placeholder="Enter email address"
                className="email-subscription_input"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              type="submit"
              value="Sign Up"
              className="email-subscription_button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="main-footer_copyright">
        <a href="/privacy-policy" className="main-footer_copyright-content">
          Privacy Policy
        </a>
        <span className="main-footer_copyright-content">
          © 2021 GrabOne Limited
        </span>
        <a href="https://www.nzme.co.nz" target="_blank" rel="noopener">
          <img src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
