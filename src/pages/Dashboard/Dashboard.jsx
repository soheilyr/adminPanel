import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DashboardHead from "./DashboardHead/DashboardHead";
import DashboardItems from "./DashboardItems/DashboardItems";
import DashboardFooter from "./DashboardFooter/DashboardFooter";
import { useContext } from "react";
import { authContext } from "../../context/Auth-context";
const Dashboard = () => {
  const authCTX = useContext(authContext);
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    authCTX.logOut();
    navigate("/login");
  };
  return (
    <>
      <aside className="col-3 dashboard-container">
        <DashboardHead />
        <DashboardItems />
        <DashboardFooter logoutHandler={logoutHandler} />
      </aside>
      <main className="col-9">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
