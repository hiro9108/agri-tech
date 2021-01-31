import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import Navbar from "../../UI/Navbar/Navbar";
import AvatarImage from "../../../assets/images/appPages/defaultAvatar.jpg";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="profile">
        <Navbar loginStatus={true} />
        <div className="profile--container">
          <Link to="/profile/edit">
            <div className="profile--card">
              <div className="profile--header">
                <h2 className="profile--title">Profile</h2>
                <img src={AvatarImage} alt="default-avatar" />
              </div>
              <div className="profile--middle">
                <span>FirstName LastName</span>
              </div>
              <div className="profile--footer">
                <p>
                  Come to the launch on March 3, 2020. Anywhere, Any City | 10am
                  to 6pm
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
