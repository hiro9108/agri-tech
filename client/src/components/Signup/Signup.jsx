import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../UI/Navbar/Navbar";

import axios from "axios";
import Image from "../../assets/images/auth/signup/signup.jpg";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConformation, setPasswordConformation] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== passwordConformation) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      // firebase
      await signup(email, password);
      // postgres
      // await axios.post("http://localhost:8000/api/", {
      //   first_name: firstName,
      //   last_name: lastName,
      //   email: email,
      //   password: password,
      // });

      alert("Successfuly!!");
      // for test
      history.push("/demo");
    } catch {
      setError("Cannot Registe");
    }

    setLoading(false);

    // const res = await axios.get("http://localhost:8000/api/");
    // console.log(res.data);
  };

  return (
    <>
      <div className="auth">
        <Navbar loginStatus={false} />
        <div className="auth--main">
          <div className="card auth--container">
            <div className="auth--container--image">
              <img src={Image} alt="signup" />
            </div>
            <div className="card auth--container--form">
              <h2 className="auth--container--form--title">Sign Up</h2>
              <form
                className="auth--container--form--group"
                onSubmit={submitHandler}
              >
                {error && <p>{error}</p>}
                <div className="auth--container--form--content">
                  <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                  />
                  <span>First Name</span>
                </div>
                <div className="auth--container--form--content">
                  <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  />
                  <span>Last Name</span>
                </div>
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
                  <input
                    type="password"
                    onChange={(e) => setPasswordConformation(e.target.value)}
                    value={passwordConformation}
                    required
                  />
                  <span>Password Comformation</span>
                </div>
                <div className="auth--container--form--content">
                  <input type="submit" value="Signup" disabled={loading} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
