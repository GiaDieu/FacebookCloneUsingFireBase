import React, { useState, useEffect } from "react";
import StoryReel from "../Shared/StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

import "../CustomCSS/Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
        ),
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          timestamp={post.data.timeStamp}
          username={post.data.username}
          message={post.data.message}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
