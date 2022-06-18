import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import { NEWPOSTS } from "../../Urls/Urls";
import { useRef } from "react";
import { useContext } from "react";
import { postsContext } from "../../context/posts/Posts-context";
import axios from "axios";
const EditPosts = (props) => {
  const postCTX = useContext(postsContext);
  const newTitleVal = useRef();
  const newContentVal = useRef();
  const newCategoryVal = useRef();
  const reqEdit = (targetLoc, id) => {
    axios
      .put(
        `https://admin-panel-479e2-default-rtdb.firebaseio.com/posts/${targetLoc}.json`,
        {
          id,
          title: newTitleVal.current.value,
          category: newCategoryVal.current.value,
          content: newContentVal.current.value,
        },
        {
          headers: { "Content-type": "application/json" },
        }
      )
      .then(() =>
        postCTX.editPostHandler(
          id,
          newTitleVal.current.value,
          newCategoryVal.current.value,
          newContentVal.current.value
        )
      )
      .then(props.handleshow(false));
  };
  const removePostHandler = (e, id) => {
    e.preventDefault();
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
        reqEdit(targetLoc, id);
      });
  };
  return (
    <div>
      <Modal show={props.show}>
        <form className="d-flex flex-column bg-light" dir="ltr">
          <label>new Title</label>
          <input ref={newTitleVal} type="text" placeholder={props.title} />
          <label>new Content</label>
          <input ref={newContentVal} type="text" placeholder={props.content} />
          <label>new Category</label>
          <input
            ref={newCategoryVal}
            type="text"
            placeholder={props.category}
          />
          <Button
            className="success my-2"
            onClick={(event) => removePostHandler(event, props.id)}
          >
            Submit
          </Button>
          <Button
            className="danger"
            onClick={(e) => {
              e.preventDefault();
              props.handleshow(false);
            }}
          >
            cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default EditPosts;
