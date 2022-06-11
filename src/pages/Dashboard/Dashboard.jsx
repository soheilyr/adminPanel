import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DashboardHead from "../../components/DashboardHead/DashboardHead";
import DashboardItems from "../../components/DashboardItems/DashboardItems";
import Logout from "../../components/Logout/Logout";
import { useContext } from "react";
import { authContext } from "../../context/Auth-context";
import ReactSwitch from "react-switch";
import { themeContext } from "../../context/Theme-context";
const Dashboard = () => {
  const authCTX = useContext(authContext);
  const themeCTX = useContext(themeContext);
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    authCTX.logOut();
    navigate("/login");
  };
  return (
    <>
      <aside className="col-md-3 col-lg-2 d-md-block dashboard-container">
        <DashboardHead />
        <DashboardItems />
        <div className="text-center">
          <ReactSwitch
            checked={themeCTX.theme === "Dark" ? true : false}
            onChange={themeCTX.toggleTheme}
          />
        </div>
      </aside>
      <main className="col-md-9 ms-sm-auto col-lg-10 content-container">
        <Logout logoutHandler={logoutHandler} />

        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
