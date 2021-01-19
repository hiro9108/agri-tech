import React, { useRef } from "react";

const Navbar = () => {
  const menuRef = useRef();
  const menuIconRef = useRef();
  const closeIconRef = useRef();
  const backScreenRef = useRef();

  // Todo: refactoring
  const menuIconHandler = () => {
    menuIconRef.current.className = "nav--menuIcon close";
    menuRef.current.className = "nav--menu open";
    closeIconRef.current.className = "nav--closeIcon open";
    backScreenRef.current.className = "backScreen open";
  };

  const closeIconHandler = () => {
    menuIconRef.current.className = "nav--menuIcon open";
    menuRef.current.className = "nav--menu close";
    closeIconRef.current.className = "nav--closeIcon close";
    backScreenRef.current.className = "backScreen close";
  };

  const backScreenHandler = () => {
    menuIconRef.current.className = "nav--menuIcon open";
    menuRef.current.className = "nav--menu close";
    closeIconRef.current.className = "nav--closeIcon close";
    backScreenRef.current.className = "backScreen close";
  };

  return (
    <>
      <nav className="nav">
        <div className="nav--logo">
          <a href="/" className="nav--logo--text">
            LOGO
          </a>
        </div>
        <div className="nav--menu close" ref={menuRef}>
          <ul className="nav--items">
            <li className="nav--items--item">
              <a href="/">signup</a>
            </li>
            <li className="nav--items--item">
              <a href="/">signin</a>
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
    </>
  );
};

export default Navbar;
