import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/Auth-context";
const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(authContext);
  if (isLoggedIn) {
    <Navigate to="/Dashboard" />;
  }
  return children;
};

export default PublicRoute;
