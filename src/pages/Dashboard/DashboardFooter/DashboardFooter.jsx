import "./DashboardFooter.css";
const DashboardFooter = (props) => {
  return (
    <button
      onClick={props.logoutHandler}
      className="btn  btn-danger footer-btn"
    >
      LogOut
    </button>
  );
};

export default DashboardFooter;
