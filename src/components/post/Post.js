import "./Post.css"

const Post = (props) => {
  return (
    <>
      <div className="post-container shadow">
        <h2>{props.post.title}</h2>
        <div>
          <p>{props.post.content}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
