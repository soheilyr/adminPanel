import Modal from "../../UI/Modal/Modal";
const DeletePost = (props) => {
  const removePostHandler = (id) => {};

  return (
    <div>
      <Modal show={props.show}>
        <div className="align-items-center justify-content-center h-100  w-25 m-auto">
          <p>Are you sure you want to delete {`${props.title}`} post ?</p>
          <button onClick={removePostHandler}>Delete</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.hide();
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
