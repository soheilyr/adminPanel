import Modal from "../../UI/Modal/Modal";
const EditPosts = (props) => {
  const editPostHandler = () => {};
  return (
    <div>
      <Modal show={props.show}>
        <div className="align-items-center justify-content-center h-100  w-25 m-auto">
          <form className="d-flex flex-column bg-light">
            <input type="text" placeholder={props.title} />
            <input type="text" placeholder={props.content} />
            <input type="text" placeholder={props.category} />
            <button onClick={editPostHandler}>Submit</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                props.hide();
              }}
            >
              cancel
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditPosts;
