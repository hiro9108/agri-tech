import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const menuRef = useRef();
  const menuIconRef = useRef();
  const closeIconRef = useRef();
  const backScreenRef = useRef();

  const commonHandler = (primary, secondary) => {
    menuIconRef.current.className = `nav--menuIcon ${primary}`;
    menuRef.current.className = `nav--menu ${secondary}`;
    closeIconRef.current.className = `nav--closeIcon ${secondary}`;
    backScreenRef.current.className = `backScreen ${secondary}`;
  };

  const menuIconHandler = () => {
    commonHandler("close", "open");
  };

  const closeIconHandler = () => {
    commonHandler("open", "close");
  };

  const backScreenHandler = () => {
    commonHandler("open", "close");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav--logo">
          <Link to="/">
            <img className="nav--logo--image" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav--menu close" ref={menuRef}>
          <ul className="nav--items">
            <li className="nav--items--item">
              <Link to="/">home</Link>
            </li>
            <li className="nav--items--item">
              <Link to="/signup">signup</Link>
            </li>
            <li className="nav--items--item">
              <Link to="/signin">signin</Link>
            </li>
          </ul>
        </div>
        <div
          className="nav--menuIcon open"
          ref={menuIconRef}
          onClick={menuIconHandler}
        >
          <i className="fas fa-bars"></i>
        </div>
        <div
          className="nav--closeIcon close"
          ref={closeIconRef}
          onClick={closeIconHandler}
        >
          <i className="fas fa-times"></i>
        </div>
      </nav>
      <div
        className="backScreen close"
        ref={backScreenRef}
        onClick={backScreenHandler}
      />
      <div className="nav--wrap" />
    </>
  );
};

export default Navbar;
