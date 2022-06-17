import styles from "./Modal.css";
const Modal = (props) => {
  const show = props.show ? `show` : `hide`;
  return (
    <div className={show}>
      <div className="modalContainer">
        <div className="modalBody">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
