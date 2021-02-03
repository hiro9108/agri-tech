import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { api } from "../../../api/api";
import Navbar from "../../UI/Navbar/Navbar";
import AvatarDefaultImage from "../../../assets/images/appPages/defaultAvatar.jpg";

// Todo: fix rendering timing on avatar image when page is refreshed.

const Profile = () => {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    (async () => {
      const res = await api.get(`/users-detail/${currentUser.uid}/`);
      setUserInfo(res.data);
    })();
  }, [currentUser]);

  return (
    <>
      <div className="profile">
        <Navbar loginStatus={true} />
        <div className="profile--container">
          <Link to="/profile/edit">
            <div className="profile--card">
              <div className="profile--header">
                <h2 className="profile--title">Profile</h2>
                <img
                  src={userInfo.avatar ? userInfo.avatar : AvatarDefaultImage}
                  alt="avatar"
                />
              </div>
              <div className="profile--middle">
                <span>
                  {userInfo.first_name} {userInfo.last_name}
                </span>
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
