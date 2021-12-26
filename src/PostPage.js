import { useParams, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleDelete = async (id) => {
    deletePost(id);
    navigate("/");
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button
              onClick={() => handleDelete(post.id)}
              className="deleteButton"
            >
              Delete Post
            </button>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit</button>
            </Link>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well , thats disappointing</p>
            <p>
              <Link to="/">Go Back to where you came from</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
