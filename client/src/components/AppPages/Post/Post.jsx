import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { storage } from "../../../firebase";
import { api } from "../../../api/api";
import Navbar from "../../UI/Navbar/Navbar";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [category, setCategory] = useState();
  const [categoriesData, setCategoriesData] = useState([]);
  const [tag, setTag] = useState();
  const [tagsData, setTagsData] = useState([]);
  const { currentUser } = useAuth();

  const history = useHistory();

  useEffect(() => {
    // Set categories data
    (async () => {
      try {
        const categoriesResponse = await api.get("/categories-list/");
        setCategoriesData(categoriesResponse.data);
        setCategory(categoriesResponse.data[0].id);

        const tagsResponse = await api.get("/tags-list/");

        setTagsData(tagsResponse.data);
      } catch (err) {
        console.log(`Cannot get data: ${err}`);
      }
    })();
  }, []);

  const createPostHandler = (e) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    // Upload file.
    fileRef
      .put(file)
      .then(async () => {
        // Get image url.
        const imgUrl = await fileRef.getDownloadURL();
        const res = await api.post(`/posts/`, {
          title: title,
          description: description,
          image: imgUrl,
          user: currentUser.uid,
          category: category,
          // tags: tag,
        });
        if (res.status === 200) {
          alert("Create post successfuly!!");
          history.push("/dashboard");
        } else {
          alert("Cannot update!");
        }
      })
      .catch((err) => console.log(`Cannot upload file. Message: ${err}`));
  };

  const getCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const getTagHandler = (e) => {
    setTag(e.target.value);
  };

  return (
    <>
      <div className="profile-edit">
        <Navbar loginStatus={true} />
        <div className="profile-edit--container">
          <div className="profile-edit--card">
            <div className="profile-edit--header">
              <h2 className="profile-edit--title">Create New Post</h2>
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <select onChange={getCategoryHandler}>
                {categoriesData.map((el) => (
                  <option value={el.id} key={el.id.toString()}>
                    {el.category}
                  </option>
                ))}
              </select>
              <select onChange={getTagHandler}>
                <option value="">What's a tag?</option>
                {tagsData.map((el) => (
                  <option value={el.id} key={el.id.toString()}>
                    {el.tag}
                  </option>
                ))}
              </select>
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
                value="Create the Post"
                onClick={createPostHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
