import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Navbar from "../../UI/Navbar/Navbar";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="dashboard">
        <Navbar loginStatus={true} />
        <div className="dashboard--container">
          <div className="dashboard--card">
            <div className="dashboard--header">
              <h2 className="dashboard--title">Take a picture</h2>
              <img
                src="https://cdn.pixabay.com/photo/2020/09/19/12/49/woman-5584374__480.jpg"
                alt="art"
              />
              <p>{currentUser.uid}</p>
            </div>
            <div className="dashboard--middle">
              <span>Artsy Summer Collection 2020</span>
            </div>
            <div className="dashboard--footer">
              <p>
                Come to the launch on March 3, 2020. Anywhere, Any City | 10am
                to 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
