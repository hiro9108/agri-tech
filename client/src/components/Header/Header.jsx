import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="header--navber">
        <div className="header--logo">AGRI</div>
        <ul>
          <li>sign up</li>
          <li>sign in</li>
        </ul>
      </nav>
      <div className="header--main">
        <div className="header--main--title">
          <h1 className="header--main--title--text">title</h1>
        </div>
        <div className="header--main--content">test</div>
      </div>
    </header>
  );
};

export default Header;
