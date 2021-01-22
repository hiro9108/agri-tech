import React from "react";
// import Navbar from "../Navbar/Navbar";

const AuthForm = (props) => {
  return (
    <div className="auth">
      {/* <Navbar /> */}
      <div className="auth--main">
        <div className="auth--container">
          <div className="auth--container--image">
            <img src={props.image} alt="signup" />
          </div>
          <div className="card auth--container--form">
            <h2 className="auth--container--form--title">{props.title}</h2>
            <form className="auth--container--form--group">
              {props.labelTexts.map((label) => (
                <div className="auth--container--form--content">
                  <input type="text" required />
                  <span>{label}</span>
                </div>
              ))}
              {props.password.map((labelPssword) => (
                <div className="auth--container--form--content">
                  <input type="password" required />
                  <span>{labelPssword}</span>
                </div>
              ))}
              <div className="auth--container--form--content">
                <input
                  type="submit"
                  value={props.submit}
                  onClick={() => alert("I Am Working On")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
