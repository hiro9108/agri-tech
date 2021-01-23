import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--row">
        <a href="https://github.com/hiro9108" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        {/* Create new account */}
        {/* <a
          href="https://twitter.com/Hiro52195830"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a> */}
        <a
          href="https://linkedin.com/in/hiroshiegawa/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer--row">
        <small>&copy; {new Date().getFullYear()} HIROSHI EGAWA</small>
      </div>
    </footer>
  );
};

export default Footer;
