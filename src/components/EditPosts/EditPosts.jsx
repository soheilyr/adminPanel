import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import { useRef } from "react";
const EditPosts = (props) => {
  console.log("edit props", props);
  const newTitleVal = useRef();
  const newContentVal = useRef();
  const newCategoryVal = useRef();
  const editPostHandler = (e) => {
    e.preventDefault();
    const nContent = newContentVal.current.value;
    const nCategory = newCategoryVal.current.value;
    const nTitle = newTitleVal.current.value;
    console.log(nContent, nCategory, nTitle);
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
          <Button className="success my-2" onClick={editPostHandler}>
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
