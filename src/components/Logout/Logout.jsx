import "./Logout.css";
const Logout = (props) => {
  return (
    <div className="logout-container">
      <button
        onClick={props.logoutHandler}
        className="btn  btn-danger logout-btn"
      >
        LogOut
      </button>
    </div>
  );
};

export default Logout;
