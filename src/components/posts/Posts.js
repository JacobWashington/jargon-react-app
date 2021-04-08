import Post from "../post/Post";

const Posts = (props) => {
  const posts = props.posts.map((post, index) => {
    return <Post post={post} key={index}/>;
  });

  return <>{posts}</>;
};

export default Posts;
