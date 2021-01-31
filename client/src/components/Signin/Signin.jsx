import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../UI/Navbar/Navbar";

import Image from "../../assets/images/auth/signup/signup.jpg";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      setTimeout(() => console.log("Temporary signin"), 1000);
    };
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      alert("Signin Successfuly!!");
      // for test
      history.push("/dashboard");
    } catch {
      setError("Cannot signin. Please check again.");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
  };

  /* For Test User. Easy to login (Delete later) */
  const TestUserHandler = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin("test@test.com", "1qazxsw2");
      alert("Signin Successfuly as Test User!!");
      // for test
      history.push("/dashboard");
    } catch {
      setError("Cannot signin. Please check again.");
    }

    setLoading(false);
  };
  /* */

  return (
    <>
      <div className="auth">
        <Navbar loginStatus={false} />
        <div className="auth--main">
          <div className="card auth--container">
            <div className="auth--container--image">
              <img src={Image} alt="signup" />
            </div>
            <div className="auth--container--form">
              <h2 className="auth--container--form--title">Sign In</h2>
              <form
                className="auth--container--form--group"
                onSubmit={submitHandler}
              >
                {error && (
                  <p className="auth--container--form--error">{error}</p>
                )}
                <div className="auth--container--form--content">
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <span>Email</span>
                </div>
                <div className="auth--container--form--content">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <span>Password</span>
                </div>
                <div className="auth--container--form--content">
                  <input type="submit" value="Signin" disabled={loading} />
                  {/* For Test user login (Delete later) */}
                  <input
                    type="submit"
                    value="Test Login"
                    onClick={TestUserHandler}
                    disabled={loading}
                    style={{ marginLeft: "1rem" }}
                  />
                  {/*  */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
