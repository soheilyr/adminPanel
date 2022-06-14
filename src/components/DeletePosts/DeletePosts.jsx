import Modal from "../../UI/Modal/Modal";
const DeletePost = (props) => {
  return (
    <div>
      <Modal show={props.show}>
        <div className="align-items-center justify-content-center h-100  w-25 m-auto">
          <p>Are you sure you want to delete {`${props.title}`} post ?</p>
          <button onClick={() => props.removePostHandler(props.id)}>
            Delete
          </button>
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
