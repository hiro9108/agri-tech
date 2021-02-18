import React, { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { storage } from "../../../../firebase";
import { api } from "../.././../../api/api";
import Navbar from "../../../UI/Navbar/Navbar";

const ProfileEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState();
  const { currentUser } = useAuth();

  const history = useHistory();

  const updateProfileHandler = (e) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    // Upload file.
    fileRef
      .put(file)
      .then(async () => {
        // Get image url.
        const imgUrl = await fileRef.getDownloadURL();
        const res = await api.patch(`/users/${currentUser.uid}/`, {
          id: currentUser.uid,
          first_name: firstName,
          last_name: lastName,
          avatar: imgUrl,
        });
        if (res.status === 200) {
          alert("Update profile successfuly!!");
          history.push("/profile");
        } else {
          alert("Cannot update!");
        }
      })
      .catch((err) => console.log(`Cannot upload file. Message: ${err}`));
  };

  return (
    <>
      <div className="profile-edit">
        <Navbar loginStatus={true} />
        <div className="profile-edit--container">
          <div className="profile-edit--card">
            <div className="profile-edit--header">
              <h2 className="profile-edit--title">Profile Edit</h2>
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className="profile-edit--middle">
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className="profile-edit--footer">
              <input
                type="button"
                onClick={() => history.push("/profile")}
                value="BACK"
              />
              <input
                type="button"
                value="UPDATE"
                onClick={updateProfileHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
