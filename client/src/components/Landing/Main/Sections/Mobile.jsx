import React from "react";

import MobleImage from "../../../../assets/images/mobile/mobile.png";
import AppStore from "../../../../assets/images/mobile/app-store.png";
import GooglePlay from "../../../../assets/images/mobile/google-play.png";

const Mobile = () => {
  return (
    <section className="mobile">
      <h2 className="mobile--title">mobile app</h2>
      <div className="mobile--container">
        <div className="mobile--container--image">
          <img src={MobleImage} alt="mobile" />
        </div>
        <div className="mobile--container--content">
          <div className="mobile--container--content--box">
            <div className="mobile--container--content--text">
              <h3>functions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                obcaecati, architecto dolores, repellat, perspiciatis voluptate
                nisi delectus recusandae adipisci nihil incidunt quos odit earum
                repudiandae vero voluptates nulla deleniti mollitia.
              </p>
              <div className="mobile--container--content--link">
                <img src={AppStore} alt="apple" />
                <img src={GooglePlay} alt="google" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
