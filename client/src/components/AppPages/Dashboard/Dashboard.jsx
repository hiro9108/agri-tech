import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { api } from "../../../api/api";
import Navbar from "../../UI/Navbar/Navbar";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [tagsData, setTagsData] = useState([]);
  const [initalPostData, setInitalPostData] = useState([]);
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    // Set posts data
    (async () => {
      try {
        const res = await api.get("/posts-list/");
        setInitalPostData(res.data);
        setPostsData(res.data);
        console.log(res);

        const tagsResponse = await api.get("/tags-list/");
        setTagsData(tagsResponse.data);
      } catch (err) {
        console.log(`Cannot get post data: ${err}`);
      }
    })();
  }, []);

  const getAllPosts = () => {
    setPostsData(initalPostData);
  };

  const getPostsWithTag = (e) => {
    const filterPostsData = initalPostData.filter((el) => {
      if (!el.tags) return false;
      for (let tag of el.tags) {
        if (tag === parseInt(e.target.id)) return true;
      }
      return false;
    });
    setPostsData(filterPostsData);
  };

  const searchPosts = (e) => {
    console.log(e.target.value);
    const searchPosts = initalPostData.filter((el) => {
      return el.title.includes(e.target.value);
    });
    setPostsData(searchPosts);
  };

  return (
    <>
      <div className="dashboard">
        <Navbar loginStatus={true} />
        <div className="dashboard--tagbar">
          {/* Search */}
          <div className="dashboard--tagbar--tag" onClick={getAllPosts}>
            <input
              type="search"
              placeholder="Search..."
              onChange={searchPosts}
            />
          </div>
          {/*  */}
          <div className="dashboard--tagbar--tag" onClick={getAllPosts}>
            <span>#</span>
            <h3>All</h3>
          </div>
          {tagsData.map((el) => (
            <div
              className="dashboard--tagbar--tag"
              onClick={getPostsWithTag}
              key={el.id.toString()}
              id={el.id}
            >
              <span>#</span>
              <h3>{el.tag}</h3>
            </div>
          ))}
        </div>
        <div className="dashboard--container">
          {postsData.map((el) => (
            <div className="dashboard--card" key={el.id.toString()}>
              <div className="dashboard--category">
                <h2>{el.title}</h2>
              </div>
              <div className="dashboard--header">
                <img src={el.image} alt="art" />
              </div>
              <div className="dashboard--middle">
                <span>{el.user_id}</span>
              </div>
              <div className="dashboard--description">
                <p>{el.description}</p>
              </div>
              <div className="dashboard--footer">
                <div className="detail">detai</div>
                <div className="detail">detai</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
