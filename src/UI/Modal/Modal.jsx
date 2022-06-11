import styles from "./Modal.module.css";
const Modal = (props) => {
  const show = props.show ? `${styles.show}` : `${styles.hide}`;
  return <div className={show}>{props.children}</div>;
};

export default Modal;
