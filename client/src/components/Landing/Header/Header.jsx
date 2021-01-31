import React, { useLayoutEffect, useRef } from "react";

import Navbar from "../../UI/Navbar/Navbar";

const Header = () => {
  // Todo check later
  const wrapRef = useRef();
  const blockRef = useRef();

  useLayoutEffect(() => {
    // console.log(wrapRef.current);
    // for (let i = 0; i < 400; i++) {
    //   wrapRef.current.innerHTML += `<div class="header--wrap--block" ref={blockRef}/>`;
    //   blockRef.current.style.animationDelay = `${i * 0.05}s`;
    // }
    // console.log(blockRef.current);
    const wrap = document.getElementsByClassName("header--wrap");
    const blocks = document.getElementsByClassName("header--wrap--block");
    for (let i = 1; i < 400; i++) {
      wrap[0].innerHTML += `<div class="header--wrap--block"/>`;
      blocks[i].style.animationDelay = `${i * 0.05}s`;
    }
  }, []);

  return (
    <header className="header">
      <Navbar loginStatus={false} />
      <div className="header--main">
        <div className="header--main--title">
          <h1 className="header--main--title--text">Agriculture</h1>
        </div>
      </div>
      <div className="header--wrap" ref={wrapRef}>
        <div className="header--wrap--block" ref={blockRef} />
      </div>
    </header>
  );
};

export default Header;
