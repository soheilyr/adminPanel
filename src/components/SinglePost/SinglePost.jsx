import "./SinglePost.css";
const SinglePost = (props) => {
  const editPostHandler = (e) => {
    e.preventDefault();
    props.edit(props.id, props.title, props.category, props.content);
  };
  const removePostHandler = (e) => {
    e.preventDefault();
    props.remove(props.id, props.title);
  };
  return (
    <>
      <tr>
        <th>{props.id}</th>
        <th>{props.title}</th>
        <th>{props.category}</th>
        <th>{props.content}</th>
        <th className="text-center">
          <button
            onClick={editPostHandler}
            className="btn btn-outline-primary ms-2"
          >
            Edit
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={removePostHandler}
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default SinglePost;
