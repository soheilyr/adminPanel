import { useContext } from "react";
import { postsContext } from "../../context/posts/Posts-context";
import Modal from "../../UI/Modal/Modal";
import axios from "axios";
import Button from "../../UI/Button/Button";
import { NEWPOSTS } from "../../Urls/Urls";
const DeletePost = (props) => {
  const postCTX = useContext(postsContext);
  const reqDelete = (targetLoc, id) => {
    axios
      .delete(
        `https://admin-panel-479e2-default-rtdb.firebaseio.com/posts/${targetLoc}.json`
      )
      .then(postCTX.removePostHandler(id))
      .then(props.handleShow(false));
  };
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
        <div className="align-items-center justify-content-center h-100 ">
          <p>? Are you sure you want to delete {`${props.title}`} post </p>
          <Button
            className="danger mx-2"
            onClick={() => removePostHandler(props.id)}
          >
            Delete
          </Button>
          <Button
            className="success"
            onClick={(e) => {
              e.preventDefault();
              props.handleShow(false);
            }}
          >
            cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePost;
