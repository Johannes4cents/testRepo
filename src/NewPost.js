import { useStoreState, useStoreActions, action } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const NewPost = () => {
  const navigate = useNavigate();
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const handleSubmit = async () => {
    const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    const createdPost = {
      id: newId,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    savePost(createdPost);
    navigate("/");
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form
        onSubmit={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
        className="newPostForm"
      >
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          name="title"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
