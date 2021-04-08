import "./Profile.css";

import About from "../../components/about/About";
import NewPost from "../../components/post/newPost/NewPost";
import Posts from "../../components/posts/Posts";

const Profile = (props) => {
  const postsArr = [
    { title: "Post", content: "Content" },
    { title: "Post", content: "Content" },
    { title: "Post", content: "Content" },
    { title: "Post", content: "Content" },
    { title: "Post", content: "Content" },
    { title: "Post", content: "Content" },
    { title: "Post", content: "Content" },
  ];
  return (
    <>
      <div className="profile-container">
        <div className="top-container">
        <section className="profile-header">
          
        </section>
          <About />
          <NewPost />
          <Posts posts={postsArr} />
        </div>
        <div className="middle-container"></div>
        <div className="bottom-container"></div>
      </div>
    </>
  );
};

export default Profile;
