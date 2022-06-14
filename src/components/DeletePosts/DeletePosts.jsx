import { useContext } from "react";
import { postsContext } from "../../context/posts/Posts-context";
import Modal from "../../UI/Modal/Modal";
import axios from "axios";
import { NEWPOSTS } from "../../Urls/Urls";
const DeletePost = (props) => {
  const postCTX = useContext(postsContext);
  console.log(postCTX);
  console.log("function ran this is the props", props);
  const reqDelete = (targetLoc, id) => {
    axios
      .delete(
        `https://admin-panel-479e2-default-rtdb.firebaseio.com/posts/${targetLoc}.json`
      )
      .then(postCTX.removePostHandler(id))
      .then(props.handleShow(false));
  };
  console.log(props);
  const removePostHandler = (id, title) => {
    let posts;
    let targetLoc;
    axios
      .get(NEWPOSTS)
      .then((response) => response.data)
      .then((data) => {
        posts = Object.assign({}, data);
      })
      .then(() => {
        targetLoc = Object.keys(posts).find((key) => posts[key].id === id);
      })
      .then(() => {
        reqDelete(targetLoc, id);
      });
  };
  return (
    <div>
      <Modal show={props.show}>
        <div className="align-items-center justify-content-center h-100  w-25 m-auto">
          <p>Are you sure you want to delete {`${props.title}`} post ?</p>
          <button onClick={() => removePostHandler(props.id)}>Delete</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.handleShow(false);
            }}
          >
            cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePost;
