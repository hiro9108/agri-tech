// Check this file after presentation
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import axios from "axios";

const AuthForm = (props) => {
  const [firstTextColumn, setFirstTextColumn] = useState("");
  const [secondTextColumn, setSecondTextColumn] = useState("");
  const [thirdTextColumn, setThirdTextColumn] = useState("");
  const [firstPasswordColumn, setFirstPasswordColumn] = useState("");
  const [secondPasswordColumn, setSecondPasswordColumn] = useState("");

  // useEffect(() => {

  // }, []);

  const getTextValueHandler = (e) => {
    switch (e.target.id) {
      case "0":
        setFirstTextColumn(e.target.value);
        console.log("firstText");
        break;
      case "1":
        setSecondTextColumn(e.target.value);
        console.log("secondText");
        break;
      case "2":
        setThirdTextColumn(e.target.value);
        console.log("thirdText");
        break;
      default:
        console.log("Something wrong!");
    }
  };

  const checkPasswordHandler = (e) => {
    switch (e.target.id) {
      case "0":
        setFirstPasswordColumn(e.target.value);
        console.log("firstPassword");
        break;
      case "1":
        setSecondPasswordColumn(e.target.value);
        console.log("secondPassword");
        break;
      default:
        console.log("Something wrong!");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (firstPasswordColumn === secondPasswordColumn) {
      const res = await axios.post("http://localhost:8000/api/", {
        first_name: firstTextColumn,
        last_name: secondTextColumn,
        email: thirdTextColumn,
        password: firstPasswordColumn,
      });
      console.log(res.data);
    }
    // const res = await axios.get("http://localhost:8000/api/");
    // console.log(res.data);
  };

  return (
    <div className="auth">
      <Navbar />
      <div className="auth--main">
        <div className="card auth--container">
          <div className="auth--container--image">
            <img src={props.image} alt="signup" />
          </div>
          <div className="card auth--container--form">
            <h2 className="auth--container--form--title">{props.title}</h2>
            <form
              className="auth--container--form--group"
              onSubmit={submitHandler}
            >
              {props.labelTexts.map((label, index) => (
                <div
                  className="auth--container--form--content"
                  key={index.toString()}
                >
                  <input
                    type="text"
                    onChange={getTextValueHandler}
                    id={index}
                    required
                  />
                  <span>{label}</span>
                </div>
              ))}
              {props.password.map((labelPssword, index) => (
                <div
                  className="auth--container--form--content"
                  key={index.toString()}
                >
                  <input
                    type="password"
                    onChange={checkPasswordHandler}
                    id={index}
                    required
                  />
                  <span>{labelPssword}</span>
                </div>
              ))}
              <div className="auth--container--form--content">
                <input type="submit" value={props.submit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
