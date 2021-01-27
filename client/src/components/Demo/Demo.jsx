import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Demo.css";
import Navbar from "../../components/UI/Navbar/Navbar";

const Demo = () => {
  const [test, setTest] = useState([]);
  useEffect(() => {
    axios
      .get(`https://create-api-000.herokuapp.com/api/products/`)
      .then((response) => {
        console.log(response.data);
        setTest(response.data.reverse()); // Set product data
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="demo-container">
        <div className="demo-card">
          <div className="demo-header">
            <h2 className="demo-title">Take a picture</h2>
            <img
              src="https://cdn.pixabay.com/photo/2020/09/19/12/49/woman-5584374__480.jpg"
              alt="art"
            />
          </div>
          <div className="demo-middle">
            <span>Artsy Summer Collection 2020</span>
          </div>
          <div className="demo-footer">
            <p>
              Come to the launch on March 3, 2020. Anywhere, Any City | 10am to
              6pm
            </p>
          </div>
        </div>
        {test.map((el) => (
          <div className="demo-card">
            <div className="demo-header">
              <img src={el.image} alt="art" />
            </div>
            <div className="demo-middle">
              <span>{el.title}</span>
            </div>
            <div className="demo-footer">
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Demo;
